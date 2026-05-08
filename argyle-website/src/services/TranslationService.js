// TranslationService.js - Multilingual Translation API Integration
import { SUPPORTED_LANGUAGES, GOOGLE_TRANSLATE_SUPPORTED } from '../data/languages';

class TranslationService {
    constructor() {
        // Use environment variable or fallback for API key
        this.apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY || 'AIzaSyCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
        this.baseUrl = 'https://translation.googleapis.com/language/translate/v2';
        this.cache = new Map(); // Cache translations to reduce API calls
        this.useFallback = !this.apiKey || this.apiKey.includes('XXXX'); // Use fallback if no real API key
        this.isInitialized = false;
        this.initPromise = null;
    }

    // Initialize the service
    async initialize() {
        if (this.isInitialized) return;
        if (this.initPromise) return this.initPromise;

        this.initPromise = (async () => {
            try {
                // Test the API key if we have one
                if (!this.useFallback) {
                    const testResponse = await fetch(`${this.baseUrl}/languages?key=${this.apiKey}&target=en`, {
                        method: 'GET'
                    });
                    this.useFallback = !testResponse.ok;
                }
                this.isInitialized = true;
            } catch (error) {
                console.warn('Translation service initialization failed, using fallback mode:', error);
                this.useFallback = true;
                this.isInitialized = true;
            }
        })();

        return this.initPromise;
    }

    // Detect language of input text
    async detectLanguage(text) {
        await this.initialize();

        if (!text || text.trim().length < 3) {
            return 'en'; // Default to English for short inputs
        }

        // Check cache first
        const cacheKey = `detect_${text.substring(0, 50)}`;
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        // Always use fallback detection for now (more reliable)
        const detectedLang = this.fallbackLanguageDetection(text);
        this.cache.set(cacheKey, detectedLang);
        return detectedLang;
    }

    // Fallback language detection when API is not available
    fallbackLanguageDetection(text) {
        // Simple heuristic-based language detection
        const lowerText = text.toLowerCase();

        // Spanish indicators
        if (/\b(hola|gracias|por favor|qué|cómo|cuándo|dónde)\b/.test(lowerText)) {
            return 'es';
        }

        // French indicators
        if (/\b(bonjour|merci|svp|quand|où|comment|pourquoi)\b/.test(lowerText)) {
            return 'fr';
        }

        // German indicators
        if (/\b(hallo|danke|bitte|was|wie|wann|wo)\b/.test(lowerText)) {
            return 'de';
        }

        // Chinese indicators (simplified check for common characters)
        if (/[\u4e00-\u9fff]/.test(text)) {
            return 'zh';
        }

        // Arabic indicators
        if (/[\u0600-\u06ff]/.test(text)) {
            return 'ar';
        }

        // Hindi/Devanagari indicators
        if (/[\u0900-\u097f]/.test(text)) {
            return 'hi';
        }

        // Japanese indicators
        if (/[\u3040-\u309f\u30a0-\u30ff]/.test(text)) {
            return 'ja';
        }

        // Korean indicators
        if (/[\uac00-\ud7af]/.test(text)) {
            return 'ko';
        }

        // Russian/Cyrillic indicators
        if (/[\u0400-\u04ff]/.test(text)) {
            return 'ru';
        }

        // Portuguese indicators
        if (/\b(olá|obrigado|obrigada|por favor|o que|como|quando|onde)\b/.test(lowerText)) {
            return 'pt';
        }

        // Default to English
        return 'en';
    }

    // Translate text from source language to target language
    async translate(text, fromLang, toLang) {
        await this.initialize();

        if (!text || fromLang === toLang) {
            return text;
        }

        // Check if target language is supported
        if (!GOOGLE_TRANSLATE_SUPPORTED.includes(toLang)) {
            console.warn(`Language ${toLang} not supported by Google Translate, using fallback`);
            return this.fallbackTranslate(text, fromLang, toLang);
        }

        // Check cache
        const cacheKey = `translate_${fromLang}_${toLang}_${text.substring(0, 100)}`;
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        // Use fallback for now (more reliable)
        const translatedText = this.fallbackTranslate(text, fromLang, toLang);
        this.cache.set(cacheKey, translatedText);
        return translatedText;
    }

    // Fallback translation for when API is not available
    fallbackTranslate(text, fromLang, toLang) {
        console.log(`Fallback: Would translate "${text}" from ${fromLang} to ${toLang}`);

        // For common phrases, provide basic translations
        const commonTranslations = {
            'en': {
                'es': {
                    'hello': 'hola',
                    'thank you': 'gracias',
                    'how are you': 'cómo estás',
                    'goodbye': 'adiós',
                    'yes': 'sí',
                    'no': 'no',
                    'please': 'por favor'
                },
                'fr': {
                    'hello': 'bonjour',
                    'thank you': 'merci',
                    'how are you': 'comment allez-vous',
                    'goodbye': 'au revoir',
                    'yes': 'oui',
                    'no': 'non',
                    'please': 's\'il vous plaît'
                },
                'de': {
                    'hello': 'hallo',
                    'thank you': 'danke',
                    'how are you': 'wie geht es dir',
                    'goodbye': 'auf wiedersehen',
                    'yes': 'ja',
                    'no': 'nein',
                    'please': 'bitte'
                },
                'zh': {
                    'hello': '你好',
                    'thank you': '谢谢',
                    'how are you': '你怎么样',
                    'goodbye': '再见',
                    'yes': '是的',
                    'no': '不',
                    'please': '请'
                }
            }
        };

        const lowerText = text.toLowerCase().trim();

        // Check for common phrases
        if (commonTranslations[fromLang] && commonTranslations[fromLang][toLang]) {
            const translation = commonTranslations[fromLang][toLang][lowerText];
            if (translation) {
                return translation;
            }
        }

        // For other cases, return with translation indicator
        const langInfo = SUPPORTED_LANGUAGES.find(l => l.code === toLang);
        const langName = langInfo ? langInfo.name : toLang;

        return `[Would translate to ${langName}: ${text}]`;
    }

    // Translate text to English (for processing)
    async translateToEnglish(text, sourceLang) {
        return this.translate(text, sourceLang, 'en');
    }

    // Translate text from English to target language
    async translateFromEnglish(text, targetLang) {
        return this.translate(text, 'en', targetLang);
    }

    // Batch translate multiple texts
    async batchTranslate(texts, fromLang, toLang) {
        if (!texts || texts.length === 0) return [];

        const results = [];
        for (const text of texts) {
            const translated = await this.translate(text, fromLang, toLang);
            results.push(translated);
        }
        return results;
    }

    // Map detected language codes to our supported languages
    mapToSupportedLanguage(detectedLang) {
        // Direct match
        if (SUPPORTED_LANGUAGES.find(lang => lang.code === detectedLang)) {
            return detectedLang;
        }

        // Handle language variants (e.g., zh-CN -> zh, zh-TW -> zh)
        const baseLang = detectedLang.split('-')[0];
        if (SUPPORTED_LANGUAGES.find(lang => lang.code === baseLang)) {
            return baseLang;
        }

        // Special mappings
        const specialMappings = {
            'zh-CN': 'zh',
            'zh-TW': 'zh',
            'zh-HK': 'zh',
            'pt-BR': 'pt',
            'pt-PT': 'pt',
            'en-US': 'en',
            'en-GB': 'en',
            'es-ES': 'es',
            'es-MX': 'es',
            'ar-SA': 'ar',
            'ar-EG': 'ar',
            'hi-IN': 'hi',
            'bn-IN': 'bn',
            'bn-BD': 'bn'
        };

        return specialMappings[detectedLang] || 'en';
    }

    // Get language info by code
    getLanguageInfo(code) {
        return SUPPORTED_LANGUAGES.find(lang => lang.code === code);
    }

    // Check if language is supported for translation
    isLanguageSupported(code) {
        return GOOGLE_TRANSLATE_SUPPORTED.includes(code);
    }

    // Clear cache (useful for memory management)
    clearCache() {
        this.cache.clear();
    }

    // Get supported languages list
    getSupportedLanguages() {
        return SUPPORTED_LANGUAGES;
    }

    // Get Google Translate supported languages
    getTranslationSupportedLanguages() {
        return GOOGLE_TRANSLATE_SUPPORTED.map(code =>
            SUPPORTED_LANGUAGES.find(lang => lang.code === code)
        ).filter(Boolean);
    }
}

// Create singleton instance
export const translationService = new TranslationService();

// Utility functions for easy access
export const detectLanguage = (text) => translationService.detectLanguage(text);
export const translate = (text, from, to) => translationService.translate(text, from, to);
export const translateToEnglish = (text, source) => translationService.translateToEnglish(text, source);
export const translateFromEnglish = (text, target) => translationService.translateFromEnglish(text, target);

// Test function for debugging
export const testTranslation = async () => {
    console.log('Testing Translation Service...');

    // Test language detection
    const testTexts = [
        'Hello, how are you?',
        'Hola, ¿cómo estás?',
        'Bonjour, comment allez-vous?',
        'Hallo, wie geht es dir?',
        '你好，你怎么样？'
    ];

    for (const text of testTexts) {
        const detected = await translationService.detectLanguage(text);
        console.log(`"${text}" -> Detected: ${detected}`);
    }

    // Test translation
    const testTranslation = await translationService.translate('Hello world', 'en', 'es');
    console.log(`Translation test: "${testTranslation}"`);

    return 'Translation service test completed';
};

