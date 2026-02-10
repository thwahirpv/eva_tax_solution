
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white/80 pt-16 pb-20 md:pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 items-start">

                    {/* Brand Column */}
                    <div className="flex flex-col items-start gap-6">
                        <Link href="/" className="flex items-center h-16">
                            <Image
                                src="/images/logo_2.png"
                                alt="Eva Tax Solutions"
                                width={180}
                                height={60}
                                className="h-16 md:h-16 lg:h-18 w-auto object-contain -ml-1 md:-ml-1 lg:-ml-2 transition-all"
                            />
                        </Link>
                        <p className=" leading-relaxed text-sm max-w-[280px] text-left">
                            Trusted, CRA-certified tax experts focused on maximizing your refunds and ensuring financial peace of mind.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: 'Services', href: '/#services' },
                                { name: 'About Us', href: '/#about' },
                                { name: 'The Process', href: '/#process' },
                                { name: 'Testimonials', href: '/#reviews' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Services</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: 'Personal Tax', href: '/#personal-tax' },
                                { name: 'Corporate Tax', href: '/#corporate-tax' },
                                { name: 'GST/HST Filing', href: '/#gst-hst-filing' },
                                { name: 'Self Employed Tax', href: '/#self-employed-tax' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Contact</h4>
                        <ul className="space-y-4  text-sm">
                            <li className="flex items-center gap-3 cursor-pointer">
                                <Phone className="w-5 h-5 text-emerald-400" />
                                <a href="tel:226-678-7903" className="hover:text-white transition-colors">226-678-7903</a>
                            </li>
                            <li className="flex items-center gap-3 cursor-pointer">
                                <Mail className="w-5 h-5 text-emerald-400" />
                                <a href="mailto:info@evataxsolutions.ca" className="hover:text-white transition-colors">info@evataxsolutions.ca</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                                <span>5498 shorecrest crescent Mississauga, Ontario, Canada</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex justify-center items-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Eva Tax Solutions. All rights reserved.</p>
                    {/* <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
