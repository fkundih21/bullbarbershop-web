import { useState } from 'react'
import logo from '../assets/bull-logo.png'

const navItems = [
  { href: '#home', label: 'Početna' },
  { href: '#about', label: 'O nama' },
  { href: '#staff', label: 'Zaposlenici' },
  { href: '#prices', label: 'Cjenik' },
  { href: '#contact', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a
          href="#top"
          className="navbar-brand"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Bull Barbershop logo"
            className="navbar-logo"
          />
          <div className="navbar-brand-text leading-tight">
            <div className="navbar-title">BULL</div>
            <div className="navbar-subtitle">BARBER SHOP</div>
          </div>
        </a>

        <button
          type="button"
          className={`navbar-burger${open ? ' navbar-burger--open' : ''}`}
          aria-label={open ? 'Zatvori izbornik' : 'Otvori izbornik'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="navbar-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="navbar-link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {open && (
        <div className="nav-overlay">
          <div className="nav-overlay-inner">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-overlay-item"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

