import Link from 'next/link';
import {
  FooterContainer,
  FooterElement,
  FooterLogo,
  FooterMenu,
  FooterPhone,
  FooterWrapper,
} from '@/modules/footer/footer.styled';
import { Logo } from '@/shared/components/logo/logo';
import { footerMock } from '@/modules/footer/mock';

export const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <FooterLogo>
        <Logo type="white" />
      </FooterLogo>
      <FooterMenu>
        {footerMock.map(({ title, link }, index) => (
          <FooterElement key={index}>
            <Link href={link}>{title}</Link>
          </FooterElement>
        ))}
      </FooterMenu>
      <FooterPhone>
        <p>
          <Link href="tel:80333553493">+375(33)355-34-93</Link>
        </p>
        <p>
          <Link href="tel:80291306312">+375(29)130-63-12</Link>
        </p>
      </FooterPhone>
    </FooterContainer>
  </FooterWrapper>
);
