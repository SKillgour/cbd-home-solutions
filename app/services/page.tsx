import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import ServiceFinder from "@/components/ServiceFinder";

const services = [
  {
    id: "painting",
    number: "01",
    name: "Painting Services",
    tagline: "Fresh paint. Proper prep. Lasting results.",
    description:
      "CBD Painters has been doing this work across Manawatu for years. We know that a good paint job lives and dies on the prep. We take the time to do it properly - filling, sanding, priming - so the finish looks great and stays that way.",
    image:
      "https://images.unsplash.com/photo-1688372199140-cade7ae820fe?auto=format&fit=crop&w=960&q=80",
    imageAlt: "Painter in red overalls rolling a fresh coat of paint on an interior wall",
    includes: [
      "Interior repaints - living areas, bedrooms, kitchens, bathrooms",
      "Exterior repaints - weatherboards, fascia, window trims",
      "New build painting and finishing",
      "Feature walls and two-tone designs",
      "Commercial premises and rental property refreshes",
      "Colour consulting on request",
    ],
  },
  {
    id: "insulation",
    number: "02",
    name: "Insulation Services",
    tagline: "A warmer home is a healthier home.",
    description:
      "Many older Manawatu homes are under-insulated or have insulation that has settled, shifted or degraded over the years. We assess what your home needs and install the right product for your situation - whether that's ceiling batts, underfloor insulation or wall infill.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=960&q=80",
    imageAlt: "Insulation installation in a ceiling cavity",
    includes: [
      "Ceiling insulation - loose fill and batts",
      "Underfloor insulation installation",
      "Wall insulation for existing and new builds",
      "Assessment and recommendations for your property",
      "Removal of old or damaged insulation",
      "Suitable for residential and rental properties",
    ],
  },
  {
    id: "maintenance",
    number: "03",
    name: "Property Maintenance",
    tagline: "Catch it early. Save money later.",
    description:
      "Deferred maintenance costs more in the long run. CBD Home Solutions provides ongoing and one-off property maintenance across Manawatu for homeowners, landlords and commercial property owners. We handle the jobs that get put off and the repairs that need doing before they get worse.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=960&q=80",
    imageAlt: "Tradesperson working on exterior home repairs",
    includes: [
      "Weatherboard repair and replacement",
      "Spouting and downpipe work",
      "Deck maintenance and repair",
      "Fence repairs",
      "Cladding fixes and patch painting",
      "Pre-sale or pre-tenancy property tidy-ups",
      "Ongoing maintenance contracts for landlords",
    ],
  },
  {
    id: "handyman",
    number: "04",
    name: "Handyman Services",
    tagline: "No job too small. No list too long.",
    description:
      "We know how it goes - there's a list of small jobs that have been sitting there for months. CBD Home Solutions will work through that list for you. Whether you need someone for half a day or a full day's work, we're the team to call.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=960&q=80",
    imageAlt: "Handyman completing a household repair job",
    includes: [
      "Door hanging and adjustment",
      "Window repairs and fittings",
      "Patching and filling walls",
      "Flat-pack assembly",
      "Odd jobs and to-do list clearing",
      "Helping elderly or solo households with home upkeep",
      "Anything else that just needs doing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--color-primary)] pt-32 pb-16">
        <div className="container">
          <div className="max-w-2xl cbd-reveal">
            <span className="section-label-light">Our Services</span>
            <h1
              className="text-[var(--color-text-on-dark)] mt-2"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                lineHeight: 1.05,
              }}
            >
              Everything your property needs.
            </h1>
            <p className="text-white/65 mt-4 text-base leading-relaxed max-w-lg">
              Four services, one crew, one call. CBD Home Solutions covers
              painting, insulation, property maintenance and handyman work
              across Manawatu.
            </p>
          </div>
        </div>
      </section>

      {/* Service Finder */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="container">
          <div className="max-w-2xl mx-auto cbd-reveal">
            <ServiceFinder />
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={[
            "py-20",
            i % 2 === 0 ? "bg-[var(--color-bg)]" : "bg-white",
          ].join(" ")}
        >
          <div className="container">
            <div
              className={[
                "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
                i % 2 !== 0 ? "lg:[direction:rtl]" : "",
              ].join(" ")}
            >
              {/* Image */}
              <div
                className={[
                  "cbd-stagger-item",
                  i % 2 !== 0 ? "lg:[direction:ltr]" : "",
                ].join(" ")}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-black/10">
                  <Image
                    src={svc.image}
                    alt={svc.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-5 left-5 bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    {svc.number}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={[
                  "cbd-stagger-item",
                  i % 2 !== 0 ? "lg:[direction:ltr]" : "",
                ].join(" ")}
              >
                <div className="cbd-divider" />
                <span className="section-label">{svc.name}</span>
                <h2
                  className="text-[var(--color-text)] mt-1 mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                    lineHeight: 1.1,
                  }}
                >
                  {svc.tagline}
                </h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-8 text-sm">
                  {svc.description}
                </p>

                <h3 className="text-[var(--color-text)] font-bold text-sm uppercase tracking-wider mb-4">
                  What&apos;s included
                </h3>
                <ul className="flex flex-col gap-3 mb-8">
                  {svc.includes.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="text-[var(--color-accent)] mt-0.5 shrink-0"
                      />
                      <span className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="cbd-btn-primary">
                  Get a Free Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Strip */}
      <section className="cbd-cta-band py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 cbd-reveal">
            <div>
              <h2
                className="text-white font-extrabold text-2xl md:text-3xl"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
              >
                Ready to get sorted?
              </h2>
              <p className="text-white/75 mt-1">
                Free quotes, Mon-Sat. Manawatu and surrounding areas.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href="tel:0800222249"
                className="inline-flex items-center gap-2 bg-white/15 border border-white/40 hover:bg-white/25 text-white font-semibold text-sm px-6 py-3 rounded-[var(--radius)] transition-all duration-200"
              >
                <Phone size={15} />
                0800 22 22 49
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-accent)] font-bold text-sm px-6 py-3 rounded-[var(--radius)] hover:bg-white/90 transition-all duration-200"
              >
                Book Online
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
