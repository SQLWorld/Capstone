import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const outputPath = path.join(projectRoot, 'src', 'data', 'foodResources.js');

function normalizeWebsite(url) {
    if (!url) return undefined;
    const trimmed = String(url).trim();
    if (!trimmed) return undefined;
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
    return `https://${trimmed}`;
}

function htmlDecode(s) {
    return s
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&apos;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/\s+/g, ' ')
        .trim();
}

function stripTags(s) {
    return htmlDecode(String(s || '').replace(/<[^>]*>/g, ' '));
}

function detectType(name, hoursLine) {
    const text = `${name} ${hoursLine}`.toLowerCase();

    if (
        text.includes('soup kitchen') ||
        text.includes('hot meal') ||
        text.includes('hot meals') ||
        text.includes('breakfast') ||
        text.includes('lunch') ||
        text.includes('dinner')
    ) {
        return 'soup-kitchen';
    }

    if (
        text.includes('meal program') ||
        text.includes('community meal') ||
        text.includes('fresh mart') ||
        text.includes('farmers market') ||
        text.includes('free farmers market') ||
        text.includes('mobile food') ||
        text.includes('marketplace') ||
        ((text.includes('food distribution') || text.includes('food distributions') || text.includes('distribution center')) && !text.includes('pantry'))
    ) {
        return 'meal-program';
    }

    if (text.includes('pantry') || text.includes('cupboard') || text.includes('food bank') || text.includes('breadbasket')) {
        return 'food-pantry';
    }

    return 'food-pantry';
}

function servicesForType(type) {
    if (type === 'soup-kitchen') return ['Hot meals'];
    if (type === 'meal-program') return ['Meal program'];
    return ['Food pantry'];
}

function toJs(resources) {
    const resourceLines = resources
        .map((r, idx) => {
            const clean = { ...r, id: idx + 1 };
            Object.keys(clean).forEach((k) => clean[k] === undefined && delete clean[k]);
            return `    ${JSON.stringify(clean, null, 8).replace(/\n/g, '\n    ')}`;
        })
        .join(',\n');

    return `export const FOOD_RESOURCES = [\n${resourceLines}\n];\n\nexport const RESOURCE_TYPES = [\n    { id: 'all', name: 'All Types', icon: '🍽️' },\n    { id: 'food-pantry', name: 'Food Pantry', icon: '📦' },\n    { id: 'soup-kitchen', name: 'Soup Kitchen', icon: '🍲' },\n    { id: 'meal-program', name: 'Meal Program', icon: '🥗' }\n];\n`;
}

async function main() {
    const url = 'https://mdfoodbank.org/find-food/';
    const res = await fetch(url, {
        headers: {
            'user-agent': '5StarSolutionsBot/1.0 (+local import script)'
        }
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
    }

    const html = await res.text();

    const headingRe = /<h3[^>]*>(.*?)<\/h3>/gi;
    const headings = [];
    let m;

    while ((m = headingRe.exec(html)) !== null) {
        headings.push({
            name: stripTags(m[1]),
            index: m.index
        });
    }

    const resources = [];

    for (let i = 0; i < headings.length; i++) {
        const start = headings[i].index;
        const end = i + 1 < headings.length ? headings[i + 1].index : html.length;
        const sectionHtml = html.slice(start, end);

        const name = headings[i].name;

        const addressMatch = sectionHtml.match(new RegExp("https?:\\/\\/maps\\.google\\.com\\/\\?q=([^\"'<>]+)[^\"'<>]*[\"']", 'i'));
        const address = addressMatch ? htmlDecode(decodeURIComponent(addressMatch[1])) : undefined;

        const websiteMatch = sectionHtml.match(new RegExp('website:\\s*<a[^>]*href="([^"]+)"', 'i'));
        const website = websiteMatch ? normalizeWebsite(websiteMatch[1]) : undefined;

        const phoneMatch = sectionHtml.match(new RegExp('tel:([^"\\s<]+)', 'i'));
        const phone = phoneMatch ? stripTags(phoneMatch[1]).trim() : 'N/A';

        const hoursMatch = sectionHtml.match(new RegExp('Hours open:\\s*([^<\\n\\r]+)', 'i'));
        const hours = hoursMatch ? stripTags(hoursMatch[1]).trim() : 'Hours vary';

        if (!name || !address) continue;

        const type = detectType(name, hours);

        resources.push({
            name,
            type,
            address,
            phone,
            hours,
            services: servicesForType(type),
            eligibility: 'Not specified',
            languages: ['English'],
            website
        });
    }

    if (resources.length === 0) {
        throw new Error('Parsed 0 resources. The page structure may have changed.');
    }

    fs.writeFileSync(outputPath, toJs(resources), 'utf8');
    console.log(`Wrote ${resources.length} resources to ${outputPath}`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
