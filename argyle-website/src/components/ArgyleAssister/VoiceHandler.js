// VoiceHandler.js
// Enhanced multilingual voice features for use with AgentInterface.jsx
import { VOICE_SUPPORTED_LANGUAGES, SUPPORTED_LANGUAGES } from '../../data/languages';

export const VoiceHandler = {
  synthesis: window.speechSynthesis,
  currentVoice: null,
  currentLanguage: 'en', // Default language

  // Get voices filtered by language support
  getVoices: (language = null) => {
    const allVoices = window.speechSynthesis.getVoices();
    if (!language) return allVoices;

    // Filter voices by language
    return allVoices.filter(voice => {
      return voice.lang && voice.lang.toLowerCase().startsWith(language.toLowerCase());
    });
  },

  // Set voice by name
  setVoice: (voiceName) => {
    const voices = window.speechSynthesis.getVoices();
    VoiceHandler.currentVoice = voices.find(v => v.name === voiceName) || null;
  },

  // Set voice by language (auto-select best voice for language)
  setVoiceByLanguage: (language) => {
    const languageVoices = VoiceHandler.getVoices(language);

    if (languageVoices.length > 0) {
      // Prioritize natural/premium voices
      const preferredVoice = languageVoices.find(v =>
        v.name.toLowerCase().includes('natural') ||
        v.name.toLowerCase().includes('premium') ||
        v.name.toLowerCase().includes('google')
      ) || languageVoices[0];

      VoiceHandler.currentVoice = preferredVoice;
      VoiceHandler.currentLanguage = language;
      return preferredVoice;
    }

    // Fallback to English if no voices available for the language
    console.warn(`No voices available for language: ${language}, falling back to English`);
    VoiceHandler.currentLanguage = 'en';
    return VoiceHandler.setVoiceByLanguage('en');
  },

  // Speak text in specified language
  speak: (text, onend, language = null) => {
    if (!window.speechSynthesis) return;

    // Cancel any previous speech
    window.speechSynthesis.cancel();

    const targetLanguage = language || VoiceHandler.currentLanguage;

    // Auto-select voice for language if not already set
    if (!VoiceHandler.currentVoice || !VoiceHandler.currentVoice.lang ||
        !VoiceHandler.currentVoice.lang.startsWith(targetLanguage)) {
      VoiceHandler.setVoiceByLanguage(targetLanguage);
    }

    const utter = new window.SpeechSynthesisUtterance(text);

    // Set voice and language
    if (VoiceHandler.currentVoice) {
      utter.voice = VoiceHandler.currentVoice;
    }

    // Set utterance properties for better multilingual support
    utter.lang = targetLanguage;
    utter.rate = 0.9; // Slightly slower for clarity
    utter.pitch = 1.0;

    utter.onend = () => { if (onend) onend(); };
    window.speechSynthesis.speak(utter);
  },

  // Stop listening
  stopListening: () => {
    if (VoiceHandler.recognition) VoiceHandler.recognition.stop();
  },

  recognition: null,
  isListening: false,

  // Initialize speech recognition with language support
  initRecognition: (onResult, onEnd, onError, language = 'en') => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Sorry, this browser does not support voice recognition.");
      return;
    }

    // Stop previous recognition
    VoiceHandler.stopListening();

    const recognition = new SpeechRecognition();

    // Set language for recognition (use BCP 47 format)
    const langCode = VoiceHandler.getFullLanguageCode(language);
    recognition.lang = langCode;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      if (onResult) onResult(text);
    };

    recognition.onend = () => {
      VoiceHandler.isListening = false;
      if (onEnd) onEnd();
    };

    recognition.onerror = (e) => {
      // Handle language not supported error
      if (e.error === 'language-not-supported') {
        console.warn(`Language ${language} not supported for speech recognition, falling back to English`);
        // Retry with English
        VoiceHandler.initRecognition(onResult, onEnd, onError, 'en');
        return;
      }
      if (onError) onError(e);
    };

    VoiceHandler.recognition = recognition;
  },

  // Start listening
  startListening: () => {
    if (VoiceHandler.recognition) {
      VoiceHandler.isListening = true;
      VoiceHandler.recognition.start();
    }
  },

  // Get full language code for speech recognition (BCP 47 format)
  getFullLanguageCode: (language) => {
    const languageMappings = {
      'zh': 'zh-CN', // Mandarin Chinese
      'es': 'es-ES', // Spanish (Spain)
      'en': 'en-US', // English (US)
      'hi': 'hi-IN', // Hindi
      'ar': 'ar-SA', // Arabic (Saudi Arabia)
      'bn': 'bn-IN', // Bengali
      'pt': 'pt-BR', // Portuguese (Brazil)
      'ru': 'ru-RU', // Russian
      'ja': 'ja-JP', // Japanese
      'de': 'de-DE', // German
      'fr': 'fr-FR', // French
      'it': 'it-IT', // Italian
      'ko': 'ko-KR', // Korean
      'th': 'th-TH', // Thai
      'nl': 'nl-NL', // Dutch
      'pl': 'pl-PL', // Polish
      'sv': 'sv-SE', // Swedish
      'da': 'da-DK', // Danish
      'no': 'nb-NO', // Norwegian
      'fi': 'fi-FI', // Finnish
      'he': 'he-IL', // Hebrew
      'el': 'el-GR', // Greek
      'tr': 'tr-TR', // Turkish
      'cs': 'cs-CZ', // Czech
      'sk': 'sk-SK', // Slovak
      'hu': 'hu-HU', // Hungarian
      'ro': 'ro-RO', // Romanian
      'bg': 'bg-BG', // Bulgarian
      'hr': 'hr-HR', // Croatian
      'sl': 'sl-SI', // Slovenian
      'et': 'et-EE', // Estonian
      'lv': 'lv-LV', // Latvian
      'lt': 'lt-LT', // Lithuanian
      'mt': 'mt-MT', // Maltese
      'ga': 'ga-IE', // Irish
      'cy': 'cy-GB'  // Welsh
    };

    return languageMappings[language] || `${language}-${language.toUpperCase()}`;
  },

  // Get available languages for voice synthesis
  getSupportedVoiceLanguages: () => {
    return VOICE_SUPPORTED_LANGUAGES.map(code => {
      const langInfo = SUPPORTED_LANGUAGES.find(lang => lang.code === code);
      const voices = VoiceHandler.getVoices(code);
      return {
        ...langInfo,
        voiceCount: voices.length,
        hasVoices: voices.length > 0
      };
    });
  },

  // Check if language has voice support
  hasVoiceSupport: (language) => {
    return VOICE_SUPPORTED_LANGUAGES.includes(language) &&
           VoiceHandler.getVoices(language).length > 0;
  }
};



