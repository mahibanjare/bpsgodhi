// Logo.jsx ko poora replace karo isse:
export default function Logo({ size = 56 }) {
  return (
    <img 
      src="/logo.png"        // ← apna logo file naam
      alt="Bright Public School Logo"
      width={size}
      height={size}
      style={{ objectFit: 'contain' }}
    />
  )
}