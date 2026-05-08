import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

// Standalone quantum color generator
const generateQuantumColor = () => {
    const colors = [
        '#38bdf8', // Argyle blue
        '#8b5cf6', // Purple
        '#ec4899', // Pink
        '#22c55e', // Green
        '#f59e0b', // Orange
        '#ef4444', // Red
        '#06b6d4', // Cyan
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

class EnterpriseParticleSystem {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.particles = [];
        this.emitters = [];
        this.forces = [];
        this.behaviors = [];
        this.performanceMetrics = { fps: 60, particleCount: 0, renderTime: 0 };
        this.frameCount = 0;
        this.lastTime = performance.now();

        // Advanced physics properties
        this.gravity = { x: 0, y: 0.1 };
        this.wind = { x: 0, y: 0 };
        this.viscosity = 0.99;
        this.timeScale = 1.0;

        // Performance monitoring
        this.performanceHistory = [];
        this.targetFPS = 60;
        this.adaptiveQuality = true;

        // Gesture recognition
        this.gestureBuffer = [];
        this.gesturePatterns = {
            circle: [],
            swipe: [],
            tap: []
        };

        // AI-powered behaviors
        this.behaviorWeights = {
            attraction: 0.3,
            repulsion: 0.2,
            flocking: 0.1,
            morphing: 0.4
        };
    }

    // Advanced Particle Classes
    createQuantumParticle(x, y, config = {}) {
        const particle = {
            id: Math.random().toString(36).substr(2, 9),
            x, y,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            size: config.size || Math.random() * 6 + 2,
            mass: config.mass || Math.random() * 2 + 0.5,
            charge: config.charge || (Math.random() - 0.5) * 2,
            spin: 0,
            energy: 100,
            life: config.life || Math.random() * 300 + 200,
            maxLife: config.life || Math.random() * 300 + 200,
            alpha: 1,
            color: config.color || generateQuantumColor(),
            type: config.type || ['photon', 'electron', 'quark'][Math.floor(Math.random() * 3)],
            quantumState: Math.floor(Math.random() * 3),
            trail: [],
            maxTrailLength: 15,
            behaviors: [],
            morphing: false,
            targetMorph: null,
            soundFrequency: config.soundFrequency || Math.random() * 1000 + 200,

            update: function(deltaTime) {
                // Quantum superposition (random position jumps)
                if (Math.random() < 0.001) {
                    this.x += (Math.random() - 0.5) * 20;
                    this.y += (Math.random() - 0.5) * 20;
                }

                // Advanced physics
                this.vx *= this.viscosity;
                this.vy *= this.viscosity;

                // Apply forces
                this.vx += this.gravity.x * this.mass;
                this.vy += this.gravity.y * this.mass;
                this.vx += this.wind.x;
                this.vy += this.wind.y;

                // Update position
                this.x += this.vx * deltaTime * this.timeScale;
                this.y += this.vy * deltaTime * this.timeScale;

                // Spin
                this.spin += 0.1;

                // Update trail
                this.trail.push({ x: this.x, y: this.y, alpha: this.alpha });
                if (this.trail.length > this.maxTrailLength) {
                    this.trail.shift();
                }

                // Quantum entanglement (connect to nearby particles)
                this.entangledParticles = this.findNearbyParticles(50);

                // Life cycle
                this.life--;
                this.energy = this.life / this.maxLife;
                this.alpha = Math.max(0, this.energy);

                // Morphing behavior
                if (this.morphing && this.targetMorph) {
                    this.morphTowards(this.targetMorph);
                }
            },

            findNearbyParticles: function(radius) {
                // Find particles within quantum entanglement range
                return this.particles?.filter(p => {
                    if (p === this) return false;
                    const dx = p.x - this.x;
                    const dy = p.y - this.y;
                    return Math.sqrt(dx * dx + dy * dy) < radius;
                }) || [];
            },

            morphTowards: function(target) {
                this.size += (target.size - this.size) * 0.05;
                this.mass += (target.mass - this.mass) * 0.05;
                // Color interpolation would go here
            },

            draw: function(ctx) {
                ctx.save();

                // Draw quantum trail
                if (this.trail.length > 1) {
                    ctx.strokeStyle = this.color;
                    ctx.lineWidth = this.size * 0.3;
                    ctx.globalAlpha = this.alpha * 0.5;
                    ctx.beginPath();
                    ctx.moveTo(this.trail[0].x, this.trail[0].y);
                    for (let i = 1; i < this.trail.length; i++) {
                        ctx.lineTo(this.trail[i].x, this.trail[i].y);
                    }
                    ctx.stroke();
                }

                // Draw particle based on quantum state
                ctx.globalAlpha = this.alpha;
                ctx.translate(this.x, this.y);
                ctx.rotate(this.spin);

                // Quantum state visualization
                switch (this.quantumState) {
                    case 0: // Photon-like
                        this.drawPhoton(ctx);
                        break;
                    case 1: // Electron-like
                        this.drawElectron(ctx);
                        break;
                    case 2: // Quark-like
                        this.drawQuark(ctx);
                        break;
                }

                // Draw entanglement lines
                if (this.entangledParticles?.length > 0) {
                    ctx.globalAlpha = this.alpha * 0.2;
                    ctx.strokeStyle = this.color;
                    ctx.lineWidth = 1;
                    this.entangledParticles.forEach(particle => {
                        ctx.beginPath();
                        ctx.moveTo(0, 0);
                        ctx.lineTo(particle.x - this.x, particle.y - this.y);
                        ctx.stroke();
                    });
                }

                ctx.restore();
            },

            drawPhoton: function(ctx) {
                // Photon as wave-particle duality
                const waveLength = this.size * 2;
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(-waveLength/2, 0);
                for (let i = 0; i < waveLength; i += 2) {
                    const y = Math.sin(i * 0.3) * 3;
                    ctx.lineTo(-waveLength/2 + i, y);
                }
                ctx.stroke();

                // Particle aspect
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2);
                ctx.fill();
            },

            drawElectron: function(ctx) {
                // Electron orbital
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.ellipse(0, 0, this.size * 1.5, this.size * 0.8, this.spin, 0, Math.PI * 2);
                ctx.stroke();

                // Electron particle
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.size * 1.2 * Math.cos(this.spin), this.size * 0.6 * Math.sin(this.spin), this.size * 0.4, 0, Math.PI * 2);
                ctx.fill();
            },

            drawQuark: function(ctx) {
                // Quark as triangle with internal structure
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.moveTo(0, -this.size);
                ctx.lineTo(-this.size * 0.866, this.size * 0.5);
                ctx.lineTo(this.size * 0.866, this.size * 0.5);
                ctx.closePath();
                ctx.fill();

                // Internal quark structure
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.beginPath();
                ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        // Add behaviors
        particle.behaviors = config.behaviors || [];
        particle.particles = this.particles; // Reference for entanglement

        return particle;
    }


    // Advanced Emitters
    createSingularityEmitter(x, y, config = {}) {
        const emitter = {
            x, y,
            power: config.power || 100,
            radius: config.radius || 100,
            particlesPerFrame: config.particlesPerFrame || 2,
            lastEmission: 0,
            system: this, // Reference to the particle system

            emit: function() {
                const now = performance.now();
                if (now - this.lastEmission < 1000 / this.particlesPerFrame) return;

                this.lastEmission = now;

                // Create particles with quantum properties
                for (let i = 0; i < Math.floor(this.particlesPerFrame); i++) {
                    const angle = Math.random() * Math.PI * 2;
                    const distance = Math.random() * this.radius;

                    const particle = this.system.createQuantumParticle(
                        this.x + Math.cos(angle) * distance,
                        this.y + Math.sin(angle) * distance,
                        {
                            size: Math.random() * 4 + 2,
                            life: Math.random() * 200 + 100,
                            type: 'photon'
                        }
                    );

                    // Add singularity behaviors
                    particle.behaviors.push({
                        name: 'singularity_attraction',
                        execute: (p) => {
                            const dx = this.x - p.x;
                            const dy = this.y - p.y;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            if (distance > 10) {
                                p.vx += (dx / distance) * 0.1;
                                p.vy += (dy / distance) * 0.1;
                            }
                        }
                    });

                    this.system.particles.push(particle);
                }
            }
        };

        this.emitters.push(emitter);
        return emitter;
    }

    createFractalEmitter(x, y, config = {}) {
        const emitter = {
            x, y,
            complexity: config.complexity || 3,
            scale: config.scale || 1,
            particles: [],
            system: this, // Reference to the particle system

            generateFractal: function(depth, cx, cy, size) {
                if (depth === 0) {
                    const particle = this.system.createQuantumParticle(cx, cy, {
                        size: size * 0.1,
                        life: 300,
                        color: generateQuantumColor()
                    });
                    this.particles.push(particle);
                    return;
                }

                const newSize = size * 0.5;
                const offset = size * 0.4;

                // Recursive fractal generation
                this.generateFractal(depth - 1, cx, cy - offset, newSize);
                this.generateFractal(depth - 1, cx - offset, cy + offset, newSize);
                this.generateFractal(depth - 1, cx + offset, cy + offset, newSize);
            },

            emit: function() {
                this.particles = [];
                this.generateFractal(this.complexity, this.x, this.y, 50 * this.scale);
            }
        };

        this.emitters.push(emitter);
        return emitter;
    }

    // Gesture Recognition System
    recognizeGesture(points) {
        if (points.length < 5) return null;

        // Detect circular gestures
        const center = points.reduce((acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y }), { x: 0, y: 0 });
        center.x /= points.length;
        center.y /= points.length;

        const avgRadius = points.reduce((sum, p) => {
            const dx = p.x - center.x;
            const dy = p.y - center.y;
            return sum + Math.sqrt(dx * dx + dy * dy);
        }, 0) / points.length;

        const circularity = points.reduce((sum, p, i) => {
            if (i === 0) return sum;
            const prev = points[i - 1];
            const expectedAngle = Math.atan2(p.y - center.y, p.x - center.x);
            const actualAngle = Math.atan2(prev.y - center.y, prev.x - center.x);
            return sum + Math.abs(expectedAngle - actualAngle);
        }, 0) / points.length;

        if (circularity < 0.5) {
            return { type: 'circle', center, radius: avgRadius };
        }

        // Detect swipe gestures
        const start = points[0];
        const end = points[points.length - 1];
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 100) {
            const angle = Math.atan2(dy, dx);
            return { type: 'swipe', start, end, distance, angle };
        }

        return { type: 'tap', point: points[Math.floor(points.length / 2)] };
    }

    // AI-Powered Behavior System
    updateAIBehaviors() {
        this.particles.forEach(particle => {
            // Adaptive behavior based on environment
            const nearbyParticles = particle.entangledParticles || [];

            if (nearbyParticles.length > 3) {
                // Flocking behavior
                const avgX = nearbyParticles.reduce((sum, p) => sum + p.x, 0) / nearbyParticles.length;
                const avgY = nearbyParticles.reduce((sum, p) => sum + p.y, 0) / nearbyParticles.length;

                particle.vx += (avgX - particle.x) * this.behaviorWeights.flocking;
                particle.vy += (avgY - particle.y) * this.behaviorWeights.flocking;
            }

            // Dynamic morphing based on interactions
            if (Math.random() < 0.001) {
                particle.morphing = true;
                particle.targetMorph = {
                    size: Math.random() * 8 + 2,
                    mass: Math.random() * 2 + 0.5
                };
            }
        });
    }

    // Performance Monitoring
    updatePerformanceMetrics(deltaTime) {
        this.frameCount++;
        const now = performance.now();

        this.performanceHistory.push(now);
        if (this.performanceHistory.length > 60) {
            this.performanceHistory.shift();
        }

        const fps = this.performanceHistory.length > 1 ?
            1000 / ((now - this.performanceHistory[0]) / (this.performanceHistory.length - 1)) : 60;

        // Adaptive quality adjustment
        if (this.adaptiveQuality) {
            if (fps < 50) {
                this.viscosity = Math.min(1, this.viscosity + 0.01);
                this.timeScale *= 0.99;
            } else if (fps > 55) {
                this.viscosity = Math.max(0.95, this.viscosity - 0.001);
                this.timeScale = Math.min(1.2, this.timeScale * 1.001);
            }
        }

        this.performanceMetrics = {
            fps: Math.round(fps),
            particleCount: this.particles.length,
            renderTime: deltaTime,
            quality: this.adaptiveQuality ? 'Adaptive' : 'High'
        };
    }

    // Main update loop
    update(deltaTime) {
        // Update emitters
        this.emitters.forEach(emitter => emitter.emit?.());

        // Apply AI behaviors
        this.updateAIBehaviors();

        // Update particles
        this.particles.forEach(particle => {
            particle.update?.(deltaTime);
        });

        // Remove dead particles
        this.particles = this.particles.filter(p => p.life > 0);

        // Update performance metrics
        this.updatePerformanceMetrics(deltaTime);
    }

    // Main render loop
    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Render particles
        this.particles.forEach(particle => {
            particle.draw?.(this.ctx);
        });

        // Render emitters
        this.emitters.forEach(emitter => {
            emitter.draw?.(this.ctx);
        });
    }
}

const EnterpriseParticleEffects = () => {
    const canvasRef = useRef(null);
    const particleSystemRef = useRef(null);
    const animationRef = useRef(null);
    const [performanceMetrics, setPerformanceMetrics] = useState({ fps: 60, particleCount: 0, renderTime: 0, quality: 'High' });
    const [gestureDetected, setGestureDetected] = useState(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const mouseTrail = useRef([]);
    const lastMousePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const particleSystem = new EnterpriseParticleSystem(canvas, ctx);
        particleSystemRef.current = particleSystem;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create advanced emitters
        particleSystem.createSingularityEmitter(canvas.width / 2, canvas.height / 2, {
            power: 150,
            radius: 200,
            particlesPerFrame: 3
        });

        particleSystem.createFractalEmitter(canvas.width * 0.8, canvas.height * 0.3, {
            complexity: 4,
            scale: 0.8
        });

        // Mouse interaction
        const handleMouseMove = (e) => {
            const newX = e.clientX;
            const newY = e.clientY;

            mouseX.set(newX);
            mouseY.set(newY);

            // Update mouse trail for gesture recognition
            mouseTrail.current.push({ x: newX, y: newY, time: Date.now() });
            if (mouseTrail.current.length > 20) {
                mouseTrail.current.shift();
            }

            // Detect gestures
            if (mouseTrail.current.length >= 10) {
                const recentTrail = mouseTrail.current.slice(-15);
                const gesture = particleSystem.recognizeGesture(recentTrail);

                if (gesture && gesture.type !== 'tap') {
                    setGestureDetected(gesture);

                    // Create gesture-based particle effects
                    if (gesture.type === 'circle') {
                        particleSystem.createSingularityEmitter(gesture.center.x, gesture.center.y, {
                            power: 200,
                            radius: gesture.radius,
                            particlesPerFrame: 5
                        });
                    } else if (gesture.type === 'swipe') {
                        // Create swipe trail particles
                        for (let i = 0; i < 10; i++) {
                            const t = i / 9;
                            const x = gesture.start.x + (gesture.end.x - gesture.start.x) * t;
                            const y = gesture.start.y + (gesture.end.y - gesture.start.y) * t;

                            const particle = particleSystem.createQuantumParticle(x, y, {
                                size: Math.random() * 4 + 2,
                                life: 60,
                                type: 'photon'
                            });
                            particleSystem.particles.push(particle);
                        }
                    }

                    setTimeout(() => setGestureDetected(null), 2000);
                }
            }
        };

        const handleClick = (e) => {
            // Create quantum burst
            for (let i = 0; i < 16; i++) {
                const angle = (Math.PI * 2 * i) / 16;
                const speed = Math.random() * 12 + 6;

                const particle = particleSystem.createQuantumParticle(e.clientX, e.clientY, {
                    size: Math.random() * 6 + 3,
                    life: Math.random() * 100 + 50,
                    type: ['photon', 'electron', 'quark'][Math.floor(Math.random() * 3)]
                });

                particle.vx = Math.cos(angle) * speed;
                particle.vy = Math.sin(angle) * speed;

                particleSystem.particles.push(particle);
            }

            // Trigger celebration
            if (window.triggerParticleCelebration) {
                window.triggerParticleCelebration(e.clientX, e.clientY);
            }
        };

        // Event listeners
        canvas.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleClick);

        // Animation loop
        let lastTime = performance.now();

        const animate = () => {
            const now = performance.now();
            const deltaTime = (now - lastTime) / 16.67; // Normalize to 60fps
            lastTime = now;

            particleSystem.update(deltaTime);
            particleSystem.render();

            setPerformanceMetrics(particleSystem.performanceMetrics);

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-0"
                style={{ mixBlendMode: 'screen' }}
            />

            {/* Performance Dashboard */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="fixed top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 text-white text-xs font-mono z-50"
            >
                <div className="space-y-1">
                    <div>FPS: <span className={performanceMetrics.fps > 55 ? 'text-green-400' : performanceMetrics.fps > 45 ? 'text-yellow-400' : 'text-red-400'}>
                        {performanceMetrics.fps}
                    </span></div>
                    <div>Particles: <span className="text-blue-400">{performanceMetrics.particleCount}</span></div>
                    <div>Quality: <span className="text-purple-400">{performanceMetrics.quality}</span></div>
                </div>
            </motion.div>

            {/* Gesture Feedback */}
            <AnimatePresence>
                {gestureDetected && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-lg z-50"
                    >
                        🎯 {gestureDetected.type.toUpperCase()} GESTURE DETECTED! 🎯
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Quantum Field Indicator */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="fixed bottom-4 left-4 w-16 h-16 border-2 border-purple-400 rounded-full z-50"
                style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.3), transparent)',
                }}
            >
                <div className="w-full h-full rounded-full border border-purple-300/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
            </motion.div>
        </>
    );
};

export default EnterpriseParticleEffects;