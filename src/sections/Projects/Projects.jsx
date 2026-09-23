import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";

import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal/Reveal";

import projects from "../../data/project";

function Projects() {
  return (
    <section
      id="work"
      className="px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Section Header */}
        <Reveal>
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Selected Work
              </p>

              <h2 className="font-[var(--font-display)] text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Projects built
                <span className="block opacity-40">
                  from idea to reality.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
                A selection of projects where I have worked across frontend,
                backend, databases, authentication, APIs and real-time systems.
              </p>
            </div>

            <Link
              to={"/projects"}
              type="button"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-2
                border-b
                border-[var(--border)]
                pb-2
                text-sm
                font-semibold
                transition-colors
                hover:border-[var(--text)]
              "
            >
              View all projects

              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </Reveal>

        {/* Project Grid */}
        <div className="grid gap-6 lg:grid-cols-2">

          {projects.map((project, index) => (
            <Reveal
              key={project.number}
              delay={index * 100}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="
                  group
                  block
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-[var(--card)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[var(--text)]/25
                "
              >
                {/* Image */}
                <div
                  className={`
                    relative
                    overflow-hidden
                    bg-[var(--bg)]
                    ${
                      index === 0
                        ? "aspect-[16/7]"
                        : "aspect-[16/10]"
                    }
                  `}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="
                      h-full
                      w-full
                      object-cover
                      opacity-90
                      transition-all
                      duration-700
                      group-hover:scale-105
                      group-hover:opacity-100
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/10
                      transition-colors
                      duration-500
                      group-hover:bg-black/0
                    "
                  />

                  {/* Number */}
                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      flex
                      h-10
                      min-w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-black/30
                      px-3
                      text-xs
                      font-semibold
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {project.number}
                  </div>

                  {/* Open icon */}
                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-black
                      opacity-0
                      translate-y-2
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <FiArrowUpRight size={19} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                    <div className="max-w-2xl">
                      <h3 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                        {project.description}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex shrink-0 items-center gap-2">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[var(--border)]
                          text-[var(--text-secondary)]
                          transition-all
                          duration-300
                          hover:border-[var(--text)]
                          hover:text-[var(--text)]
                        "
                      >
                        <FiGithub size={17} />
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[var(--border)]
                          text-[var(--text-secondary)]
                          transition-all
                          duration-300
                          hover:border-[var(--text)]
                          hover:text-[var(--text)]
                        "
                      >
                        <FiExternalLink size={17} />
                      </a>

                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-[var(--border)]
                          px-3
                          py-1.5
                          text-xs
                          font-medium
                          text-[var(--text-secondary)]
                          transition-colors
                          duration-300
                          group-hover:text-[var(--text)]
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Bottom line */}
                  <div className="mt-7 h-px w-full overflow-hidden bg-[var(--border)]">
                    <div
                      className="
                        h-full
                        w-0
                        bg-[var(--text)]
                        opacity-50
                        transition-all
                        duration-700
                        group-hover:w-full
                      "
                    />
                  </div>

                </div>
              </Link>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;