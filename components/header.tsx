import Link from "next/link"
import { MobileMenu } from "./mobile-menu"

export const Header = () => {
  return (
    <div className="relative z-50 pt-8 md:pt-14">
      <header className="flex items-center justify-between container">
        <Link href="/">
          <div className="font-sentient text-2xl md:text-3xl text-primary">Applyo</div>
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {(
            [
              { name: "Why Applyo", href: "#value-props" },
              { name: "How It Works", href: "#how-it-works" },
              { name: "Platform Features", href: "#platform-features" },
              { name: "FAQs", href: "#faq" },
            ] as { name: string; href: string }[]
          ).map((item) => (
            <Link
              className="uppercase inline-block font-mono text-foreground/80 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link
          className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-primary hover:text-primary/80"
          href="https://app.applyo.app/auth/login"
        >
          Sign In
        </Link>
        <MobileMenu />
      </header>
    </div>
  )
}
