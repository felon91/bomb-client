import React from 'react';
// eslint-disable-next-line no-restricted-imports
import NextImage from 'next/image';

const loader = ({ src = '', width = 200, quality = 75 }) =>
  `${process.env.NEXT_PUBLIC_STATIC_URL || ''}${src}?w=${width}&q=${quality}`;

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height?: number;
  quality?: number;
  hasLoader?: boolean;
}

export const Image: React.FC<ImageProps> = ({
  src = '',
  alt,
  quality,
  width,
  height,
  hasLoader,
}) => (
  <NextImage
    src={src}
    alt={alt}
    width={width}
    height={height}
    quality={quality}
    loader={hasLoader ? loader : undefined}
  />
);
