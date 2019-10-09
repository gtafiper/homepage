import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Products from "./views/products/Products";
import ProductsUpdate from "./views/products/ProductsUpdate";
import ProductCreate from "./views/products/ProductCreate";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
          path: '/products',
          name: 'products',
          component: Products
      },
    {
      path: '/productsUpdate/:id',
      name: '/ProductsUpdate',
      component: ProductsUpdate
    },
    {
      path: '/productCreate',
      name: '/ProductCreate',
      component: ProductCreate
    }
  ]
})
