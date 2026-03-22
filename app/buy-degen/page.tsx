'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Coins, Zap, Loader2, Wallet } from 'lucide-react'
import { createWalletClient, custom, parseEther, keccak256, toHex } from 'viem'
import { bsc } from 'viem/chains'

const VAULT_CA = '0xA07c59e730DD21791a90743d9AE0C9DdD2772Da0'

export default function BuyDegenPage() {
    const [txHash, setTxHash] = useState('')
    const [tokenCA, setTokenCA] = useState('')
    const [amountInBNB, setAmountInBNB] = useState('')
    const [slippage, setSlippage] = useState('5.0')
    const [loading, setLoading] = useState(false)
    const [depositLoading, setDepositLoading] = useState(false)
    const [result, setResult] = useState<{success: boolean, message: string, txHash?: string} | null>(null)

    useEffect(() => {
        // Auto-load cached deposit hash
        const cachedHash = localStorage.getItem('veilpay_txhash')
        if (cachedHash) setTxHash(cachedHash)
    }, [])

    const handleDeposit = async () => {
        if (!amountInBNB) return alert("Please enter the Spend Amount first.")
        if (typeof window === 'undefined' || !window.ethereum) {
            return alert("Web3 Wallet (MetaMask) not found.")
        }

        try {
            setDepositLoading(true)
            const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
            const client = createWalletClient({
                account,
                chain: bsc,
                transport: custom(window.ethereum)
            })

            const commitment = keccak256(toHex(Date.now().toString() + Math.random().toString()))
            const depositAbi = [{
                inputs: [{ name: "_commitment", type: "bytes32" }],
                name: "deposit",
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }] as const

            // Execute Native BSC smart contract funding via mapped ABI
            const hash = await client.writeContract({
                address: VAULT_CA,
                abi: depositAbi,
                functionName: 'deposit',
                args: [commitment],
                value: parseEther(amountInBNB)
            })

            setTxHash(hash)
            localStorage.setItem('veilpay_txhash', hash)
            setResult({ success: true, message: `Deposit initiated! Hash cached internally.` })
        } catch (error: any) {
            console.error(error)
            setResult({ success: false, message: 'Deposit failed or rejected: ' + error.message })
        } finally {
            setDepositLoading(false)
        }
    }

    const handleBuy = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!tokenCA || !amountInBNB || !txHash) return

        setLoading(true)
        setResult(null)

        try {
            const res = await fetch('/api/relayer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'buy_degen',
                    payload: { txHash, tokenCA, amountInETH: amountInBNB, slippage }
                })
            })
            const data = await res.json()
            setResult(data)
        } catch (error) {
            setResult({ success: false, message: 'Relayer connection failed.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen pt-32 pb-24 md:pb-32 px-6 flex items-center justify-center">
            <div className="w-full max-w-lg">
                <div className="text-center mb-10 animate-fade-in-up bg-background/30 backdrop-blur-md border border-border/20 p-8 rounded-3xl shadow-2xl mx-auto w-fit">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-foreground/10 text-foreground mb-4">
                        <Coins size={24} />
                    </div>
                    <h1 className="text-3xl font-bold text-foreground mb-3 [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)]">Buy Degen Mode</h1>
                    <p className="text-muted-foreground text-sm font-medium [text-shadow:_0_1px_5px_rgb(0_0_0_/_100%)] max-w-sm mx-auto">
                        Execute lightning-fast, MEV-protected token acquisitions directly through the Vault Relayer. Bypass public mempool congestion effortlessly.
                    </p>
                </div>

                <div className="bg-muted/10 border border-border/40 rounded-2xl p-6 md:p-8 backdrop-blur-md animate-fade-in-up delay-200">
                    <form onSubmit={handleBuy} className="space-y-6">
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Deposit TxHash (Proof of Owner)</label>
                            <input 
                                type="text" 
                                required
                                value={txHash}
                                onChange={(e) => setTxHash(e.target.value)}
                                placeholder="0x..." 
                                className="w-full bg-background/50 border border-border/40 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all font-mono text-sm"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground flex justify-between">
                                <span>Target Token Address (CA)</span>
                                <span className="text-xs text-primary/70 border px-1.5 py-0.5 rounded border-primary/20 bg-primary/10">BEP20</span>
                            </label>
                            <input 
                                type="text" 
                                required
                                value={tokenCA}
                                onChange={(e) => setTokenCA(e.target.value)}
                                placeholder="0x..." 
                                className="w-full bg-background/50 border border-border/40 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all font-mono text-sm"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="space-y-2 flex-grow">
                                <label className="text-sm font-medium text-foreground">Spend Amount</label>
                                <div className="relative">
                                    <input 
                                        type="number" 
                                        step="any"
                                        required
                                        value={amountInBNB}
                                        onChange={(e) => setAmountInBNB(e.target.value)}
                                        placeholder="0.00" 
                                        className="w-full bg-background/50 border border-border/40 rounded-lg pl-4 pr-12 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all font-mono text-sm"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-xs font-bold">BNB</span>
                                </div>
                            </div>
                            <div className="space-y-2 w-full sm:w-1/3">
                                <label className="text-sm font-medium text-foreground">Slippage (%)</label>
                                <input 
                                    type="number" 
                                    step="0.1"
                                    required
                                    value={slippage}
                                    onChange={(e) => setSlippage(e.target.value)}
                                    className="w-full bg-background/50 border border-border/40 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all font-mono text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 pt-4 border-t border-border/20">
                            <Button 
                                type="button"
                                onClick={handleDeposit}
                                disabled={depositLoading}
                                className="w-full py-6 text-base font-semibold bg-foreground/10 text-foreground border border-foreground/20 hover:bg-foreground/20 transition-all relative">
                                {depositLoading ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    <>
                                        <Wallet className="mr-2" size={18} />
                                        1. Deposit BNB Funding to Vault
                                    </>
                                )}
                            </Button>

                            <Button 
                                type="submit" 
                                disabled={loading}
                                className="w-full py-6 text-base font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all relative">
                                {loading ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    <>
                                        <Zap className="mr-2" size={18} />
                                        2. Execute Snipe (Relayer)
                                    </>
                                )}
                            </Button>
                        </div>

                    </form>

                    {result && (
                        <div className={`mt-6 p-4 rounded-lg text-sm border ${result.success ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'} animate-fade-in`}>
                            <p className="font-medium mb-1">{result.message}</p>
                            {result.txHash && (
                                <p className="font-mono text-xs opacity-70 break-all mt-2">TxHash: {result.txHash}</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}
