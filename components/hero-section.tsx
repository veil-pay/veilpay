import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { transitionVariants } from "@/lib/utils";

export default function HeroSection() {
    return (
        <main className="overflow-x-hidden">
            <section className='min-h-screen flex items-center'>
                <div className="w-full pt-32 pb-24 md:pb-32 lg:pb-24">
                    <div className="relative mx-auto flex max-w-4xl flex-col px-6">
                        <div className="mx-auto max-w-4xl text-center">
                            {/* Subtitle */}
                            <div className='mb-8 animate-fade-in-up'>
                                <span className='inline-block font-mono text-sm uppercase tracking-wider text-muted-foreground border border-border/40 rounded-full px-4 py-2 bg-background/40 backdrop-blur-md shadow-xl'>
                                    The Future of Crypto Payments
                                </span>
                            </div>

                            {/* Main Headlines */}
                            <div className="bg-background/80 backdrop-blur-2xl border border-border/20 rounded-3xl p-6 sm:p-10 mt-2 mx-auto shadow-[0_0_40px_rgba(0,0,0,0.8)] relative overflow-hidden">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="max-w-3xl text-balance text-5xl font-bold md:text-7xl xl:text-8xl mx-auto leading-tight text-white mb-2 [text-shadow:0_2px_10px_rgba(255,255,255,0.3)]">
                                    Seamless Web3
                                </TextEffect>
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="max-w-3xl text-balance text-5xl font-bold md:text-7xl xl:text-8xl mx-auto leading-tight text-foreground animate-pulse [text-shadow:0_0_40px_rgba(255,255,255,1),0_0_80px_rgba(255,255,255,0.5)] py-2">
                                    Absolute Privacy.
                                </TextEffect>

                                {/* Description */}
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.3}
                                    as="p"
                                    className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground mx-auto [text-shadow:_0_1px_10px_rgb(0_0_0_/_100%)] font-medium">
                                    Send, receive, and manage your crypto assets with uncompromised privacy. VeilPay combines advanced vault relayer technology with smart invoicing to make decentralized finance effortless and secure.
                                </TextEffect>
                            </div>

                            {/* CTA Buttons */}
                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.08,
                                                delayChildren: 0.6,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
                            >
                                <Button
                                    size="lg"
                                    className="px-8 text-base font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all duration-300">
                                    Get Started
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="px-8 text-base font-semibold border border-border/40 hover:bg-muted/40 backdrop-blur-sm">
                                    <Link href="/docs">Learn More</Link>
                                </Button>
                            </AnimatedGroup>

                            {/* Trust indicators */}
                            <div className="mt-16 animate-fade-in-up delay-700">
                                <p className="text-sm text-muted-foreground mb-4">Trusted by privacy advocates and enterprises worldwide</p>
                                <div className="flex items-center justify-center gap-8 flex-wrap">
                                    <div className="text-center">
                                        <div className="font-mono text-sm font-semibold text-foreground">256-bit</div>
                                        <div className="text-xs text-muted-foreground">Encryption</div>
                                    </div>
                                    <div className="w-px h-6 bg-border/40"></div>
                                    <div className="text-center">
                                        <div className="font-mono text-sm font-semibold text-foreground">99.9%</div>
                                        <div className="text-xs text-muted-foreground">Uptime</div>
                                    </div>
                                    <div className="w-px h-6 bg-border/40"></div>
                                    <div className="text-center">
                                        <div className="font-mono text-sm font-semibold text-foreground">SOC 2</div>
                                        <div className="text-xs text-muted-foreground">Certified</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
