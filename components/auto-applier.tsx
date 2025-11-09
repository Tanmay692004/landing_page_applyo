import { Pill } from "./pill"

export function AutoApplier() {
  return (
    <section className="py-20 md:py-32 container relative z-10 border-t border-border/30">
      <div className="text-center mb-16">
        <Pill className="mb-4 justify-center">PRODUCTIVITY TOOLS</Pill>
        <h2 className="text-4xl md:text-5xl font-sentient mb-4">Auto-Applier</h2>
      </div>

      <div className="grid md:grid-cols-1 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-sentient mb-6">Auto-Applier (Optional)</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-background/40 border border-border/30 p-6 rounded-lg">
              <h4 className="font-mono text-sm font-medium text-primary mb-3">Two Modes:</h4>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span>
                    <strong>Guided Submit:</strong> Autofill assists and you click Submit
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span>
                    <strong>Cloud Auto-Applier:</strong> Server-side agent applies under your rules
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-background/40 border border-border/30 p-6 rounded-lg">
              <h4 className="font-mono text-sm font-medium text-primary mb-3">Your Rules:</h4>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Require approval or auto-submit at X match % threshold</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Set max applications per day and active hours</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Live logs of every fill, apply, and timestamp</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
