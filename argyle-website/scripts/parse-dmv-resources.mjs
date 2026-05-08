import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const inputPath = path.join(projectRoot, 'dmv_resources_raw.txt');
const outputPath = path.join(projectRoot, 'src', 'data', 'foodResources.js');

function normalizeWebsite(url) {
    if (!url) return '';
    const trimmed = url.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
    return `https://${trimmed.replace(/^www\./i, 'www.')}`;
}

function detectType(name, hoursLine = '') {
    const text = `${name} ${hoursLine}`.toLowerCase();

    const isSoupKitchen =
        text.includes('soup kitchen') ||
        text.includes('hot meal') ||
        text.includes('hot meals') ||
        text.includes('lunch:') ||
        text.includes('breakfast') ||
        text.includes('dinner') ||
        // Some entries use "Kitchen" in the name but not the phrase "soup kitchen"
        (text.includes(' kitchen') && (text.includes('meal') || text.includes('lunch') || text.includes('breakfast') || text.includes('dinner')));

    if (isSoupKitchen) return 'soup-kitchen';

    const isMealProgram =
        text.includes('meal program') ||
        text.includes('community meal') ||
        text.includes('fresh mart') ||
        text.includes('farmers market') ||
        text.includes('free farmers market') ||
        text.includes('mobile food') ||
        text.includes('mobile') && text.includes('food') ||
        text.includes('marketplace') ||
        text.includes('fresh market') ||
        // If it talks about distribution but does NOT explicitly call itself a pantry, treat as program/distribution
        ((text.includes('food distribution') || text.includes('distribution center') || text.includes('food distributions')) && !text.includes('pantry'));

    if (isMealProgram) return 'meal-program';

    return 'food-pantry';
}

function splitBlocks(raw) {
    const lines = raw
        .split(/\r?\n/)
        .map(l => l.trim())
        .filter(l => l.length > 0 && !/^get directions$/i.test(l) && !/^driving distance:/i.test(l));

    const blocks = [];
    let current = [];

    for (const line of lines) {
        if (/^hours open:/i.test(line) && current.length > 0) {
            current.push(line);
            blocks.push(current);
            current = [];
            continue;
        }

        if (current.length === 0) {
            current.push(line);
            continue;
        }

        current.push(line);
    }

    if (current.length) blocks.push(current);
    return blocks;
}

function parseBlock(block) {
    // Expected rough structure:
    // [0] name
    // [1] address
    // ... optional website/phone/email
    // last includes "Hours open:"

    const name = block[0] || '';
    const address = block[1] || '';

    let website = '';
    let phone = '';
    let hours = '';
    let email = '';

    for (const line of block.slice(2)) {
        if (/^website:/i.test(line)) website = normalizeWebsite(line.split(':').slice(1).join(':').trim());
        else if (/^phone:/i.test(line)) phone = line.split(':').slice(1).join(':').trim();
        else if (/^email:/i.test(line)) email = line.split(':').slice(1).join(':').trim();
        else if (/^hours open:/i.test(line)) hours = line.replace(/^hours open:/i, '').trim();
    }

    const type = detectType(name, hours);

    const services = (() => {
        if (type === 'soup-kitchen') return ['Hot meals'];
        if (type === 'meal-program') return ['Meal program'];
        return ['Food pantry'];
    })();

    return {
        name,
        type,
        address,
        phone: phone || 'N/A',
        hours: hours || 'Hours vary',
        services,
        eligibility: 'Not specified',
        languages: ['English'],
        website: website || undefined,
        email: email || undefined,
    };
}

function toJs(resources) {
    const resourceLines = resources
        .map((r, idx) => {
            const clean = { ...r, id: idx + 1 };
            // Remove undefined fields so output stays clean
            Object.keys(clean).forEach((k) => clean[k] === undefined && delete clean[k]);
            return `    ${JSON.stringify(clean, null, 8).replace(/\n/g, '\n    ')}`;
        })
        .join(',\n');

    return `export const FOOD_RESOURCES = [\n${resourceLines}\n];\n\nexport const RESOURCE_TYPES = [\n    { id: 'all', name: 'All Types', icon: '🍽️' },\n    { id: 'food-pantry', name: 'Food Pantry', icon: '📦' },\n    { id: 'soup-kitchen', name: 'Soup Kitchen', icon: '🍲' },\n    { id: 'meal-program', name: 'Meal Program', icon: '🥗' }\n];\n`;
}

if (!fs.existsSync(inputPath)) {
    console.error(`Missing input file: ${inputPath}`);
    process.exit(1);
}

const raw = fs.readFileSync(inputPath, 'utf8');
const blocks = splitBlocks(raw);
const parsed = blocks.map(parseBlock).filter(r => r.name && r.address);

fs.writeFileSync(outputPath, toJs(parsed), 'utf8');
console.log(`Wrote ${parsed.length} resources to ${outputPath}`);
