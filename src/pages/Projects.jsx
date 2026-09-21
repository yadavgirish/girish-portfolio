import { Link } from "react-router-dom";
import projects from "../data/project.js"
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";

function Projects() {
  return (
    <section className="px-6 pb-28 pt-32 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">

        {/* Back */}
        <Link
          to="/"
          className="
            group
            mb-14
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-[var(--text-secondary)]
            transition-colors
            hover:text-[var(--text)]
          "
        >
          <FiArrowLeft
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />
          Back to home
        </Link>

        {/* Header */}
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            All Projects
          </p>

          <h1
            className="
              font-[var(--font-display)]
              text-5xl
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
              sm:text-6xl
              lg:text-8xl
            "
          >
            Things I've
            <span className="block opacity-40">
              built so far.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            A collection of projects covering full-stack development,
            real-time communication, authentication, APIs, databases and
            machine learning.
          </p>
        </div>

        {/* Project count */}
        <div className="mt-16 border-y border-[var(--border)] py-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[var(--text-secondary)]">
              Selected projects
            </p>

            <p className="font-[var(--font-display)] text-sm font-semibold">
              {String(projects.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-10 space-y-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
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
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg)] lg:aspect-auto lg:min-h-[430px]">
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

                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

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

                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      flex
                      h-11
                      w-11
                      translate-y-2
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-black
                      opacity-0
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
                <div className="flex flex-col justify-between p-7 sm:p-10">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                      Project {project.number}
                    </p>

                    <h2
                      className="
                        mt-4
                        font-[var(--font-display)]
                        text-3xl
                        font-semibold
                        tracking-tight
                        sm:text-4xl
                      "
                    >
                      {project.title}
                    </h2>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-10">

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
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

                    {/* Bottom */}
                    <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-6">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold">
                        View project
                        <FiArrowUpRight
                          size={16}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                          "
                        />
                      </span>

                      <div className="flex items-center gap-2">
                        <span
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[var(--border)]
                            text-[var(--text-secondary)]
                          "
                        >
                          <FiGithub size={15} />
                        </span>

                        <span
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[var(--border)]
                            text-[var(--text-secondary)]
                          "
                        >
                          <FiExternalLink size={15} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;