import {Button} from '@/components/ui/button'
import Link from 'next/link'
import {TextEffect} from "./motion-primitives/text-effect"
import {AnimatedGroup} from "@/components/motion-primitives/animated-group";
import {transitionVariants} from "@/lib/utils";

export default function CallToAction() {
    return (
        <section id="cta" className="py-20 md:py-32">
            <div className="mx-auto max-w-5xl rounded-2xl border border-border/40 bg-gradient-to-br from-muted/20 via-background to-muted/10 px-6 py-12 md:py-20 lg:py-32 backdrop-blur-sm mx-2">
                <div className="text-center">
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="text-balance text-4xl font-bold lg:text-5xl text-foreground">
                        Take Control of Your Payments
                    </TextEffect>
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.3}
                        as="p"
                        className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Join the private payment revolution. Secure, fast, and completely private transactions with full control over your financial identity.
                    </TextEffect>
                    <AnimatedGroup
                        triggerOnView
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
                        className="mt-12 flex flex-wrap justify-center gap-4"
                    >
                        <Button
                            size="lg"
                            className="px-8 font-semibold bg-foreground text-background hover:bg-foreground/90">
                            <span>Start Using VeilPay</span>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="px-8 font-semibold border-border/40 hover:bg-muted/40">
                            <Link href="#features">
                                <span>Learn Features</span>
                            </Link>
                        </Button>
                    </AnimatedGroup>

                    {/* Security note */}
                    <p className="mt-8 text-xs text-muted-foreground font-mono">
                        Military-grade encryption • Zero-knowledge architecture • Privacy-first design
                    </p>
                </div>
            </div>
        </section>
    )
}
