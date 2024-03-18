interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

declare module '*.png' {
  const content: StaticImageData;

  export default content;
}

declare module '*.svg' {
  import type { FC, SVGProps } from 'react';

  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;

  const src: string;

  export default src;
}

declare module '*.jpg' {
  const content: StaticImageData;

  export default content;
}

declare module '*.webp' {
  const content: StaticImageData;

  export default content;
}
