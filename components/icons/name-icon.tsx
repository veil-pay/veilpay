export default function NameIcon({ size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* User circle */}
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      
      {/* User body */}
      <path
        d="M4 20C4 16.1716 7.58172 13 12 13C16.4183 13 20 16.1716 20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Name badge/label */}
      <rect x="2" y="20" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none" />
      
      {/* Letter indicator - dot instead of text */}
      <circle cx="12" cy="22" r="1.5" fill="currentColor" opacity="0.8" />
    </svg>
  )
}
