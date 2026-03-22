'use client'

import React from 'react'
import { FeatureCard } from '@/components/ui/feature-card'
import VaultIcon from '@/components/icons/vault-icon'
import InvoiceIcon from '@/components/icons/invoice-icon'
import SalaryIcon from '@/components/icons/salary-icon'
import NameIcon from '@/components/icons/name-icon'

const features = [
  {
    icon: <VaultIcon size={32} />,
    title: 'Vault Relayer',
    description: 'Route transactions through private relay systems to obscure sender and receiver information, ensuring complete transaction privacy.',
  },
  {
    icon: <InvoiceIcon size={32} />,
    title: 'Invoice Payment',
    description: 'Streamlined invoicing and payment settlement with automated reconciliation and transparent transaction history.',
  },
  {
    icon: <SalaryIcon size={32} />,
    title: 'Salary Management',
    description: 'Automated payroll processing with flexible payment schedules, multi-currency support, and instant settlements.',
  },
  {
    icon: <NameIcon size={32} />,
    title: 'Name Customization',
    description: 'Create personalized identities and addresses with custom naming schemes to represent your unique presence.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up text-center lg:text-left">
          <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
            Powerful Features Built for Privacy
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need for secure, private, and efficient decentralized payments
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 animate-fade-in-up">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={`animate-fade-in-up`}
              style={{
                animationDelay: `${index * 100}ms`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-xl border border-border/40 bg-muted/10 p-8 text-center backdrop-blur-sm animate-fade-in-up md:p-12">
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Ready to experience private payments?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of users already using VeilPay for secure transactions
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 font-semibold text-background transition-all duration-300 hover:bg-foreground/90">
            Start Now
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
