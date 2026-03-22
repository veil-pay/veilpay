export default function SalaryIcon({ size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Briefcase */}
      <path
        d="M2 8C2 6.89543 2.89543 6 4 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Handle */}
      <path
        d="M6 6V4C6 3.44772 6.44772 3 7 3H17C17.5523 3 18 3.44772 18 4V6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      
      {/* Divider */}
      <line x1="12" y1="6" x2="12" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      
      {/* Money/coins on left side */}
      <circle cx="7" cy="12" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="7" cy="15" r="1.5" fill="currentColor" opacity="0.5" />
      
      {/* Money/coins on right side */}
      <circle cx="17" cy="12" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="17" cy="15" r="1.5" fill="currentColor" opacity="0.5" />
    </svg>
  )
}
