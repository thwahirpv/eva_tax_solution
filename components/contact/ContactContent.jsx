"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ChevronsDown } from "lucide-react";
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

const WhatsAppIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const scrollIndicatorVariants = {
    animate: {
        y: [0, 10, 0],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export default function ContactContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        promoCode: "",
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
                setFormData({ name: "", email: "", phone: "", promoCode: "", message: "" });
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
                                    <a href="https://wa.me/12266787903" target="_blank">
                                        Message Us
                                    </a>
                                </Button>
                            </motion.div>
                        </motion.div>



                    </div>

                    {/* Scroll Down Indicator */}
                    <motion.div
                        className="absolute bottom-16 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer flex flex-col items-center gap-2"
                        variants={scrollIndicatorVariants}
                        animate="animate"
                        onClick={() => {
                            const element = document.getElementById("contact-form");
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Scroll Down</span>
                        <div className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-100/50">
                            <ChevronsDown className="w-5 h-5 text-primary" />
                        </div>
                    </motion.div>
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
                                {/* WhatsApp/Phone */}
                                <a
                                    href="https://wa.me/12266787903"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-5 p-4 -ml-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                                >
                                    <motion.div variants={floatingIconVariants} animate="animate" className="p-3 bg-emerald-50 rounded-lg text-[#63C384]">
                                        <WhatsAppIcon className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">WhatsApp / Phone</h3>
                                        <p className="text-gray-600 group-hover:text-[#63C384] transition-colors">
                                            226-678-7903
                                        </p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:info@evataxsolutions.ca"
                                    className="flex items-start gap-5 p-4 -ml-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                                >
                                    <motion.div variants={floatingIconVariants} animate="animate" className="p-3 bg-emerald-50 rounded-lg text-[#63C384]">
                                        <Mail className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">Email</h3>
                                        <p className="text-gray-600 group-hover:text-[#63C384] transition-colors break-all">
                                            info@evataxsolutions.ca
                                        </p>
                                    </div>
                                </a>

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
                                            Monday - Friday: 9:00 AM - 9:00 PM<br />
                                            Saturday & Sunday: 10:00 AM - 6:00 PM<br />
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

                                {/* Promo Code (Optional) */}
                                <div>
                                    <label htmlFor="promoCode" className="sr-only">Promo Code (Optional)</label>
                                    <input
                                        type="text"
                                        id="promoCode"
                                        name="promoCode"
                                        value={formData.promoCode}
                                        onChange={handleChange}
                                        placeholder="Promo Code (Optional)"
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
