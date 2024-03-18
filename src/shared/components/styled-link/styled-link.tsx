import React from 'react';
import { WrapperLink } from './styled-link.styled';
import type { AnchorHTMLAttributes } from 'react';
import { ColorType } from '@/shared/types/types';
import Link from 'next/link';

interface StyledLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  linkColor?: ColorType | undefined;
  href: string;
  isBold?: boolean;
}

export enum Target {
  blank = '_blank',
  self = '_self',
  parent = '_parent',
  top = '_top',
}

export const StyledLink: React.FC<StyledLinkProps> = ({
  href,
  children,
  linkColor = ColorType.Gray,
  target = Target.self,
  isBold = true,
  ...props
}) => {
  const externalProps: { rel?: string } = {};

  if (target === Target.blank) {
    externalProps.rel = 'noopener noreferrer';
  }

  return (
    <WrapperLink isBold={isBold} linkColor={linkColor}>
      <Link href={href} target={target} {...externalProps} {...props}>
        {children}
      </Link>
    </WrapperLink>
  );
};
