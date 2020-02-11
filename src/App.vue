<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import storage from './storage'
export default {
  name: 'app',
  components: {},
  data() {
    return {}
  },
  mounted() {
    this.getUser()
    this.getCartCount()
  },
  methods: {
    getUser() {
      this.axios.get('/user').then(() => {
        //todo save in vuex
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then(() => {
        //todo save in vuex
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
