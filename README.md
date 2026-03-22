# 🎭 VeilPay: The GhostFluid Privacy Protocol

[![License: MIT](https://img.shields.io/badge/License-MIT-cyan.svg)](https://opensource.org/licenses/MIT)
[![Network: BSC](https://img.shields.io/badge/Network-Binance%20Smart%20Chain-F3BA2F.svg)](https://bscscan.com/)
[![Website: veil-pay.com](https://img.shields.io/badge/Website-veil--pay.com-blue?style=flat&logo=google-chrome)](https://veil-pay.com)
[![X: @veilpay__](https://img.shields.io/badge/Twitter-%40veilpay__-black?logo=x&logoColor=white)](https://x.com/veilpay__)

> **Absolute Privacy for Decentralized Finance.** VeilPay is entirely built on the **Binance Smart Chain (BSC)** using the advanced `GhostFluidPrivacyPool` zero-knowledge architecture. Execute your P2P transfers and acquire high-volatility tokens completely off the public radar.

---

## 📖 Overview

In public blockchain ledgers like the Binance Smart Chain, addresses are mathematically, permanently linked. **VeilPay dismantles this paradigm.**

By utilizing an automated Relayer circuit and a mathematical `nullifierHash`, VeilPay separates the deposit state securely from the withdrawal state. This breaks the on-chain linkage between the sender and the receiver, shielding your financial activity, operational treasury, and Web3 identity from malicious actors, MEV sandwich attacks, and public scrutiny. 

🌐 **Official Access Terminal**: [veil-pay.com](https://veil-pay.com)

---

## ⚡ Core Modules

### 1. Private Pay Integration
Private Pay powers unlinked, anonymous peer-to-peer transfers over BSC. Use this module when paying contractors, sending massive gifts, or hiding your operational treasury movements.
- **Deposit**: Frontend native hooks securely write `deposit(bytes32 _commitment)` parsing your precise transaction value into the GhostFluid Immutable Vault.
- **Relay**: A mathematically isolated `nullifierHash` is secretly routed to our off-chain node.
- **Execute**: VeilPay’s Relayer broadcasts `withdraw()`, directing the native BNB directly into the final recipient wallet whilst entirely abstracting gas fees.

### 2. Buy Degen Mode (Stealth MEV Protection)
The ultimate stealth acquisition tool for decentralized exchange (DEX) maneuverability.
When trading highly volatile BEP-20 tokens on PancakeSwap, generalized tools broadcast your intention to public mempools, immediately resulting in targeted MEV sandwich attacks. VeilPay's Vault seamlessly withdraws to the private node, hits the PancakeSwap router instantly via hidden parameters, and drops the finalized tokens securely into your destination wallet. **Absolute MEV Protection.**

---

## 🛠 Project Structure

This repository focuses strictly on the DApp User Interface and the integration hooks bridging Web3 clients (Metamask) to the underlying Relayer Backend.

```
📂 veilpay
 ├── 📁 app               # Next.js App Router (Routing & Core Pages)
 ├── 📁 components        # Reusable UI/UX Elements (React/Tailwind)
 ├── 📁 cli               # Command Line Toolkit for Vault Interfacing (Coming Soon)
 ├── 📁 sdk               # Modular Web3 Toolkits built for Client/Node Integration
 ├── 📁 proof             # Cryptographic Verifiers & ZK Execution Hashes
 ├── 📄 README.md         # Protocol Documentation
 └── 📄 LICENSE           # MIT License Allocation
```

## 🚀 Getting Started

This DApp strictly connects to **Binance Smart Chain Mainnet (ChainID: `0x38`)**.

### Installation
Ensure you have `Node 18+` installed globally. Clone the repository and install the dependencies.
```bash
git clone https://github.com/veil-pay/veilpay.git
cd veilpay

npm install
```

### Local Development
Run the development server for local modifications:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 

---

## 🛡 Network Restrictions
To guarantee absolute security, VeilPay's frontend connection logic utilizes Next-Gen `viem` integrations and `window.ethereum` to forcibly route users onto **BSC Mainnet**. If the user connects with a generic network like Ethereum or Polygon, our client intercepts the connection via `wallet_switchEthereumChain` and auto-provisions the `bsc-dataseed` RPC array.

---

## 📃 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<p align="center">
  <i>"Building the Unseen Future of Finance."</i><br>
  Follow us on <a href="https://x.com/veilpay__">X / Twitter</a>
</p>
