import type { FC } from 'react';
import Link from 'next/link';
import { PhonesBlock, ViberPhone } from '@/shared/components/phones/phones.styled';

export const Phones: FC = () => (
  <PhonesBlock>
    <p>
      <Link href="tel:80333553493">+375(33)355-34-93</Link>
    </p>
    <p>
      <ViberPhone className="phone__viber" href="tel:80291306312">
        +375(29)130-63-12
      </ViberPhone>
    </p>
  </PhonesBlock>
);
