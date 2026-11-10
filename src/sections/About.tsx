import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const benefits = [
  'Friendly, personal service — deal directly with Jackie.',
  'Clear, jargon-free communication.',
  'Practical bookkeeping support tailored to your needs.',
]

export function About() {
  return (
    <section id="about" className="bg-cream py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-14 lg:grid-cols-[5fr_6fr] lg:items-center">
        {/* Portrait */}
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -inset-3 rounded-[2rem] bg-teal-soft rotate-2"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full border-[10px] border-teal/25"
            aria-hidden="true"
          />
          <img
            src="/jackie.jpg"
            alt="Jackie Nicholson, bookkeeper and founder of Nicholson Bookkeeping Solutions"
            loading="lazy"
            width="880"
            height="1100"
            className="relative w-full h-auto rounded-[2rem] object-cover shadow-[0_24px_60px_rgba(24,44,75,0.25)]"
          />
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="text-teal font-semibold tracking-[0.25em] uppercase text-xs mb-3">
              Meet the person behind the numbers
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy">
              Meet Jackie Nicholson
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Nicholson Bookkeeping Solutions is run by Jackie Nicholson, a
                dedicated bookkeeper who believes that good bookkeeping should
                make life easier, not more complicated.
              </p>
              <p>
                Whether you're an individual preparing a Self Assessment
                return, a sole trader managing everyday finances, or a small
                business needing ongoing support, Jackie provides a friendly,
                professional service tailored to your needs.
              </p>
              <p>
                With a personal approach and clear communication, Jackie helps
                you stay organised, understand your numbers, and feel confident
                about your finances.
              </p>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={320}>
            <figure className="mt-10 rounded-2xl bg-white border-l-4 border-teal p-6 shadow-[0_4px_20px_rgba(24,44,75,0.07)]">
              <blockquote className="font-serif text-lg leading-snug text-navy">
                "Accurate books aren't just about compliance — they give you
                the clarity to make better decisions for your business."
              </blockquote>
              <figcaption className="mt-4 flex items-baseline gap-2">
                <span
                  className="text-3xl text-teal"
                  style={{ fontFamily: '"Dancing Script", cursive' }}
                >
                  Jackie
                </span>
                <span className="text-sm text-slate-500">
                  — Jackie Nicholson
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
