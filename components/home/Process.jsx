
"use client";

import { motion } from "framer-motion";
import { UploadCloud, FileCheck, Send } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Upload Documents",
        description: "Securely upload your tax slips and receipts to our encrypted portal.",
        icon: <UploadCloud className="w-8 h-8 text-white" />,
    },
    {
        id: 2,
        title: "Expert Review",
        description: "Our certified accountants review every detail to maximize your return.",
        icon: <FileCheck className="w-8 h-8 text-white" />,
    },
    {
        id: 3,
        title: "File & Relax",
        description: "We file your return with the CRA and provide you with confirmation.",
        icon: <Send className="w-8 h-8 text-white" />,
    },
];

const floatAnimation = {
    y: [-5, 5],
    transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
    },
};

export default function Process() {
    return (
        <section id="process" className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
                        How It Works
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Simple, stress-free tax filing in just three easy steps.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connector Line (Desktop Only) */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .2, duration: 1.5, ease: "easeInOut" }}
                        className="absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 hidden lg:block z-0 origin-left"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center"
                            >
                                <motion.div
                                    animate={floatAnimation}
                                    className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20 relative"
                                >
                                    {step.icon}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-primary font-bold border-2 border-white">
                                        {step.id}
                                    </div>
                                </motion.div>

                                <h3 className="text-xl font-bold text-primary mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 max-w-xs mx-auto leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
