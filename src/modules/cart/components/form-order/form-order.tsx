import type { FC } from 'react';
import {
  FormOrderButton,
  FormOrderTitle,
  FormOrderWrapper,
} from '@/modules/cart/components/form-order/form-order.syled';
import { memo } from 'react';
import { Form } from '@/shared/components/form/form';
import { FormInput } from '@/modules/cart/components/form-input/form-input';
import { FormTextArea } from '@/modules/cart/components/form-textarea/form-text-area';
import { useSendOrderMutation } from '@/shared/services/order/order';
import { useAppSelector } from '@/shared/store/hooks';
import type { IOrderProduct, CartProduct } from '@/shared/services/order/models';

export const FormOrderWrap: FC = () => {
  const products = useAppSelector(state => state.cart.productsInCart) || {};

  const productsList: CartProduct[] = Object.values(products).map(({ title, count, price }) => ({
    orderName: title,
    orderQuantity: count || 1,
    price: count && price ? count * +price : 0,
  }));

  const fullPrice = productsList.reduce((acc, { orderQuantity, price }) => acc + +price, 0);

  const [
    sendOrderMutation, // This is the mutation trigger
    { isLoading }, // You can use the `isLoading` flag, or do custom logic with `status`
  ] = useSendOrderMutation();

  const handleSubmit = async (data: Omit<IOrderProduct, 'products' | 'fullPrice'>) => {
    const result: IOrderProduct = {
      ...data,
      products: productsList,
      fullPrice,
    };

    await sendOrderMutation(result);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormOrderWrapper>
        <FormOrderTitle>Форма заказа</FormOrderTitle>
        <FormInput id="form-name" name="name" label="Ваше имя" />
        <FormInput
          type="tel"
          id="form-phone"
          name="phone"
          label="Ваш телефон"
          rules={{
            required: 'Поле является обязательным',
          }}
        />

        <FormTextArea
          id="form-address"
          name="address"
          label="Адрес доставки*"
          rules={{
            required: 'Поле является обязательным',
          }}
        />
        <FormTextArea id="form-comment" name="comment" label="Комментарий" />
        <FormOrderButton disabled={isLoading} type="submit">
          {isLoading ? 'Идет отправка заказа' : 'Оформить заказ'}
        </FormOrderButton>
        <p>
          Если сумма заказа <b>менее 80 рублей, то доставка является платной</b>.
        </p>
        <p>
          <b>Стоимость доставки по г.Минску, и до 10 км от МКАД:</b>
        </p>
        <p>
          При заказе:
          <br />
          <b>от 80 руб. — бесплатно</b>
          <br />
          <b>до 80 руб. — 7 руб.</b>
          <br />
        </p>
        <p>Также наша компания осушествляет доставку по всей республике Беларусь.</p>
        <p>Если сумма заказа менее 200 рублей, то доставка является платной.</p>
        <p>
          <b>Стоимость доставки по РБ:</b>
        </p>
        <p>
          При заказе:
          <br />
          <b>от 200 руб. - бесплатно</b>
          <br />
          <b>от 150 до 200 руб. — 7 руб.</b>
          <br />
          <b>от 100 до 150 руб. — 10 руб.</b>
          <br />
          <b>от 50 до 100 руб. — 15 руб.</b>
          <br />
          <b>до 50 руб. — 17 руб.</b>
        </p>
      </FormOrderWrapper>
    </Form>
  );
};

export const FormOrder = memo(FormOrderWrap);
