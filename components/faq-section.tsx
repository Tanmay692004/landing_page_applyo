"use client"

import { Pill } from "./pill"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      q: "Is Auto-Applier required?",
      a: "No. You can use Applyo as a writing + autofill assistant only, giving you full control over your application pace.",
    },
    {
      q: "Will it apply to jobs I don't want?",
      a: "Only if your rules allow it—and you can require your approval every time. You're always in control.",
    },
    {
      q: "Does it work on all job sites?",
      a: "We support LinkedIn, Indeed, Naukri, and company career portals. We're expanding support constantly, and you can disable per site anytime.",
    },
    {
      q: "Can I store multiple resumes?",
      a: "Yes—3 on Free, unlimited on Pro. Switch between them instantly for different roles.",
    },
    {
      q: "Does Applyo bypass CAPTCHAs or Terms of Service?",
      a: "No. We keep it ethical, visible, and within platform rules. Applyo is an assistive tool that respects site policies.",
    },
    {
      q: "What about privacy?",
      a: "Your data is yours. We use it only to assist your applications. You control what's stored and can delete anytime.",
    },
  ]

  return (
    <section className="py-20 md:py-32 container relative z-10 border-t border-border/30">
      <div className="text-center mb-16">
        <Pill className="mb-4 justify-center">QUESTIONS</Pill>
        <h2 className="text-4xl md:text-5xl font-sentient mb-4">Frequently Asked</h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/30">
              <AccordionTrigger className="hover:text-primary transition-colors">
                <span className="text-left font-sentient text-base">{faq.q}</span>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-sm leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
