"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558244661-d248897f7bc4?w=800&q=85",
    alt: "Modern stone driveway with lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
    alt: "Elegant stone walkway through garden",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
    alt: "Luxury outdoor patio with fire pit",
  },
  {
    src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&q=85",
    alt: "Natural stone retaining wall",
  },
];

export default function Gallery() {
  const { t } = useLang();

  return (
    <section id="gallery" className="bg-[#F8F8F4] py-24">
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <p className="text-[11px] tracking-[0.4em] text-[#6B7A42] uppercase mb-3">
          {t.gallery.subtitle}
        </p>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black uppercase">
          {t.gallery.title}
        </h2>
        <div className="w-12 h-0.5 bg-[#6B7A42] mx-auto mt-4" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {galleryImages.map((img, i) => (
          <div key={i} className="relative group overflow-hidden aspect-[3/4]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Label overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#6B7A42] py-3 px-4">
              <span className="text-[11px] tracking-[0.3em] text-white uppercase font-medium">
                {t.gallery.items[i]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
