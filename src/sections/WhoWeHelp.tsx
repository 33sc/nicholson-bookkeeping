import { User, Briefcase, Building2, Check } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const audiences = [
  {
    icon: User,
    title: 'Individuals',
    text: 'For people who need help managing their tax responsibilities.',
    points: ['Self Assessment support', 'Clear explanations', 'Help staying organised'],
  },
  {
    icon: Briefcase,
    title: 'Sole Traders',
    text: 'For self-employed professionals and independent business owners.',
    points: ['Everyday bookkeeping', 'Income and expense records', 'Tax preparation support'],
  },
  {
    icon: Building2,
    title: 'Small Businesses',
    text: 'For businesses needing ongoing financial administration.',
    points: ['Bookkeeping and reconciliations', 'VAT returns', 'Payroll support'],
  },
]

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-teal font-semibold tracking-[0.25em] uppercase text-xs mb-3">
            Who we help
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy">
            Bookkeeping support that fits your business.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Whether you're managing your own finances or running a growing
            business, Jackie provides practical support tailored to your needs.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 110}>
              <div className="h-full rounded-2xl bg-navy p-8 text-white shadow-[0_10px_30px_rgba(24,44,75,0.18)] hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(24,44,75,0.25)] transition-all duration-300">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal/20 text-teal-light">
                  <a.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-serif text-2xl">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{a.text}</p>
                <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <Check className="h-4 w-4 text-teal-light shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
