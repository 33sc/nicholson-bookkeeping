import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { PHONE_LINK } from '../lib/constants'

const nav = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQs', href: '#faqs' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu on Escape for keyboard users
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-[4.5rem]">
        <a href="#top" aria-label="Nicholson Bookkeeping Solutions — home">
          <img src="/logo-transparent.png" alt="Nicholson Bookkeeping Solutions" className="h-10 sm:h-11 w-auto" />
        </a>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy hover:text-teal transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-navy hover:shadow-md transition-all"
          >
            Let's Talk
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-lg text-navy hover:bg-teal-soft transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-white border-t border-slate-100 transition-[max-height] duration-300 ease-in-out ${
          open ? 'max-h-96' : 'max-h-0 border-t-0'
        }`}
      >
        <nav aria-label="Mobile navigation" className="px-4 py-4 flex flex-col gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-navy py-3 px-2 rounded-lg hover:bg-teal-soft transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={PHONE_LINK}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  )
}
