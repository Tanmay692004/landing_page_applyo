import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export function ValueProps() {
  const props = [
    {
      title: "Personalized, not generic",
      description: "AI uses your saved profiles and preferences to tailor resumes, cover letters, and form answers.",
    },
    {
      title: "ATS-ready in one pass",
      description: "See your score, fix keywords, and auto-rewrite bullet points for top matches.",
    },
    {
      title: "One-click fill (and now one-click apply)",
      description:
        "Use the browser extension for fast, accurate autofill—or enable Auto-Applier to submit with your review rules.",
    },
    {
      title: "Human in the loop",
      description: "You approve styles, answers, and submissions. No black boxes, no surprise apps.",
    },
  ]

  return (
    <section id="value-props" className="py-20 md:py-32 container relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-sentient mb-4">Why Applyo</h2>
        <p className="text-foreground/60 max-w-2xl mx-auto font-mono text-sm md:text-base">
          Designed for students and fresh grads who want quality, speed, and control
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {props.map((prop, i) => (
          <Card key={i} className="bg-background border-border/50 backdrop-blur">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-mono">{i + 1}</span>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg text-foreground">{prop.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/60 text-sm leading-relaxed">
                {prop.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
