export default [
  {
    path: '/testModule/TestOne',
    component: () => import(/* webpackChunkName: "TestOne" */ '../components/testModule/TestOne')
  }, {
    path: '/testModule/TestTwo',
    component: () => import(/* webpackChunkName: "TestTwo" */ '../components/testModule/TestTwo')
  }
]
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
// }
