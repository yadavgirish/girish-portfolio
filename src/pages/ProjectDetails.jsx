import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiGithub,
} from "react-icons/fi";

const projects = {
  "e-commerce-platform": {
    number: "01",
    title: "E-Commerce Platform",
    shortDescription:
      "A full-stack e-commerce platform built with a modern MERN architecture.",
    description:
      "A complete e-commerce application designed to handle the core shopping experience from browsing products to managing a cart and user authentication. The project focuses on building a clean frontend while connecting it with a scalable backend API.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    features: [
      "User authentication",
      "Product browsing",
      "Shopping cart",
      "Product management",
      "Image upload",
      "Protected API routes",
    ],
    github: "#",
    live: "#",
  },

  "whatsapp-clone": {
    number: "02",
    title: "WhatsApp Clone",
    shortDescription:
      "A real-time messaging application built around Socket.IO and the MERN stack.",
    description:
      "A real-time communication application focused on private messaging and live updates. The project combines a React frontend with a Node.js backend and Socket.IO to establish real-time communication between users.",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1600&q=80",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
    ],
    features: [
      "User authentication",
      "Real-time messaging",
      "Private conversations",
      "Protected routes",
      "Persistent data",
      "Real-time communication",
    ],
    github: "#",
    live: "#",
  },

  "fake-news-detection": {
    number: "03",
    title: "Fake News Detection",
    shortDescription:
      "A machine-learning application for detecting potentially misleading news content.",
    description:
      "A machine-learning based project that processes textual news data and uses natural language processing techniques to classify news content. The system combines text preprocessing, TF-IDF feature extraction and machine-learning models with a Flask API.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80",
    technologies: [
      "Python",
      "NLP",
      "TF-IDF",
      "Naive Bayes",
      "SVM",
      "Flask",
    ],
    features: [
      "Text preprocessing",
      "TF-IDF feature extraction",
      "News classification",
      "Machine-learning models",
      "Flask API",
      "Prediction interface",
    ],
    github: "#",
    live: "#",
  },
};

function ProjectDetails() {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return (
      <main className="min-h-screen px-6 py-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            Project
          </p>

          <h1 className="mt-4 font-[var(--font-display)] text-5xl font-bold">
            Project not found
          </h1>

          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
          >
            <FiArrowLeft />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="px-6 pb-28 pt-32 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">

        {/* Back */}
        <Link
          to="/projects"
          className="
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
          <FiArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mt-12 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            Project {project.number}
          </p>

          <h1
            className="
              mt-5
              font-[var(--font-display)]
              text-5xl
              font-bold
              leading-[0.95]
              tracking-[-0.04em]
              sm:text-6xl
              lg:text-8xl
            "
          >
            {project.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
            {project.shortDescription}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-[var(--border)]">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="
              aspect-[16/8]
              h-full
              w-full
              object-cover
            "
          />
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_320px]">

          {/* Description */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Overview
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
              {project.description}
            </p>

            {/* Features */}
            <div className="mt-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Key Features
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      rounded-2xl
                      border
                      border-[var(--border)]
                      bg-[var(--card)]
                      p-5
                      text-sm
                      font-medium
                    "
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Technologies
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
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
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-[var(--border)] pt-6">
                <div className="flex flex-col gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      border
                      border-[var(--border)]
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      transition-colors
                      hover:border-[var(--text)]
                    "
                  >
                    GitHub
                    <FiGithub size={17} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      bg-[var(--text)]
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      text-[var(--bg)]
                      transition-opacity
                      hover:opacity-80
                    "
                  >
                    Live Demo
                    <FiArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;