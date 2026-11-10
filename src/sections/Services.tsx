import { BookOpen, Calculator, Landmark, Users, HardHat, FileCheck2, ArrowRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const services = [
  {
    icon: BookOpen,
    title: 'Bookkeeping',
    blurb:
      'Day-to-day records kept accurate and up to date, so you always know where your business stands.',
  },
  {
    icon: Calculator,
    title: 'VAT Returns',
    blurb:
      'Making Tax Digital compliant VAT returns prepared and submitted on time, every time.',
  },
  {
    icon: Users,
    title: 'Payroll',
    blurb:
      'Reliable payroll processing for your team — payslips, RTI submissions and auto-enrolment handled.',
  },
  {
    icon: Landmark,
    title: 'Bank Reconciliations',
    blurb:
      'Regular reconciliations to keep your accounts tidy and catch discrepancies early.',
  },
  {
    icon: HardHat,
    title: 'CIS Support',
    blurb:
      'Construction Industry Scheme returns and deductions managed for contractors and subcontractors.',
  },
  {
    icon: FileCheck2,
    title: 'Tax Returns',
    blurb:
      'Self Assessment tax returns prepared accurately and filed before the deadline — no last-minute stress.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-teal font-semibold tracking-[0.25em] uppercase text-xs mb-3">
            What we do
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy">
            Bookkeeping services, taken care of.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            From everyday record-keeping to HMRC submissions, everything you
            need to keep your finances organised and your business moving
            forward.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="group relative h-full rounded-2xl bg-white p-8 border border-slate-100 shadow-[0_2px_12px_rgba(24,44,75,0.05)] hover:shadow-[0_14px_30px_rgba(24,44,75,0.12)] hover:border-teal/40 hover:-translate-y-1.5 transition-all duration-300">
                {/* subtle decorative accent */}
                <span className="absolute top-0 left-8 h-1 w-10 rounded-full bg-teal/30 group-hover:bg-teal group-hover:w-14 transition-all duration-300" />
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-soft text-teal group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                  <s.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-serif text-xl text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.blurb}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal"
                  aria-label={`Ask Jackie about ${s.title}`}
                >
                  Ask about this
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
