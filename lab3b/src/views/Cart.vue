<template>
  <div class="cart-wrapper">
    <div class="cart">
      <div v-if="isCartEmpty" id="empty-cart" >
        <h2>Cart is empty</h2>
      </div>
      <div v-else class="product-item" v-for="item in cartItems" :key="item.product.id">
        <img :src="'/images/products/'+item.product.image">
        <div class="description">
          <h1>{{item.product.name}}</h1>
          <p>{{item.product.country}}</p>
        </div>
        <div class="amount">
          <h2>{{item.product.price}}</h2>
          <h4>{{item.quantity}}</h4>
        </div>
        <button class="remove-button" @click="removeItemFromCart(item)">Remove item</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeItemFromCart(item) {
      this.$root.removeItem(item);
    }
  },
  computed: {
    isCartEmpty() {
      return (this.$root.$data.cart.length === 0)
    },
    cartItems() {
      return this.$root.$data.cart;
    }
  },
}
</script>

<style>
.cart-wrapper {
  display: flex;
  justify-content: space-around;
}

.cart {
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 3px solid #b33000;
  border-radius: 5px;
}

.product-item {
  padding: 10px 10px;
  margin: 10px 10px;
  display: flex;
  border-bottom: 2px solid lightgray;
}

.description {
  margin: 40px 64px;
}

.amount {
  margin: 40px 64px;
}

.remove-button {
  margin: 40px 64px;
  height: 50px;
  background: #000;
  color: white;
  border: none;
}
</style>
