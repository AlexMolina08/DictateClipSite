import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine, Apple } from 'lucide-react';

const SPRING_CONFIG = { mass: 1, stiffness: 150, damping: 20 };

export default function Hero() {
    return (
        <section className="pt-32 pb-20 px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 max-w-3xl"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-main leading-[1.05]">
                    The fastest way to get voice into your clipboard.
                </h1>
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
                    Native macOS & iOS voice-to-text powered by OpenAI Whisper. Instantly record, transcribe, and paste.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-12 mb-16 relative w-full aspect-[2/1] md:aspect-[3/1] max-w-3xl bg-white rounded-[20px] shadow-hero ring-1 ring-black/5 overflow-hidden flex items-center justify-center group"
            >
                {/* Visualizer Simulation */}
                <div className="flex items-center gap-1.5 h-32">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2.5 bg-primary rounded-full"
                            animate={{
                                height: [24, Math.random() * 64 + 32, 24],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.1,
                            }}
                        />
                    ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={SPRING_CONFIG}
                    className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
                >
                    <Apple size={20} className="mb-0.5" />
                    <span>Download for iOS</span>
                </motion.button>

                <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={SPRING_CONFIG}
                    className="flex items-center justify-center gap-2 bg-white text-text-main px-8 py-4 rounded-full text-lg font-medium shadow-apple ring-1 ring-black/5 hover:bg-gray-50 transition-colors"
                >
                    <ArrowDownToLine size={20} />
                    <span>Download for Mac</span>
                </motion.button>
            </div>
        </section>
    );
}
