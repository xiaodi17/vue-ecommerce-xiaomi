import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import Index from './pages/Index'
import Product from './pages/Product'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import Order from './pages/Order'
import OrderConfirm from './pages/OrderConfirm'
import OrderList from './pages/OrderList'
import OrderPayment from './pages/OrderPayment'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      commponent: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index
        },
        {
          path: '/product/:id',
          name: 'Product',
          component: Product
        },
        {
          path: '/detail/:id',
          name: 'Detail',
          component: Detail
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      children: [
        {
          path: '/list',
          name: 'OrderList',
          component: OrderList
        },
        {
          path: '/confirm',
          name: 'OrderConfirm',
          component: OrderConfirm
        },
        {
          path: '/pay',
          name: 'OrderPayment',
          component: OrderPayment
        }
      ]
    }
  ]
})
