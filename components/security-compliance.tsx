import { Pill } from "./pill"

export function SecurityCompliance() {
  return (
    <section className="py-20 md:py-32 container relative z-10 border-t border-border/30">
      <div className="text-center mb-12">
        <Pill className="mb-4 justify-center">SECURITY & COMPLIANCE</Pill>
        <h2 className="text-4xl md:text-5xl font-sentient mb-4">Privacy-First by Design</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <div className="bg-background/40 border border-border/30 p-8 rounded-lg">
          <h3 className="font-mono text-sm font-medium text-primary mb-4">How We Protect You</h3>
          <ul className="space-y-3 text-foreground/70 text-sm">
            <li className="flex gap-2">
              <span className="text-primary">✓</span>
              <span>Google OAuth with Clerk/Supabase Auth</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">✓</span>
              <span>Data encryption at rest and in transit</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">✓</span>
              <span>Clear logs for every auto-apply action</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">✓</span>
              <span>Respectful of site terms; no scraping tricks</span>
            </li>
          </ul>
        </div>

        <div className="bg-background/40 border border-border/30 p-8 rounded-lg">
          <h3 className="font-mono text-sm font-medium text-primary mb-4">Your Data, Your Control</h3>
          <ul className="space-y-3 text-foreground/70 text-sm">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Store up to 3 resumes (free) or unlimited (pro)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Save cover letters, tones, Q&A templates</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Data used only for your personalization</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>You can delete anytime</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
