'use client'
import Link from 'next/link'
import Script from 'next/script'
import {Menu, X as CloseIcon, Github, Twitter} from 'lucide-react'
import {Button} from '@/components/ui/button'
import { useLanguage } from '@/components/language-context'
import React from 'react'
import VeilPayLogo from "@/components/icons/veilpay-logo";

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const { language, toggleLanguage } = useLanguage()
    const [walletAddress, setWalletAddress] = React.useState<string | null>(null)

    React.useEffect(() => {
        const checkConnection = async () => {
            if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
                try {
                    const accounts = await (window.ethereum as any).request({ method: 'eth_accounts' });
                    if (accounts.length > 0) {
                        setWalletAddress(accounts[0]);
                    }
                } catch (err) {
                    console.error("Failed to check wallet", err);
                }
            }
        };
        checkConnection();
    }, []);

    const connectWallet = async () => {
        if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await (window.ethereum as any).request({ method: 'eth_requestAccounts' });
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);

                    // Try to switch cleanly to the BSC Mainnet (Chain ID 56 = 0x38 hex)
                    try {
                        await (window.ethereum as any).request({
                            method: 'wallet_switchEthereumChain',
                            params: [{ chainId: '0x38' }],
                        });
                    } catch (switchError: any) {
                        // Error 4902 triggers if the user has never added the BSC network to their Metamask extension
                        if (switchError.code === 4902) {
                            try {
                                await (window.ethereum as any).request({
                                    method: 'wallet_addEthereumChain',
                                    params: [
                                        {
                                            chainId: '0x38',
                                            chainName: 'Binance Smart Chain Mainnet',
                                            rpcUrls: ['https://bsc-dataseed.binance.org/'],
                                            nativeCurrency: {
                                                name: 'BNB',
                                                symbol: 'BNB',
                                                decimals: 18
                                            },
                                            blockExplorerUrls: ['https://bscscan.com/']
                                        }
                                    ],
                                });
                            } catch (addError) {
                                console.error('Failed to add BSC network', addError);
                            }
                        } else {
                            console.error('Failed to switch to BSC network', switchError);
                        }
                    }
                }
            } catch (error) {
                console.error("Wallet connection failed", error);
            }
        } else {
            alert('Please install MetaMask or a Web3 Wallet!');
        }
    }

    const formatAddress = (address: string) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    }
    
    const navLinks = [
        { label: 'Private Pay', href: '/private-pay' },
        { label: 'Buy Degen', href: '/buy-degen' },
        { label: 'API Docs', href: '/docs' },
    ]
    return (
        <>
            <Script id="google-translate" strategy="afterInteractive">
                {`
                    function googleTranslateElementInit() {
                        new google.translate.TranslateElement({
                            pageLanguage: 'en',
                            includedLanguages: 'en,zh-CN,zh-TW',
                            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                        }, 'google_translate_element');
                    }
                `}
            </Script>
            <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
            <header>
            <nav
                data-state={menuState && 'active'}
                className="bg-background/30 fixed z-20 w-full border-b border-border/40 backdrop-blur-3xl transition-all duration-300">
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="VeilPay Home"
                                className="flex items-center space-x-2 group">
                                <div className="transition-transform duration-300 group-hover:scale-110">
                                    <VeilPayLogo size={28} className='text-foreground'/>
                                </div>
                                <span className='font-semibold text-foreground hidden sm:block'>VeilPay</span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden transition-colors duration-200 hover:text-accent">
                                <Menu
                                    className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-300"/>
                                <CloseIcon className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-300"/>
                            </button>
                        </div>

                        <div
                            className="bg-background/50 in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-2xl border border-border/40 p-6 backdrop-blur-lg md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-8 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:backdrop-blur-0">
                            {/* Nav Links */}
                            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 lg:gap-8 w-full lg:w-auto">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMenuState(false)}
                                        className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="flex items-center gap-4 text-muted-foreground lg:ml-4">
                                    <a href="#" className="hover:text-foreground transition-colors duration-200" aria-label="GitHub"><Github size={18} /></a>
                                    <a href="#" className="hover:text-foreground transition-colors duration-200" aria-label="X (Twitter)"><Twitter size={18} /></a>
                                </div>
                            </div>

                            {/* Connect Wallet & Translate Widget */}
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-4 sm:space-y-0 md:w-fit items-center flex-wrap lg:flex-nowrap">
                                <div id="google_translate_element" className="hidden"></div>
                                
                                {/* ON/OFF Style Switch for EN/ZH */}
                                <div className="flex items-center gap-2 bg-background/50 border border-border/40 rounded-full px-3 py-1.5 shadow-sm mt-2 sm:mt-0 cursor-pointer" onClick={toggleLanguage} title="Toggle Language">
                                    <span className={`text-xs font-bold transition-colors ${language === 'en' ? 'text-foreground' : 'text-muted-foreground'}`}>EN</span>
                                    <button 
                                        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${language === 'zh' ? 'bg-cyan-500' : 'bg-muted-foreground/30'}`}
                                        role="switch"
                                        aria-checked={language === 'zh'}
                                    >
                                        <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${language === 'zh' ? 'translate-x-4' : 'translate-x-0'}`} />
                                    </button>
                                    <span className={`text-xs font-bold transition-colors ${language === 'zh' ? 'text-foreground' : 'text-muted-foreground'}`}>ZH</span>
                                </div>

                                <Button
                                    onClick={() => {
                                        setMenuState(false)
                                        if(!walletAddress) connectWallet()
                                    }}
                                    size="sm"
                                    className="bg-foreground text-background hover:bg-foreground/90 font-semibold w-full sm:w-auto mt-3 sm:mt-0">
                                    {walletAddress ? formatAddress(walletAddress) : 'Connect Wallet'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}
