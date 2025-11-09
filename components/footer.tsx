import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="py-12 md:py-16 container border-t border-border/30 relative z-10">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="font-sentient text-lg mb-4">Applyo</h3>
          <p className="text-foreground/60 text-sm">AI-powered applications for students and fresh grads.</p>
        </div>
        <div>
          <h4 className="font-mono text-sm font-medium text-primary mb-4">Product</h4>
          <ul className="space-y-2 text-foreground/70 text-sm">
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Resume Improver
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                ATS Checker
              </Link>
            </li>
            {/* Product link removed per update */}
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-sm font-medium text-primary mb-4">Company</h4>
          <ul className="space-y-2 text-foreground/70 text-sm">
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-sm font-medium text-primary mb-4">Legal</h4>
          <ul className="space-y-2 text-foreground/70 text-sm">
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms
              </Link>
            </li>
            <li>
              <Link href="mailto:quadcydle@gmail.com" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-border/30 text-center text-foreground/50 text-xs font-mono">
        <p>© 2025 Applyo. All rights reserved. Built for students who apply with confidence.</p>
      </div>
    </footer>
  )
}
