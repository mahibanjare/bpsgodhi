export default function Logo({ size = 56 }) {
  return (
    <img
      src="/logo-web.png"
      alt="Bright Public School emblem"
      width={size}
      height={size}
      loading="eager"
      decoding="async"
      style={{ objectFit: 'contain', display: 'block' }}
    />
  )
}
