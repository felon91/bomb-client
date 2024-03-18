import Image from 'next/image';
import Link from 'next/link';
import { LogoWrapper } from '@/shared/components/logo/logo.styled';
import React from 'react';
import logoWhite from './img/logo-white.svg';
import logoBlack from './img/logo.svg';

interface LogoProps {
  type?: 'white' | 'black';
}

export const Logo: React.FC<LogoProps> = ({ type = 'black' }) => {
  const logoPath = type === 'black' ? logoBlack : logoWhite;

  return (
    <LogoWrapper marginBottom="5px">
      <Link href="/">
        <Image width="241" height="70" src={logoPath} alt="Fireboom купить салют в Минске" />
      </Link>
    </LogoWrapper>
  );
};
