const routes = [
  {
    path: '/',
    redirect: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/admin',
        component: () => import('pages/HomePages/MyRestaurant.vue'),
      },

      {
        path: '/products',
        component: () => import('pages/products/ProductsIndex.vue'),
      },
      {
        path: '/invoices',
        component: () => import('pages/invoices/InvoiceIndex.vue'),
      },
      {
        path: '/general',
        component: () => import('pages/General/GeneralHome.vue'),
      },
      {
        path: '/generalSD',
        component: () => import('pages/General/generalSD.vue'),
      },
      {
        path: '/openingHours',
        component: () => import('pages/General/openingHours.vue'),
      },
      {
        path: '/paymentsMethods',
        component: () => import('pages/General/paymentsMethods.vue'),
      },
      {
        path: '/servicesCharges',
        component: () => import('pages/General/servicesCharges.vue'),
      },
      {
        path: '/vatTax',
        component: () => import('pages/General/vatTax.vue'),
      },
      {
        path: '/items',
        component: () => import('pages/Items/ItemsHome.vue'),
      },
      {
        path: '/menuBuffets',
        component: () => import('pages/Items/menuBuffets.vue'),
      },
      {
        path: '/service',
        component: () => import('pages/Services/ServicesHome.vue'),
      },
      {
        path: '/pickUp',
        component: () => import('pages/Services/pickUp.vue'),
      },
      {
        path: '/serviceDelivery',
        component: () => import('pages/Services/serviceDelivery.vue'),
      },
      {
        path: '/order',
        component: () => import('pages/orders/OrderIndex.vue'),
      },
      {
        path: '/orderManagement',
        component: () => import('pages/orders/OrderManagement.vue'),
      },
      {
        path: '/offer',
        component: () => import('pages/Offer/OffersHome.vue'),
      },
      {
        path: '/report',
        component: () => import('pages/Reports/ReportsHome.vue'),
      },
      {
        path: '/setting',
        component: () => import('pages/Settings/AllSettings.vue'),
      },
      {
        path: '/admin/addBranch',
        component: () => import('pages/HomePages/addBranch.vue'),
      },
      {
        path: '/offer/createOffer',
        component: () => import('pages/Offer/createOffer.vue'),
      },
      {
        path: '/serviceDelivery/activate',
        component: () => import('pages/Services/activatePanda.vue'),
      },
      {
        path: '/serviceHome/dineTable',
        component: () => import('pages/Services/dineTable.vue'),
      },
      {
        path: '/Items/category',
        component: () => import('pages/Items/itemsCategory.vue'),
      },
      {
        path: '/Items/addons',
        component: () => import('pages/Items/itemAddon.vue'),
      },
      {
        path: '/Items/variations',
        component: () => import('pages/Items/itemVariation.vue'),
      },
      {
        path: '/Items/createItem',
        component: () => import('pages/Items/createItem.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/auth/AuthPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
