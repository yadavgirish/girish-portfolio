import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

import ThemeToggle from "./ThemeToggle";

const logoImage = "https://lh3.googleusercontent.com/a/ACg8ocLmqclV2gK5VEskvVIMA_NsRX8AIY6lf9PM1L4HLnMrzDRvFnJa=s192-c-mo";

// Example:
// const logoImage = "/logo.png";
// or:
// const logoImage = "https://example.com/logo.png";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Work", id: "work" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (event, id) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) return;

    setActiveSection(id);
    setIsMobileMenuOpen(false);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 font-['Space_Grotesk']">
      {/* Navbar */}
      <div
        className="
          group
          rounded-full
          border border-[var(--border)]
          bg-[var(--bg)]/75
          shadow-[0_8px_40px_rgba(0,0,0,0.08)]
          backdrop-blur-2xl
          transition-all duration-500
          hover:border-[var(--text)]/20
        "
      >
        {/* Main Navbar Row */}
        <div className="flex items-center justify-between px-4 py-1">
          {/* Logo */}
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, "home")}
            className="
              group/logo
              flex items-center gap-2
              rounded-full
              px-2 py-1
            "
          >
            <span
              className="
                flex h-9 w-9 items-center justify-center
                overflow-hidden
                rounded-full
                bg-[var(--text)]
                text-[var(--bg)]
                text-sm font-bold
                transition-transform duration-500
                group-hover/logo:rotate-12
              "
            >
              {logoImage ? (
                <img
                  src={logoImage}
                  alt="Girish Yadav"
                  className="h-full w-full object-cover"
                />
              ) : (
                "GY"
              )}
            </span>

            <span
              className="
                hidden text-sm font-semibold tracking-tight
                sm:block
              "
            >
              Girish Yadav
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) =>
                    handleNavClick(event, link.id)
                  }
                  className={`
                    relative
                    rounded-full
                    px-4 py-2
                    text-sm font-medium
                    transition-all duration-100
                    ${
                      isActive
                        ? "text-[var(--text)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text)]"
                    }
                  `}
                >
                  {link.name}

                  <span
                    className={`
                      absolute bottom-1 left-1/2
                      h-0.5
                      -translate-x-1/2
                      rounded-full
                      bg-[var(--text)]
                      transition-all duration-300
                      ${
                        isActive
                          ? "w-4 opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 sm:flex">
            <ThemeToggle />

            <a
              href="#contact"
              onClick={(event) =>
                handleNavClick(event, "contact")
              }
              className="
                min-w-[105px]
                rounded-full
                bg-[var(--text)]
                px-5 py-1.5
                text-center
                text-[15px]
                font-bold
                text-[var(--bg)]
                transition-transform duration-300
                hover:-translate-y-0.5
              "
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() =>
                setIsMobileMenuOpen((current) => !current)
              }
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-[var(--border)]
                text-[var(--text)]
                transition-colors duration-300
                hover:border-[var(--text)]
              "
            >
              {isMobileMenuOpen ? (
                <FiX size={19} />
              ) : (
                <FiMenu size={19} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            overflow-hidden
            transition-all duration-300 ease-out
            sm:hidden
            ${
              isMobileMenuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <nav
            className="
              border-t border-[var(--border)]
              px-4 pb-4 pt-3
            "
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(event) =>
                      handleNavClick(event, link.id)
                    }
                    className={`
                      flex items-center justify-between
                      rounded-2xl
                      px-4 py-3
                      text-sm font-medium
                      transition-colors duration-200
                      ${
                        isActive
                          ? "bg-[var(--text)] text-[var(--bg)]"
                          : "text-[var(--text-secondary)] hover:bg-[var(--card)] hover:text-[var(--text)]"
                      }
                    `}
                  >
                    <span>{link.name}</span>

                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Mobile Let's Talk */}
            <a
              href="#contact"
              onClick={(event) =>
                handleNavClick(event, "contact")
              }
              className="
                group mt-3
                flex items-center justify-center gap-2
                rounded-full
                bg-[var(--text)]
                px-5 py-3.5
                text-sm font-bold
                text-[var(--bg)]
                transition-transform duration-300
                hover:-translate-y-0.5
              "
            >
              Let's Talk

              <FiArrowUpRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;