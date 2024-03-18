import type { FC, PropsWithChildren } from 'react';
import { Header } from '@/modules/header/header';
import { Navigation } from '@/modules/navigation/navigation';
import { Container } from '@/shared/components/container.styled';
import { Footer } from '@/modules/footer/footer';
import type { Crumb } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Indents } from '@/shared/types/types';

interface PageProps {
  crumbs?: Crumb[];
}

export const PageLayout: FC<PropsWithChildren<PageProps>> = ({ children, crumbs }) => (
  <Container minWidth="320px">
    <Header />
    <Navigation />
    <Breadcrumbs crumbs={crumbs} />
    <main>
      <Container maxWidth="1170px" padding={Indents['16px']}>
        {children}
      </Container>
    </main>
    <Footer />
  </Container>
);
