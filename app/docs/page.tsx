import React from 'react'
import { BookOpen, ShieldCheck, Zap, LockKeyhole } from 'lucide-react'

export default function DocsPage() {
    return (
        <div className="flex min-h-screen bg-background text-foreground pt-20">
            {/* Sidebar (Hidden on Mobile) */}
            <aside className="fixed hidden md:block w-72 h-[calc(100vh-80px)] overflow-y-auto border-r border-border/10 p-6 space-y-8 bg-background/50 backdrop-blur-xl z-10 transition-all">
                <div className="space-y-2">
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Getting Started</h4>
                    <ul className="space-y-3">
                        <li><a href="#introduction" className="text-sm font-medium hover:text-cyan-400 transition-colors flex items-center gap-2"><BookOpen size={16}/> Introduction</a></li>
                        <li><a href="#architecture" className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors flex items-center gap-2"><LockKeyhole size={16}/> Architecture</a></li>
                    </ul>
                </div>
                
                <div className="space-y-2">
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Core Products</h4>
                    <ul className="space-y-3">
                        <li><a href="#private-pay" className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors flex items-center gap-2"><ShieldCheck size={16}/> Private Pay</a></li>
                        <li><a href="#buy-degen" className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors flex items-center gap-2"><Zap size={16}/> Buy Degen Mode</a></li>
                    </ul>
                </div>
            </aside>
            
            {/* Main Content */}
            <main className="flex-1 md:ml-72 p-6 md:p-12 lg:p-20 overflow-y-auto w-full">
                <article className="max-w-4xl space-y-16 animate-fade-in-up">
                    <section id="introduction" className="space-y-6">
                        <span className="inline-block font-mono text-xs uppercase tracking-wider text-cyan-400 border border-cyan-400/30 rounded-full px-3 py-1 bg-cyan-400/10 mb-2">Version 1.0</span>
                        <h1 className="text-5xl font-bold tracking-tight text-foreground">VeilPay Documentation</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Welcome to the official VeilPay technical manual. This guide provides comprehensive instructions on interacting with our <strong>GhostFluidPrivacyPool</strong> architecture, a zero-knowledge escrow foundation explicitly built on the Binance Smart Chain (BSC). 
                        </p>
                    </section>

                    <hr className="border-border/20" />

                    <section id="architecture" className="space-y-6">
                        <h2 className="text-3xl font-semibold text-foreground">Protocol Architecture</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Unlike native public ledgers where addresses are mathematically permanently linked, VeilPay introduces an automated Relayer circuit separating the deposit state from the withdrawal state. Users deposit Native BNB into an immutable vault. The relayer node then independently constructs a payout execution masking the origin.
                        </p>
                        <div className="bg-foreground/5 border border-border/20 rounded-xl p-6 font-mono text-sm text-foreground overflow-x-auto shadow-inner">
                            VAULT_CA: 0xA07c59e730DD21791a90743d9AE0C9DdD2772Da0
                        </div>
                    </section>

                    <section id="private-pay" className="space-y-6">
                        <h2 className="text-3xl font-semibold text-foreground">Private Pay Integration</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Private Pay powers unlinked peer-to-peer transfers. Use this module when paying contractors, sending gifts, or hiding your operational treasury. 
                        </p>
                        <ul className="list-decimal list-inside space-y-4 text-muted-foreground ml-4">
                            <li><strong>Step 1:</strong> The frontend native hooks `deposit(bytes32 _commitment)` parsing your precise required transaction value directly into the GhostFluid pool.</li>
                            <li><strong>Step 2:</strong> A mathematical `nullifierHash` is secretly routed to the node.</li>
                            <li><strong>Step 3:</strong> VeilPay's Relayer broadcasts `withdraw(...)` directing the stored native BNB directly into your final recipient wallet. Gas fees are abstracted.</li>
                        </ul>
                    </section>

                    <section id="buy-degen" className="space-y-6 pb-24">
                        <h2 className="text-3xl font-semibold text-foreground">Buy Degen Mode</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The ultimate stealth acquisition tool. When trading highly volatile or newly launched BEP20 tokens, generalized dex tools immediately broadcast your intention to public mempools resulting in MEV sandwich attacks.
                        </p>
                        <div className="border-l-4 border-cyan-500 pl-6 py-4 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-r-lg">
                            <p className="text-foreground italic">
                                "Our Vault seamlessly withdraws to the private node which hits PancakeSwap instantly on your behalf, dropping the finalized tokens securely into your wallet. Absolute MEV Protection."
                            </p>
                        </div>
                    </section>
                </article>
            </main>
        </div>
    )
}
