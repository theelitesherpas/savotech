"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/logo";
import styles from "./v2.module.css";

const LINKS = [
  { label: "Services", href: "/services/" },
  { label: "AI Agents", href: "/ai-agents/" },
  { label: "Industries", href: "/industries/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

/**
 * v2 navigation: transparent light-on-ink over the hero, flipping to a solid
 * white bar with ink type once the hero scrolls past.
 */
export default function V2Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${solid ? styles.navSolid : ""}`}>
      <div className={styles.navInner}>
        <Link href="/" aria-label="Savo Technologies home" className={styles.navLogo}>
          <Logo />
        </Link>
        <nav className={styles.navLinks} aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/start-your-project/" className={styles.navCta}>
          Start your project
        </Link>
      </div>
    </header>
  );
}
