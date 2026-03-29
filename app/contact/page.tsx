"use client";

import { useState } from "react";
import { Phone, Clock, MapPin, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";

const serviceOptions = [
  "Painting Services",
  "Insulation Services",
  "Property Maintenance",
  "Handyman Services",
  "Multiple Services",
  "Not Sure Yet",
];

const timeOptions = [
  "Morning (9am - 12pm)",
  "Afternoon (12pm - 5pm)",
  "Anytime",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[var(--color-primary)] pt-32 pb-16">
        <div className="container">
          <div className="max-w-2xl cbd-reveal">
            <span className="section-label-light">Contact Us</span>
            <h1
              className="text-[var(--color-text-on-dark)] mt-2"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                lineHeight: 1.05,
              }}
            >
              Let&apos;s talk about your project.
            </h1>
            <p className="text-white/65 mt-4 text-base leading-relaxed max-w-lg">
              We offer free, no-obligation quotes across Manawatu and surrounding
              areas. Fill in the form or give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-8 cbd-reveal">

              {/* Primary contact */}
              <div className="bg-[var(--color-primary)] rounded-2xl p-8 text-white">
                <h2
                  className="font-extrabold text-xl mb-6"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                >
                  Get in touch directly
                </h2>

                <div className="flex flex-col gap-6">
                  <a
                    href="tel:0800222249"
                    className="group flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-accent-hover)] transition-colors">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-0.5">
                        Phone
                      </p>
                      <p className="text-white font-bold text-lg">
                        0800 22 22 49
                      </p>
                      <p className="text-white/50 text-xs mt-0.5">
                        Free to call from anywhere in NZ
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-0.5">
                        Hours
                      </p>
                      <p className="text-white font-semibold">
                        Mon - Sat: 9am to 5pm
                      </p>
                      <p className="text-white/50 text-xs mt-0.5">
                        Closed Sundays and public holidays
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-0.5">
                        Service Area
                      </p>
                      <p className="text-white font-semibold">
                        Manawatu and surrounding areas
                      </p>
                      <p className="text-white/50 text-xs mt-0.5">
                        Palmerston North, Feilding, Levin and beyond
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://www.facebook.com/CBDpaintersmanawatu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                      <ExternalLink size={18} className="text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-0.5">
                        Facebook
                      </p>
                      <p className="text-white font-semibold group-hover:text-white/80 transition-colors">
                        CBD Painters Manawatu
                      </p>
                      <p className="text-white/50 text-xs mt-0.5">
                        See our work and reviews
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-surface)]">
                <h3
                  className="font-bold text-[var(--color-text)] text-base mb-5"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  What happens next
                </h3>
                <ul className="flex flex-col gap-4">
                  {[
                    {
                      step: "1",
                      text: "We get your enquiry and call you back within one business day",
                    },
                    {
                      step: "2",
                      text: "We come to your property at a time that suits you",
                    },
                    {
                      step: "3",
                      text: "You get a clear, written quote. No obligation to proceed.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-primary)] font-bold text-xs shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 cbd-reveal">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-[var(--color-surface)] shadow-lg shadow-black/5">
                {!submitted ? (
                  <>
                    <div className="mb-8">
                      <h2
                        className="text-[var(--color-text)] font-extrabold text-2xl"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                      >
                        Request a free quote
                      </h2>
                      <p className="text-[var(--color-text-muted)] text-sm mt-1">
                        Fill in the details below and we&apos;ll be in touch soon.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      {/* Name + Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="cbd-label">
                            Your name <span className="text-[var(--color-accent)]">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="e.g. Sarah Jones"
                            value={form.name}
                            onChange={handleChange}
                            className="cbd-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="cbd-label">
                            Phone number <span className="text-[var(--color-accent)]">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="e.g. 027 123 4567"
                            value={form.phone}
                            onChange={handleChange}
                            className="cbd-input"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="cbd-label">
                          Email address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          className="cbd-input"
                        />
                      </div>

                      {/* Service + Time */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="service" className="cbd-label">
                            Service needed <span className="text-[var(--color-accent)]">*</span>
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={form.service}
                            onChange={handleChange}
                            className="cbd-input"
                          >
                            <option value="">Select a service</option>
                            {serviceOptions.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="time" className="cbd-label">
                            Best time to call
                          </label>
                          <select
                            id="time"
                            name="time"
                            value={form.time}
                            onChange={handleChange}
                            className="cbd-input"
                          >
                            <option value="">No preference</option>
                            {timeOptions.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="cbd-label">
                          Tell us about the job
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="What needs doing? Where is the property? Any other details that might help..."
                          value={form.message}
                          onChange={handleChange}
                          className="cbd-input resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <button type="submit" className="cbd-btn-primary w-full justify-center text-base py-4">
                          Send My Quote Request
                          <ArrowRight size={17} />
                        </button>
                        <p className="text-[var(--color-text-muted)] text-xs text-center mt-3">
                          We&apos;ll call you back within one business day. No spam, ever.
                        </p>
                      </div>
                    </form>
                  </>
                ) : (
                  /* Success state */
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-surface)] flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} className="text-[var(--color-primary)]" />
                    </div>
                    <h2
                      className="text-[var(--color-text)] font-extrabold text-2xl mb-3"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                    >
                      Thanks, {form.name.split(" ")[0]}!
                    </h2>
                    <p className="text-[var(--color-text-muted)] leading-relaxed mb-2">
                      Your quote request has been received.
                    </p>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-8">
                      We&apos;ll give you a call{form.time ? ` in the ${form.time.toLowerCase()}` : " within one business day"}.
                      In the meantime, feel free to ring us directly on{" "}
                      <a
                        href="tel:0800222249"
                        className="text-[var(--color-accent)] font-semibold"
                      >
                        0800 22 22 49
                      </a>
                      .
                    </p>
                    <a href="/" className="cbd-btn-primary inline-flex">
                      Back to Home
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
