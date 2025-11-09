import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Pill } from "./pill"

export function PlatformFeatures() {
  // Reduced feature list to match the UI screenshot provided by the user.
  const features = [
    
    { title: "AI Resume Improver", desc: "Section-wise rewrites + quantified bullet suggestions" },
    { title: "Cover Letter Maker", desc: "Personalized drafts from your resume + JD, with tone presets" },
    { title: "ATS Score Checker", desc: "Missing keywords, formatting issues, readability with one-click fixes" },
    { title: "ATS Score Improver", desc: "Automated suggestions to raise your ATS score" },
    { title: "Job-to-Resume Comparison", desc: "Line-by-line alignment and targeted edits" },
    { title: "Skill Gap Finder", desc: "Identify missing skills for your target roles" },
    { title: "Interview Question Generator", desc: "AI-generated interview questions and answers" },

    { title: "Job Finder", desc: "Aggregates early-career roles; filter by skills, level, interest" },
    { title: "Job Tracker", desc: "Keep every application, status, and notes in one place" },
    { title: "Job Listing Validity Checker", desc: "Flags stale/scam posts using signals + community feedback" },

    { title: "Start Auto-Apply", desc: "Enable Auto-Applier with review rules and safeguards" },
    { title: "Simple Interface", desc: "All the tools you need in one place" },
  ]

  return (
    <section id="platform-features" className="py-20 md:py-32 container relative z-10 border-t border-border/30">
      <div className="text-center mb-16">
        <Pill className="mb-4 justify-center">THE PLATFORM</Pill>
  <h2 className="text-4xl md:text-5xl font-sentient mb-4 text-white">Your Complete Application Suite</h2>
        <p className="text-foreground/60 max-w-2xl mx-auto font-mono text-sm md:text-base">
          All the tools you need to stand out and apply with confidence
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <Card
            key={i}
            className="bg-background/50 border-border/30 backdrop-blur hover:border-primary/30 transition-colors min-h-[140px] flex flex-col justify-between"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-white">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="mt-2">
              <CardDescription className="text-foreground/50 text-xs md:text-sm">{feature.desc}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
