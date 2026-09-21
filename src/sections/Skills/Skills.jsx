import {
  FiCode,
  FiServer,
  FiDatabase,
  FiCpu,
  FiTool,
  FiArrowUpRight,
} from "react-icons/fi";

import Reveal from "../../components/Reveal/Reveal";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building modern, responsive and interactive interfaces.",
    icon: FiCode,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "React Router",
      "Zustand",
      "React Hook Form",
      "Yup",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    description: "Building APIs, authentication and real-time systems.",
    icon: FiServer,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Cookie Authentication",
      "bcrypt",
      "Nodemailer",
      "Socket.IO",
      "Multer",
    ],
  },
  {
    title: "Database & Services",
    description: "Connecting applications with data and external services.",
    icon: FiDatabase,
    skills: [
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Twilio Verify",
      "Email OTP",
      "Real-time Communication",
    ],
  },
  {
    title: "AI & Development",
    description: "Using modern AI tools to build faster without losing control of the code.",
    icon: FiCpu,
    skills: [
      "AI-Assisted Development",
      "AI API Integration",
      "AI Coding Agents",
      "Cursor",
      "AI-Powered Applications",
    ],
  },
  {
    title: "Tools",
    description: "Development tools and workflows I use to build and ship projects.",
    icon: FiTool,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "API Testing",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Section Header */}
        <Reveal>
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Skills
            </p>

            <h2 className="font-[var(--font-display)] text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              The tools behind
              <span className="block opacity-40">
                the work.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              A full-stack toolkit built around JavaScript, modern web
              technologies and AI-assisted development.
            </p>
          </div>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal
                key={group.title}
                delay={index * 100}
              >
                <div
                  className={`
                    group relative overflow-hidden rounded-3xl
                    border border-[var(--border)]
                    bg-[var(--card)]
                    p-7
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-[var(--text)]/25
                    ${
                      index === 3
                        ? "lg:col-span-2"
                        : ""
                    }
                  `}
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex h-12 w-12 items-center justify-center
                        rounded-2xl
                        border border-[var(--border)]
                        bg-[var(--bg)]
                        text-[var(--text)]
                        transition-transform duration-500
                        group-hover:rotate-6
                      "
                    >
                      <Icon size={21} />
                    </div>

                    <FiArrowUpRight
                      className="
                        text-[var(--text-secondary)]
                        transition-all duration-500
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[var(--text)]
                      "
                      size={20}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-7 font-[var(--font-display)] text-xl font-semibold tracking-tight">
                    {group.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {group.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-full
                          border border-[var(--border)]
                          px-3 py-1.5
                          text-xs font-medium
                          text-[var(--text-secondary)]
                          transition-colors duration-300
                          group-hover:text-[var(--text)]
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Decorative line */}
                  <div
                    className="
                      absolute bottom-0 left-0
                      h-px w-0
                      bg-[var(--text)]
                      opacity-30
                      transition-all duration-700
                      group-hover:w-full
                    "
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;