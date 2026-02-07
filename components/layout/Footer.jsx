
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white/80 pt-16 pb-8">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            {/* Logo Placeholder */}
                            <div className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center text-secondary font-bold">E</div>
                            <span className="text-2xl font-bold text-white font-serif">Eva Tax</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Trusted, CRA-certified tax experts focused on maximizing your refunds and ensuring financial peace of mind.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            {['Services', 'About Us', 'The Process', 'Testimonials'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-secondary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Services</h3>
                        <ul className="space-y-3 text-sm">
                            {['Personal Tax', 'Corporate Tax', 'GST/HST Filing', 'Bookkeeping'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-secondary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-secondary" />
                                <span>(705) 555-9990</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-secondary" />
                                <span>info@evataxsolutions.ca</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-secondary mt-1" />
                                <span>123 Main St. Toronto, ON M1H 2Y1</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Eva Tax Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
