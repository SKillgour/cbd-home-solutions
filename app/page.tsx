import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Phone } from "lucide-react";
import CBDHero from "@/components/CBDHero";

const services = [
  {
    id: "painting",
    number: "01",
    label: "Painting",
    desc: "Interior and exterior repaints, new builds, and feature walls done properly — prep, prime, finish.",
    img: "https://images.unsplash.com/photo-1742900280864-bcc27353ceba?auto=format&fit=crop&w=600&q=80",
    imgAlt: "Painter on ladder working on exterior house painting",
  },
  {
    id: "insulation",
    number: "02",
    label: "Insulation",
    desc: "Ceiling, underfloor and wall insulation to keep your home warmer in winter and cooler in summer.",
    img: "https://images.unsplash.com/photo-1753363562638-398f75158ea9?auto=format&fit=crop&w=600&q=80",
    imgAlt: "Insulation installation in a ceiling cavity",
  },
  {
    id: "maintenance",
    number: "03",
    label: "Property Maintenance",
    desc: "Weatherboard repairs, spouting, decks, fences — the jobs that get put off but need doing.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    imgAlt: "Tradesperson working on exterior home repairs",
  },
  {
    id: "handyman",
    number: "04",
    label: "Handyman",
    desc: "That list sitting on the fridge? We'll work through it. No job too small, no list too long.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    imgAlt: "Handyman completing a household repair job",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1688372199140-cade7ae820fe?auto=format&fit=crop&w=800&q=80",
    alt: "Painter in red overalls rolling paint on interior wall",
  },
  {
    src: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=800&q=80",
    alt: "Painter on ladder working on exterior house repaint",
  },
  {
    src: "https://images.unsplash.com/photo-1768839725085-829e6ac7ac26?auto=format&fit=crop&w=800&q=80",
    alt: "Tradesperson applying plaster on a wall repair job",
  },
  {
    src: "https://images.unsplash.com/photo-1753363562638-398f75158ea9?auto=format&fit=crop&w=800&q=80",
    alt: "Insulation being installed in ceiling cavity",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    alt: "Exterior maintenance work on a Manawatu home",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    alt: "Handyman completing a professional home repair",
  },
];

export default function HomePage() {
  return (
    <>
      <CBDHero />

      {/* === STORY BLOCK === */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Image left */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/10">
                <Image
                  src="https://images.unsplash.com/photo-1688372199140-cade7ae820fe?auto=format&fit=crop&w=960&q=80"
                  alt="CBD painter in red overalls rolling a fresh coat of paint on an interior wall"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-4 bg-[var(--color-accent)] text-white rounded-xl px-5 py-4 shadow-lg hidden md:block">
                <p className="text-xs font-semibold uppercase tracking-widest opacity-80">
                  Based in
                </p>
                <p
                  className="text-lg font-bold leading-tight mt-0.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Manawatu, NZ
                </p>
              </div>
            </div>

            {/* Text right */}
            <div>
              <span className="section-label">Who We Are</span>
              <h2
                className="text-[var(--color-text)] mt-2 mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.15,
                }}
              >
                A Manawatu team you can actually count on.
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-5">
                CBD Home Solutions started as CBD Painters and grew because
                people kept asking for more. Painting, yes — but also
                insulation, maintenance and those odd jobs that pile up.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                We&apos;re a local, family-run team. We turn up when we say we
                will, do the work properly, and leave your home tidy. That&apos;s
                genuinely it.
              </p>
              <ul className="flex flex-col gap-3 mb-10">
                {[
                  "Free, no-obligation quotes — always",
                  "Residential and commercial work across Manawatu",
                  "Multi-trade team: one call covers it all",
                  "Tidy, respectful tradespeople on every job",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle2
                      size={17}
                      className="text-[var(--color-accent)] shrink-0"
                    />
                    <span className="text-[var(--color-text-muted)] text-sm">
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

      {/* === SERVICES — 4 SOFT CARDS === */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="container">
          <div className="mb-12">
            <span className="section-label">What We Do</span>
            <h2
              className="text-[var(--color-text)] mt-2"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)",
                lineHeight: 1.15,
              }}
            >
              Four services. One team. One call.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.id}
                href={`/services#${svc.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-surface)] hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-black/8 flex flex-col"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={svc.img}
                    alt={svc.imgAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2">
                    {svc.number}
                  </span>
                  <h3
                    className="text-[var(--color-text)] font-bold text-lg mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {svc.label}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed flex-1">
                    {svc.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[var(--color-accent)] font-semibold text-sm">
                    Learn more
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/services" className="cbd-btn-primary">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* === QUOTE STRIP — grain texture signature element === */}
      <section className="cbd-quote-strip py-24">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="mx-auto mb-6 text-[var(--color-accent)] opacity-60"
              width="40"
              height="30"
              viewBox="0 0 40 30"
              fill="currentColor"
            >
              <path d="M0 30V18C0 7.333 5.333 1.667 16 0l2 4C12.667 5.333 10 8.667 10 14h6v16H0zm22 0V18C22 7.333 27.333 1.667 38 0l2 4C34.667 5.333 32 8.667 32 14h8v16H22z" />
            </svg>
            <blockquote
              className="text-[var(--color-text-on-dark)] italic leading-relaxed mb-8"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)",
                lineHeight: 1.5,
              }}
            >
              The result looks better than when the house was new. The team were
              on time, tidy, and I couldn&apos;t be happier with the job.
            </blockquote>
            <div className="flex items-center justify-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  className="text-[var(--color-accent)] fill-[var(--color-accent)]"
                />
              ))}
            </div>
            <p
              className="text-[var(--color-text-on-dark)] font-semibold text-sm"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Grant Hooper
            </p>
            <p className="text-white/40 text-xs mt-0.5">Feilding, Manawatu</p>
          </div>
        </div>
      </section>

      {/* === OUR WORK GALLERY === */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="container">
          <div className="mb-12">
            <span className="section-label">Our Work</span>
            <h2
              className="text-[var(--color-text)] mt-2"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)",
                lineHeight: 1.15,
              }}
            >
              Finished jobs, across Manawatu.
            </h2>
            <p className="text-[var(--color-text-muted)] mt-3 text-sm max-w-lg">
              Every job is someone&apos;s home. We treat it that way.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={[
                  "relative rounded-xl overflow-hidden group",
                  i === 0 ? "aspect-[4/3]" : "aspect-square",
                ].join(" ")}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="cbd-cta-band py-20">
        <div className="container text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
            Ready to get sorted?
          </span>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.1,
            }}
          >
            We&apos;ll come to you.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Free quotes, Mon–Sat. No pressure, no obligation — just a straight
            answer on what the job will cost.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-accent)] font-bold text-base px-8 py-4 rounded-[var(--radius)] hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a Free Quote
              <ArrowRight size={17} />
            </Link>
            <a
              href="tel:0800222249"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white/60 hover:border-white text-white font-semibold text-base px-8 py-4 rounded-[var(--radius)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              0800 22 22 49
            </a>
          </div>
          <p className="text-white/50 text-sm mt-6">
            Mon–Sat 9am–5pm &nbsp;·&nbsp; Manawatu and surrounding areas
          </p>
        </div>
      </section>
    </>
  );
}
