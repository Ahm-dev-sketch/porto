"use client";

import { Heart, Coffee, Mail } from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { NAV_LINKS, SOCIAL_LINKS, SITE_META } from "@/lib/data";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  github: <SiGithub size={16} />,
  linkedin: <FaLinkedinIn size={16} />,
  mail: <Mail size={16} />,
  instagram: <SiInstagram size={16} />,
};

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left — Copyright */}
          <div className="flex items-center gap-1.5 text-sm text-text-muted">
            <span>© 2026 {SITE_META.name}.</span>
            <span className="hidden sm:inline">Built with Next.js &</span>
            <Coffee size={14} className="hidden sm:inline text-accent" />
          </div>

          {/* Center — Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-text-muted hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right — Social Icons */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all duration-200"
              >
                {SOCIAL_ICONS[social.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-8 text-center">
          <p className="text-xs text-text-muted/50 flex items-center justify-center gap-1">
            Designed & developed with intention
            <Heart size={10} className="text-accent" />
          </p>
        </div>
      </div>
    </footer>
  );
}
