import type { Metadata } from "next";
import HomePage from "@/components/modules/HomePage";

export const metadata: Metadata = {
  title: {
    absolute: "Meltique Gift Collections | Handcrafted Sweet Treats & Custom Gift Boxes",
  },
  description:
    "Make every moment a little sweeter with Meltique Gift Collections. Explore handcrafted chocolate boxes, assorted macarons, caramel truffles, and custom made gift hampers.",
  keywords: [
    "Meltique",
    "Meltique Gift Collections",
    "sweet gift boxes",
    "handcrafted treats",
    "signature chocolate box",
    "macaron collection",
    "caramel truffles",
    "custom made gifts",
    "luxury gifting Dubai",
  ],
  openGraph: {
    title: "Meltique Gift Collections | Handcrafted Sweet Treats & Custom Gift Boxes",
    description:
      "Handcrafted treats, beautifully packed and ready to make someone's day. Explore our signature chocolate boxes, macarons, and custom gift hampers.",
    type: "website",
    images: [
      {
        url: "/assets/img/product-banner-img.png",
        width: 600,
        height: 550,
        alt: "Meltique Handcrafted Gift Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meltique Gift Collections | Handcrafted Sweet Treats & Custom Gift Boxes",
    description:
      "Handcrafted treats, beautifully packed and ready to make someone's day. Explore our signature chocolate boxes, macarons, and custom gift hampers.",
    images: ["/assets/img/product-banner-img.png"],
  },
};

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
