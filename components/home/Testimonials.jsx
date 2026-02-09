
"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Jason M.",
        review: "Fast, professional, and informative. They explained everything clearly and got me a great refund.",
        rating: 5,
    },
    {
        name: "Sarah T.",
        review: "Quick, caring, and tax time gone vary easy. The best experience I've had filing taxes.",
        rating: 5,
    },
    {
        name: "David P.",
        review: "Excellent for new immigrants. They helped me understand the Canadian system perfectly.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section id="reviews" className="py-16 md:py-24 bg-[#F9FBFA] px-6">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">
                        What Our Clients Say
                    </h2>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white relative p-10 rounded-xl border border-gray-100 shadow-sm group hover:border-secondary/30 transition-colors flex flex-col h-full md:last:col-span-2 lg:last:col-span-1"
                    >
                        <Quote className="absolute bottom-6 right-6 text-gray-100 w-12 h-12 group-hover:text-secondary/10 transition-colors" />
                        <div className="flex gap-1 mb-6 h-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                            ))}
                        </div>

                        <h3 className="text-xl font-bold text-primary mb-2">
                            {testimonial.name}
                        </h3>

                            <p className="text-gray-600 italic text-sm leading-relaxed relative z-10">
                            "{testimonial.review}"
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
