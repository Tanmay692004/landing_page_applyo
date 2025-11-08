import { Pill } from "./pill"

export function ExtensionAutoApplier() {
  return (
    <section className="py-20 md:py-32 container relative z-10 border-t border-border/30">
      <div className="text-center mb-16">
        <Pill className="mb-4 justify-center">PRODUCTIVITY TOOLS</Pill>
        <h2 className="text-4xl md:text-5xl font-sentient mb-4">Extension + Auto-Applier</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Extension */}
        <div>
          <h3 className="text-2xl font-sentient mb-6">Browser Extension</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-background/40 border border-border/30 p-6 rounded-lg">
              <h4 className="font-mono text-sm font-medium text-primary mb-3">What it does:</h4>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Autofill common fields using your Applyo memory</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Inline suggestions near form inputs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>One-click tone tweaks and grammar improvements</span>
                </li>
              </ul>
            </div>
            <div className="bg-background/40 border border-border/30 p-6 rounded-lg">
              <h4 className="font-mono text-sm font-medium text-primary mb-3">Supported Sites:</h4>
              <p className="text-foreground/70 text-sm">
                LinkedIn • Indeed • Naukri • Company career portals (and growing)
              </p>
            </div>
          </div>
        </div>

        {/* Auto-Applier */}
        <div>
          <h3 className="text-2xl font-sentient mb-6">Auto-Applier (Optional)</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-background/40 border border-border/30 p-6 rounded-lg">
              <h4 className="font-mono text-sm font-medium text-primary mb-3">Two Modes:</h4>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span>
                    <strong>Guided Submit:</strong> Extension fills + you click Submit
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span>
                    <strong>Cloud Auto-Applier:</strong> Browser agent applies under your rules
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

      <div className="bg-background/30 border border-primary/20 rounded-lg p-8 md:p-12 backdrop-blur">
        <h4 className="text-xl font-sentient mb-4">What Auto-Applier Will NOT Do</h4>
        <ul className="grid md:grid-cols-3 gap-4 text-foreground/70 text-sm">
          <li className="flex gap-2">
            <span className="text-primary">✗</span>
            <span>Bypass CAPTCHAs or site security</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">✗</span>
            <span>Misrepresent your credentials</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">✗</span>
            <span>Violate job board terms of service</span>
          </li>
        </ul>
        <p className="text-foreground/50 text-xs mt-6 font-mono">
          Applyo is an assistive tool. You stay accountable and in control.
        </p>
      </div>
    </section>
  )
}
