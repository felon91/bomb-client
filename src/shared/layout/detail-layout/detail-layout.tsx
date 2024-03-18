import type { FC, PropsWithChildren } from 'react';
import { Header } from '@/modules/header/header';
import { Navigation } from '@/modules/navigation/navigation';
import { Container } from '@/shared/components/container.styled';
import { Sidebar } from '@/modules/sidebar/sidebar';
import { Footer } from '@/modules/footer/footer';
import {
  DetailLayoutContent,
  DetailLayoutContentLeft,
  DetailLayoutContentRight,
} from '@/shared/layout/detail-layout/detail-layout.styled';
import { Breadcrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { AlsoOrder } from '@/modules/also-order/also-order';
import { useAppSelector } from '@/shared/store/hooks';
import { MainRoutes } from '@/shared/routes/main';
import { useCallback } from 'react';

interface DetailLayoutProps {
  hasAlsoProducts?: boolean;
}

export const DetailLayout: FC<PropsWithChildren<DetailLayoutProps>> = ({
  children,
  hasAlsoProducts = false,
}) => {
  const categories = useAppSelector(state => state.categories.categories);
  const product = useAppSelector(state => state.products.product);
  const { category, title = '', link = '' } = product || {};
  const { name: categoryName, link: categoryLink } = category || {};

  const getCrumbs = useCallback(() => {
    if (!categoryName || !categoryLink) {
      return;
    }
    return [
      {
        name: 'Главная',
        link: MainRoutes.Main,
      },
      {
        name: categoryName,
        link: `/${categoryLink}`,
      },
      {
        name: title,
        link,
      },
    ];
  }, [categoryLink, categoryName, link, title]);

  return (
    <Container minWidth="320px">
      <Header />
      <Navigation />
      <Breadcrumbs crumbs={getCrumbs()} />
      <DetailLayoutContent>
        <DetailLayoutContentLeft>
          <Sidebar sidebar={categories} />
        </DetailLayoutContentLeft>
        <DetailLayoutContentRight>{children}</DetailLayoutContentRight>
      </DetailLayoutContent>
      {hasAlsoProducts && <AlsoOrder />}
      <Footer />
    </Container>
  );
};
