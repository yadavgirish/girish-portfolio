import {
  FiArrowUpRight,
  FiCode,
  FiCpu,
  FiLayout,
  FiServer,
} from "react-icons/fi";

import Reveal from "../../components/Reveal/Reveal";

const services = [
  {
    number: "01",
    icon: FiLayout,
    title: "Modern Websites",
    description:
      "Responsive and polished websites designed to give your brand a professional digital presence.",
  },
  {
    number: "02",
    icon: FiCode,
    title: "Full-Stack Development",
    description:
      "Complete web applications with modern frontend interfaces, backend APIs, authentication and databases.",
  },
  {
    number: "03",
    icon: FiServer,
    title: "Backend & APIs",
    description:
      "Scalable REST APIs, authentication systems, database integration and backend functionality for web applications.",
  },
  {
    number: "04",
    icon: FiCpu,
    title: "AI-Powered Applications",
    description:
      "Web applications enhanced with AI features, intelligent workflows and modern AI API integrations.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Header */}
        <Reveal>
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Services
              </p>

              <h2 className="font-[var(--font-display)] text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Turning ideas into
                <span className="block opacity-40">
                  digital products.
                </span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[var(--text-secondary)]">
              From modern websites to complete full-stack applications, I
              build digital experiences focused on performance, usability
              and real-world results.
            </p>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid gap-px overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.number}
                delay={index * 100}
              >
                <div
                  className="group relative bg-[var(--bg)] p-8 transition-colors duration-300 hover:bg-[var(--card)] sm:p-10"
                >
                  {/* Top row */}
                  <div className="mb-16 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)]">
                      <Icon className="text-xl" />
                    </div>

                    <span className="font-[var(--font-display)] text-sm text-[var(--text-secondary)]">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-[var(--font-display)] text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-lg leading-7 text-[var(--text-secondary)]">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom arrow */}
                  <div className="mt-10 flex items-center justify-between">
                    <span className="text-sm font-medium text-[var(--text-secondary)]">
                      Learn more
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-transform duration-300 group-hover:rotate-45">
                      <FiArrowUpRight />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;