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
    name: 'Доставка и оплата',
    link: MainRoutes.Delivery,
  },
];

const Delivery: NextPage = () => (
  <>
    <Head>
      <title>Условия Доставки и Оплаты От Компании Fireboom</title>
      <meta
        name="description"
        content="Мы доставим ваш заказ по г.Минску, и до 10 км от МКАД бесплатно, при заказе на сумму от 40 руб. Если сумма заказа менее 40 руб, то доставка платной - 5 руб."
      />
    </Head>
    <PageLayout crumbs={crumbs}>123</PageLayout>
  </>
);

export default Delivery;
