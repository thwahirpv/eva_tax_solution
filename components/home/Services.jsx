
"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Calculator, Briefcase, BarChart } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "personal-tax",
        title: "Personal Tax (T1)",
        description: "Reduce the stress from personal tax returns. We handle complex situations.",
        icon: <FileText className="w-8 h-8 text-secondary" />,
        href: "#",
    },
    {
        id: "corporate-tax",
        title: "Corporate Tax (T2)",
        description: "We ensure accurate and timely filings for your business to maximize growth.",
        icon: <Briefcase className="w-8 h-8 text-secondary" />,
        href: "#",
    },
    {
        id: "gst-hst-filing",
        title: "GST/HST Filing",
        description: "We find every deduction possible and ensure compliance with CRA.",
        icon: <Calculator className="w-8 h-8 text-secondary" />,
        href: "#",
    },
    {
        id: "self-employed-tax",
        title: "Self Employed Tax",
        description: "Expert guidance for sole proprietors. We handle your T2125 form and maximize your business deductions.",
        icon: <BarChart className="w-8 h-8 text-secondary" />,
        href: "#",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-16 md:py-16 lg:py-24 pb-32 bg-[#F9FBFA]">
            <div className="container px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
                        Our Tax Services
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive solutions for all your tax filing needs. Simple, stress-free tax filing in just three steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            id={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:border-secondary/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center md:items-start md:text-left scroll-mt-24"
                        >
                            <div className="mb-6 w-16 h-16 flex items-center justify-center bg-green-50 rounded-full">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed grow">
                                {service.description}
                            </p>
                            <Link
                                href="/contact#contact-form"
                                className="mt-auto inline-flex items-center py-2 px-3 text-sm font-medium text-primary hover:text-secondary group transition-colors"
                            >
                                Get Started
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
