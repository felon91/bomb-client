import type { FC } from 'react';
import { HamburgerButton } from '@/modules/navigation/components/hamburger/hamburger.styled';
import { useState } from 'react';

interface HamburgerProps {
  onClick?: (val: boolean) => void;
}

export const Hamburger: FC<HamburgerProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HamburgerButton
      isOpen={isOpen}
      onClick={() => {
        setIsOpen(!isOpen);
        onClick?.(!isOpen);
      }}
    >
      {!isOpen && <span />}
    </HamburgerButton>
  );
};
