import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    compact: true,
  },
  dva: {
    immer: true,
    hmr: false,
  },
  routes: [
    { path: '/login', component: '@/pages/login' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/goods' },
        {
          path: '/about',
          component: '@/pages/about',
          wrappers: ['@/wrappers/auth'],
        },
        {
          path: '/users',
          component: '@/pages/users/index',
          routes: [
            {
              path: '/users/:oid/:id',
              component: '@/pages/users/$oid/$id',
            },
            {
              path: '/users/:oid',
              component: '@/pages/users/$oid/$id',
            },
            { component: '@/pages/NotFound' },
          ],
        },
        { component: '@/pages/NotFound' },
      ],
    },
    { component: '@/pages/NotFound' },
  ],
  fastRefresh: {},
});
