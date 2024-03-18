import type { BaseSyntheticEvent, FC } from 'react';
import { forwardRef } from 'react';
import type { ColorType } from '@/shared/types/types';
import { svgComponents } from '@/shared/components/icon/constants';

interface IconProps {
  size?: number;
  width?: number;
  height?: number;
  color?: ColorType;
  hoverColor?: ColorType;
  onClick?: (e: BaseSyntheticEvent) => void;
  name: keyof typeof svgComponents;
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ size, color, hoverColor, onClick, width, height, name }, ref) => {
    const IconComponent = svgComponents[name];

    if (!IconComponent) {
      return null;
    }

    console.log(IconComponent, 'IconComponent');
    const w = size || width;
    const h = size || height;

    return (
      <>
        <IconComponent width={w} height={h} />
      </>
    );
  }
);
