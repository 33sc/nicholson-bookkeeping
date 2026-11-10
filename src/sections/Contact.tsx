import { useState, type FormEvent } from 'react'
import { Phone, Mail, Facebook, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { PrivacyLink } from '../components/PrivacyDialog'
import { PHONE, PHONE_LINK, EMAIL, FACEBOOK_NAME, FACEBOOK_URL, SERVICES } from '../lib/constants'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const inputClass =
  'w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-shadow'

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot: silently ignore bots
    if (data.get('_honey')) return

    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()

    const newErrors: Record<string, string> = {}
    if (!name) newErrors.name = 'Please enter your name.'
    if (!email) newErrors.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Please enter a valid email address.'
    if (!message) newErrors.message = 'Please tell us a little about what you need.'

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setStatus('sending')
    try {
      // FormSubmit forwards genuine submissions to Jackie's email inbox.
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New website enquiry from ${name}`,
          _template: 'table',
          _captcha: 'false',
          name,
          email,
          phone: String(data.get('phone') || '').trim() || 'Not provided',
          service: String(data.get('service') || ''),
          message,
        }),
      })
      if (!res.ok) throw new Error('send failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative bg-navy text-white py-20 sm:py-24 overflow-hidden">
      {/* decorative flowing shapes */}
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M-100,500 C300,350 700,650 1540,380" stroke="#2aa79b" strokeWidth="2" fill="none" opacity="0.25" />
        <path d="M-100,540 C350,400 750,690 1540,430" stroke="#4cc0b4" strokeWidth="1.5" fill="none" opacity="0.15" />
        <circle cx="1250" cy="120" r="180" fill="#24406b" opacity="0.5" />
        <circle cx="120" cy="90" r="110" fill="#2aa79b" opacity="0.08" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl">Let's get your books in order.</h2>
          <p className="mt-4 text-slate-200 leading-relaxed">
            Whether you need help with everyday bookkeeping or have a question
            about your finances, Jackie would love to hear from you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[5fr_7fr]">
          {/* Contact methods */}
          <Reveal className="space-y-5">
            <a
              href={PHONE_LINK}
              className="flex items-center gap-5 rounded-2xl bg-navy-light/80 p-6 hover:bg-teal transition-colors group"
            >
              <span className="inline-flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-white/10 p-3.5">
                <Phone className="h-6 w-6 text-teal-light group-hover:text-white" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-slate-300 group-hover:text-white/80">
                  Call Jackie
                </span>
                <span className="block mt-1 font-semibold text-lg">{PHONE}</span>
              </span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-5 rounded-2xl bg-navy-light/80 p-6 hover:bg-teal transition-colors group"
            >
              <span className="inline-flex shrink-0 items-center justify-center rounded-full bg-white/10 p-3.5">
                <Mail className="h-6 w-6 text-teal-light group-hover:text-white" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-widest text-slate-300 group-hover:text-white/80">
                  Email
                </span>
                <span className="block mt-1 font-semibold text-sm break-all">{EMAIL}</span>
              </span>
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 rounded-2xl bg-navy-light/80 p-6 hover:bg-teal transition-colors group"
            >
              <span className="inline-flex shrink-0 items-center justify-center rounded-full bg-white/10 p-3.5">
                <Facebook className="h-6 w-6 text-teal-light group-hover:text-white" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-slate-300 group-hover:text-white/80">
                  Facebook
                </span>
                <span className="block mt-1 font-semibold">{FACEBOOK_NAME}</span>
              </span>
            </a>
          </Reveal>

          {/* Enquiry form */}
          <Reveal delay={150}>
            <div className="rounded-2xl bg-white p-7 sm:p-9 text-navy shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-teal" />
                  <h3 className="mt-5 font-serif text-2xl">Thank you — your enquiry is on its way.</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Jackie has received your message and will be in touch soon.
                    If it's urgent, you're welcome to call{' '}
                    <a href={PHONE_LINK} className="font-semibold text-teal">{PHONE}</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-serif text-2xl">Send Jackie a message</h3>

                  {/* honeypot — hidden from humans, catches bots */}
                  <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-1.5">
                        Full Name <span className="text-teal">*</span>
                      </label>
                      <input id="name" name="name" type="text" autoComplete="name" className={inputClass} placeholder="Your name" />
                      {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-1.5">
                        Email Address <span className="text-teal">*</span>
                      </label>
                      <input id="email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@example.com" />
                      {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-1.5">
                        Phone Number <span className="font-normal text-slate-400">(optional)</span>
                      </label>
                      <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="07xxx xxxxxx" />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold mb-1.5">
                        What do you need help with?
                      </label>
                      <select id="service" name="service" className={inputClass} defaultValue="Not Sure / General Enquiry">
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                        <option value="Not Sure / General Enquiry">Not Sure / General Enquiry</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold mb-1.5">
                        Your Message <span className="text-teal">*</span>
                      </label>
                      <textarea id="message" name="message" rows={5} className={inputClass} placeholder="Tell Jackie a little about your business and what you need help with…" />
                      {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="mt-4 flex items-center gap-2 text-sm text-red-600">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      Something went wrong sending your enquiry. Please try again, or email{' '}
                      <a href={`mailto:${EMAIL}`} className="underline">Jackie directly</a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-teal px-8 py-3.5 font-semibold text-white shadow-lg shadow-teal/25 hover:bg-navy hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-teal"
                  >
                    <Send className="h-4 w-4" />
                    {status === 'sending' ? 'Sending…' : 'Send Your Enquiry'}
                  </button>

                  <p className="mt-5 text-xs leading-relaxed text-slate-500">
                    Your details are used only to respond to your enquiry and
                    are never shared with third parties. See our{' '}
                    <PrivacyLink className="underline hover:text-teal" />{' '}
                    for details.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
