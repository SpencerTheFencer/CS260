import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false

let data = {
  products: mock,
  cart: [],
  numberOfItems: 0,
}

let methods = {
  addItem(product) {
    if (!this.cart.map(item => item.product).includes(product)) {
      this.cart.push({
        product: product,
        quantity: 1,
      })
    }
    else {
      this.cart.find(item => item.product === product).quantity++;
    }
    this.numberOfItems++;
  },
  removeItem(item) {
    if (this.cart.find(current => current === item).quantity === 1) {
      this.cart = this.cart.filter(cartItem => cartItem !== item);
    }
    else {
      this.cart.find(current => current === item).quantity--;
    }
    this.numberOfItems--;
  }
}

new Vue({
  router,
  data,
  methods,
  render: h => h(App)
}).$mount('#app')
