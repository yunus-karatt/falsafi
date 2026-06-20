"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type Item = { id: string; title: string; image: string };

type Props = { items: Item[] };

export default function RoyalGalleryClient({ items }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((v) => (v === null ? null : (v + 1) % items.length));
      if (e.key === "ArrowLeft")
        setLightboxIndex((v) => (v === null ? null : (v - 1 + items.length) % items.length));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, items.length]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-900 hover:border-brand/30 transition-colors duration-300"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-body text-xs text-zinc-200 tracking-wide">{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-zinc-100 p-2 rounded-md"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() => setLightboxIndex((v) => (v === null ? null : (v - 1 + items.length) % items.length))}
            className="absolute left-6 text-zinc-100 p-2 rounded-md"
            aria-label="Previous image"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full">
            <Image
              src={items[lightboxIndex].image}
              alt={items[lightboxIndex].title}
              width={1600}
              height={1066}
              className="w-full h-auto object-contain rounded-md"
            />
            <div className="mt-4 text-center">
              <p className="text-zinc-300 text-sm">{items[lightboxIndex].title}</p>
            </div>
          </div>

          <button
            onClick={() => setLightboxIndex((v) => (v === null ? null : (v + 1) % items.length))}
            className="absolute right-6 text-zinc-100 p-2 rounded-md"
            aria-label="Next image"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}
