import { MainRoutes } from '@/shared/routes/main';

export const menuMock = [
  {
    title: 'Главная',
    url: MainRoutes.Main,
  },
  {
    title: 'Доставка и оплата',
    url: MainRoutes.Delivery,
  },
  {
    title: 'Оптовым клиентам',
    url: MainRoutes.Opt,
  },
  {
    title: 'Проведения торжеств',
    url: MainRoutes.Holiday,
  },
  {
    title: 'Скидки и акции',
    url: MainRoutes.Sale,
  },
  {
    title: 'Контакты',
    url: MainRoutes.Contacts,
  },
];
