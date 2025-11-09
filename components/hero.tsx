"use client"

import Link from "next/link"
import { GL } from "./gl"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState } from "react"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col h-svh justify-between">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative z-10">
        <Pill className="mb-6">EARLY ACCESS</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient text-balance">
          Apply smarter. <br />
          <i className="font-light">Faster.</i> With you <br />
          in control.
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[540px] mx-auto">
          Applyo is your career-shaping wingman — helping you build better resumes, write smarter applications, and apply to jobs faster, with full control through optional assisted auto-apply.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
          <Link className="contents" href="https://app.applyo.app/">
            <Button onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
              [Start Free →]
            </Button>
          </Link>
  {/* Removed call-to-action per product scope */}
        </div>

        <p className="font-mono text-xs sm:text-sm text-foreground/40 text-balance mt-8">
          Trusted by students from IIT • DU • SRM • MIT WPU
        </p>
      </div>
    </div>
  )
}
