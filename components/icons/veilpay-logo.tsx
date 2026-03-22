export default function VeilPayLogo({ size = 32, className = '' }: { size?: number, className?: string }) {
  return (
    <div 
      style={{ width: size, height: size }} 
      className={`relative flex-shrink-0 rounded-full overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.25)] border border-white/20 ${className}`}
    >
      <img 
        src="/logo.png" 
        alt="VeilPay Logo" 
        className="w-full h-full object-cover"
      />
    </div>
  )
}
