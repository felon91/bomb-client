import type { FC, PropsWithChildren } from 'react';
import { Navigation } from '@/modules/navigation/navigation';
import { Container } from '@/shared/components/container.styled';
import { Sidebar } from '@/modules/sidebar/sidebar';
import {
  MainLayoutContent,
  MainLayoutContentLeft,
  MainLayoutContentRight,
} from '@/shared/layout/main-layout/main-layout.styled';

import { Footer } from '@/modules/footer/footer';
import { useAppSelector } from '@/shared/store/hooks';
import type { Crumb } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import Header from '@/widgets/header/header';

interface MainLayoutProps extends PropsWithChildren {
  hasAdvantages?: boolean;
  hasBreadCrumbs?: boolean;
  hasSlider?: boolean;
  crumbs?: Crumb[];
}

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  hasAdvantages = true,
  hasBreadCrumbs,
  hasSlider = true,
  crumbs,
}) => {
  const categories = useAppSelector(state => state.categories.categories);
  const activeCategory = useAppSelector(state => state.categories.activeCategory);

  return (
    <Container minWidth="320px">
      <Header />
      <Navigation />
      {hasBreadCrumbs && <Breadcrumbs crumbs={crumbs} />}
      <main>
        <MainLayoutContent>
          <MainLayoutContentLeft>
            <Sidebar sidebar={categories} />
          </MainLayoutContentLeft>
          <MainLayoutContentRight>{children}</MainLayoutContentRight>
        </MainLayoutContent>
      </main>
      <Footer />
    </Container>
  );
};
