import Link from 'next/link'
import VeilPayLogo from "@/components/icons/veilpay-logo";
import React from "react";
import { Github, Twitter } from 'lucide-react';

const footerLinks = {
    product: [
        { title: 'Private Pay', href: '/private-pay' },
        { title: 'Buy Degen', href: '/buy-degen' },
    ],
    resources: [
        { title: 'API Documentation', href: '/docs' },
        { title: 'Relayer Network', href: '/docs' },
    ],
}

export default function FooterSection() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-border/40 py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-6">
                {/* Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Brand Section */}
                    <div>
                        <Link
                            href="/"
                            aria-label="VeilPay Home"
                            className="flex items-center gap-2 mb-4 group">
                            <div className="transition-transform duration-300 group-hover:scale-110">
                                <VeilPayLogo size={28} className='text-foreground'/>
                            </div>
                            <span className="font-semibold text-foreground">VeilPay</span>
                        </Link>
                        <p className="text-xs text-muted-foreground w-3/4">
                            Private payments, perfectly executed. Decentralized. Secure. Yours.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Product</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border/40 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground font-mono">
                        © {currentYear} VeilPay. All rights reserved. Built with privacy first.
                    </p>
                    
                    {/* Social/Status Links */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                            <Twitter size={18} />
                        </a>
                        <div className="w-px h-4 bg-border/40"></div>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                            <Github size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
