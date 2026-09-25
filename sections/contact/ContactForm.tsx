"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const devopstrioServices = [
  "AI & Data Innovation",
  "Cloud Services",
  "DevOps & Automation",
  "Cybersecurity",
  "Software Development",
  "Digital Transformation",
  "Data Engineering",
  "Managed Services",
  "QA & Testing",
  "IT Consulting",
  "Others",
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const set =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return;
    }

    setSubmitting(true);

    try {
      // -------------------------------------------------------
      // 1. SEND ENQUIRY TO YOUR BACKEND
      // -------------------------------------------------------

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          selectedServices,
        }),
      });

      // -------------------------------------------------------
      // 2. HANDLE FAILED SUBMISSION
      // -------------------------------------------------------

      if (!response.ok) {
        console.error(
          "Contact form submission failed:",
          response.status
        );

        alert("Failed to send message. Please try again.");

        return;
      }

      // -------------------------------------------------------
      // 3. FORM SUCCESSFUL — NOW SEND EVENT TO BREVO
      // -------------------------------------------------------

      try {
        if (
          typeof window !== "undefined" &&
          (window as any).Brevo
        ) {
          const brevo = (window as any).Brevo;

          const nameParts = form.name.trim().split(/\s+/);

          const firstName = nameParts[0] || "";

          const lastName =
            nameParts.length > 1
              ? nameParts.slice(1).join(" ")
              : "";

          // ---------------------------------------------------
          // Identify this website visitor/contact in Brevo
          // ---------------------------------------------------

          brevo.push([
            "identify",
            {
              identifiers: {
                email_id: form.email.trim(),
              },
              attributes: {
                FIRSTNAME: firstName,
                LASTNAME: lastName,
              },
            },
          ]);

          // ---------------------------------------------------
          // Track successful service enquiry
          // ---------------------------------------------------

          brevo.push([
            "track",
            "service_enquiry_submitted",
            {
              email: form.email.trim(),
              FIRSTNAME: firstName,
              LASTNAME: lastName,
            },
            {
              data: {
                services: selectedServices,
              },
            },
          ]);

          console.log(
            "Brevo event sent: service_enquiry_submitted"
          );
        } else {
          console.warn(
            "Brevo Tracker is not available on this page."
          );
        }
      } catch (brevoError) {
        // Brevo tracking failure must NOT make the contact form fail.
        console.warn(
          "Brevo tracking error:",
          brevoError
        );
      }

      // -------------------------------------------------------
      // 4. RESET FORM AFTER SUCCESS
      // -------------------------------------------------------

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setSelectedServices([]);

      setSubmitted(true);
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      alert(
        "An error occurred. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="w-full bg-[#030303] pt-4 pb-12 md:pt-2 md:pb-16 flex items-center justify-center font-sans relative overflow-hidden"
    >
      <div className="w-full max-w-[1100px] mx-auto px-6 relative z-10 [perspective:1500px]">

        {/* ---------------------------------------------------
            HEADER
        ---------------------------------------------------- */}

        <Reveal className="mb-6 md:mb-8 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-zinc-500">
              Start a Conversation
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-4 text-white">
            Ready to scale?{" "}
            <span className="text-rose-500">
              Let&apos;s build it together.
            </span>
          </h2>

          <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed max-w-xl mx-auto">
            Our engineering leaders are standing by to review
            your requirements, scope your vision, and guide your
            next transformation.
          </p>
        </Reveal>

        <motion.div
          key="form"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="w-full bg-[#131313] rounded-3xl overflow-hidden flex flex-col lg:flex-row min-h-[500px] shadow-2xl relative transform-gpu"
        >

          {/* -------------------------------------------------
              LEFT SIDE
          -------------------------------------------------- */}

          <div className="w-full lg:w-[45%] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden bg-[#050505] text-white">

            {/* Background glow */}

            <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#ebd0be] rounded-full blur-[100px] opacity-50 pointer-events-none" />

            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#ebd0be] rounded-full blur-[120px] opacity-40 pointer-events-none" />

            {/* Profile + Contact */}

            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 z-10 w-full backdrop-blur-sm">

              <div className="max-w-[200px]">

                <div className="w-[64px] h-[64px] rounded-full overflow-hidden mb-4 border-2 border-white/20 shadow-sm bg-white/5">

                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=transparent"
                    alt="Alex Coordinator"
                    className="w-full h-full object-cover scale-110"
                    loading="lazy"
                  />

                </div>

                <p className="text-xs font-medium text-white/80 leading-relaxed">

                  <span className="font-semibold text-white block">
                    Solutions Architect,
                  </span>

                  can guide your project&apos;s initial steps.

                </p>

              </div>

              {/* Contact Pills */}

              <div className="flex flex-col gap-2 mt-2 sm:mt-0">

                <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#ebd0be] text-[10px] font-medium tracking-wide shadow-sm text-center">

                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL}

                </div>

                <a
                  href="tel:04612940062"
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#ebd0be] text-[10px] font-medium tracking-wide text-center shadow-sm hover:bg-white/10 hover:border-[#ebd0be]/30 hover:text-white transition-all"
                >
                  📞 0461 2940062 / +44 1784 640216
                </a>

              </div>
            </div>

            {/* Bottom Section */}

            <div className="z-10 mt-12 lg:mt-0 backdrop-blur-sm">

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.05]">
                Every project
                <br />
                starts with a plan.
              </h2>

              <div className="flex items-center gap-5">

                {/* LinkedIn */}

                <a
                  href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  title="LinkedIn"
                >
                  <img
                    src="/assets/social-icons/linkedin.svg"
                    alt="LinkedIn"
                    className="w-5 h-5 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </a>

                {/* Facebook */}

                <a
                  href="https://www.facebook.com/profile.php?id=61579126233218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  title="Facebook"
                >
                  <img
                    src="/assets/social-icons/facebook.svg"
                    alt="Facebook"
                    className="w-5 h-5 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </a>

                {/* Instagram */}

                <a
                  href="https://www.instagram.com/devopstrio_offcl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  title="Instagram"
                >
                  <img
                    src="/assets/social-icons/instagram.svg"
                    alt="Instagram"
                    className="w-5 h-5 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </a>

                {/* YouTube */}

                <a
                  href="https://www.youtube.com/@Devopstrioltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  title="YouTube"
                >
                  <img
                    src="/assets/social-icons/youtube.svg"
                    alt="YouTube"
                    className="w-5 h-5 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </a>

              </div>
            </div>
          </div>

          {/* -------------------------------------------------
              RIGHT SIDE — FORM
          -------------------------------------------------- */}

          <div className="w-full lg:w-[55%] p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-[#131313]">

            {submitted ? (

              /* -----------------------------------------------
                 SUCCESS MESSAGE
              ------------------------------------------------ */

              <div className="flex flex-col items-center justify-center h-full text-center fade-in">

                <CheckCircle2
                  size={56}
                  className="text-[#E11D48] mb-6"
                />

                <h3 className="text-3xl font-normal text-white mb-4">
                  Message Received
                </h3>

                <p className="text-white/50 mb-10 max-w-sm leading-relaxed">
                  Our architecture team will review your
                  requirements and be in touch shortly to start
                  planning.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full max-w-xs py-3.5 bg-[#E11D48] text-white text-sm font-medium rounded hover:bg-[#BE123C] transition-colors"
                >
                  Send Another
                </button>

              </div>

            ) : (

              /* -----------------------------------------------
                 CONTACT FORM
              ------------------------------------------------ */

              <form
                onSubmit={handleSubmit}
                className="w-full max-w-[400px] mx-auto lg:ml-6 flex flex-col gap-6"
              >

                {/* Heading + Services */}

                <div>

                  <h3 className="text-3xl md:text-4xl font-normal text-white/40 leading-[1.1] mb-5 tracking-tight">

                    What services
                    <br />

                    <span className="text-white">
                      we can support
                      <br />
                      you with?
                    </span>

                  </h3>

                  <p className="text-[12px] text-white/60 mb-3 font-medium tracking-wide">
                    I would love to partner with Devopstrio on...
                  </p>

                  <div className="flex flex-wrap gap-2.5">

                    {devopstrioServices.map((service) => (

                      <button
                        key={service}
                        type="button"
                        onClick={() =>
                          toggleService(service)
                        }
                        className={`px-3.5 py-1.5 rounded-md border text-[11px] font-normal transition-all duration-300 ${
                          selectedServices.includes(service)
                            ? "bg-[#ebd0be] border-[#ebd0be] text-black"
                            : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {service}
                      </button>

                    ))}

                  </div>
                </div>

                {/* Form Inputs */}

                <div className="flex flex-col gap-4 mt-1">

                  {/* Name */}

                  <div className="relative border-b border-white/20 pb-2 focus-within:border-[#ebd0be] transition-colors">

                    <input
                      required
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your Name"
                      className="w-full bg-transparent outline-none text-white text-[13px] placeholder-white/30 font-light"
                    />

                  </div>

                  {/* Email */}

                  <div className="relative border-b border-white/20 pb-2 focus-within:border-[#ebd0be] transition-colors">

                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="E-mail"
                      className="w-full bg-transparent outline-none text-white text-[13px] placeholder-white/30 font-light"
                    />

                  </div>

                  {/* Phone */}

                  <div className="relative border-b border-white/20 pb-2 focus-within:border-[#ebd0be] transition-colors">

                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="Phone"
                      className="w-full bg-transparent outline-none text-white text-[13px] placeholder-white/30 font-light"
                    />

                  </div>

                  {/* Message */}

                  <div className="relative border-b border-white/20 pb-2 focus-within:border-[#ebd0be] transition-colors">

                    <textarea
                      required
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Message"
                      className="w-full bg-transparent outline-none resize-none text-white text-[13px] placeholder-white/30 font-light"
                    />

                  </div>

                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 mt-2 bg-[#E11D48] hover:bg-[#BE123C] text-white text-[13px] font-medium rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >

                  {submitting
                    ? "Sending..."
                    : "Submit"}

                </button>

              </form>
            )}

          </div>
        </motion.div>
      </div>
    </section>
  );
}
