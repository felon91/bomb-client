import Head from 'next/head';
import { MainLayout } from '@/shared/layout/main-layout/main-layout';
import { Products } from '@/modules/products/products';
import { reduxWrapper } from '@/shared/store/store';
import {
  getAllCategories,
  getCategoryBySlug,
} from '@/shared/services/product-categories/product-categories';
import { getProductsByCategory, getRunningQueriesThunk } from '@/shared/services/products/products';
import { MainRoutes } from '@/shared/routes/main';
import { useAppSelector } from '@/shared/store/hooks';
import { ssrDispatch } from '@/shared/store/ssr-dispatch';

export default function Home() {
  const { name, seoTitle, seoDescription } =
    useAppSelector(state => state.categories.activeCategory) || {};

  const crumbs = name
    ? [
        {
          name: 'Главная',
          link: MainRoutes.Main,
        },
        {
          name,
          link: '',
        },
      ]
    : undefined;

  return (
    <>
      <Head>
        {seoTitle && <title>{seoTitle}</title>}
        {seoDescription && <meta name="description" content={seoDescription} />}
      </Head>
      <MainLayout hasSlider={false} hasAdvantages={false} hasBreadCrumbs crumbs={crumbs}>
        <Products />
      </MainLayout>
    </>
  );
}

export const getServerSideProps = reduxWrapper.getServerSideProps(store => async ctx => {
  const [currentCategory] = await Promise.all([
    getCategoryBySlug.initiate(ctx.query['product-category'] as string)(
      store.dispatch,
      store.getState,
      null
    ),
    ssrDispatch(store.dispatch, getAllCategories.initiate(null)),
  ]);

  if (!currentCategory?.data?._id) {
    return { notFound: true };
  }

  ssrDispatch(
    store.dispatch,
    getProductsByCategory.initiate({
      id: currentCategory.data._id,
    })
  );

  await Promise.all(ssrDispatch(store.dispatch, getRunningQueriesThunk()));
  return { props: {} };
});
