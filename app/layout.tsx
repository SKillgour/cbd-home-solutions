import type { Metadata } from "next";
import "./globals.css";
import CBDHeader from "@/components/CBDHeader";
import CBDFooter from "@/components/CBDFooter";
import CBDScrollAnimations from "@/components/CBDScrollAnimations";

export const metadata: Metadata = {
  title: "CBD Home Solutions | Painting & Property Maintenance Manawatu",
  description:
    "Painting, insulation, property maintenance and handyman services across Manawatu and surrounding areas. Call 0800 22 22 49 for a free quote.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CBDHeader />
        <main>{children}</main>
        <CBDFooter />
        <CBDScrollAnimations />
      </body>
    </html>
  );
}
