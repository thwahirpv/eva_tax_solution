
"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Calculator, Briefcase, BarChart } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Personal Tax (T1)",
        description: "Reduce the stress from personal tax returns. We handle complex situations.",
        icon: <FileText className="w-8 h-8 text-secondary" />,
        href: "#",
    },
    {
        title: "Corporate Tax (T2)",
        description: "We ensure accurate and timely filings for your business to maximize growth.",
        icon: <Briefcase className="w-8 h-8 text-secondary" />,
        href: "#",
    },
    {
        title: "GST/HST Filing",
        description: "We find every deduction possible and ensure compliance with CRA.",
        icon: <Calculator className="w-8 h-8 text-secondary" />,
        href: "#",
    },
    {
        title: "Bookkeeping",
        description: "Filing with confidence, accurate and on time. Let us manage your books.",
        icon: <BarChart className="w-8 h-8 text-secondary" />,
        href: "#",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-16 md:py-24 bg-[#F1FAF5]">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
                        Our Tax Services
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive solutions for all your tax filing needs. Simple, stress-free tax filing in just three steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                            className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:border-secondary/20 transition-all duration-300"
                        >
                            <div className="mb-6 p-3 bg-green-50 rounded-full w-fit">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                {service.description}
                            </p>
                            <Link
                                href={service.href}
                                className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary group transition-colors"
                            >
                                Learn More
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
