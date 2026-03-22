export default function VaultIcon({ size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Vault door */}
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      
      {/* Vault bolts */}
      <circle cx="4" cy="6" r="1" fill="currentColor" />
      <circle cx="20" cy="6" r="1" fill="currentColor" />
      <circle cx="4" cy="18" r="1" fill="currentColor" />
      <circle cx="20" cy="18" r="1" fill="currentColor" />
      
      {/* Center lock mechanism */}
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.6" />
      
      {/* Lock pins */}
      <line x1="12" y1="8" x2="12" y2="7" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="16" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="12" y1="16" x2="12" y2="17" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="8" y1="12" x2="7" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}
