
"use client";

import { motion } from "framer-motion";



export default function About() {
    return (
        <section id="about" className="relative z-20 -mt-36 lg:mt-0 pt-12 pb-16 md:py-16 xl:py-24 bg-white rounded-t-[2.5rem] lg:rounded-none">
            <div className="container px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto space-y-4"
                >
                    <div className="text-secondary font-bold tracking-widest text-xs md:text-sm uppercase mb-2">
                        CPA Certified
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">
                        Trusted Tax Solutions Tailored for Canadians
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed font-sans max-w-2xl mx-auto">
                        At Eva Tax Solutions, we specialize in navigating the Canadian tax system to bring you maximized refunds and stress-free filing. CPA-certified, we cater to individuals, families, and businesses across Canada with expert tax services and personalized care that you can rely on.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
