'use client';

import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

// — Konštanty —

const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
}

const DEFAULT_CLASS = "w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
const DEFAULT_SIZES = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

// — Typy —

interface SanityImageAsset {
  _type: 'reference';
  _ref: string;
}

export interface SanityImage {
  _type: 'image';
  asset: SanityImageAsset;
}

// — Komponent —

export default function WindowImage({ image, alt, className }: { image: SanityImage; alt: string; className?: string }) {
  const imageProps = useNextSanityImage(sanityConfig, image);

  return (
    <Image
      {...imageProps}
      alt={alt}
      className={className ?? DEFAULT_CLASS}
      sizes={DEFAULT_SIZES}
    />
  );
}
