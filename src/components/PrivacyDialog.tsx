import { useEffect, useState, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { PHONE, PHONE_LINK, EMAIL } from '../lib/constants'

/**
 * Privacy Policy rendered as an in-page modal.
 * (A separate /privacy route doesn't work on the static host — direct
 * visits 404 — so the policy lives in this dialog instead.)
 */
export function PrivacyLink({
  className = '',
  children,
}: {
  className?: string
  children?: ReactNode
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children ?? 'Privacy Policy'}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-dark/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-title"
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-7 sm:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close privacy policy"
              className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-teal-soft transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 id="privacy-title" className="font-serif text-2xl sm:text-3xl text-navy">
              Privacy Policy
            </h2>
            <p className="mt-1 text-sm text-slate-500">Last updated: October 2026</p>

            <div className="mt-6 space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
              <section>
                <h3 className="font-serif text-lg text-navy mb-1.5">Who we are</h3>
                <p>
                  Nicholson Bookkeeping Solutions is a bookkeeping service run
                  by Jackie Nicholson, supporting individuals, sole traders and
                  small businesses. If you have any questions about this policy
                  or how your information is handled, you can contact Jackie at{' '}
                  <a href={`mailto:${EMAIL}`} className="text-teal underline break-all">
                    {EMAIL}
                  </a>{' '}
                  or by calling{' '}
                  <a href={PHONE_LINK} className="text-teal underline">
                    {PHONE}
                  </a>
                  .
                </p>
              </section>

              <section>
                <h3 className="font-serif text-lg text-navy mb-1.5">What information we collect</h3>
                <p>
                  When you send an enquiry through this website, we collect the
                  details you provide: your name, email address, phone number
                  (if you choose to share it), the service you're enquiring
                  about, and your message. This website does not use cookies
                  and does not collect analytics or tracking data.
                </p>
              </section>

              <section>
                <h3 className="font-serif text-lg text-navy mb-1.5">How your information is used</h3>
                <p>
                  Your enquiry details are used solely to respond to your
                  enquiry and, if you become a client, to provide bookkeeping
                  services to you. Your information is never sold or shared
                  with third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h3 className="font-serif text-lg text-navy mb-1.5">How your information is stored</h3>
                <p>
                  Enquiries submitted through this website are delivered by
                  email. Your details are kept only for as long as necessary to
                  handle your enquiry and any resulting work together, after
                  which they are securely deleted.
                </p>
              </section>

              <section>
                <h3 className="font-serif text-lg text-navy mb-1.5">Your rights</h3>
                <p>
                  Under UK data protection law (UK GDPR), you have the right to
                  request a copy of the personal information held about you, to
                  ask for it to be corrected, or to ask for it to be deleted.
                  To exercise any of these rights, simply contact Jackie using
                  the details above. You also have the right to raise a concern
                  with the Information Commissioner's Office (ICO) if you're
                  unhappy with how your information has been handled.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
