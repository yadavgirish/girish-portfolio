import { FiCode, FiZap, FiTarget } from "react-icons/fi";

import Reveal from "../../components/Reveal/Reveal";

function About() {
  return (
    <section
      id="about"
      className="px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Section Heading */}
        <Reveal>
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              About Me
            </p>

            <h2
              className="
                font-[var(--font-display)]
                text-4xl
                font-bold
                leading-tight
                tracking-[-0.03em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Building with purpose,
              <span className="block opacity-40">
                not just with code.
              </span>
            </h2>
          </div>
        </Reveal>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* About Text */}
          <Reveal delay={100}>
            <div className="max-w-2xl">
              <p className="text-xl leading-9">
                I'm Girish Yadav, a Full-Stack Developer focused on building
                modern and meaningful web experiences.
              </p>

              <p className="mt-6 leading-8 text-[var(--text-secondary)]">
                I work primarily with JavaScript, React, Node.js, Express and
                MongoDB. I enjoy turning ideas into complete products — from
                designing the interface to building the backend and connecting
                everything together.
              </p>

              <p className="mt-5 leading-8 text-[var(--text-secondary)]">
                I'm also exploring Java, AI-assisted development and modern
                development workflows to build faster without compromising
                code quality or understanding the systems behind what I build.
              </p>
            </div>
          </Reveal>

          {/* Highlights */}
          <div className="grid gap-4">

            {/* Card 1 */}
            <Reveal delay={150}>
              <div
                className="
                  group
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-[var(--card)]
                  p-6
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
              >
                <FiCode
                  className="
                    mb-5
                    text-2xl
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <h3 className="mb-2 text-lg font-semibold">
                  Full-Stack Development
                </h3>

                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  From responsive interfaces to APIs, authentication, databases
                  and complete application architecture.
                </p>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={250}>
              <div
                className="
                  group
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-[var(--card)]
                  p-6
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
              >
                <FiZap
                  className="
                    mb-5
                    text-2xl
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <h3 className="mb-2 text-lg font-semibold">
                  AI-Assisted Development
                </h3>

                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  Using AI to accelerate development, explore solutions and
                  improve productivity while keeping control of the code.
                </p>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={350}>
              <div
                className="
                  group
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-[var(--card)]
                  p-6
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
              >
                <FiTarget
                  className="
                    mb-5
                    text-2xl
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <h3 className="mb-2 text-lg font-semibold">
                  Product Focused
                </h3>

                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  Focused on creating interfaces that are responsive,
                  intuitive, useful and visually polished.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;