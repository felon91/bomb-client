import Head from 'next/head';
import { MainLayout } from '@/shared/layout/main-layout/main-layout';
import { Products } from '@/modules/products/products';
import { reduxWrapper } from '@/shared/store/store';
import {
  getAllCategories,
  getRunningQueriesThunk,
} from '@/shared/services/product-categories/product-categories';
import { getPopularProducts } from '@/shared/services/products/products';
import { ssrDispatch } from '@/shared/store/ssr-dispatch';

const Home = () => (
  <>
    <Head>
      <title>Купить салют и фейерверк в Минске по лучшей цене</title>
      <meta
        name="description"
        content="Хотите купить салюты и фейерверки в Минске? Магазин fireboom.by к вашим услугам! Любой праздник будет ярче, если дополнить его современной пиротехникой."
      />
    </Head>
    <MainLayout>
      <Products />
    </MainLayout>
  </>
);

export default Home;

export const getServerSideProps = reduxWrapper.getServerSideProps(store => async ctx => {
  await Promise.all([
    ssrDispatch(store.dispatch, getPopularProducts.initiate(null)),
    ssrDispatch(store.dispatch, getAllCategories.initiate(null)),
  ]);

  await Promise.all(ssrDispatch(store.dispatch, getRunningQueriesThunk()));
  return { props: {} };
});
