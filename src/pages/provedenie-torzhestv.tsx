import Head from 'next/head';
import { PageLayout } from '@/shared/layout/page-layout/page-layout';
import Image from 'next/image';
import type { NextPage } from 'next';
import { MainRoutes } from '@/shared/routes/main';

const crumbs = [
  {
    name: 'Главная',
    link: MainRoutes.Main,
  },
  {
    name: 'Проведение торжеств',
    link: MainRoutes.Holiday,
  },
];

const ProvedenieTorzhestv: NextPage = () => (
  <>
    <Head>
      <title>Проведение торжеств - Fireboom</title>
      <meta
        name="description"
        content="Fireboom предлагает услуги по проведению вашего незабываемого торжества, а именно: фейерверк шоу, пиротехнические фигуры, надписи, сердца, и многое другое."
      />
    </Head>
    <PageLayout crumbs={crumbs}>123</PageLayout>
  </>
);

export default ProvedenieTorzhestv;
