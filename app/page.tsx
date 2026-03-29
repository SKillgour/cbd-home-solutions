import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, MapPin, Phone } from "lucide-react";
import CBDHero from "@/components/CBDHero";

const services = [
  {
    id: "painting",
    label: "Painting Services",
    desc: "Interior and exterior repaints, new builds, feature walls",
    img: "https://images.unsplash.com/photo-1688372199140-cade7ae820fe?auto=format&fit=crop&w=900&q=80",
    imgAlt: "Painter in red overalls rolling paint on interior wall",
    size: "large",
  },
  {
    id: "insulation",
    label: "Insulation Services",
    desc: "Ceiling, underfloor, wall insulation for warmer homes",
    img: "https://images.unsplash.com/photo-1753363562638-398f75158ea9?auto=format&fit=crop&w=900&q=80",
    imgAlt: "Reflective foil insulation installed in residential attic space",
    size: "large",
  },
  {
    id: "maintenance",
    label: "Property Maintenance",
    desc: "General repairs, fixes, and upkeep for homes and businesses",
    img: "https://images.unsplash.com/photo-1742900280864-bcc27353ceba?auto=format&fit=crop&w=700&q=80",
    imgAlt: "Painter on ladder working on exterior house maintenance",
    size: "small",
  },
  {
    id: "handyman",
    label: "Handyman Services",
    desc: "Those odd jobs that need doing. No job too small",
    img: "https://images.unsplash.com/photo-1768839725085-829e6ac7ac26?auto=format&fit=crop&w=700&q=80",
    imgAlt: "Tradesperson applying plaster with trowel on a wall repair job",
    size: "small",
  },
];

const testimonials = [
  {
    quote:
      "Amazing painters, they do a great job at a great price. Really easy company to work with! Would recommend.",
    name: "Melissa Larsen",
    detail: "Palmerston North",
    stars: 5,
  },
  {
    quote:
      "Had CBD come out to repaint our weatherboards and sort some maintenance. The team were on time, tidy and the result looks better than when the house was new. Very happy.",
    name: "Grant Hooper",
    detail: "Feilding",
    stars: 5,
  },
  {
    quote:
      "Quick to respond, fair pricing, and the finished job was spot on. They did our ceiling insulation and a bunch of small repairs. Would definitely use again.",
    name: "Rachel T.",
    detail: "Levin",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <CBDHero />

      {/* === WHAT WE DO === */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="container">
          <div className="mb-14 cbd-reveal">
            <span className="section-label">What We Do</span>
            <h2
              className="text-[var(--color-text)] mt-1"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.1,
              }}
            >
              One team. Four core services.
            </h2>
            <p className="text-[var(--color-text-muted)] mt-3 text-base max-w-xl">
              From a fresh coat of paint to a full winter-ready home, CBD Home Solutions
              covers it all across Manawatu.
            </p>
          </div>

          {/* Editorial layout: offset asymmetric grid */}
          <div className="cbd-stagger-group grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Large card 1 - spans 7 cols, tall */}
            <div className="cbd-stagger-item md:col-span-7">
              <div className="cbd-service-card h-full min-h-[360px] md:min-h-[480px] relative group">
                <div className="relative w-full h-full min-h-[360px] md:min-h-[480px]">
                  <Image
                    src={services[0].img}
                    alt={services[0].imgAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(29,58,40,0.92)] via-[rgba(29,58,40,0.35)] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2">
                      01
                    </span>
                    <h3
                      className="text-white text-2xl font-extrabold mb-2"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                    >
                      {services[0].label}
                    </h3>
                    <p className="text-white/75 text-sm leading-relaxed mb-4">
                      {services[0].desc}
                    </p>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-white font-semibold text-sm transition-colors"
                    >
                      See details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: large + two small stacked */}
            <div className="cbd-stagger-item md:col-span-5 flex flex-col gap-5">
              {/* Large card 2 */}
              <div className="cbd-service-card flex-1 min-h-[240px] md:min-h-[280px] relative group">
                <div className="relative w-full h-full min-h-[240px] md:min-h-[280px]">
                  <Image
                    src={services[1].img}
                    alt={services[1].imgAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(29,58,40,0.92)] via-[rgba(29,58,40,0.3)] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-1.5">
                      02
                    </span>
                    <h3
                      className="text-white text-xl font-extrabold mb-1"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                    >
                      {services[1].label}
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed">
                      {services[1].desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Two small cards side by side */}
              <div className="grid grid-cols-2 gap-5">
                {services.slice(2).map((svc, i) => (
                  <div
                    key={svc.id}
                    className="cbd-service-card min-h-[180px] relative group"
                  >
                    <div className="relative w-full h-full min-h-[180px]">
                      <Image
                        src={svc.img}
                        alt={svc.imgAlt}
                        fill
                        sizes="21vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(29,58,40,0.95)] via-[rgba(29,58,40,0.5)] to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-1">
                          0{i + 3}
                        </span>
                        <h3
                          className="text-white text-sm font-extrabold leading-tight mb-1"
                          style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                        >
                          {svc.label}
                        </h3>
                        <p className="text-white/60 text-xs leading-snug hidden sm:block">
                          {svc.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 cbd-reveal">
            <Link href="/services" className="cbd-btn-primary">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE CBD === */}
      <section className="py-24 bg-[var(--color-primary)]">
        <div className="container">
          {/* Stats row */}
          <div className="cbd-stagger-group grid grid-cols-1 sm:grid-cols-3 gap-0 mb-20">
            {[
              {
                stat: "100",
                suffix: "%",
                label: "Manawatu-Based",
                sub: "Local team, local knowledge",
              },
              {
                stat: "2",
                suffix: " sectors",
                label: "Residential + Commercial",
                sub: "Homes and businesses welcome",
              },
              {
                stat: "Free",
                suffix: "",
                label: "Free Quotes Always",
                sub: "No obligation, ever",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={[
                  "cbd-stagger-item text-center py-10 px-6",
                  i < 2
                    ? "border-b sm:border-b-0 sm:border-r border-white/10"
                    : "",
                ].join(" ")}
              >
                <div className="stat-number mb-2">
                  {item.stat === "Free" ? (
                    <span>{item.stat}</span>
                  ) : (
                    <>
                      <span
                        className="cbd-count-stat"
                        data-target={item.stat}
                        data-suffix={item.suffix}
                      >
                        0
                      </span>
                    </>
                  )}
                </div>
                <p
                  className="text-[var(--color-text-on-dark)] font-bold text-lg mb-1"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  {item.label}
                </p>
                <p className="text-white/50 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Why points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className="cbd-reveal">
              <span className="section-label-light">Why Choose Us</span>
              <h2
                className="text-[var(--color-text-on-dark)] mt-2 mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                }}
              >
                We show up, do the job right, and make it simple.
              </h2>
              <p className="text-white/65 leading-relaxed mb-8">
                CBD Home Solutions is a Manawatu-based team that takes pride in
                clean work, clear communication and leaving your property better
                than we found it. No surprises on the invoice.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "Locally owned and operated in Manawatu",
                  "Multi-trade team - one call gets it all sorted",
                  "Free, no-obligation quotes every time",
                  "Residential and commercial work welcome",
                  "Tidy, respectful tradespeople on every job",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-[var(--color-accent)] mt-0.5 shrink-0"
                    />
                    <span className="text-white/80 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonials */}
            <div className="flex flex-col gap-5 cbd-stagger-group">
              {testimonials.map((t) => (
                <div key={t.name} className="testimonial-card cbd-stagger-item">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-[var(--color-accent)] fill-[var(--color-accent)]"
                      />
                    ))}
                  </div>
                  <p className="text-white/85 text-sm leading-relaxed mb-4 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white text-xs font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {t.name}
                      </p>
                      <p className="text-white/40 text-xs flex items-center gap-1">
                        <MapPin size={10} />
                        {t.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === CTA BAND === */}
      <section className="cbd-cta-band py-20">
        <div className="container text-center cbd-reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
            Ready to Get Started?
          </span>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.05,
            }}
          >
            We&apos;ll come to you.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            We&apos;ll come to you, assess the job, and give you a clear quote.
            No surprises, no pressure.
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
            Mon-Sat 9am-5pm. Manawatu and surrounding areas.
          </p>
        </div>
      </section>
    </>
  );
}
