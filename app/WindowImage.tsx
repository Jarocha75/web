'use client';

import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

interface SanityImageAsset {
  _type: 'reference';
  _ref: string;
}

export interface SanityImage {
  _type: 'image';
  asset: SanityImageAsset;
}

const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
};

export default function WindowImage({ image, alt, className }: { image: SanityImage; alt: string; className?: string }) {
  const imageProps = useNextSanityImage(sanityConfig, image);

  return (
    <Image
      {...imageProps}
      alt={alt}
      className={className ?? "w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
