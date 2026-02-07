
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

export default function Hero() {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            {/* Background Image - Absolute Positioning for Desktop & Mobile */}
            <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0">
                <div className="relative w-full h-full">
                    {/* Gradient Overlay: Vertical for Mobile, Horizontal for Desktop */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/20 lg:to-transparent z-10" />

                    {/* Desktop Image */}
                    <Image
                        src="/images/heroImg.png"
                        alt="Tax experts"
                        fill
                        className="hidden lg:block object-cover object-center"
                        priority
                    />

                    {/* Mobile Image */}
                    <Image
                        src="/images/mobileHeroImg.png"
                        alt="Tax experts"
                        fill
                        className="block lg:hidden object-cover object-top"
                        priority
                    />
                </div>
            </div>

            <div className="container px-4 relative z-10">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start min-h-[100dvh] lg:min-h-[750px] pt-20 lg:pt-0 pb-12">

                    {/* Left Column: Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-6 md:space-y-6 pt-0 lg:mt-32"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-[34px] md:text-[40px] lg:text-[50px] leading-[1.15] font-medium text-primary font-serif tracking-normal mt-4 lg:mt-2 text-center lg:text-left"
                        >
                            Maximized Refunds. <br />
                            Simplified Taxes for <br />
                            Canadians.
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-[#374151] max-w-[480px] leading-relaxed font-sans font-normal text-center lg:text-left"
                        >
                            Trusted, CRA-certified tax experts ensuring you get every dollar you deserve.
                        </motion.p>

                        <motion.div variants={itemVariants} className="pt-2">
                            <Button
                                size="lg"
                                className="font-sans cursor-pointer text-[14px] md:text-[16px] font-normal px-5 py-3 md:px-7 md:py-3 h-auto shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all bg-[#4d7c6e] hover:bg-[#3d6358] text-white rounded-sm"
                            >
                                Book a Consultation
                            </Button>
                        </motion.div>

                        {/* Trust Badges Container */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-16 md:mt-4 px-6 rounded-sm border border-gray-100 py-4 flex flex-wrap justify-center lg:justify-start items-center gap-6 md:gap-8 opacity-95 bg-white/60 backdrop-blur-sm shadow-sm"
                        >
                            <div className="flex items-center gap-1.5 text-gray-800">
                                <span className="text-[20px] font-bold tracking-tight">CRA</span>
                                <span className="text-secondary flex items-center gap-1 text-[17px] font-bold">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="inline-block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                    EFILE
                                </span>
                            </div>

                            <div className="flex items-center gap-1.5 text-gray-800">
                                <span className="text-secondary opacity-90">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" /></svg>
                                </span>
                                <span className="text-[17px] font-bold">NETFILE</span>
                            </div>

                            <div className="font-bold text-[#374151] text-[18px] flex items-center gap-1 tracking-tight">
                                <span className="text-[#2CA01C] text-[20px]">qb</span> QuickBooks.
                            </div>

                            <div className="font-bold text-[#00D93C] text-[24px] tracking-tighter">sage</div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
