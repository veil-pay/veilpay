'use client'

import React from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { AnimatedCounter } from '@/components/ui/animated-counter'

const transactionData = [
  { month: 'Jan', transactions: 400, volume: 2400 },
  { month: 'Feb', transactions: 520, volume: 2800 },
  { month: 'Mar', transactions: 680, volume: 3200 },
  { month: 'Apr', transactions: 750, volume: 3600 },
  { month: 'May', transactions: 920, volume: 4200 },
  { month: 'Jun', transactions: 1100, volume: 4800 },
]

const securityData = [
  { month: 'Jan', secure: 95 },
  { month: 'Feb', secure: 96.5 },
  { month: 'Mar', secure: 97.2 },
  { month: 'Apr', secure: 98 },
  { month: 'May', secure: 98.5 },
  { month: 'Jun', secure: 99 },
]

export default function DataMetrics() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
            VeilPay in Numbers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Trusted by thousands for secure, private transactions
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3 animate-fade-in-up">
          <div className="rounded-xl border border-border bg-card/50 p-8 backdrop-blur-sm">
            <p className="text-sm font-medium text-muted-foreground">Total Transactions</p>
            <div className="mt-2 text-4xl font-bold text-foreground">
              <AnimatedCounter value={2850000} suffix="+" duration={2000} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">All-time across platform</p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 p-8 backdrop-blur-sm">
            <p className="text-sm font-medium text-muted-foreground">Security Score</p>
            <div className="mt-2 text-4xl font-bold text-foreground">
              <AnimatedCounter value={99} suffix="%" duration={2000} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Privacy & encryption verified</p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 p-8 backdrop-blur-sm">
            <p className="text-sm font-medium text-muted-foreground">Active Users</p>
            <div className="mt-2 text-4xl font-bold text-foreground">
              <AnimatedCounter value={125000} suffix="+" duration={2000} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Growing daily</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 animate-fade-in-up">
          {/* Transaction Volume Chart */}
          <div className="rounded-xl border border-border bg-card/50 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-lg font-semibold text-foreground">Transaction Volume Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={transactionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: 'var(--foreground)' }}
                />
                <Line
                  type="monotone"
                  dataKey="volume"
                  stroke="var(--chart-1)"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={true}
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Security Audit Score Chart */}
          <div className="rounded-xl border border-border bg-card/50 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-lg font-semibold text-foreground">Security Audit Results</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={securityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" domain={[90, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: 'var(--foreground)' }}
                />
                <Bar
                  dataKey="secure"
                  fill="var(--chart-2)"
                  isAnimationActive={true}
                  animationDuration={1500}
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-12 rounded-xl border border-border bg-muted/20 p-6 text-center backdrop-blur-sm animate-fade-in-up">
          <p className="text-sm text-muted-foreground">
            All data is real-time and updated continuously. VeilPay maintains 99%+ uptime with advanced redundancy systems.
          </p>
        </div>
      </div>
    </section>
  )
}
