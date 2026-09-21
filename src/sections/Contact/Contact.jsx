import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import Reveal from "../../components/Reveal/Reveal";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_5fv30h6",
        "template_rtipslt",
        form.current,
        {
          publicKey: "v4PvdYC10KLD5bNiI",
        }
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="px-6 pb-28 pt-32 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Get In Touch
            </p>

            <h1 className="font-[var(--font-display)] text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Have an idea?
              <span className="block opacity-40">Let's build it.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              Whether you have a project in mind, need help building a web
              application, or simply want to connect, feel free to reach out.
            </p>
          </div>
        </Reveal>

        {/* Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Info */}
          <Reveal delay={100}>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Contact
              </p>

              <div className="mt-8">
                <a
                  href="mailto:ygirish890@gmail.com"
                  className="group flex items-start gap-4 border-b border-[var(--border)] pb-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)]">
                    <FiMail size={17} />
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                      Email
                    </p>

                    <p className="mt-2 text-sm font-medium sm:text-base">
                      ygirish890@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              {/* Socials */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                  Social
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="https://github.com/yadavgirish"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 hover:border-[var(--text)]"
                  >
                    <FiGithub size={18} />
                  </a>

                  <a
                    href="https://linkedin.com/in/yadavgirish/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 hover:border-[var(--text)]"
                  >
                    <FiLinkedin size={18} />
                  </a>
                </div>
              </div>

              <div className="mt-10 border-t border-[var(--border)] pt-6">
                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  Available for freelance projects, collaborations and
                  full-stack development opportunities.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={200}>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-9"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="text-sm font-semibold">
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="mt-3 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-5 py-4 text-sm outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--text)]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="mt-3 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-5 py-4 text-sm outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--text)]"
                  />
                </div>

                {/* Subject */}
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="text-sm font-semibold">
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to build?"
                    required
                    className="mt-3 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-5 py-4 text-sm outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--text)]"
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    required
                    className="mt-3 w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-5 py-4 text-sm outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--text)]"
                  />
                </div>
              </div>

              {/* Status */}
              {status === "success" && (
                <p
                  className="mt-5 text-sm font-medium text-green-600"
                  aria-live="polite"
                >
                  Message sent successfully. I'll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p
                  className="mt-5 text-sm font-medium text-red-500"
                  aria-live="polite"
                >
                  Something went wrong. Please try again.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--text)] px-6 py-4 text-sm font-semibold text-[var(--bg)] transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}

                {status !== "sending" && (
                  <FiArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;