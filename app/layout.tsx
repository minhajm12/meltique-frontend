import type { Metadata } from "next";
import { Poppins, Sora, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/common/SmoothScroll";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://meltiquegifts.com"),
  title: {
    default: "Meltique Gift Collections | Handcrafted Treats & Luxury Gift Hampers",
    template: "%s | Meltique Gift Collections",
  },
  description:
    "Discover Meltique Gift Collections—handcrafted chocolates, assorted macarons, caramel truffles, and custom luxury gift hampers made with love and packed with elegance.",
  keywords: [
    "Meltique Gift Collections",
    "Meltique Gifts",
    "handcrafted chocolates",
    "luxury gift hampers",
    "custom gift boxes",
    "assorted macarons",
    "caramel truffles",
    "corporate gifting",
    "sweet gifts",
    "gift collections Dubai",
  ],
  authors: [{ name: "Meltique Gift Collections" }],
  creator: "Meltique Gift Collections",
  publisher: "Meltique Gift Collections",
  icons: {
    icon: [
      {
        url: "/assets/img/logo/meltique-favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/assets/img/logo/meltique-favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Meltique Gift Collections",
    title: "Meltique Gift Collections | Handcrafted Treats & Luxury Gift Hampers",
    description:
      "Handcrafted treats, signature chocolate boxes, macarons, and custom luxury gift hampers crafted with quality ingredients and elegant packaging.",
    images: [
      {
        url: "/assets/img/product-banner-img.png",
        width: 600,
        height: 550,
        alt: "Meltique Gift Collections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meltique Gift Collections | Handcrafted Treats & Luxury Gift Hampers",
    description:
      "Handcrafted treats, signature chocolate boxes, macarons, and custom luxury gift hampers crafted with quality ingredients and elegant packaging.",
    images: ["/assets/img/product-banner-img.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", sora.variable, poppins.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="">
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </main>
        <Footer />
      </body>
    </html>
  );
}
