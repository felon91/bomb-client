import Head from 'next/head';
import { PageLayout } from '@/shared/layout/page-layout/page-layout';
import type { NextPage } from 'next';
import { MainRoutes } from '@/shared/routes/main';
import { Cart } from '@/modules/cart/cart';

const crumbs = [
  {
    name: 'Главная',
    link: MainRoutes.Main,
  },
  {
    name: 'Корзина',
    link: MainRoutes.Cart,
  },
];

const CartPage: NextPage = () => (
  <>
    <Head>
      <title>Корзина - Fireboom</title>
      <meta name="description" content="Купить салют в Минске, корзина - Fireboom" />
    </Head>
    <PageLayout crumbs={crumbs}>
      <Cart />
    </PageLayout>
  </>
);

export default CartPage;
