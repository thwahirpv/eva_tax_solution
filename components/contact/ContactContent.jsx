"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

const floatingIconVariants = {
    animate: {
        y: [-3, 3],
        transition: {
            y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            },
        },
    },
};

export default function ContactContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Failed to send message. Please check your connection.");
        }
    };

    return (
        <div className="bg-white">
            <Header />
            {/* 1️⃣ HERO SECTION (Refined to match Home Hero) */}
            <section className="relative w-full bg-white overflow-hidden">
                {/* Background Image - Absolute Positioning for Desktop & Mobile */}
                <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0">
                    <div className="relative w-full h-full">
                        {/* Gradient Overlay: Vertical for Mobile, Horizontal for Desktop */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/80 lg:bg-gradient-to-r lg:from-white lg:via-white/50 lg:to-transparent z-10" />

                        {/* Desktop Image */}
                        <Image
                            src="/images/heroImg.png"
                            alt="Contact Eva Tax Solutions"
                            fill
                            className="hidden lg:block object-cover object-center"
                            priority
                        />

                        {/* Mobile Image */}
                        <Image
                            src="/images/mobileHeroImg.png"
                            alt="Contact Eva Tax Solutions"
                            fill
                            className="block lg:hidden object-cover object-top"
                            priority
                        />
                    </div>
                </div>

                <div className="container px-4 lg:px-10 relative z-10">
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start min-h-[100vh] lg:min-h-[750px] pt-20 lg:pt-5 pb-52 lg:pb-12">

                        {/* Left Column: Text Content */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-6 md:space-y-6 pt-0 lg:mt-32"
                        >
                            <motion.h1
                                variants={itemVariants}
                                className="text-[34px] md:text-[40px] lg:text-5xl xl:text-6xl leading-tight font-bold text-primary font-serif tracking-normal mt-4 lg:mt-2 text-center lg:text-left"
                            >
                                Contact Us
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-lg md:text-xl text-[#374151] max-w-[480px] leading-relaxed font-sans font-medium text-center lg:text-left"
                            >
                                Trusted, CPA-certified tax experts ensuring you get every dollar you deserve. We're here to maximize your refunds and simplify your taxes.
                            </motion.p>

                            <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button
                                    asChild
                                    size="lg"
                                    className="font-sans cursor-pointer text-[14px] md:text-[16px] font-normal px-8 py-3 h-auto shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-[#4d7c6e] hover:bg-[#3d6358] text-white rounded-sm"
                                >
                                    <a href="#contact-form">
                                        Message Us
                                    </a>
                                </Button>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 2️⃣ CONTACT INFORMATION + FORM SECTION */}
            <section className="bg-[#F9FBFA] py-16 md:py-20 lg:py-24" id="contact-form">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* LEFT CARD — Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-[#E5E7EB] rounded-xl shadow-sm p-6 md:p-8 flex flex-col h-full"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-primary font-serif mb-8">
                                Get in Touch
                            </h2>

                            <div className="space-y-8 grow">
                                {/* Phone */}
                                <div className="flex items-start gap-5">
                                    <motion.div variants={floatingIconVariants} animate="animate" className="p-3 bg-emerald-50 rounded-lg text-[#63C384]">
                                        <Phone className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                                        <a href="tel:226-678-7903" className="text-gray-600 hover:text-[#63C384] transition-colors">
                                            226-678-7903
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-5">
                                    <motion.div variants={floatingIconVariants} animate="animate" className="p-3 bg-emerald-50 rounded-lg text-[#63C384]">
                                        <Mail className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                        <a href="mailto:info@evataxsolutions.ca" className="text-gray-600 hover:text-[#63C384] transition-colors break-all">
                                            info@evataxsolutions.ca
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-5">
                                    <motion.div variants={floatingIconVariants} animate="animate" className="p-3 bg-emerald-50 rounded-lg text-[#63C384]">
                                        <MapPin className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Office</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            5498 shorecrest crescent.<br />
                                            Mississauga, Ontario, Canada
                                        </p>
                                    </div>
                                </div>

                                <div className="border-t border-[#E5E7EB] my-6" />

                                {/* Office Hours */}
                                <div className="flex items-start gap-5">
                                    <motion.div variants={floatingIconVariants} animate="animate" className="p-3 bg-emerald-50 rounded-lg text-[#63C384]">
                                        <Clock className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Office Hours</h3>
                                        <p className="text-gray-600 text-sm">
                                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                                            Saturday: 10:00 AM - 4:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT CARD — Secure Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white border border-[#E5E7EB] rounded-xl shadow-sm p-6 md:p-8"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-primary font-serif mb-2">
                                Send a Message
                            </h2>
                            <p className="text-gray-500 mb-8 text-sm">
                                Secure & Confidential. We usually reply within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Full Name"
                                        className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] focus:ring-2 focus:ring-[#63C384] focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-700"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Email Address"
                                        className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] focus:ring-2 focus:ring-[#63C384] focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-700"
                                    />
                                </div>

                                {/* Phone (Optional) */}
                                <div>
                                    <label htmlFor="phone" className="sr-only">Phone (Optional)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number (Optional)"
                                        className="w-full h-12 px-4 rounded-lg border border-[#E5E7EB] focus:ring-2 focus:ring-[#63C384] focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-700"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="sr-only">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="How can we help you?"
                                        className="w-full h-32 px-4 py-3 rounded-lg border border-[#E5E7EB] focus:ring-2 focus:ring-[#63C384] focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400 text-gray-700"
                                    />
                                </div>

                                {/* Status Messages */}
                                {status === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg text-sm"
                                    >
                                        Message sent successfully! We'll get back to you shortly.
                                    </motion.div>
                                )}
                                {status === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
                                    >
                                        {errorMessage}
                                    </motion.div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={status === "loading" || status === "success"}
                                    className="w-full h-12 bg-[#4d7c6e] hover:bg-[#3d6358] cursor-pointer text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : status === "success" ? (
                                        "Sent!"
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                                <p className="text-center text-xs text-gray-400 mt-3">
                                    By submitting this form, you agree to our privacy policy.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* GOOGLE MAP SECTION */}
            <section className="bg-white py-16 md:py-20">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-primary font-serif mb-8 text-center md:text-left">
                            Our Office Location
                        </h2>
                        <div className="w-full h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-sm border border-[#E5E7EB]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.0807247393745!2d-79.70849792400158!3d43.58403487110545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b41aff8a4cd15%3A0x9c325ad3026d96!2s5498%20Shorecrest%20Crescent%2C%20Mississauga%2C%20ON%20L5M%204Y6%2C%20Canada!5e0!3m2!1sen!2sin!4v1770693374917!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Eva Tax Solutions Office Location"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
