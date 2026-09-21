import { useEffect, useState } from "react";

import ThemeToggle from "./ThemeToggle";

const logoImage = null;
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

  const handleNavClick = (event, id) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) return;

    setActiveSection(id);

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
      <div
        className="
          group
          flex items-center justify-between
          rounded-full
          border border-[var(--border)]
          bg-[var(--bg)]/75
          px-4
          shadow-[0_8px_40px_rgba(0,0,0,0.08)]
          backdrop-blur-2xl
          transition-all duration-500
          hover:border-[var(--text)]/20
        "
      >
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

        {/* Navigation */}
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
                onClick={(event) => handleNavClick(event, link.id)}
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
                    ${isActive ? "w-4 opacity-100" : "w-0 opacity-0"}
                  `}
                />
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={(event) => handleNavClick(event, "contact")}
            className="
              hidden
              min-w-[105px]
              rounded-full
              bg-[var(--text)]
              px-5 py-1.5
              text-center
              text-[15px]
              font-bold
              text-[var(--bg)]
              sm:block
            "
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;