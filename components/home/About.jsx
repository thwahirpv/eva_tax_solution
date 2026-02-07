
"use client";

import { motion } from "framer-motion";

const trustLogos = [
    { name: "CRA EFILE", color: "text-gray-800" },
    { name: "CRA NETFILE", color: "text-gray-800" },
    { name: "QuickBooks", color: "text-green-600" },
    { name: "sage", color: "text-green-700" },
];

export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-gray-50">
            <div className="container px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">
                        Trusted Tax Solutions Tailored for Canadians
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        At Eva Tax Solutions, we specialize in navigating the Canadian tax system to bring you maximized refunds and stress-free filing. Certified by the Canada Revenue Agency, we cater to individuals, families, and businesses across Canada with expert tax services and personalized care that you can rely on.
                    </p>
                </motion.div>

                {/* Trust Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-12 bg-white rounded-xl shadow-sm border border-gray-100 p-8"
                >
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {trustLogos.map((logo, index) => (
                            <div key={index} className={`text-xl md:text-2xl font-bold ${logo.color} opacity-80 hover:opacity-100 transition-opacity`}>
                                {logo.name}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
