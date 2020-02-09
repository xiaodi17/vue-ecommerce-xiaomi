import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Index from './pages/index'
import Product from './pages/Product'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import Order from './pages/Order'
import OrderConfirm from './pages/OrderConfirm'
import OrderList from './pages/OrderList'
import OrderPayment from './pages/OrderPayment'
import AliPay from './pages/Alipay'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
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
      path: '/login',
      name: 'Login',
      component: Login
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
          path: 'list',
          name: 'OrderList',
          component: OrderList
        },
        {
          path: 'confirm',
          name: 'OrderConfirm',
          component: OrderConfirm
        },
        {
          path: 'payment',
          name: 'OrderPayment',
          component: OrderPayment
        },
        {
          path: 'alipay',
          name: 'AliPay',
          component: AliPay
        }
      ]
    }
  ]
})
