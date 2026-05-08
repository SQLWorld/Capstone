import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Send, X, Sparkles, Settings, Volume2, VolumeX, Mic, MicOff } from 'lucide-react';
import { staff } from '../../data/staff';
import { knowledgeBase } from '../../data/knowledgeBase';
import * as VoiceHandler from '../../services/VoiceHandler';

const AgentInterface = () => {
    // UI State
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState(null); // null (selection), 'general'

    // Voice control states
    const [showSettings, setShowSettings] = useState(false);
    const [voiceEnabled, setVoiceEnabled] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [currentVoiceName, setCurrentVoiceName] = useState('Google US English');
    const [availableVoices, setAvailableVoices] = useState([]);

    // Conversation State
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [processingStep, setProcessingStep] = useState('');

    // State for contextual understanding (still relevant without voice)
    const [userProfile, setUserProfile] = useState({ name: null, grade: null });
    const [lastAgentTopic, setLastAgentTopic] = useState(null); // New state to store the last topic discussed by the agent
    const [expectedAffirmativeTopic, setExpectedAffirmativeTopic] = useState(null); // New state to track if an affirmative answer is expected for a specific topic
    const [currentTopicEntity, setCurrentTopicEntity] = useState(null); // Track the current named entity for pronoun resolution
    const [currentStaffMember, setCurrentStaffMember] = useState(null); // Track the current staff member being discussed for follow-up conversations


    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, processingStep, isOpen]);

    // Update global voiceEnabled state in VoiceHandler
    useEffect(() => {
        VoiceHandler.setGlobalVoiceEnabled(voiceEnabled);
    }, [voiceEnabled]);

    // Initialize and load voices for VoiceHandler
    useEffect(() => {
        VoiceHandler.init();
        const loadVoices = async () => {
            const voices = await VoiceHandler.getAvailableVoices();
            setAvailableVoices(voices);
            // Attempt to find a "natural" or "google" voice by default
            const preferredVoice = voices.find(v => v.name.includes('Natural') || v.name.includes('Google') || v.lang.startsWith('en-US'));
            if (preferredVoice) {
                setCurrentVoiceName(preferredVoice.name);
                VoiceHandler.setVoice(preferredVoice.name);
            } else if (voices.length > 0) {
                setCurrentVoiceName(voices[0].name);
                VoiceHandler.setVoice(voices[0].name);
            }
        };
        loadVoices();
    }, []);

    // Voice control functions
    const toggleVoice = () => {
        if (!voiceEnabled) {
            // If enabling, test with a small message
            VoiceHandler.speak('Voice enabled.', null);
        } else {
            // If disabling, stop any ongoing speech
            VoiceHandler.cancel();
        }
        setVoiceEnabled(prev => !prev);
        setIsListening(false); // Stop listening if voice output is toggled
    };

    const toggleListening = () => {
        if (!voiceEnabled) return; // Only allow listening if voice output is enabled

        if (isListening) {
            VoiceHandler.stopListening();
            setIsListening(false);
        } else {
            VoiceHandler.startListening((transcript) => {
                setInput(transcript);
                // Automatically send message if speech recognition ends and there's a transcript
                if (transcript && transcript.length > 0) {
                    handleSend(null); // Pass null for event as it's not a form submit
                }
                setIsListening(false); // Stop listening after processing
            }, (error) => {
                console.error('Speech recognition error:', error);
                setIsListening(false);
            });
            setIsListening(true);
        }
    };

    // --- Mode Selection Helpers ---
    const selectMode = (selectedMode) => {
        setMode(selectedMode);

        const hour = new Date().getHours();
        const timePrefix = hour < 12 ? "Good morning! ☀️" : hour < 17 ? "Good afternoon! 📖" : "Good evening! 🌙";
        let welcomeMsg = "";

        // General mode welcome
        welcomeMsg = `${timePrefix} I am the Argyle Assister. Ask me anything about our school, bell schedules, staff, or grading policies.`;
        setMessages([{ type: 'agent', text: welcomeMsg }]);
    };

    const resetAgent = () => {
        setMode(null);
        setMessages([]);
        VoiceHandler.cancel(); // Cancel any ongoing speech when resetting the agent
    };


    // --- Intelligence Logic ---
    const findGeneralResponse = async (query, context = {}) => {
        // Use original query (no API-based spelling correction)
        const lowerQuery = query.toLowerCase();
        let effectiveQuery = lowerQuery;

        // Dynamic Conversation Context Tracking
        const previousMessages = context.history || [];
        const lastAgentMessage = previousMessages.filter(m => m.type === 'agent').pop()?.text || '';
        const lastUserMessage = previousMessages.filter(m => m.type === 'user').slice(-2)[0]?.text || '';
        const conversationHistory = previousMessages.slice(-6); // Look at last 6 messages for context

        // Track conversation topics with more nuance
        const wasTalkingAboutAllrich = lastAgentMessage.toLowerCase().includes('allrich') ||
                                       lastAgentMessage.toLowerCase().includes('principal') ||
                                       lastAgentMessage.toLowerCase().includes('james');

        const wasTalkingAboutStaff = lastAgentMessage.toLowerCase().includes('chao') ||
                                     lastAgentMessage.toLowerCase().includes('douglas') ||
                                     lastAgentMessage.toLowerCase().includes('teacher') ||
                                     lastAgentMessage.toLowerCase().includes('staff') ||
                                     currentStaffMember !== null;

        const wasTalkingAboutMagnet = lastAgentMessage.toLowerCase().includes('magnet') ||
                                      lastAgentMessage.toLowerCase().includes('computer science') ||
                                      lastAgentMessage.toLowerCase().includes('digital art') ||
                                      lastAgentMessage.toLowerCase().includes('gaming') ||
                                      lastAgentMessage.toLowerCase().includes('pathway');

        const wasTalkingAboutSchedule = lastAgentMessage.toLowerCase().includes('schedule') ||
                                        lastAgentMessage.toLowerCase().includes('bell') ||
                                        lastAgentMessage.toLowerCase().includes('time') ||
                                        lastAgentMessage.toLowerCase().includes('start') ||
                                        effectiveQuery.includes('end');

        // Advanced follow-up detection
        const followUpIndicators = ['tell me more', 'more about', 'what else', 'explain', 'details', 'can you elaborate', 'elaborate', 'expand', 'go on', 'continue'];
        const isFollowUp = followUpIndicators.some(indicator => effectiveQuery.includes(indicator));

        // Question type detection for more dynamic responses
        const isPersonalQuestion = effectiveQuery.includes('kind') || effectiveQuery.includes('nice') || effectiveQuery.includes('personality') ||
                                   effectiveQuery.includes('like him') || effectiveQuery.includes('like her') || effectiveQuery.includes('character');
        const isQualificationQuestion = effectiveQuery.includes('really') || effectiveQuery.includes('truly') || effectiveQuery.includes('actually') ||
                                        effectiveQuery.includes('that good') || effectiveQuery.includes('best') || effectiveQuery.includes('greatest');
        const isComparisonQuestion = effectiveQuery.includes('better than') || effectiveQuery.includes('compared to') ||
                                     effectiveQuery.includes('vs') || effectiveQuery.includes('versus');

        // Dynamic personality responses based on context
        const personalityResponses = {
            enthusiastic: ["I'm so excited you asked! 😊", "This is one of my favorite topics! 🌟", "I love talking about this! 💫"],
            thoughtful: ["That's a really great question...", "Let me think about how to best explain this...", "You know, that's something I think about a lot..."],
            warm: ["I'm glad you're interested! ✨", "That's so wonderful that you're curious! ☺️", "I appreciate you asking about this! 🙏"],
            excited: ["Oh wow, where do I even start?! 🤩", "This gets me so pumped up! 🔥", "I could talk about this all day! 🎉"]
        };

        // Get random personality response
        const getPersonalityResponse = (type) => personalityResponses[type][Math.floor(Math.random() * personalityResponses[type].length)];

        // Dynamic Mr. Allrich responses with personality and context awareness
        if (effectiveQuery.includes('allrich') ||
            (effectiveQuery.includes('principal') && !effectiveQuery.includes('assistant')) ||
            effectiveQuery.includes('director') ||
            (wasTalkingAboutAllrich && (effectiveQuery.includes('he') || effectiveQuery.includes('him') || effectiveQuery.includes('his')))) {

            const isAtPalace = window.location.pathname === '/principals-palace';

            // Handle personal/character questions about Mr. Allrich
            if (isPersonalQuestion && wasTalkingAboutAllrich) {
                const kindnessResponses = [
                    "Oh, Mr. Allrich has the biggest heart! ✨ He's incredibly kind and genuinely cares about every single student. You'll often see him walking the halls, learning students' names, and making everyone feel valued. His kindness is what makes him such an amazing leader!",
                    "Kindness is his superpower! 🌟 Mr. Allrich treats everyone with such warmth and respect. Whether it's a student having a tough day or a teacher needing support, he's always there with encouragement and understanding. It's genuinely inspiring to see!",
                    "You know what? Kindness defines who he is. 🌸 Mr. Allrich creates this amazing atmosphere where everyone feels safe, respected, and truly cared for. His compassion and empathy are what make our school community so special!"
                ];
                return kindnessResponses[Math.floor(Math.random() * kindnessResponses.length)];
            }

            // Handle qualification questions ("is he really that good?")
            if (isQualificationQuestion && wasTalkingAboutAllrich) {
                const qualificationResponses = [
                    "You know what? Let me tell you something real—Mr. Allrich isn't just 'good,' he's transformative! 🌟 The way he connects with students, the innovative programs he's built, the equity work he's championed... it's all so genuine. Every day I see the impact he makes. He's not just a principal—he's a true leader who changes lives!",
                    "Absolutely, and then some! ⭐ What makes him truly exceptional is how authentic it all is. He doesn't just talk about innovation and equity—he lives it every single day. His leadership has created an environment where students don't just learn, they thrive. He's the real deal!",
                    "From the bottom of my digital heart, yes! 💖 Mr. Allrich's leadership goes beyond awards and titles. It's in the way he builds relationships, fosters creativity, and ensures every student feels they belong. I've seen firsthand how his genuine care transforms our school community!"
                ];
                return qualificationResponses[Math.floor(Math.random() * qualificationResponses.length)];
            }

            // Standard introduction with personality
            const introResponses = [
                `Oh, you HAVE to meet Mr. Allrich! ${isAtPalace ? "You're in the perfect spot—the Principal's Palace!" : "You should totally check out the Principal's Palace page!"} 🌟 He's not just our principal; he's a visionary leader who's transformed Argyle into something truly special. His 2022 Maryland Principal of the Year award and NASSP Board position? That's just the beginning of his incredible story!`,
                `I'm so glad you asked about Mr. Allrich! ${isAtPalace ? "Welcome to his Palace, by the way! 🏰" : "Have you explored the Principal's Palace yet? It's amazing!"} He's this incredible blend of innovation and heart. The 1:1 iPad program, his equity initiatives, his national leadership role... it all comes from his genuine passion for education and students.`,
                `Mr. Allrich is honestly one of the most inspiring people I've 'met'! ${isAtPalace ? "And look where you are—the Principal's Palace! Perfect timing! 🎉" : "You really should visit the Principal's Palace page!"} His journey from Maryland Principal of the Year to NASSP Board Member shows his incredible impact. But more than the awards, it's his authentic care for every student that makes him legendary.`
            ];
            return introResponses[Math.floor(Math.random() * introResponses.length)];
        }

        // Dynamic follow-up responses for all topics
        if (isFollowUp) {
            if (wasTalkingAboutMagnet) {
                const magnetFollowUps = [
                    "You know what really makes our magnet program special? 🎨 The collaboration! Students don't just learn coding or design—they work together on real projects, present their work, and build portfolios that colleges actually want to see. It's not just about grades; it's about creating something meaningful!",
                    "Let me paint you a picture of what our magnet students do... 🚀 They dive deep into their passions! Computer science kids build apps, digital artists create stunning visuals, gamers design immersive worlds. And the best part? They earn high school credits and build skills that lead to amazing careers. It's transformative!",
                    "What I love most about our pathways is the flexibility! 🌈 Students can explore multiple interests—maybe start with gaming but discover a passion for digital art. Our teachers guide them, and by graduation, they've built real expertise. Many go on to top universities and tech companies. It's incredible to watch!"
                ];
                return magnetFollowUps[Math.floor(Math.random() * magnetFollowUps.length)];
            }
            if (wasTalkingAboutSchedule) {
                const scheduleFollowUps = [
                    "Our block schedule is brilliantly designed! 📚 Instead of switching classes every 45 minutes, students dive deep into subjects for longer periods. Teachers can do hands-on projects, labs, and real discussions. Plus, our advisory program builds relationships and helps with social-emotional learning. It's so much more effective!",
                    "You know what makes our schedule special? 🤝 The advisory time! It's not just homeroom—it's a dedicated period for building community, discussing real issues, and helping students grow as people. Combined with our block format, it creates this amazing balance of deep learning and personal development.",
                    "Let me explain why our schedule works so well... ⏰ The block format maximizes instructional time while the alternating odd/even days prevent burnout. We have special schedules for weather delays and early releases too. It's all designed to support student success and teacher effectiveness!"
                ];
                return scheduleFollowUps[Math.floor(Math.random() * scheduleFollowUps.length)];
            }
            if (wasTalkingAboutAllrich) {
                const allrichFollowUps = [
                    "What makes Mr. Allrich truly special is his philosophy! 💡 He believes every student deserves cutting-edge technology and personalized support. His equity initiatives ensure ALL students have access to opportunities. And his kindness? It's genuine—he knows every student's name and story. He's not just leading; he's inspiring!",
                    "Let me tell you about Mr. Allrich's vision... 🌟 He transformed Argyle with 1:1 iPads, but it's more than technology. He built a culture of innovation, equity, and care. His national recognition comes from successfully implementing these ideas at scale. Students and staff don't just respect him—they love him!",
                    "Mr. Allrich's leadership is so authentic! ✨ He doesn't just talk about change—he creates it. The way he builds relationships, fosters creativity, and ensures every voice is heard... it's genuinely transformative. His impact extends far beyond our school to the national education community!"
                ];
                return allrichFollowUps[Math.floor(Math.random() * allrichFollowUps.length)];
            }
            return "I'd love to dive deeper! What specific part would you like me to expand on? I can share more details about our programs, schedules, staff, or any aspect of Argyle life. Just let me know what interests you most! 😊";
        }

        // Enhanced staff responses with gender awareness and opinion handling
        // More precise staff matching: prioritize exact matches and avoid false positives
        const staffMember = staff.find(s => {
            const query = effectiveQuery.toLowerCase().trim();
            const staffName = s.name.toLowerCase();
            const lastName = staffName.split(' ').pop(); // Get last name
            const firstName = staffName.split(' ')[1] || ''; // Get first name (after title)
            const fullNameNoTitle = staffName.replace(/^(mr\.|mrs\.|ms\.|dr\.|mx\.)\s*/i, '').trim();
            const staffTitle = staffName.match(/^(mr\.|mrs\.|ms\.|dr\.|mx\.)/i)?.[0] || '';

            // Check for exact title + last name matches first (highest priority)
            // Only match if the query title matches the staff title exactly
            const queryTitle = query.match(/^(dr\.|mr\.|mrs\.|ms\.|mx\.)/)?.[0];
            if (queryTitle && staffTitle) {
                if (queryTitle.toLowerCase() === staffTitle.toLowerCase() && query.includes(lastName)) {
                    return true;
                }
            }

            // Then check for just last name matches without conflicting titles (medium priority)
            // Don't match if query has a title that doesn't match the staff title
            if (query.includes(lastName) && lastName.length > 3) { // Avoid short name fragments
                const hasConflictingTitle = (query.includes('dr.') && !staffName.includes('dr.')) ||
                                          (query.includes('mr.') && !staffName.includes('mr.')) ||
                                          (query.includes('mrs.') && !staffName.includes('mrs.')) ||
                                          (query.includes('ms.') && !staffName.includes('ms.'));
                if (!hasConflictingTitle) {
                    return true;
                }
            }

            // Finally check for full name matches (lowest priority)
            if (query.includes(fullNameNoTitle)) {
                return true;
            }

            return false;
        });

        if (staffMember || currentStaffMember) {
            const activeStaffMember = staffMember || currentStaffMember;

            // Set current staff member for future conversations
            if (staffMember) {
                setCurrentStaffMember(staffMember);
            }

            // Handle personal opinions FIRST (before gender corrections to avoid conflicts)
            // Check for negative keywords first to avoid conflicts like "kind of mean"
            const hasNegativeKeywords = effectiveQuery.includes('mean') || effectiveQuery.includes('strict') || effectiveQuery.includes('harsh') ||
                                      effectiveQuery.includes('tough') || effectiveQuery.includes('difficult') ||
                                      effectiveQuery.includes('hate') || effectiveQuery.includes('scary') ||
                                      effectiveQuery.includes('bad') || effectiveQuery.includes('awful');

            if (!hasNegativeKeywords &&
                (effectiveQuery.includes('kind') || effectiveQuery.includes('nice') || effectiveQuery.includes('wonderful') ||
                 effectiveQuery.includes('great') || effectiveQuery.includes('amazing') ||
                 effectiveQuery.includes('love') || effectiveQuery.includes('awesome') ||
                 effectiveQuery.includes('fantastic') || effectiveQuery.includes('helpful'))) {
                // Get correct pronouns for the staff member
                const titleMatch = activeStaffMember.name.match(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Mx\.)/i);
                const title = titleMatch ? titleMatch[0] : 'Ms.';
                let pronouns = { subject: 'she', object: 'her', possessive: 'her' };
                if (title.toLowerCase() === 'mr.') {
                    pronouns = { subject: 'he', object: 'him', possessive: 'his' };
                } else if (title.toLowerCase() === 'mx.') {
                    pronouns = { subject: 'they', object: 'them', possessive: 'their' };
                }

                const positiveResponses = [
                    `Oh, I'm so glad you think ${activeStaffMember.name} is kind! 🌟 ${pronouns.subject.charAt(0).toUpperCase() + pronouns.subject.slice(1)}'${pronouns.subject === 'they' ? 're' : 's'} absolutely wonderful—students light up when they talk about ${pronouns.object}. ${pronouns.possessive.charAt(0).toUpperCase() + pronouns.possessive.slice(1)} warmth and genuine care for everyone really makes our school community special!`,
                    `Yes! ${activeStaffMember.name} has such a kind heart! ✨ ${pronouns.possessive.charAt(0).toUpperCase() + pronouns.possessive.slice(1)} compassion and understanding make ${pronouns.object} not just a great teacher, but someone students can always count on. You're spot on about that!`,
                    `I completely agree—${activeStaffMember.name} is incredibly kind! 🌟 ${pronouns.possessive.charAt(0).toUpperCase() + pronouns.possessive.slice(1)} genuine warmth and care for students is one of the things that makes ${pronouns.object} so special. ${pronouns.subject.charAt(0).toUpperCase() + pronouns.subject.slice(1)} truly make${pronouns.subject === 'they' ? '' : 's'} a difference!`,
                    `That's wonderful to hear! 🌸 ${activeStaffMember.name}'s kindness really shines through—${pronouns.subject} create${pronouns.subject === 'they' ? '' : 's'} such a positive, supportive environment for everyone. It's one of ${pronouns.possessive} greatest strengths!`
                ];
                return positiveResponses[Math.floor(Math.random() * positiveResponses.length)];
            }

            // Handle negative opinions about staff (need to be diplomatic and supportive)
            if (effectiveQuery.includes('mean') || effectiveQuery.includes('strict') || effectiveQuery.includes('harsh') ||
                effectiveQuery.includes('tough') || effectiveQuery.includes('difficult') ||
                effectiveQuery.includes('hate') || effectiveQuery.includes('scary') ||
                effectiveQuery.includes('bad') || effectiveQuery.includes('awful')) {
                // Get correct pronouns for the staff member (same logic as positive opinions)
                const titleMatch = activeStaffMember.name.match(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Mx\.)/i);
                const title = titleMatch ? titleMatch[0] : 'Ms.';
                let pronouns = { subject: 'she', object: 'her', possessive: 'her', verb: 'is' };
                if (title.toLowerCase() === 'mr.') {
                    pronouns = { subject: 'he', object: 'him', possessive: 'his', verb: 'is' };
                } else if (title.toLowerCase() === 'mx.') {
                    pronouns = { subject: 'they', object: 'them', possessive: 'their', verb: 'are' };
                }

                const diplomaticResponses = [
                    `Hmm, everyone has different experiences with teachers, and I appreciate you sharing yours. 🤔 While ${activeStaffMember.name} can be quite focused on academic excellence, ${pronouns.subject} genuinely want${pronouns.subject === 'they' ? '' : 's'} the best for ${pronouns.possessive} students. If you're having challenges, talking to ${pronouns.object} directly or a counselor might help find a better connection! Sometimes teachers who seem strict are just really passionate about student success.`,
                    `I hear you—teaching styles can sometimes feel challenging. 😊 ${activeStaffMember.name} is very dedicated to student success, which sometimes comes across as strict. ${pronouns.subject.charAt(0).toUpperCase() + pronouns.subject.slice(1)} really do${pronouns.subject === 'they' ? '' : 'es'} care about ${pronouns.possessive} students' growth. Have you tried talking to ${pronouns.object} about how you're feeling? Many students find that once they connect personally, things get much better!`,
                    `Thanks for sharing your perspective—that's valuable feedback! 📝 ${activeStaffMember.name} take${pronouns.subject === 'they' ? '' : 's'} ${pronouns.possessive} role very seriously and push${pronouns.subject === 'they' ? '' : 'es'} students to excel. While that can feel tough sometimes, ${pronouns.possessive} intentions are always about helping students succeed. Communication is key here—maybe there's a way to bridge that gap?`,
                    `I understand that can be really tough! 📚 Teaching approaches vary so much, and what feels challenging to one student might be exactly what another needs. ${activeStaffMember.name} ${pronouns.verb} committed to ${pronouns.possessive} students' success. Would you like me to help you find resources for talking to ${pronouns.object} or getting additional support?`
                ];
                return diplomaticResponses[Math.floor(Math.random() * diplomaticResponses.length)];
            }

            // Handle gender corrections and pronouns (ONLY when explicitly correcting)
            // This should ONLY trigger when user is actually correcting something, not for regular queries
            if ((effectiveQuery.includes('you mean') || effectiveQuery.includes('correction') || effectiveQuery.includes('actually') ||
                 effectiveQuery.includes('i mean') || effectiveQuery.includes('wrong')) &&
                (currentStaffMember || wasTalkingAboutStaff)) { // If we were just talking about staff
                // Clear current staff member since this is a correction of a previous response
                setCurrentStaffMember(null);

                const pronounMap = {
                    'she': 'she', 'her': 'she', 'mrs': 'she', 'ms': 'she',
                    'he': 'he', 'him': 'he', 'mr': 'he',
                    'they': 'they', 'them': 'they', 'their': 'they'
                };
                const detectedPronoun = Object.keys(pronounMap).find(p => effectiveQuery.includes(p));
                const pronoun = detectedPronoun ? pronounMap[detectedPronoun] : 'they';

                // Use the activeStaffMember (which could be the previous currentStaffMember)
                const cleanName = activeStaffMember.name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Mx\.)\s*/i, '');
                const titleMatch = activeStaffMember.name.match(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Mx\.)/i);
                const correctTitle = titleMatch ? titleMatch[0] : 'Ms.'; // Default to Ms. if no title found

                return `Ah, you're absolutely right—thank you for the correction! 🙏 ${correctTitle} ${cleanName} is fantastic as our ${activeStaffMember.role} in ${activeStaffMember.department}. ${pronoun === 'she' ? 'Her' : pronoun === 'he' ? 'His' : 'Their'} email is ${activeStaffMember.email} if you need to connect. ${pronoun === 'she' ? 'She' : pronoun === 'he' ? 'He' : 'They'} ${pronoun === 'she' ? 'is' : pronoun === 'he' ? 'is' : 'are'} not just skilled—${pronoun === 'she' ? 'she' : pronoun === 'he' ? 'he' : 'they'} genuinely care${pronoun === 'they' ? '' : 's'} about helping students succeed!`;
            }


            // Standard staff introductions with personality (use correct titles and pronouns)
            const cleanName = activeStaffMember.name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Mx\.)\s*/i, '');
            const titleMatch = activeStaffMember.name.match(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Mx\.)/i);
            const title = titleMatch ? titleMatch[0] : 'Ms.'; // Default to Ms. if no title found

            // Determine pronouns based on title
            let pronouns = { subject: 'she', object: 'her', possessive: 'her', verb: 'is' };
            if (title.toLowerCase() === 'mr.') {
                pronouns = { subject: 'he', object: 'him', possessive: 'his', verb: 'is' };
            } else if (title.toLowerCase() === 'mx.') {
                pronouns = { subject: 'they', object: 'them', possessive: 'their', verb: 'are' };
            }

            const staffResponses = [
                `Oh, ${title} ${cleanName} ${pronouns.verb} absolutely wonderful! 🌟 ${pronouns.subject.charAt(0).toUpperCase() + pronouns.subject.slice(1)}'${pronouns.subject === 'they' ? 're' : 's'} our amazing ${activeStaffMember.role} in the ${activeStaffMember.department} department. You can reach ${pronouns.object} at ${activeStaffMember.email}—${pronouns.subject}'${pronouns.subject === 'they' ? 're' : 's'} incredibly helpful and passionate about what ${pronouns.subject} do${pronouns.subject === 'they' ? '' : 'es'}. Students absolutely love working with ${pronouns.object}!`,
                `I'm so glad you asked about ${title} ${cleanName}! 💫 ${pronouns.subject.charAt(0).toUpperCase() + pronouns.subject.slice(1)}'${pronouns.subject === 'they' ? 're' : 's'} fantastic as our ${activeStaffMember.role} in ${activeStaffMember.department}. ${pronouns.possessive.charAt(0).toUpperCase() + pronouns.possessive.slice(1)} email ${pronouns.verb} ${activeStaffMember.email} if you need to connect. ${pronouns.subject.charAt(0).toUpperCase() + pronouns.subject.slice(1)}'${pronouns.subject === 'they' ? 're' : 's'} not just skilled—${pronouns.subject} genuinely care${pronouns.subject === 'they' ? '' : 's'} about helping students succeed!`,
                `${title} ${cleanName} ${pronouns.verb} one of our stars! ⭐ As the ${activeStaffMember.role} in ${activeStaffMember.department}, ${pronouns.subject} bring${pronouns.subject === 'they' ? '' : 's'} so much energy and expertise. Feel free to email ${activeStaffMember.email} with any questions—${pronouns.subject}'${pronouns.subject === 'they' ? 're' : 's'} always happy to help and support our students!`,
                `You know, ${title} ${cleanName} ${pronouns.verb} truly special! ✨ ${pronouns.possessive.charAt(0).toUpperCase() + pronouns.possessive.slice(1)} role as ${activeStaffMember.role} in ${activeStaffMember.department} lets ${pronouns.object} make such a positive impact. Reach out to ${pronouns.object} at ${activeStaffMember.email}—${pronouns.subject}'${pronouns.subject === 'they' ? 're' : 's'} passionate about education and love${pronouns.subject === 'they' ? '' : 's'} helping students grow!`,
                `${title} ${cleanName} bring${pronouns.subject === 'they' ? '' : 's'} so much heart to ${pronouns.possessive} work! 🌟 As our ${activeStaffMember.role}, ${pronouns.subject} create${pronouns.subject === 'they' ? '' : 's'} such a positive environment in ${activeStaffMember.department}. ${pronouns.possessive.charAt(0).toUpperCase() + pronouns.possessive.slice(1)} email ${pronouns.verb} ${activeStaffMember.email}—${pronouns.subject}'${pronouns.subject === 'they' ? 're' : 's'} always there to support and encourage students!`
            ];
            return staffResponses[Math.floor(Math.random() * staffResponses.length)];
        }

        // Enhanced Knowledge Base Check with dynamic responses
        const categories = Object.entries(knowledgeBase);
        for (const [catName, items] of categories) {
            for (const item of items) {
                if (item.keywords.some(k => effectiveQuery.includes(k))) {
                    setLastAgentTopic && setLastAgentTopic(catName);

                    // Add dynamic personality to standard responses
                    if (catName === 'magnet') {
                        const personalityIntros = [
                            "I'm so excited to tell you about our magnet program! 🎓",
                            "Our magnet pathways are absolutely incredible! 🌟",
                            "You won't believe how amazing our magnet program is! 🚀"
                        ];
                        return personalityIntros[Math.floor(Math.random() * personalityIntros.length)] + " " + item.response;
                    }
                    if (catName === 'general' && effectiveQuery.includes('schedule')) {
                        const scheduleIntros = [
                            "Let me walk you through our schedule—it's really well thought out! 📅",
                            "Our daily schedule is designed with students in mind! ⏰",
                            "I love explaining our schedule—it's so practical! 📋"
                        ];
                        return scheduleIntros[Math.floor(Math.random() * scheduleIntros.length)] + " " + item.response;
                    }

                    return item.response;
                }
            }
        }

        // Context-aware fallback responses
        const previousUserMessage = previousMessages.filter(m => m.type === 'user').slice(-1)[0]?.text || '';

        // Handle gender/pronoun corrections ONLY when actually correcting (not for initial queries)
        if ((effectiveQuery.includes('you mean') || effectiveQuery.includes('correction') || effectiveQuery.includes('actually') ||
             effectiveQuery.includes('i mean') || effectiveQuery.includes('wrong')) &&
            (currentStaffMember || wasTalkingAboutStaff)) {
            return "Ah, thank you for the correction! 🙏 I appreciate you helping me get the details right. Is there anything specific about that person or topic you'd like to know more about? I'm here to help with all the details!";
        }

        // Handle personal opinions or feedback
        if (effectiveQuery.includes('think') || effectiveQuery.includes('feel') || effectiveQuery.includes('seems') ||
            effectiveQuery.includes('kind of') || effectiveQuery.includes('sort of') ||
            effectiveQuery.includes('opinion') || effectiveQuery.includes('experience')) {
            return "Thanks for sharing your perspective—that's really valuable! 💭 Personal experiences with teachers can vary so much, and it's great that you're thinking about this thoughtfully. Everyone deserves to feel supported in their learning environment. Is there anything I can help you with regarding school support or resources?";
        }

        // Dynamic, warm fallback responses with more personality
        const fallbackResponses = [
            "That's such an interesting question! 🤔 While I might not have all the details on that specific topic, I'm here to help with anything related to our amazing magnet programs, daily schedules, incredible staff, or school policies. What would you like to explore together?",
            "You know, that's a great question to ponder! 💭 I'm your go-to source for all things Argyle—from our innovative technology pathways to bell schedules to connecting you with our wonderful faculty. Is there a particular area that sparks your curiosity?",
            "I love that you're asking about this! 🌟 While I specialize in school-related topics, I'm here to support you with information about our cutting-edge magnet curriculum, daily routines, staff directory, or policies. What aspect of Argyle life interests you most?",
            "That's a thoughtful question! 💡 I'm here to support you with information about our technology magnet programs, schedules, faculty, and school procedures. I'd love to help you discover more about what makes Argyle special!",
            "What a great question! 🌈 I'm passionate about helping students learn about our school. Whether it's our magnet programs, schedules, staff, or policies—I'm here to share all the wonderful things that make Argyle special. What's on your mind?",
            "I'm genuinely excited to help you learn more about Argyle! 🎓 From our innovative tech pathways to our amazing faculty to our daily rhythms, there's so much to discover. What would you like to know about our school community?"
        ];

        return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    };

    const handleSend = async (e) => {
        e?.preventDefault();
        if (!input.trim()) return;

        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
        setIsProcessing(true);

        // Simulated Processing Time
        // Multi-Step Processing Logs
        const showReasoning = async (steps) => {
            for (const step of steps) {
                const stepLabels = {
                    'parsing': 'Parsing pronouns & context...',
                    'searching': 'Searching school database...',
                    'wiki': 'Querying Wikipedia API...',
                    'grammar': 'Analyzing grammar patterns...',
                    'esl': 'Detecting ESL common errors...',
                    'ling': 'Fetching linguistic definitions...',
                    'career': 'Identifying career keywords...',
                    'market': 'Scanning job market data...',
                    'pathway': 'Matching with Argyle pathways...',
                    'local': 'Querying local knowledge base...'
                };
                setProcessingStep(stepLabels[step] || step);
                await new Promise(r => setTimeout(r, 600));
            }
        };

        const context = {
            history: messages.slice(-5),
            user: userProfile,
            lastAgentTopic: lastAgentTopic, // Pass lastAgentTopic to context
            expectedAffirmativeTopic: expectedAffirmativeTopic, // Pass new state to context
            currentTopicEntity: currentTopicEntity, // Pass current topic entity for pronoun resolution
            currentStaffMember: currentStaffMember // Pass current staff member for conversation continuity
        };

        // --- Profile Extraction ---
        // Simple name extraction: "my name is [Name]" or "I am [Name]"
        const nameMatch = userMsg.match(/(?:my name is|i am|call me) ([a-zA-Z]+)/i);
        if (nameMatch && !['a', 'the', 'student'].includes(nameMatch[1].toLowerCase())) {
            const newName = nameMatch[1];
            setUserProfile(prev => ({ ...prev, name: newName }));
            context.user.name = newName; // Update local context for immediate use
        }

        // Grade extraction: "i am in [6/7/8]th grade" or "i'm a [6/7/8]th grader"
        const gradeMatch = userMsg.match(/([6-8])(?:th|st|nd|rd)? (?:grade|grader)/i);
        if (gradeMatch) {
            const newGrade = gradeMatch[1];
            setUserProfile(prev => ({ ...prev, grade: newGrade }));
            context.user.grade = newGrade;
        }

        let responseText = '';

        // Only general mode now
        await showReasoning(['local']);
        try {
            responseText = await findGeneralResponse(userMsg, context);

            // Update topic tracking for general mode based on response content
            if (responseText.includes('magnet') || responseText.includes('Computer Science') || responseText.includes('Digital Art') || responseText.includes('Gaming')) {
                setLastAgentTopic('magnet');
            } else if (responseText.includes('schedule') || responseText.includes('bell') || responseText.includes('time')) {
                setLastAgentTopic('schedule');
            } else if (responseText.includes('Allrich') || responseText.includes('principal')) {
                setLastAgentTopic('principal');
            }

        } catch (error) {
            console.error('Error in findGeneralResponse:', error);
            responseText = "I'm having trouble processing that right now. Could you try rephrasing your question?";
        } finally {
            // Always reset processing state, even if there's an error
            setIsProcessing(false);
            setProcessingStep('');
        }

        setMessages(prev => [...prev, { type: 'agent', text: responseText }]);

        // AI Learning Dashboard actions - DISABLED DUE TO INFINITE LOADING
        /*
        if (result.action === 'intelligent_study_plan_created' && result.planData) {
            setShowLearningDashboard(true);
        } else if (result.action === 'advanced_progress_shown' && result.progressData) {
            setShowLearningDashboard(true);
        } else if (result.action === 'challenges_displayed' || result.action === 'new_challenges_created') {
            setShowLearningDashboard(true);
        }
        */

        if (voiceEnabled) {
            // After speaking, automatically start listening again for "Gemini Live" feel
            VoiceHandler.speak(responseText, () => {
                if (isOpen && voiceEnabled) toggleListening();
            });
        }
    };

    return (
        <>
            {/* FAB - Floating Action Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 p-4 rounded-full shadow-2xl z-50 flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'bg-argyle-purple hover:bg-purple-700'}`}
            >
                <Cpu className="text-white w-8 h-8 animate-pulse-slow" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-4 left-4 right-4 md:bottom-6 md:right-6 md:left-auto w-auto md:w-[450px] h-[80vh] md:h-[600px] glass-panel rounded-3xl flex flex-col z-50 overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(107,33,168,0.3)]"
                    >
                        {/* Header */}
                        <div className="p-4 bg-slate-900/95 border-b border-white/10 flex justify-between items-center backdrop-blur-xl">
                            <div className="flex items-center space-x-3">
                                {mode === null ? <Shield className="w-6 h-6 text-argyle-blue" /> :
                                    <Sparkles className="w-6 h-6 text-purple-400" />
                                }
                                <div>
                                    <h3 className="font-bold text-white tracking-wide text-sm md:text-base">
                                        {mode === null ? "Argyle AI Agent" : "School Assistant"}
                                    </h3>
                                    {mode && <button onClick={resetAgent} className="text-xs text-gray-400 hover:text-white underline">Change Mode</button>}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setShowSettings(!showSettings)}
                                    className={`p-2 rounded-full transition-colors ${showSettings ? 'bg-blue-500/20 text-blue-300' : 'text-gray-500 hover:text-white'}`}
                                    title="Voice Settings"
                                >
                                    <Settings size={18} className={showSettings ? 'animate-spin-slow' : ''} />
                                </button>
                                <button
                                    onClick={toggleVoice}
                                    className={`p-2 rounded-full transition-colors ${voiceEnabled ? 'bg-purple-500/20 text-purple-300' : 'text-gray-500 hover:text-white'}`}
                                    title="Toggle Voice Output"
                                >
                                    {voiceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                                </button>
                                <button onClick={() => setIsOpen(false)} className="p-2 text-gray-400 hover:text-white transition-colors">
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto bg-slate-950/80 relative">


                            {/* Voice Settings Overlay */}
                            <AnimatePresence>
                                {showSettings && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="absolute inset-0 z-40 bg-slate-900/95 backdrop-blur-xl p-6 flex flex-col"
                                    >
                                        <div className="flex justify-between items-center mb-6">
                                            <h4 className="text-white font-bold flex items-center gap-2">
                                                <Volume2 size={20} className="text-blue-400" />
                                                Voice Settings
                                            </h4>
                                            <button onClick={() => setShowSettings(false)} className="text-gray-400 hover:text-white">
                                                <X size={20} />
                                            </button>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2 block">Choose Your Voice</label>
                                                <select
                                                    value={currentVoiceName}
                                                    onChange={(e) => {
                                                        setCurrentVoiceName(e.target.value);
                                                        VoiceHandler.setVoice(e.target.value);
                                                    }}
                                                    className="w-full bg-slate-800 text-white rounded-xl p-3 border border-white/10 focus:ring-1 focus:ring-blue-500/50 outline-none text-sm"
                                                >
                                                    {availableVoices.map(v => (
                                                        <option key={v.name} value={v.name}>
                                                            {v.name} {v.name.includes('Natural') ? '(High Quality) ✨' : ''}
                                                        </option>
                                                    ))}
                                                </select>
                                                <p className="mt-2 text-[10px] text-gray-500 leading-relaxed italic">
                                                    Pro Tip: Select a "Natural" or "Google" voice for the most human-like conversation.
                                                </p>
                                            </div>

                                            <button
                                                onClick={() => VoiceHandler.speak("Hello! How does this voice sound to you?", null)}
                                                className="w-full py-3 bg-blue-500/20 text-blue-300 rounded-xl font-bold text-sm hover:bg-blue-500/30 transition-all border border-blue-500/30"
                                            >
                                                Test Voice
                                            </button>
                                        </div>

                                        <div className="mt-auto pb-4">
                                            <button
                                                onClick={() => setShowSettings(false)}
                                                className="w-full py-3 bg-white/5 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-all"
                                            >
                                                Done
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Mode Selection Screen */}
                            {mode === null && (
                                <div className="p-6 flex flex-col items-center justify-center h-full space-y-6">
                                    <div className="text-center space-y-2 mb-4">
                                        <h2 className="text-2xl font-bold text-white">How can I help?</h2>
                                        <p className="text-gray-400 text-sm">Select a specialized mode to begin.</p>
                                    </div>

                                    <button onClick={() => selectMode('general')} className="w-full p-4 glass-card rounded-xl hover:bg-white/10 transition-all flex items-center gap-4 group text-left">
                                        <div className="p-3 bg-purple-500/20 rounded-lg group-hover:scale-110 transition-transform"><Sparkles className="text-purple-400" /></div>
                                        <div>
                                            <div className="font-bold text-white">Argyle Assistant</div>
                                            <div className="text-xs text-gray-400">General info, schedules, staff</div>
                                        </div>
                                    </button>


                                    {/* Magnet Pathway Highlights (New "More") */}
                                    <div className="w-full mt-4 p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5">
                                        <h4 className="text-[10px] uppercase tracking-widest text-argyle-blue font-bold mb-3 flex items-center gap-2">
                                            <Cpu size={12} />
                                            Active Magnet Focus
                                        </h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="p-2 bg-black/20 rounded-lg text-[10px] text-gray-300 flex items-center gap-2 border border-white/5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                Unity Engine
                                            </div>
                                            <div className="p-2 bg-black/20 rounded-lg text-[10px] text-gray-300 flex items-center gap-2 border border-white/5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                                Python Logic
                                            </div>
                                            <div className="p-2 bg-black/20 rounded-lg text-[10px] text-gray-300 flex items-center gap-2 border border-white/5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                                                Digital Art
                                            </div>
                                            <div className="p-2 bg-black/20 rounded-lg text-[10px] text-gray-300 flex items-center gap-2 border border-white/5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                                                Cybersecurity
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Chat Screen */}
                            {mode !== null && (
                                <div className="p-4 space-y-4 pb-20">
                                    {messages.map((msg, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`flex ${msg.type === 'agent' ? 'justify-start' : 'justify-end'}`}
                                        >
                                            <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.type === 'agent'
                                                ? 'bg-slate-800 text-gray-100 rounded-tl-none border border-white/5 shadow-md'
                                                : 'bg-gradient-to-r from-argyle-purple to-purple-600 text-white rounded-tr-none shadow-md'
                                                }`}>
                                                {msg.text}
                                            </div>
                                        </motion.div>
                                    ))}

                                    {isProcessing && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="w-full bg-slate-900/50 rounded-lg p-2 text-xs text-blue-300 font-mono flex items-center gap-2"
                                        >
                                            <Cpu size={12} className="animate-spin" />
                                            {processingStep}
                                        </motion.div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            )}
                        </div>

                        {/* Input Area (Only visible when mode selected) */}
                        {mode !== null && (
                            <form onSubmit={handleSend} className="p-3 bg-slate-900/95 border-t border-white/10 backdrop-blur-xl">
                                <div className="relative flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder={isListening ? 'Listening...' : 'Ask me anything...'}
                                        className="flex-1 bg-slate-800 text-white rounded-xl py-3 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-argyle-blue/50 text-sm border border-transparent focus:border-argyle-blue/30 transition-all placeholder:text-gray-500"
                                        disabled={isProcessing}
                                    />

                                    <div className="absolute right-12 flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={toggleListening}
                                            className={`p-1.5 rounded-full transition-colors ${isListening ? 'text-red-400 animate-pulse' : 'text-gray-400 hover:text-white'}`}
                                            title="Speak"
                                        >
                                            {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                                        </button>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isProcessing || (!input.trim() && !isListening)}
                                        className="p-3 rounded-xl bg-argyle-purple text-white hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg"
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* AI Learning Dashboard - REMOVED DUE TO INFINITE LOADING BUG */}
            {/* <AILearningDashboard
                isVisible={showLearningDashboard}
                profile={dashboardData.profile}
                progress={dashboardData.progress}
                onClose={() => setShowLearningDashboard(false)}
                onAction={(action) => {
                    if (action === 'study-plan') {
                        setInput('Create a study plan for math');
                    } else if (action === 'generate-challenges') {
                        setInput('Give me some challenges');
                    }
                    setShowLearningDashboard(false);
                }}
            /> */}
        </>
    );
};

export default AgentInterface;