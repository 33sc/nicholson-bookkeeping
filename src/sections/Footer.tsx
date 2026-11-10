import { Phone, Mail, Facebook } from 'lucide-react'
import { PrivacyLink } from '../components/PrivacyDialog'
import { PHONE, PHONE_LINK, EMAIL, FACEBOOK_URL, SERVICES } from '../lib/constants'

const quickLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Who We Help', href: '#who-we-help' },
  { label: 'About Jackie', href: '#about' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="inline-block bg-white rounded-xl px-4 py-2.5">
              <img src="/logo.png" alt="Nicholson Bookkeeping Solutions" className="h-8 w-auto" />
            </div>
            <p className="mt-4 font-serif text-teal-light">Accurate Books. Clear Insights.</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Friendly, professional bookkeeping for individuals, sole traders
              and small businesses.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-teal-light transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-teal-light transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={PHONE_LINK} className="inline-flex items-center gap-2.5 hover:text-teal-light transition-colors">
                  <Phone className="h-4 w-4 text-teal-light shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-start gap-2.5 hover:text-teal-light transition-colors break-all">
                  <Mail className="h-4 w-4 text-teal-light shrink-0 mt-0.5" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 hover:text-teal-light transition-colors">
                  <Facebook className="h-4 w-4 text-teal-light shrink-0" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Nicholson Bookkeeping Solutions. All rights reserved.</p>
          <PrivacyLink className="hover:text-teal-light transition-colors" />
        </div>
      </div>
    </footer>
  )
}
