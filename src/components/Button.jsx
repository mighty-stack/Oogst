import { Link } from 'react-router-dom'

export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const base = 'inline-block font-semibold rounded-sm transition-transform px-6 py-3'
  const styles =
    variant === 'primary'
      ? 'bg-ink text-cream hover:bg-ink-soft hover:-translate-y-0.5'
      : 'border-[1.5px] border-ink text-ink hover:bg-ink hover:text-cream'
  const classes = `${base} ${styles} ${className}`

  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>
  if (href) return <a href={href} className={classes} {...props}>{children}</a>
  return <button className={classes} {...props}>{children}</button>
}
