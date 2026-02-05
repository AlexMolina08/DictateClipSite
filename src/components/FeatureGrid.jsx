import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Lock, Sparkles } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: "Instant Sync",
        desc: "Record on Watch/iPhone, paste on Mac via iCloud. Your clipboard history follows you instantly.",
        color: "text-blue-500",
        bg: "bg-blue-50"
    },
    {
        icon: Lock,
        title: "Private by Design",
        desc: "Audio is deleted immediately after transcription. No servers. Processing happens on-device or via secure API.",
        color: "text-green-600",
        bg: "bg-green-50"
    },
    {
        icon: Sparkles,
        title: "Whisper AI Accuracy",
        desc: "Powered by OpenAI Whisper. Intelligently removes filler words and punctuates your sentences perfectly.",
        color: "text-purple-600",
        bg: "bg-purple-50"
    }
];

export default function FeatureGrid() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-[24px] bg-background-light border border-black/5 shadow-sm hover:shadow-apple transition-all duration-300"
                    >
                        <div className={`w-12 h-12 rounded-2xl ${f.bg} ${f.color} flex items-center justify-center mb-6`}>
                            <f.icon size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-text-main mb-3">{f.title}</h3>
                        <p className="text-text-secondary leading-relaxed">{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
