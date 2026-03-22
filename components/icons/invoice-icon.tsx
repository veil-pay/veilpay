export default function InvoiceIcon({ size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Document */}
      <path
        d="M4 2H16L20 6V22C20 22.5304 19.7893 23.0391 19.4142 23.4142C19.0391 23.7893 18.5304 24 18 24H4C3.46957 24 2.96086 23.7893 2.58579 23.4142C2.21071 23.0391 2 22.5304 2 22V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Fold corner */}
      <path d="M16 2V6H20" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      
      {/* Invoice lines */}
      <line x1="6" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="6" y1="16" x2="18" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="6" y1="20" x2="14" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      
      {/* Amount indicator */}
      <circle cx="17" cy="20" r="1.5" fill="currentColor" opacity="0.7" />
    </svg>
  )
}
