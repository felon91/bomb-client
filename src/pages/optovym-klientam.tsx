import Head from 'next/head';
import { PageLayout } from '@/shared/layout/page-layout/page-layout';
import Link from 'next/link';
import { MainRoutes } from '@/shared/routes/main';
import type { NextPage } from 'next';

const crumbs = [
  {
    name: 'Главная',
    link: MainRoutes.Main,
  },
  {
    name: 'Оптовым клиентам',
    link: MainRoutes.Opt,
  },
];

const Opt: NextPage = () => (
  <>
    <Head>
      <title>Оптовым клиентам - Fireboom</title>
      <meta
        name="description"
        content="Наша компания осуществляет оптовые продажи пиротехники по лучшим ценам во всей стране."
      />
    </Head>
    <PageLayout crumbs={crumbs}>123</PageLayout>
  </>
);

export default Opt;
