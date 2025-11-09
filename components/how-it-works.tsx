import { Pill } from "./pill"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion"

export function HowItWorks() {
  const steps = [
    {
      title: "Import & set up",
      details: ["Upload or paste your resume(s)", "Pick roles you're targeting", "Set tone and industry preferences"],
    },
    {
      title: "Match & optimize",
      details: ["Paste a JD or link", "Get ATS score and gap highlights", "Receive tailored cover letters"],
    },
    {
      title: "Apply your way",
      details: ["Autofill fields anywhere", "Auto-Applier: Submit per your rules", "Stay fully in control"],
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 container relative z-10 border-t border-border/30">
      <div className="text-center mb-16">
        <Pill className="mb-4 justify-center">HOW IT WORKS</Pill>
        <h2 className="text-4xl md:text-5xl font-sentient mb-4">Your Application in 3 Steps</h2>
      </div>

      {/* Collapsible demo video */}
      <div className="text-center mb-8">
        <Accordion type="single" collapsible defaultValue="">
          <AccordionItem value="video" className="inline-block">
            <AccordionTrigger>
              <Pill className="px-4 h-9 text-sm md:text-base">WATCH A SHORT DEMO</Pill>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mx-auto w-full px-4 sm:px-0">
                <div className="mx-auto w-full md:w-[50vw] md:max-w-none relative pt-[62%] md:pt-[56.25%]">
                  {/*
                    Place a video file at `public/how-it-works.mp4` to use the local video.
                    If you prefer an embedded YouTube/Vimeo video, replace the <video> with an <iframe>.
                  */}
                  <video
                    controls
                    className="absolute inset-0 w-full h-full rounded-lg shadow-2xl border border-border/30 object-cover"
                    src="/how-it-works.mp4"
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-6">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            {/* Step indicator */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-sentient text-lg text-primary">{i + 1}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-sentient mb-2">{step.title}</h3>
              </div>
            </div>

            {/* Details list */}
            <ul className="space-y-2 ml-14">
              {step.details.map((detail, j) => (
                <li key={j} className="text-foreground/60 font-mono text-sm flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-5 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
