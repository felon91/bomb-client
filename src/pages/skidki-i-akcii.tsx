import Head from 'next/head';
import { PageLayout } from '@/shared/layout/page-layout/page-layout';
import Image from 'next/image';
import type { NextPage } from 'next';
import Link from 'next/link';
import { MainRoutes } from '@/shared/routes/main';

const crumbs = [
  {
    name: 'Главная',
    link: MainRoutes.Main,
  },
  {
    name: 'Скидки и акции',
    link: MainRoutes.Sale,
  },
];

const DiscountsPage: NextPage = () => (
  <>
    <Head>
      <title>Скидки и акции - Fireboom</title>
      <meta
        name="description"
        content="Скидки оговариваются индивидуально для каждого и могут достигать до 25%, в зависимости от вашего торжества и суммы заказа. Звоните и мы договоримся."
      />
    </Head>
    <PageLayout crumbs={crumbs}>123</PageLayout>
  </>
);

export default DiscountsPage;
