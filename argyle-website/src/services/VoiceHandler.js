let synth;
let recognition;
let voices = [];
let selectedVoice = null;
let currentUtterance = null;
let isInitialized = false;

const init = () => {
    if (isInitialized) return;

    if ('speechSynthesis' in window) {
        synth = window.speechSynthesis;
        // Load voices asynchronously
        synth.onvoiceschanged = () => {
            voices = synth.getVoices();
            // console.log("Available voices loaded:", voices.map(v => v.name));
            if (!selectedVoice && voices.length > 0) {
                // Try to find a good default voice
                selectedVoice = voices.find(v => v.name.includes('Natural') || v.name.includes('Google') || v.lang.startsWith('en-US')) || voices[0];
                // console.log("Default voice selected:", selectedVoice.name);
            }
        };
        voices = synth.getVoices(); // Try to get them immediately if already loaded
    } else {
        console.warn("Speech Synthesis not supported in this browser.");
    }

    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.continuous = false; // Only get one result per recognition
        recognition.interimResults = false; // We only care about final results
        recognition.lang = 'en-US';

        recognition.onstart = () => {
            // console.log("Speech recognition started.");
        };

        recognition.onend = () => {
            // console.log("Speech recognition ended.");
        };

        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
        };
    } else {
        console.warn("Speech Recognition not supported in this browser.");
    }
    isInitialized = true;
};

const speak = (text, onEndCallback = null) => {
    if (!synth || !selectedVoice || !voiceEnabled) { // Check voiceEnabled state here
        if (onEndCallback) onEndCallback(); // Call callback even if not speaking
        return;
    }

    cancel(); // Stop any ongoing speech before starting new one

    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.voice = selectedVoice;
    currentUtterance.pitch = 1;
    currentUtterance.rate = 1;

    currentUtterance.onend = () => {
        // console.log("Speech synthesis ended.");
        if (onEndCallback) {
            onEndCallback();
        }
        currentUtterance = null;
    };

    currentUtterance.onerror = (event) => {
        console.error("Speech synthesis error:", event.error);
        if (onEndCallback) {
            onEndCallback();
        }            currentUtterance = null;
    };

    synth.speak(currentUtterance);
};

const cancel = () => {
    if (synth && currentUtterance) {
        synth.cancel();
        currentUtterance = null;
    }
};

const setVoice = (voiceName) => {
    if (synth) {
        voices = synth.getVoices(); // Re-fetch in case they've loaded since init
        const voice = voices.find(v => v.name === voiceName);
        if (voice) {
            selectedVoice = voice;
            // console.log("Voice set to:", selectedVoice.name);
        } else {
            console.warn("Voice not found:", voiceName);
        }
    }
};

const getAvailableVoices = () => {
    if (synth) {
        return new Promise(resolve => {
            if (voices.length > 0) {
                resolve(voices);
            } else {
                synth.onvoiceschanged = () => {
                    voices = synth.getVoices();
                    resolve(voices);
                };
            }
        });
    }
    return Promise.resolve([]);
};

let recognitionCallback = null;
let recognitionErrorCallback = null;

const startListening = (onResult, onError) => {
    if (!recognition) {
        console.warn("Speech Recognition not available.");
        onError("Speech Recognition not available.");
        return;
    }

    // Stop any previous listening session
    stopListening();

    recognitionCallback = onResult;
    recognitionErrorCallback = onError;

    recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript;
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }
        if (finalTranscript) {
            if (recognitionCallback) recognitionCallback(finalTranscript);
        } else if (interimTranscript) {
            // Optionally update UI with interim results, but we're only looking for final
            // console.log("Interim transcript:", interimTranscript);
        }
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        if (recognitionErrorCallback) recognitionErrorCallback(event.error);
    };

    recognition.start();
    // console.log("Listening started...");
};

const stopListening = () => {
    if (recognition) {
        recognition.stop();
        // console.log("Listening stopped.");
    }
};

// Global variable to hold the voiceEnabled state from AgentInterface
// This is a simple workaround for the VoiceHandler to respect the global toggle
// A more robust solution might involve passing this state through props or a context API
let voiceEnabled = false;
const setGlobalVoiceEnabled = (enabled) => {
    voiceEnabled = enabled;
};

export {
    init,
    speak,
    cancel,
    setVoice,
    getAvailableVoices,
    startListening,
    stopListening,
    setGlobalVoiceEnabled // Export the setter
};
