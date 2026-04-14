import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Wojciech Galant. All rights
          reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/WojciechGalant1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <SiGithub className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/wgalant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
