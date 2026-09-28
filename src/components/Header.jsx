import { NavLink, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Button from './Button.jsx'

const linkClass = ({ isActive }) =>
  `text-[15px] transition-opacity ${
    isActive ? 'text-bronze opacity-100' : 'text-ink opacity-80 hover:opacity-100 hover:text-bronze'
  }`

const pageLabels = {
  '/': 'Home',
  '/services': 'Services',
  '/process': 'Process',
  '/about': 'About',
  '/contact': 'Contact',
}

export default function Header() {
  const location = useLocation()
  const path = location.pathname
  const [menuOpen, setMenuOpen] = useState(false)

  const crumbs = [{ label: 'Home', to: '/' }]
  if (path !== '/') {
    const current = pageLabels[path] || 'Page'
    crumbs.push({ label: current, to: path })
  }

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Process', to: '/process' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-ink/10">
      <nav className="max-w-site mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4 gap-3">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
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

        <div className="md:hidden flex items-center gap-2 ml-auto">
          {path !== '/' && (
            <div className="flex items-center gap-1.5 rounded-full border border-ink/10 bg-sand px-2.5 py-1.5 text-[11px] text-ink-soft whitespace-nowrap">
              {crumbs.map((crumb, index) => (
                <div key={crumb.to} className="flex items-center gap-1.5">
                  {index > 0 && <span>/</span>}
                  <Link to={crumb.to} className={index === crumbs.length - 1 ? 'text-ink font-semibold' : 'hover:text-bronze'}>
                    {crumb.label}
                  </Link>
                </div>
              ))}
            </div>
          )}

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-cream text-ink shadow-sm"
          >
            <span className="flex flex-col items-center gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        <div className="hidden md:block">
          <Button to="/contact" variant="primary" className="text-sm px-5 py-2.5 shrink-0">
            Book a free audit
          </Button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-ink/10 bg-cream/95 backdrop-blur">
          <div className="max-w-site mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base ${isActive ? 'bg-bronze/10 text-bronze font-semibold' : 'text-ink hover:bg-sand'}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Button to="/contact" variant="primary" onClick={() => setMenuOpen(false)} className="w-full justify-center text-sm px-5 py-2.5">
              Book a free audit
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
