<template>
  <div>Invoice</div>
</template>

<script>
import { useCartStore } from 'src/stores/cart.store'

export default {
  setup() {
    const cartStore = useCartStore()
  },
}
</script>
