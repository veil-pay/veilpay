import React from "react"
import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import {Analytics} from '@vercel/analytics/next'
import './globals.css'
import { LanguageProvider } from "@/components/language-context";
import Dither from "@/components/Dither";
import FooterSection from "@/components/footer";
import {HeroHeader} from "@/components/header";

const _geist = Geist({subsets: ["latin"]});
const _geistMono = Geist_Mono({subsets: ["latin"]});

export const metadata: Metadata = {
    title: 'VeilPay — Privacy-First Decentralized Payments',
    description: 'VeilPay is a privacy-focused payment platform featuring vault relayer, invoice payment, salary management, and name customization. Experience secure, decentralized payments with elegant simplicity.',
    generator: 'v0.app',
    icons: {
        icon: '/logo.png',
        apple: '/logo.png',
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
        <body className="font-sans antialiased">
        <LanguageProvider>
        <div className='absolute -z-10 w-full h-dvh max-h-155 sm:max-h-115 md:max-h-125 lg:max-h-190 xl:max-h-195'>
            <Dither
                waveColor={[0.30980392156862746, 0.30980392156862746, 0.30980392156862746]}
                disableAnimation={false}
                enableMouseInteraction
                mouseRadius={0.3}
                colorNum={4}
                pixelSize={2}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
            />
        </div>
        <HeroHeader/>
        {children}
        <FooterSection/>
        <Analytics/>
        </LanguageProvider>
        </body>
        </html>
    )
}
