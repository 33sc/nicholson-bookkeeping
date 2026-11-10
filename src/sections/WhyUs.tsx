import { HeartHandshake, MessagesSquare, CalendarCheck2 } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const reasons = [
  {
    icon: HeartHandshake,
    number: '01',
    title: 'Personal Service',
    text: 'You always deal directly with Jackie — no call centres and no being passed around.',
  },
  {
    icon: MessagesSquare,
    number: '02',
    title: 'Plain English',
    text: 'Your finances explained clearly, without confusing accounting jargon.',
  },
  {
    icon: CalendarCheck2,
    number: '03',
    title: 'Deadlines Taken Care Of',
    text: 'Important VAT, payroll, CIS and tax return dates are carefully managed.',
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-teal-soft py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-teal font-semibold tracking-[0.25em] uppercase text-xs mb-3">
            Why choose us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy">
            Bookkeeping with a personal touch.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.number} delay={i * 110}>
              <div className="group h-full rounded-2xl bg-white p-8 border border-transparent shadow-[0_2px_12px_rgba(24,44,75,0.05)] hover:shadow-[0_14px_30px_rgba(24,44,75,0.12)] hover:border-teal/30 hover:-translate-y-1.5 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <span className="font-serif text-4xl text-teal/50 group-hover:text-teal transition-colors">
                    {r.number}
                  </span>
                  <r.icon
                    className="h-6 w-6 text-teal group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="mt-4 font-serif text-xl text-navy">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
