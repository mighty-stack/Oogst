import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80 pt-14 pb-8">
      <div className="max-w-site mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2">
            <Logo size={24} dark />
            <span className="font-display font-bold text-lg text-cream">Oogst</span>
          </div>
          <p className="mt-3.5 text-[14.5px] max-w-[32ch] text-cream/60">
            Websites that rank. Leads that convert. A Netzer company.
          </p>
        </div>
        <div>
          <h5 className="font-display text-cream text-[15px] mb-4 font-semibold">Services</h5>
          <ul className="space-y-2.5 text-[14.5px]">
            <li><Link to="/services" className="hover:text-bronze-soft">Website development</Link></li>
            <li><Link to="/services" className="hover:text-bronze-soft">Google Business Profile</Link></li>
            <li><Link to="/services" className="hover:text-bronze-soft">Email marketing</Link></li>
            <li><Link to="/services" className="hover:text-bronze-soft">Copywriting</Link></li>
            <li><Link to="/services" className="hover:text-bronze-soft">Maintenance</Link></li>
            <li><Link to="/services" className="hover:text-bronze-soft">Analytics reporting</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-display text-cream text-[15px] mb-4 font-semibold">Company</h5>
          <ul className="space-y-2.5 text-[14.5px]">
            <li><a href="/#work" className="hover:text-bronze-soft">Work</a></li>
            <li><Link to="/process" className="hover:text-bronze-soft">Process</Link></li>
            <li><Link to="/about" className="hover:text-bronze-soft">About</Link></li>
            <li><Link to="/contact" className="hover:text-bronze-soft">Free audit</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-display text-cream text-[15px] mb-4 font-semibold">Contact</h5>
          <ul className="space-y-2.5 text-[14.5px]">
            <li><a href="mailto:hello@oogst.com" className="hover:text-bronze-soft">hello@oogst.com</a></li>
            <li><a href="#" className="hover:text-bronze-soft">X / Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-site mx-auto px-6 md:px-8 mt-12 pt-6 border-t border-cream/10 flex flex-wrap justify-between gap-3 text-[13px] text-cream/55">
        <span>© 2026 Oogst. All rights reserved.</span>
        <span>Privacy Policy · Terms</span>
      </div>
    </footer>
  )
}
