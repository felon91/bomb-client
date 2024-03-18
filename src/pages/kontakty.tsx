import Head from 'next/head';
import { PageLayout } from '@/shared/layout/page-layout/page-layout';
import type { NextPage } from 'next';
import { MainRoutes } from '@/shared/routes/main';

const crumbs = [
  {
    name: 'Главная',
    link: MainRoutes.Main,
  },
  {
    name: 'Контакты',
    link: MainRoutes.Contacts,
  },
];

const DiscountsPage: NextPage = () => (
  <>
    <Head>
      <title>Контакты - Fireboom</title>
      <meta name="description" content="Контакты компании Fireboom в Минске" />
    </Head>
    <PageLayout crumbs={crumbs}>213123</PageLayout>
  </>
);

export default DiscountsPage;
