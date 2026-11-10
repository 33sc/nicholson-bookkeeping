import { useEffect, useRef, useState } from 'react'
import { Reveal } from '../components/Reveal'

const steps = [
  {
    number: '01',
    title: "Let's Have a Chat",
    text: "Tell Jackie about your business, your bookkeeping needs, and what you'd like help with.",
  },
  {
    number: '02',
    title: "Let's Get Organised",
    text: "Together, we'll establish a straightforward approach to keeping your financial records accurate and up to date.",
  },
  {
    number: '03',
    title: 'Enjoy Peace of Mind',
    text: 'With your bookkeeping taken care of, you can spend more time focusing on what matters to you.',
  },
]

export function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6" ref={lineRef}>
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-teal font-semibold tracking-[0.25em] uppercase text-xs mb-3">
            How it works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy">
            Getting started couldn't be simpler.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Straightforward bookkeeping support, without the complicated process.
          </p>
        </Reveal>

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-16 hidden md:block">
          <div
            className={`timeline-line absolute top-9 left-[16.6%] right-[16.6%] h-0.5 bg-teal/40 ${inView ? 'is-visible' : ''}`}
            aria-hidden="true"
          />
          <div className="grid grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.number} delay={300 + i * 250}>
                <div className="text-center px-4">
                  <div className="mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white border-2 border-teal text-teal font-serif text-2xl shadow-[0_4px_16px_rgba(42,167,155,0.2)]">
                    {s.number}
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative mt-12 md:hidden">
          <div
            className={`timeline-line-vertical absolute left-9 top-2 bottom-2 w-0.5 bg-teal/40 ${inView ? 'is-visible' : ''}`}
            aria-hidden="true"
          />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s.number} delay={200 + i * 200}>
                <div className="flex gap-5">
                  <div className="relative z-10 flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-full bg-white border-2 border-teal text-teal font-serif text-2xl shadow-[0_4px_16px_rgba(42,167,155,0.2)]">
                    {s.number}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-serif text-xl text-navy">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-teal px-7 py-3.5 font-semibold text-white shadow-lg shadow-teal/25 hover:bg-navy hover:-translate-y-0.5 transition-all"
          >
            Get in Touch With Jackie
          </a>
        </Reveal>
      </div>
    </section>
  )
}
