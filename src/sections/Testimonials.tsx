import { Quote, Star } from 'lucide-react'
import { Reveal } from '../components/Reveal'

/**
 * Testimonials section — ready to use, intentionally NOT rendered yet.
 *
 * The brief requires that no fabricated reviews appear on the public site.
 * Once Jackie supplies genuine client testimonials (with permission to use
 * names / business names), add them to the `testimonials` array below and
 * render <Testimonials /> in Home.tsx between WhyUs and Faq.
 */

export interface Testimonial {
  quote: string
  name: string
  business?: string // only where the client has given permission
  rating?: 1 | 2 | 3 | 4 | 5 // only if genuinely supplied by the client
}

export const testimonials: Testimonial[] = [
  // Awaiting genuine client testimonials from Jackie.
]

export function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section id="testimonials" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-teal font-semibold tracking-[0.25em] uppercase text-xs mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy">
            Kind Words From Our Clients
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Personal service and peace of mind are at the heart of everything
            we do.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="h-full rounded-2xl bg-cream p-8 border border-slate-100 shadow-sm">
                <Quote className="h-7 w-7 text-teal/40" aria-hidden="true" />
                <blockquote className="mt-4 font-serif text-lg leading-snug text-navy">
                  "{t.quote}"
                </blockquote>
                {t.rating && (
                  <div className="mt-4 flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-teal text-teal" />
                    ))}
                  </div>
                )}
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-navy">{t.name}</span>
                  {t.business && <span className="text-slate-500"> — {t.business}</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
