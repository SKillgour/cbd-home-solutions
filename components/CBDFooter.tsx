import Link from "next/link";
import { Phone, Clock, MapPin } from "lucide-react";

export default function CBDFooter() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-text-on-dark)]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <p
                className="font-extrabold text-lg tracking-tight text-white"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
              >
                CBD HOME SOLUTIONS
              </p>
              <p className="text-[0.65rem] tracking-widest uppercase text-white/50 mt-0.5 font-medium">
                Also known as CBD Painters
              </p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Manawatu&apos;s trusted team for painting, insulation, property
              maintenance and handyman services. We show up, do the job right,
              and make it easy for you.
            </p>
            <div className="mt-6">
              <a
                href="https://www.facebook.com/CBDpaintersmanawatu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-accent)]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Follow us on Facebook
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:0800222249"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors duration-200 text-sm"
                >
                  <Phone size={15} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <span className="font-semibold text-white">0800 22 22 49</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Clock size={15} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
                <span>Mon - Sat: 9am to 5pm</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={15} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
                <span>Manawatu and surrounding areas, NZ</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Painting Services",
                "Insulation Services",
                "Property Maintenance",
                "Handyman Services",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} CBD Home Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/services"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              Contact
            </Link>
            <a
              href="https://www.facebook.com/CBDpaintersmanawatu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", fontSize: "0.68rem", opacity: 0.35, marginTop: "1.5rem", paddingBottom: "0.75rem", letterSpacing: "0.02em" }}>Website by <a href="https://insightly.nz" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>Insightly</a></p>
    </footer>
  );
}
