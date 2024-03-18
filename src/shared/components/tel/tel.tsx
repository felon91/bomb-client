import React from 'react';
import { ColorType } from '@/shared/types/types';
import { StyledLink } from '@/shared/components/styled-link/styled-link';
import type { IconNames } from '@/shared/components/icon';
import { Icon } from '@/shared/components/icon/Icon';
import {
  TelWrapperStyled,
  PhoneNumberStyled,
  PhoneIconStyled,
} from '@/shared/components/tel/tel.styled';

interface TelProps {
  phoneNumber: string;
  iconName?: IconNames;
  iconSize?: number;
  iconHeight?: number;
  iconWidth?: number;
  color?: ColorType;
}

export const Tel: React.FC<TelProps> = ({
  phoneNumber,
  iconName,
  iconHeight,
  iconWidth,
  iconSize = 14,
  color = ColorType.Black,
}) => (
  <StyledLink href={`tel:${phoneNumber}`} linkColor={color}>
    <TelWrapperStyled>
      <PhoneIconStyled>
        {iconName && <Icon name={iconName} height={iconHeight} width={iconWidth} size={iconSize} />}
      </PhoneIconStyled>
      <PhoneNumberStyled>{phoneNumber}</PhoneNumberStyled>
    </TelWrapperStyled>
  </StyledLink>
);
