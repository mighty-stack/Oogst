import { NavLink, Link } from 'react-router-dom'
import Button from './Button.jsx'

const linkClass = ({ isActive }) =>
  `text-[15px] transition-opacity ${
    isActive ? 'text-bronze opacity-100' : 'text-ink opacity-80 hover:opacity-100 hover:text-bronze'
  }`

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-ink/10">
      <nav className="max-w-site mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/Oogst_logo.webp" alt="Oogst logo" className="h-7 w-7 rounded-full object-cover shadow-sm" />
          <span className="font-display font-bold text-xl text-ink">Oogst</span>
        </Link>
        <div className="hidden md:flex items-center gap-9">
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <a href="/#work" className="text-[15px] text-ink opacity-80 hover:opacity-100 hover:text-bronze">Work</a>
          <NavLink to="/process" className={linkClass}>Process</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
        <Button to="/contact" variant="primary" className="text-sm px-5 py-2.5">
          Book a free audit
        </Button>
      </nav>
    </header>
  )
}
