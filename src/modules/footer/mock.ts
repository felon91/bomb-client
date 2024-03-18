import { MainRoutes } from '@/shared/routes/main';

export const footerMock = [
  {
    title: 'Главная',
    link: MainRoutes.Main,
  },
  {
    title: 'Доставка и оплата',
    link: MainRoutes.Delivery,
  },
  {
    title: 'Оптовым клиентам',
    link: MainRoutes.Opt,
  },
  {
    title: 'Проведения торжеств',
    link: MainRoutes.Holiday,
  },
  {
    title: 'Скидки и акции',
    link: MainRoutes.Sale,
  },
  {
    title: 'Контакты',
    link: MainRoutes.Contacts,
  },
];
