import Head from 'next/head';
import { DetailLayout } from '@/shared/layout/detail-layout/detail-layout';
import { DetailProduct } from '@/modules/detail-product/detail-product';
import { reduxWrapper } from '@/shared/store/store';
import {
  getAllCategories,
  getRunningQueriesThunk,
} from '@/shared/services/product-categories/product-categories';
import { getProductBySlug } from '@/shared/services/products/products';
import { MainRoutes } from '@/shared/routes/main';
import { useAppSelector } from '@/shared/store/hooks';
import { ssrDispatch } from '@/shared/store/ssr-dispatch';

export default function Home() {
  const { title } = useAppSelector(state => state.products.product) || {};
  const seoTitle = title ? `${title} - Fireboom` : '';

  return (
    <>
      <Head>
        {seoTitle && <title>{seoTitle}</title>}
        {title && <meta name="description" content={`Купить салют ${title} в Минске`} />}
      </Head>
      <DetailLayout>
        <DetailProduct />
      </DetailLayout>
    </>
  );
}

export const getServerSideProps = reduxWrapper.getServerSideProps(store => async ctx => {
  const { resolvedUrl } = ctx;

  const slug = resolvedUrl.replace(MainRoutes.Shop, '').slice(1, -1);

  const [product] = await Promise.all([
    getProductBySlug.initiate(slug)(store.dispatch, store.getState, null),
    ssrDispatch(store.dispatch, getAllCategories.initiate(null)),
  ]);

  if (!product?.data) {
    return { notFound: true };
  }

  await Promise.all(ssrDispatch(store.dispatch, getRunningQueriesThunk()));
  return { props: {} };
});
