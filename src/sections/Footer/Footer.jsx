import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[var(--border)] px-6 pb-8 pt-16 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">

        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Intro */}
          <div>
            <a
              href="#home"
              className="font-[var(--font-display)] text-2xl font-bold tracking-[-0.03em]"
            >
              Girish Yadav
            </a>

            <p className="mt-5 max-w-md leading-7 text-[var(--text-secondary)]">
              Full-Stack Developer building modern web applications,
              scalable backend systems and AI-powered digital experiences.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Let's work together

              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">

            {/* Navigate */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                Navigate
              </p>

              <div className="flex flex-col gap-3 text-sm">

                <a
                  href="#home"
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
                >
                  About
                </a>

                <a
                  href="#work"
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
                >
                  Work
                </a>

                <a
                  href="#services"
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
                >
                  Services
                </a>

                <a
                  href="#contact"
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
                >
                  Contact
                </a>

              </div>
            </div>

            {/* Social */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                Connect
              </p>

              <div className="flex flex-col gap-3 text-sm">

                <a
                  href="https://github.com/yadavgirish"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
                >
                  <FiGithub />
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/yadavgirish/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
                >
                  <FiLinkedin />
                  LinkedIn
                </a>

                <a
                  href="mailto:your@email.com"
                  className="inline-flex items-center gap-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
                >
                  <FiMail />
                  Email
                </a>

              </div>
            </div>

            {/* Back to top */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                Back to
              </p>

              <button
                onClick={scrollToTop}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--card)]"
                aria-label="Back to top"
              >
                <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              </button>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Girish Yadav. All rights reserved.
          </p>

          <p>
            Designed & built with React.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;