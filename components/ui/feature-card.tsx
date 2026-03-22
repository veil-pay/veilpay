'use client'

import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({
  icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-border bg-card p-8 backdrop-blur-sm transition-all duration-500 hover:border-accent hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/10 ${className}`}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 opacity-0 transition-opacity duration-500 group-hover:opacity-5" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon container */}
        <div className="mb-4 inline-flex rounded-lg bg-muted p-3 text-foreground transition-all duration-300 group-hover:bg-accent/20">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
          {description}
        </p>
      </div>
    </div>
  )
}
