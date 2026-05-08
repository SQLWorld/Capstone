import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Seasonal Theme Detection System
const getCurrentSeasonalTheme = () => {
    const now = new Date();
    const month = now.getMonth() + 1; // 1-12
    const day = now.getDate(); // 1-31
    const year = now.getFullYear();

    // Winter Holidays (Dec 1 - Jan 15)
    if ((month === 12 && day >= 1) || (month === 1 && day <= 15)) {
        return 'winter-holiday';
    }

    // Valentine's Day (Feb 10-15)
    if (month === 2 && day >= 10 && day <= 15) {
        return 'valentines';
    }

    // Spring/Easter (Mar 15 - Apr 15)
    if (month === 3 && day >= 15) {
        return 'spring';
    }
    if (month === 4 && day <= 15) {
        return 'spring';
    }

    // Summer (Jun 1 - Aug 31)
    if (month >= 6 && month <= 8) {
        return 'summer';
    }

    // Back to School (Aug 15 - Sep 15)
    if ((month === 8 && day >= 15) || (month === 9 && day <= 15)) {
        return 'back-to-school';
    }

    // Fall (Sep 15 - Nov 15)
    if (month === 9 && day >= 15) {
        return 'fall';
    }
    if (month >= 10 && month <= 11 && day <= 15) {
        return 'fall';
    }

    // Thanksgiving (Nov 15 - Nov 30)
    if (month === 11 && day >= 15 && day <= 30) {
        return 'thanksgiving';
    }

    // Default to current season
    if (month >= 3 && month <= 5) return 'spring';
    if (month >= 6 && month <= 8) return 'summer';
    if (month >= 9 && month <= 11) return 'fall';
    return 'winter'; // Dec-Feb
};

// Seasonal Theme Configurations
const seasonalThemes = {
    'winter-holiday': {
        name: 'Winter Holidays',
        colors: ['#ffffff', '#e0f2fe', '#bae6fd', '#38bdf8', '#0ea5e9'],
        particleTypes: ['snowflake', 'ornament', 'star', 'candle'],
        backgroundColor: 'rgba(14, 165, 233, 0.05)',
        specialEffects: ['gentle-fall', 'twinkle', 'slow-drift']
    },
    'valentines': {
        name: 'Valentine\'s Day',
        colors: ['#fecdd3', '#fb7185', '#f43f5e', '#e11d48', '#be123c'],
        particleTypes: ['heart', 'rose', 'cupid-arrow', 'chocolate'],
        backgroundColor: 'rgba(244, 63, 94, 0.05)',
        specialEffects: ['float-up', 'pulse', 'swirl']
    },
    'spring': {
        name: 'Spring',
        colors: ['#dcfce7', '#bbf7d0', '#4ade80', '#22c55e', '#16a34a'],
        particleTypes: ['flower', 'butterfly', 'raindrop', 'sunshine'],
        backgroundColor: 'rgba(34, 197, 94, 0.05)',
        specialEffects: ['drift-up', 'gentle-sway', 'bloom']
    },
    'summer': {
        name: 'Summer',
        colors: ['#fef3c7', '#fde68a', '#f59e0b', '#d97706', '#b45309'],
        particleTypes: ['sun', 'beach-ball', 'ice-cream', 'firework'],
        backgroundColor: 'rgba(245, 158, 11, 0.05)',
        specialEffects: ['bounce', 'sparkle', 'radiate']
    },
    'back-to-school': {
        name: 'Back to School',
        colors: ['#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed'],
        particleTypes: ['book', 'pencil', 'apple', 'grad-cap'],
        backgroundColor: 'rgba(139, 92, 246, 0.05)',
        specialEffects: ['organized-float', 'stack', 'learn']
    },
    'fall': {
        name: 'Fall',
        colors: ['#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c'],
        particleTypes: ['leaf', 'pumpkin', 'acorn', 'harvest'],
        backgroundColor: 'rgba(249, 115, 22, 0.05)',
        specialEffects: ['swirl-down', 'crunch', 'harvest-dance']
    },
    'thanksgiving': {
        name: 'Thanksgiving',
        colors: ['#fed7aa', '#fdba74', '#dc2626', '#b91c1c', '#991b1b'],
        particleTypes: ['turkey', 'pie', 'cornucopia', 'feather'],
        backgroundColor: 'rgba(220, 38, 38, 0.05)',
        specialEffects: ['thankful-float', 'gather', 'feast']
    },
    'winter': {
        name: 'Winter',
        colors: ['#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9'],
        particleTypes: ['icicle', 'evergreen', 'mitten', 'feather'],
        backgroundColor: 'rgba(56, 189, 248, 0.05)',
        specialEffects: ['gentle-fall', 'frost', 'cozy']
    }
};

const ParticleEffects = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const [clickBursts, setClickBursts] = useState([]);
    const [celebrationBursts, setCelebrationBursts] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const particles = [];
        let mouse = { x: null, y: null };

        // Get current seasonal theme
        const currentTheme = getCurrentSeasonalTheme();
        const themeConfig = seasonalThemes[currentTheme];

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Enhanced Seasonal Particle class
        class SeasonalParticle {
            constructor(x, y, size, color, velocity, life = 300) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                this.velocity = velocity;
                this.life = life;
                this.maxLife = life;
                this.alpha = 0.7;
                this.gravity = 0.02;
                this.friction = 0.99;
                this.rotation = 0;
                this.rotationSpeed = (Math.random() - 0.5) * 0.02;

                // Seasonal properties
                this.shape = themeConfig.particleTypes[Math.floor(Math.random() * themeConfig.particleTypes.length)];
                this.seasonalBehavior = themeConfig.specialEffects[Math.floor(Math.random() * themeConfig.specialEffects.length)];
                this.twinkle = Math.random() < 0.3; // Some particles twinkle
                this.twinklePhase = Math.random() * Math.PI * 2;
            }

            update() {
                // Mouse interaction
                if (mouse.x && mouse.y) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        const force = (120 - distance) / 120;
                        this.x -= dx * force * 0.015;
                        this.y -= dy * force * 0.015;
                    }
                }

                // Seasonal behaviors
                this.applySeasonalBehavior();

                // Physics
                this.velocity.x *= this.friction;
                this.velocity.y *= this.friction;
                this.velocity.y += this.gravity;

                this.x += this.velocity.x;
                this.y += this.velocity.y;
                this.rotation += this.rotationSpeed;

                // Life and alpha
                this.life--;
                this.alpha = (this.life / this.maxLife) * 0.7;

                // Twinkle effect
                if (this.twinkle) {
                    this.twinklePhase += 0.1;
                    this.alpha *= 0.7 + 0.3 * Math.sin(this.twinklePhase);
                }

                // Wrap around edges with seasonal variations
                if (this.x > canvas.width + 60) this.x = -60;
                if (this.x < -60) this.x = canvas.width + 60;
                if (this.y > canvas.height + 60) this.y = -60;
                if (this.y < -60) this.y = canvas.height + 60;
            }

            applySeasonalBehavior() {
                switch (this.seasonalBehavior) {
                    case 'gentle-fall':
                        this.velocity.y += 0.01; // Slower fall
                        break;
                    case 'float-up':
                        this.velocity.y -= 0.005; // Float upward
                        break;
                    case 'bounce':
                        if (this.y > canvas.height - 100) {
                            this.velocity.y *= -0.8; // Bounce off bottom
                        }
                        break;
                    case 'swirl':
                        const centerX = canvas.width / 2;
                        const centerY = canvas.height / 2;
                        const dx = centerX - this.x;
                        const dy = centerY - this.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance > 50) {
                            this.velocity.x += dx / distance * 0.01;
                            this.velocity.y += dy / distance * 0.01;
                        }
                        break;
                    case 'swirl-down':
                        this.rotationSpeed += 0.005;
                        this.velocity.y += 0.02;
                        break;
                    case 'drift-up':
                        this.velocity.y -= 0.01;
                        this.velocity.x += Math.sin(this.y * 0.01) * 0.005;
                        break;
                }
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);

                // Draw based on seasonal shape
                this.drawSeasonalShape();

                // Add glow effect
                ctx.shadowColor = this.color;
                ctx.shadowBlur = this.size * 3;
                ctx.fill();

                ctx.restore();
            }

            drawSeasonalShape() {
                ctx.fillStyle = this.color;
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2;

                const s = this.size;

                // Debug: Add a small colored circle to show particle is there
                ctx.beginPath();
                ctx.arc(0, 0, s * 0.2, 0, Math.PI * 2);
                ctx.fill();

                switch (this.shape) {
                    case 'snowflake':
                        this.drawSnowflake(s);
                        break;
                    case 'heart':
                        this.drawHeart(s);
                        break;
                    case 'flower':
                        this.drawFlower(s);
                        break;
                    case 'sun':
                        this.drawSun(s);
                        break;
                    case 'leaf':
                        this.drawLeaf(s);
                        break;
                    case 'star':
                        this.drawStar(s);
                        break;
                    case 'book':
                        this.drawBook(s);
                        break;
                    case 'grad-cap':
                        this.drawGradCap(s);
                        break;
                    case 'ornament':
                        this.drawOrnament(s);
                        break;
                    case 'candle':
                        this.drawCandle(s);
                        break;
                    case 'rose':
                        this.drawRose(s);
                        break;
                    case 'cupid-arrow':
                        this.drawCupidArrow(s);
                        break;
                    case 'chocolate':
                        this.drawChocolate(s);
                        break;
                    case 'butterfly':
                        this.drawButterfly(s);
                        break;
                    case 'raindrop':
                        this.drawRaindrop(s);
                        break;
                    case 'sunshine':
                        this.drawSunshine(s);
                        break;
                    case 'beach-ball':
                        this.drawBeachBall(s);
                        break;
                    case 'ice-cream':
                        this.drawIceCream(s);
                        break;
                    case 'firework':
                        this.drawFirework(s);
                        break;
                    case 'pencil':
                        this.drawPencil(s);
                        break;
                    case 'apple':
                        this.drawApple(s);
                        break;
                    case 'pumpkin':
                        this.drawPumpkin(s);
                        break;
                    case 'acorn':
                        this.drawAcorn(s);
                        break;
                    case 'harvest':
                        this.drawHarvest(s);
                        break;
                    case 'turkey':
                        this.drawTurkey(s);
                        break;
                    case 'pie':
                        this.drawPie(s);
                        break;
                    case 'cornucopia':
                        this.drawCornucopia(s);
                        break;
                    case 'feather':
                        this.drawFeather(s);
                        break;
                    case 'icicle':
                        this.drawIcicle(s);
                        break;
                    case 'evergreen':
                        this.drawEvergreen(s);
                        break;
                    case 'mitten':
                        this.drawMitten(s);
                        break;
                    default:
                        // Default circle with shape indicator
                        ctx.beginPath();
                        ctx.arc(0, 0, s, 0, Math.PI * 2);
                        ctx.fill();
                        // Add shape label for debugging
                        ctx.fillStyle = 'white';
                        ctx.font = '8px Arial';
                        ctx.textAlign = 'center';
                        ctx.fillText(this.shape.substring(0, 3), 0, 2);
                        ctx.fillStyle = this.color;
                }
            }

            drawSnowflake(size) {
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2;

                // Main arms
                for (let i = 0; i < 6; i++) {
                    ctx.save();
                    ctx.rotate((Math.PI / 3) * i);
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(0, -size);
                    ctx.moveTo(0, -size * 0.3);
                    ctx.lineTo(-size * 0.2, -size * 0.5);
                    ctx.moveTo(0, -size * 0.3);
                    ctx.lineTo(size * 0.2, -size * 0.5);
                    ctx.stroke();
                    ctx.restore();
                }
            }

            drawHeart(size) {
                ctx.beginPath();
                ctx.moveTo(0, size * 0.3);
                ctx.bezierCurveTo(-size * 0.3, -size * 0.2, -size, -size * 0.2, -size, size * 0.3);
                ctx.bezierCurveTo(-size, size * 0.8, 0, size * 1.2, 0, size * 1.2);
                ctx.bezierCurveTo(0, size * 1.2, size, size * 0.8, size, size * 0.3);
                ctx.bezierCurveTo(size, -size * 0.2, size * 0.3, -size * 0.2, 0, size * 0.3);
                ctx.fill();
            }

            drawFlower(size) {
                // Center
                ctx.beginPath();
                ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
                ctx.fill();

                // Petals
                for (let i = 0; i < 5; i++) {
                    ctx.save();
                    ctx.rotate((Math.PI * 2 / 5) * i);
                    ctx.beginPath();
                    ctx.ellipse(size * 0.4, 0, size * 0.6, size * 0.3, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                }
            }

            drawSun(size) {
                // Center
                ctx.beginPath();
                ctx.arc(0, 0, size * 0.4, 0, Math.PI * 2);
                ctx.fill();

                // Rays
                for (let i = 0; i < 8; i++) {
                    ctx.save();
                    ctx.rotate((Math.PI / 4) * i);
                    ctx.beginPath();
                    ctx.rect(-size * 0.1, -size * 0.8, size * 0.2, size * 0.6);
                    ctx.fill();
                    ctx.restore();
                }
            }

            drawLeaf(size) {
                ctx.beginPath();
                ctx.moveTo(0, -size);
                ctx.bezierCurveTo(size * 0.3, -size * 0.7, size * 0.5, -size * 0.3, size * 0.2, 0);
                ctx.bezierCurveTo(size * 0.4, size * 0.3, size * 0.1, size * 0.6, 0, size);
                ctx.bezierCurveTo(-size * 0.1, size * 0.6, -size * 0.4, size * 0.3, -size * 0.2, 0);
                ctx.bezierCurveTo(-size * 0.5, -size * 0.3, -size * 0.3, -size * 0.7, 0, -size);
                ctx.fill();
            }

            drawStar(size) {
                ctx.beginPath();
                for (let i = 0; i < 5; i++) {
                    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                    const nextAngle = (Math.PI * 2 * (i + 1)) / 5 - Math.PI / 2;
                    const outerX = Math.cos(angle) * size;
                    const outerY = Math.sin(angle) * size;
                    const innerX = Math.cos(angle + Math.PI / 5) * size * 0.4;
                    const innerY = Math.sin(angle + Math.PI / 5) * size * 0.4;

                    if (i === 0) ctx.moveTo(outerX, outerY);
                    else ctx.lineTo(outerX, outerY);
                    ctx.lineTo(innerX, innerY);
                }
                ctx.closePath();
                ctx.fill();
            }

            drawBook(size) {
                // Book spine
                ctx.fillRect(-size * 0.3, -size, size * 0.6, size * 2);

                // Pages
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fillRect(-size * 0.25, -size * 0.9, size * 0.5, size * 1.8);
                ctx.fillStyle = this.color;
            }

            drawGradCap(size) {
                // Cap base
                ctx.beginPath();
                ctx.ellipse(0, size * 0.2, size * 0.8, size * 0.3, 0, 0, Math.PI * 2);
                ctx.fill();

                // Cap top
                ctx.fillRect(-size * 0.9, -size * 0.3, size * 1.8, size * 0.4);

                // Tassel
                ctx.beginPath();
                ctx.moveTo(size * 0.7, -size * 0.1);
                ctx.lineTo(size * 0.9, size * 0.2);
                ctx.lineTo(size * 1.1, size * 0.1);
                ctx.stroke();
            }

            drawOrnament(size) {
                // Ornament ball
                ctx.beginPath();
                ctx.arc(0, 0, size * 0.8, 0, Math.PI * 2);
                ctx.fill();

                // Cap
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.beginPath();
                ctx.arc(0, -size * 0.6, size * 0.2, 0, Math.PI * 2);
                ctx.fill();

                // Hook
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(0, -size * 0.8, size * 0.1, Math.PI, Math.PI * 2);
                ctx.stroke();
            }

            drawCandle(size) {
                // Candle body
                ctx.fillRect(-size * 0.2, -size * 0.8, size * 0.4, size * 1.6);

                // Flame
                ctx.fillStyle = '#ff6b35';
                ctx.beginPath();
                ctx.moveTo(-size * 0.1, -size);
                ctx.lineTo(0, -size * 1.2);
                ctx.lineTo(size * 0.1, -size);
                ctx.closePath();
                ctx.fill();

                // Wick
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(0, -size * 0.8);
                ctx.lineTo(0, -size * 0.9);
                ctx.stroke();
            }

            drawRose(size) {
                // Center
                ctx.beginPath();
                ctx.arc(0, 0, size * 0.2, 0, Math.PI * 2);
                ctx.fill();

                // Petals
                for (let i = 0; i < 8; i++) {
                    ctx.save();
                    ctx.rotate((Math.PI * 2 / 8) * i);
                    ctx.beginPath();
                    ctx.ellipse(size * 0.3, 0, size * 0.4, size * 0.2, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                }
            }

            drawCupidArrow(size) {
                // Arrow shaft
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(-size * 0.8, 0);
                ctx.lineTo(size * 0.6, 0);
                ctx.stroke();

                // Arrow head
                ctx.beginPath();
                ctx.moveTo(size * 0.6, 0);
                ctx.lineTo(size * 0.4, -size * 0.2);
                ctx.lineTo(size * 0.4, size * 0.2);
                ctx.closePath();
                ctx.fill();

                // Feathers
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(-size * 0.6, 0);
                ctx.lineTo(-size * 0.4, -size * 0.3);
                ctx.moveTo(-size * 0.6, 0);
                ctx.lineTo(-size * 0.4, size * 0.3);
                ctx.stroke();
            }

            drawChocolate(size) {
                // Chocolate bar
                ctx.fillRect(-size * 0.6, -size * 0.4, size * 1.2, size * 0.8);

                // Wrapper folds
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(-size * 0.3, -size * 0.4);
                ctx.lineTo(-size * 0.3, size * 0.4);
                ctx.moveTo(0, -size * 0.4);
                ctx.lineTo(0, size * 0.4);
                ctx.moveTo(size * 0.3, -size * 0.4);
                ctx.lineTo(size * 0.3, size * 0.4);
                ctx.stroke();
            }

            drawButterfly(size) {
                // Body
                ctx.fillRect(-size * 0.1, -size * 0.8, size * 0.2, size * 1.6);

                // Wings
                for (let side of [-1, 1]) {
                    ctx.save();
                    ctx.scale(side, 1);

                    // Top wing
                    ctx.beginPath();
                    ctx.ellipse(size * 0.3, -size * 0.4, size * 0.5, size * 0.3, Math.PI * 0.2, 0, Math.PI * 2);
                    ctx.fill();

                    // Bottom wing
                    ctx.beginPath();
                    ctx.ellipse(size * 0.3, size * 0.4, size * 0.4, size * 0.25, -Math.PI * 0.2, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.restore();
                }
            }

            drawRaindrop(size) {
                ctx.beginPath();
                ctx.moveTo(0, -size);
                ctx.bezierCurveTo(-size * 0.5, -size * 0.5, -size * 0.8, size * 0.5, 0, size);
                ctx.bezierCurveTo(size * 0.8, size * 0.5, size * 0.5, -size * 0.5, 0, -size);
                ctx.fill();
            }

            drawSunshine(size) {
                // Center
                ctx.beginPath();
                ctx.arc(0, 0, size * 0.4, 0, Math.PI * 2);
                ctx.fill();

                // Rays
                for (let i = 0; i < 12; i++) {
                    ctx.save();
                    ctx.rotate((Math.PI / 6) * i);
                    ctx.beginPath();
                    ctx.rect(-size * 0.1, -size * 0.9, size * 0.2, size * 0.5);
                    ctx.fill();
                    ctx.restore();
                }
            }

            drawBeachBall(size) {
                // Ball
                ctx.beginPath();
                ctx.arc(0, 0, size, 0, Math.PI * 2);
                ctx.fill();

                // Stripes
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.lineWidth = 3;
                for (let i = 0; i < 3; i++) {
                    const angle = (Math.PI * 2 / 3) * i;
                    ctx.beginPath();
                    ctx.arc(0, 0, size * 0.9, angle, angle + Math.PI / 6);
                    ctx.stroke();
                }
            }

            drawIceCream(size) {
                // Cone
                ctx.beginPath();
                ctx.moveTo(-size * 0.4, size * 0.5);
                ctx.lineTo(0, -size * 0.5);
                ctx.lineTo(size * 0.4, size * 0.5);
                ctx.closePath();
                ctx.fill();

                // Ice cream scoop
                ctx.fillStyle = '#ffb6c1';
                ctx.beginPath();
                ctx.arc(0, -size * 0.7, size * 0.5, 0, Math.PI * 2);
                ctx.fill();
            }

            drawFirework(size) {
                // Explosion center
                ctx.beginPath();
                ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
                ctx.fill();

                // Sparks
                for (let i = 0; i < 8; i++) {
                    ctx.save();
                    ctx.rotate((Math.PI / 4) * i);
                    ctx.beginPath();
                    ctx.moveTo(size * 0.3, 0);
                    ctx.lineTo(size * 0.8, 0);
                    ctx.stroke();
                    ctx.restore();
                }
            }

            drawPencil(size) {
                // Pencil body
                ctx.fillRect(-size * 0.1, -size * 0.8, size * 0.2, size * 1.6);

                // Eraser
                ctx.fillStyle = '#ff6b6b';
                ctx.fillRect(-size * 0.15, size * 0.8, size * 0.3, size * 0.2);

                // Tip
                ctx.fillStyle = '#ffd700';
                ctx.beginPath();
                ctx.moveTo(-size * 0.1, -size * 0.8);
                ctx.lineTo(0, -size * 1.0);
                ctx.lineTo(size * 0.1, -size * 0.8);
                ctx.closePath();
                ctx.fill();
            }

            drawApple(size) {
                // Apple
                ctx.beginPath();
                ctx.arc(0, 0, size * 0.8, 0, Math.PI * 2);
                ctx.fill();

                // Stem
                ctx.strokeStyle = '#8b4513';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(0, -size * 0.8);
                ctx.lineTo(0, -size);
                ctx.stroke();

                // Leaf
                ctx.fillStyle = '#228b22';
                ctx.beginPath();
                ctx.ellipse(-size * 0.2, -size * 0.9, size * 0.3, size * 0.15, Math.PI * 0.3, 0, Math.PI * 2);
                ctx.fill();
            }

            drawPumpkin(size) {
                // Pumpkin body
                ctx.beginPath();
                ctx.ellipse(0, 0, size * 0.8, size * 0.6, 0, 0, Math.PI * 2);
                ctx.fill();

                // Stem
                ctx.fillStyle = '#8b4513';
                ctx.fillRect(-size * 0.1, -size * 0.8, size * 0.2, size * 0.3);

                // Eyes and mouth
                ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
                ctx.fillRect(-size * 0.3, -size * 0.2, size * 0.15, size * 0.2);
                ctx.fillRect(size * 0.15, -size * 0.2, size * 0.15, size * 0.2);
                ctx.fillRect(-size * 0.2, size * 0.1, size * 0.4, size * 0.15);
            }

            drawAcorn(size) {
                // Nut
                ctx.beginPath();
                ctx.ellipse(0, size * 0.2, size * 0.4, size * 0.6, 0, 0, Math.PI * 2);
                ctx.fill();

                // Cap
                ctx.fillStyle = '#8b4513';
                ctx.beginPath();
                ctx.ellipse(0, -size * 0.3, size * 0.5, size * 0.3, 0, 0, Math.PI * 2);
                ctx.fill();
            }

            drawHarvest(size) {
                // Basket
                ctx.beginPath();
                ctx.moveTo(-size * 0.6, size * 0.3);
                ctx.lineTo(-size * 0.4, -size * 0.5);
                ctx.lineTo(size * 0.4, -size * 0.5);
                ctx.lineTo(size * 0.6, size * 0.3);
                ctx.closePath();
                ctx.fill();

                // Handle
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(0, -size * 0.6, size * 0.3, 0, Math.PI);
                ctx.stroke();
            }

            drawTurkey(size) {
                // Body
                ctx.beginPath();
                ctx.ellipse(0, size * 0.2, size * 0.6, size * 0.8, 0, 0, Math.PI * 2);
                ctx.fill();

                // Head
                ctx.beginPath();
                ctx.arc(0, -size * 0.6, size * 0.3, 0, Math.PI * 2);
                ctx.fill();

                // Beak
                ctx.fillStyle = '#ffa500';
                ctx.beginPath();
                ctx.moveTo(0, -size * 0.4);
                ctx.lineTo(size * 0.2, -size * 0.5);
                ctx.lineTo(0, -size * 0.3);
                ctx.closePath();
                ctx.fill();

                // Feathers
                for (let i = 0; i < 5; i++) {
                    const angle = (Math.PI / 6) * i - Math.PI / 2;
                    ctx.save();
                    ctx.rotate(angle);
                    ctx.fillStyle = `hsl(${20 + i * 10}, 70%, 50%)`;
                    ctx.beginPath();
                    ctx.ellipse(size * 0.4, 0, size * 0.3, size * 0.8, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                }
            }

            drawPie(size) {
                // Pie crust
                ctx.beginPath();
                ctx.arc(0, 0, size * 0.8, 0, Math.PI * 2);
                ctx.fill();

                // Filling
                ctx.fillStyle = '#8b4513';
                ctx.beginPath();
                ctx.arc(0, 0, size * 0.6, 0, Math.PI * 2);
                ctx.fill();

                // Slices
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2;
                for (let i = 0; i < 4; i++) {
                    ctx.save();
                    ctx.rotate((Math.PI / 2) * i);
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(0, size * 0.8);
                    ctx.stroke();
                    ctx.restore();
                }
            }

            drawCornucopia(size) {
                // Horn shape
                ctx.beginPath();
                ctx.moveTo(-size * 0.8, size * 0.5);
                ctx.bezierCurveTo(-size * 0.4, -size * 0.8, size * 0.6, -size * 0.6, size * 0.8, size * 0.5);
                ctx.lineTo(-size * 0.8, size * 0.5);
                ctx.fill();

                // Fruits/vegetables spilling out
                ctx.fillStyle = '#ff6b35';
                ctx.beginPath();
                ctx.arc(size * 0.3, -size * 0.2, size * 0.15, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#228b22';
                ctx.beginPath();
                ctx.arc(size * 0.5, -size * 0.4, size * 0.12, 0, Math.PI * 2);
                ctx.fill();
            }

            drawFeather(size) {
                // Feather shaft
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(0, size);
                ctx.lineTo(0, -size);
                ctx.stroke();

                // Feather barbs
                for (let i = 0; i < 6; i++) {
                    const y = -size + (size * 2 / 6) * i;
                    const length = size * (0.8 - Math.abs(i - 2.5) * 0.2);

                    ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(length, y);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(-length, y);
                    ctx.stroke();
                }
            }

            drawIcicle(size) {
                // Icicle shape
                ctx.beginPath();
                ctx.moveTo(-size * 0.2, -size);
                ctx.lineTo(0, size);
                ctx.lineTo(size * 0.2, -size);
                ctx.closePath();
                ctx.fill();

                // Highlight
                ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                ctx.beginPath();
                ctx.moveTo(-size * 0.1, -size * 0.5);
                ctx.lineTo(0, size * 0.5);
                ctx.lineTo(size * 0.1, -size * 0.5);
                ctx.closePath();
                ctx.fill();
            }

            drawEvergreen(size) {
                // Tree trunk
                ctx.fillStyle = '#8b4513';
                ctx.fillRect(-size * 0.1, size * 0.4, size * 0.2, size * 0.6);

                // Tree layers
                ctx.fillStyle = '#228b22';
                for (let i = 0; i < 3; i++) {
                    const y = size * (0.2 - i * 0.3);
                    const width = size * (0.8 - i * 0.2);
                    const height = size * 0.4;

                    ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(-width / 2, y + height);
                    ctx.lineTo(width / 2, y + height);
                    ctx.closePath();
                    ctx.fill();
                }

                // Star on top
                ctx.fillStyle = '#ffd700';
                this.drawStar(size * 0.3);
            }

            drawMitten(size) {
                // Mitten shape
                ctx.beginPath();
                ctx.moveTo(-size * 0.6, size);
                ctx.lineTo(-size * 0.6, -size * 0.3);
                ctx.bezierCurveTo(-size * 0.6, -size * 0.8, 0, -size, size * 0.6, -size * 0.8);
                ctx.bezierCurveTo(size * 0.6, -size * 0.3, size * 0.6, size * 0.5, size * 0.6, size);
                ctx.lineTo(-size * 0.6, size);
                ctx.fill();

                // Thumb
                ctx.beginPath();
                ctx.arc(-size * 0.4, size * 0.3, size * 0.3, 0, Math.PI * 2);
                ctx.fill();
            }

            isDead() {
                return this.life <= 0;
            }
        }

        // Create seasonal particles with theme-specific shapes
        const createSeasonalParticles = () => {
            const particleCount = Math.min(150, Math.floor(window.innerWidth / 15));

            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = Math.random() * 2.5 + 1.5;
                const color = themeConfig.colors[Math.floor(Math.random() * themeConfig.colors.length)];
                const velocity = {
                    x: (Math.random() - 0.5) * 0.8,
                    y: (Math.random() - 0.5) * 0.8
                };

                const particle = new SeasonalParticle(x, y, size, color, velocity, 1200);

                // Assign seasonal shape based on current theme
                particle.shape = themeConfig.particleTypes[Math.floor(Math.random() * themeConfig.particleTypes.length)];

                // Set seasonal behavior
                if (themeConfig.specialEffects) {
                    particle.seasonalBehavior = themeConfig.specialEffects[Math.floor(Math.random() * themeConfig.specialEffects.length)];
                }

                particles.push(particle);
            }
        };

        createSeasonalParticles();

        // Mouse tracking
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        // Seasonal Click burst effect with rate limiting
        let lastBurstTime = 0;
        const burstCooldown = 300; // 300ms between bursts
        const maxBurstParticles = 30; // Maximum burst particles at once

        const createClickBurst = (x, y) => {
            const now = Date.now();
            if (now - lastBurstTime < burstCooldown) return; // Rate limiting
            lastBurstTime = now;

            // Count current burst particles
            const burstParticles = particles.filter(p => p.isBurstParticle);
            if (burstParticles.length > maxBurstParticles) return; // Prevent overload

            const burstCount = 8; // Reduced from 16 for performance
            for (let i = 0; i < burstCount; i++) {
                const angle = (Math.PI * 2 * i) / burstCount;
                const speed = Math.random() * 6 + 3; // Reduced speed
                const burstParticle = new SeasonalParticle(
                    x, y,
                    Math.random() * 3 + 2, // Smaller particles
                    themeConfig.colors[Math.floor(Math.random() * themeConfig.colors.length)],
                    {
                        x: Math.cos(angle) * speed,
                        y: Math.sin(angle) * speed
                    },
                    60 // Shorter lifetime
                );
                // Use seasonal shapes for bursts
                burstParticle.shape = themeConfig.particleTypes[Math.floor(Math.random() * themeConfig.particleTypes.length)];
                burstParticle.seasonalBehavior = 'bounce';
                burstParticle.isBurstParticle = true; // Mark for counting
                particles.push(burstParticle);
            }
        };

        // Global click handler
        const handleClick = (e) => {
            createClickBurst(e.clientX, e.clientY);

            // Trigger celebration if available
            if (window.triggerParticleCelebration) {
                window.triggerParticleCelebration(e.clientX, e.clientY);
            }
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('click', handleClick);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
                particles[i].draw();

                if (particles[i].isDead()) {
                    particles.splice(i, 1);
                }
            }

            // Maintain particle count
            if (particles.length < 60) {
                createSeasonalParticles();
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('click', handleClick);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    // Celebration burst component
    const CelebrationBurst = ({ id, x, y, onComplete }) => {
        const particles = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            angle: (Math.PI * 2 * i) / 15,
            distance: Math.random() * 80 + 40,
            size: Math.random() * 4 + 2,
            color: ['#38bdf8', '#8b5cf6', '#ec4899', '#22c55e'][Math.floor(Math.random() * 4)]
        }));

        return (
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed pointer-events-none z-50"
                    style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
                    onAnimationComplete={onComplete}
                >
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            initial={{
                                x: 0,
                                y: 0,
                                scale: 0,
                                opacity: 1
                            }}
                            animate={{
                                x: Math.cos(particle.angle) * particle.distance,
                                y: Math.sin(particle.angle) * particle.distance,
                                scale: 1,
                                opacity: 0
                            }}
                            transition={{
                                duration: 1.2,
                                ease: "easeOut",
                                delay: Math.random() * 0.1
                            }}
                            className="absolute rounded-full"
                            style={{
                                width: particle.size,
                                height: particle.size,
                                backgroundColor: particle.color,
                                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
                            }}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>
        );
    };

    const triggerCelebration = (x, y) => {
        const id = Date.now();
        setCelebrationBursts(prev => [...prev, { id, x, y }]);
    };

    const removeCelebration = (id) => {
        setCelebrationBursts(prev => prev.filter(burst => burst.id !== id));
    };

    // Expose celebration trigger
    useEffect(() => {
        window.triggerParticleCelebration = triggerCelebration;
        return () => {
            delete window.triggerParticleCelebration;
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-0"
                style={{ mixBlendMode: 'screen' }}
            />

            {/* Celebration bursts */}
            {celebrationBursts.map((burst) => (
                <CelebrationBurst
                    key={burst.id}
                    id={burst.id}
                    x={burst.x}
                    y={burst.y}
                    onComplete={() => removeCelebration(burst.id)}
                />
            ))}
        </>
    );
};

export default ParticleEffects;