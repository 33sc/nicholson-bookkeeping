import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion'
import { Reveal } from '../components/Reveal'

/**
 * FAQs answered strictly from services confirmed on the existing site.
 *
 * PENDING JACKIE'S CONFIRMATION (deliberately not published yet):
 * - "How much do your bookkeeping services cost?" — needs her pricing approach.
 * - "Can we work together remotely?" — needs her remote-working arrangement.
 * - "Do you offer a free initial consultation?" — needs her confirmation.
 * - "Which bookkeeping software do you use?" — needs her answer.
 * Add them back here once confirmed.
 */
const faqs = [
  {
    q: 'What does a bookkeeper do?',
    a: 'A bookkeeper keeps your day-to-day financial records accurate and up to date — recording income and expenses, reconciling your bank accounts, and keeping everything organised so your accounts (and tax returns) are straightforward. For businesses, that can also include VAT returns, payroll and CIS returns.',
  },
  {
    q: 'Do I need a bookkeeper if I’m self-employed?',
    a: 'It’s not a legal requirement, but many sole traders find it saves hours of admin and a lot of worry. Jackie can keep your income and expense records tidy throughout the year, so your Self Assessment tax return is simple when the deadline comes around.',
  },
  {
    q: 'Can you help if my bookkeeping is behind?',
    a: 'Yes — it’s more common than you’d think, and nothing to be embarrassed about. Get in touch and Jackie can help bring your records up to date and put a simple system in place to keep them that way.',
  },
  {
    q: 'Do you help with Self Assessment tax returns?',
    a: 'Yes. Jackie prepares Self Assessment tax returns for individuals and sole traders, making sure everything is accurate and filed before the deadline.',
  },
  {
    q: 'Can you help with Making Tax Digital?',
    a: 'Yes. VAT returns are prepared and submitted in line with Making Tax Digital (MTD) requirements, so you stay compliant without having to wrestle with the rules yourself.',
  },
]

export function Faq() {
  return (
    <section id="faqs" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-teal font-semibold tracking-[0.25em] uppercase text-xs mb-3">
            FAQs
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            A few helpful answers to common bookkeeping questions.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-xl bg-white border border-slate-100 px-6 shadow-[0_2px_10px_rgba(24,44,75,0.04)] data-[state=open]:border-teal/30"
              >
                <AccordionTrigger className="text-left font-serif text-lg text-navy hover:text-teal hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
