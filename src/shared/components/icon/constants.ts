import { CartIcon, PhoneIcon, ViberIcon } from '@/shared/components/icon/index';

export const svgComponents = {
  viber: ViberIcon,
  cart: CartIcon,
  phone: PhoneIcon,
};

export type IconNames = keyof typeof svgComponents;
