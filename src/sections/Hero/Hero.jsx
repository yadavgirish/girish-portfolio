import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMousePointer,
} from "react-icons/fi";

import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal/Reveal";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-80px)] w-full items-center overflow-hidden px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-48
          -top-48
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-[var(--text)]
          opacity-[0.035]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-48
          -left-48
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-[var(--text)]
          opacity-[0.025]
          blur-3xl
        "
      />

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">

          {/* Small Label */}
          <Reveal delay={0}>
            <div className="mb-7 flex items-center gap-3 sm:mb-9">
              <span className="h-px w-9 bg-[var(--text)] opacity-40 sm:w-11" />
              <span className="text-xs font-medium uppercase tracking-[0.22em] opacity-50 sm:text-sm">
                Full-Stack Developer
              </span>
            </div>
          </Reveal>

          {/* Main Heading */}
          <Reveal delay={100}>
            <h1
              className="
                max-w-5xl
                font-[var(--font-display)]
                text-5xl
                font-bold
                leading-[0.92]
                tracking-[-0.045em]
                sm:text-7xl
                lg:text-8xl
                xl:text-9xl
              "
            >
              I build digital
              <span className="block opacity-35">
                experiences.
              </span>
            </h1>
          </Reveal>

          {/* Description */}
          <Reveal delay={200}>
            <div className="mt-7 max-w-2xl sm:mt-8">
              <p className="text-sm leading-7 opacity-60 sm:text-lg sm:leading-8">
                I'm Girish Yadav, a Full-Stack Developer focused on creating
                modern web applications with clean interfaces, scalable
                architecture, and meaningful interactions.
              </p>
            </div>
          </Reveal>

          {/* Actions */}
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
              {/* View Work */}
              <Link
                to="/projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[var(--text)]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-[var(--bg)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_14px_40px_rgba(0,0,0,0.14)]
                "
              >
                View My Work

                <FiArrowUpRight
                  className="
                    text-base
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>

              {/* Contact */}
              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[color:var(--border)]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--text)]
                  hover:text-[var(--bg)]
                  hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)]
                "
              >
                Let's Talk
              </a>
            </div>
          </Reveal>

          {/* Social Links */}
          <Reveal delay={400}>
            <div className="mt-7 flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/yadavgirish"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[color:var(--border)]
                  opacity-55
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--text)]
                  hover:text-[var(--bg)]
                  hover:opacity-100
                "
              >
                <FiGithub className="text-[15px]" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yadavgirish/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[color:var(--border)]
                  opacity-55
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--text)]
                  hover:text-[var(--bg)]
                  hover:opacity-100
                "
              >
                <FiLinkedin className="text-[15px]" />
              </a>
            </div>
          </Reveal>

        </div>

        {/* Scroll Indicator */}
        <Reveal delay={500}>
          <div
            className="
              absolute
              bottom-1
              right-0
              hidden
              items-center
              gap-3
              opacity-35
              lg:flex
            "
          >
            <FiMousePointer className="text-sm" />
            <span className="text-[10px] font-medium uppercase tracking-[0.22em]">
              Scroll to explore
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;