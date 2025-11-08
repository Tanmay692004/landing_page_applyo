import { Pill } from "./pill"
import { Card, CardContent } from "./ui/card"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Went from 3 apps/week to 20—with better matches. The Auto-Applier rules keep me confident.",
      author: "Ananya",
      role: "CS Undergrad",
    },
    {
      quote: "My ATS score jumped from 48 to 88. The JD alignment is unreal.",
      author: "Rohit",
      role: "Mechanical Fresher",
    },
  ]

  return (
    <section className="py-20 md:py-32 container relative z-10 border-t border-border/30">
      <div className="text-center mb-16">
        <Pill className="mb-4 justify-center">VOICES</Pill>
        <h2 className="text-4xl md:text-5xl font-sentient mb-4">What Students Say</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <Card key={i} className="bg-background/50 border-border/30 backdrop-blur">
            <CardContent className="pt-8">
              <p className="text-foreground mb-4 leading-relaxed italic">"{t.quote}"</p>
              <div className="flex items-center gap-2 text-sm font-mono">
                <span className="text-primary">—</span>
                <span className="text-foreground/70">
                  {t.author}, <span className="text-foreground/50">{t.role}</span>
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
