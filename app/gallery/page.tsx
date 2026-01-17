"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import MasonryGrid from "@/components/ui/custom/masonry-grid";

function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 274 274' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.7' numOctaves='10' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity: 0.5,
      }}
    />
  );
}

export default function GalleryPage() {
  const galleryImages = [
    "bday.jpg",
    "black.jpg",
    "blue.jpg",
    "cheetah.jpg",
    "fringe.jpg",
    "green.jpg",
    "red.jpg",
    "redfull.jpg",
    "silk.jpg",
    "suit.jpg",
    "unnamed.jpg",
  ];

  return (
    <div className="relative z-10 min-h-screen">
      <NoiseOverlay />
      {/* Header */}
      <header className="py-3 md:py-4">
        <div className="mx-auto max-w-6xl px-4">
          <Link
            className="mb-4 inline-flex items-center gap-2 text-foreground transition-colors hover:text-foreground/80"
            href="/"
          >
            <ArrowLeft className="size-5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-center font-semibold text-2xl tracking-tight sm:text-3xl md:text-4xl">
            Ms. Chen Expert Tailoring
          </h1>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-bold text-4xl">Gallery</h2>
          <MasonryGrid
            className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4"
            gap="1rem"
            items={galleryImages}
            renderItem={(imageName) => (
              <Card className="overflow-hidden rounded-none p-0">
                <div className="relative w-full">
                  <Image
                    alt={`Ms. Chen's tailoring work - ${imageName.replace(".jpg", "")}`}
                    className="h-auto w-full object-cover"
                    height={800}
                    src={`/work/${imageName}`}
                    width={600}
                  />
                </div>
              </Card>
            )}
          />
        </div>
      </section>
    </div>
  );
}
