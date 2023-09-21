import { defineStore } from 'pinia';
import { useLocalStorage, StorageSerializers } from '@vueuse/core';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 3,
        name: 'Product 3',
        price: 300,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 4,
        name: 'Product 4',
        price: 400,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 5,
        name: 'Product 5',
        price: 500,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 6,
        name: 'Product 6',
        price: 600,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 7,
        name: 'Product 7',
        price: 700,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 8,
        name: 'Product 8',
        price: 800,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 9,
        name: 'Product 9',
        price: 900,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 10,
        name: 'Product 10',
        price: 1000,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 11,
        name: 'Product 11',
        price: 1100,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 12,
        name: 'Product 12',
        price: 1200,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 13,
        name: 'Product 13',
        price: 1300,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 14,
        name: 'Product 14',
        price: 1400,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 15,
        name: 'Product 15',
        price: 1500,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 16,
        name: 'Product 16',
        price: 1600,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 17,
        name: 'Product 17',
        price: 1700,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 18,
        name: 'Product 18',
        price: 1800,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 19,
        name: 'Product 19',
        price: 1900,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 20,
        name: 'Product 20',
        price: 2000,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 21,
        name: 'Product 21',
        price: 2100,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 22,
        name: 'Product 22',
        price: 2200,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 23,
        name: 'Product 23',
        price: 2300,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 24,
        name: 'Product 24',
        price: 2400,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 25,
        name: 'Product 25',
        price: 2500,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 26,
        name: 'Product 26',
        price: 2600,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 27,
        name: 'Product 27',
        price: 2700,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 28,
        name: 'Product 28',
        price: 2800,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 29,
        name: 'Product 29',
        price: 2900,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 30,
        name: 'Product 30',
        price: 3000,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 31,
        name: 'Product 31',
        price: 3100,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 32,
        name: 'Product 32',
        price: 3200,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 33,
        name: 'Product 33',
        price: 3300,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
      {
        id: 34,
        name: 'Product 34',
        price: 3400,
        image: 'https://cdn.quasar.dev/img/avatar.png',
      },
    ],
    inCart: useLocalStorage('inCart', [], {
      serializer: StorageSerializers.object,
    }),
    cartPrice: useLocalStorage('cartPrice', 0, {
      serializer: StorageSerializers.number,
    }),
  }),
  getters: {
    getItems: (state) => {
      state.items.forEach((item: any) => {
        item.addedQty =
          state.inCart.find((cartItem: any) => cartItem.id === item.id)
            ?.addedQty || 0;
      });
      return state.items;
    },
    getCartItems: (state) => {
      return state.inCart;
    },
    totalQuantity: (state) => {
      let totalCount = 0;
      state.inCart.forEach((e: any) => (totalCount += e.addedQty));
      return totalCount;
    },
  },
  actions: {
    increment(product: any) {
      // product.addedQty++;
      const alreadyInCart = this.inCart.find(
        (cartItem: any) => cartItem.id === product.id
      );
      if (alreadyInCart) {
        alreadyInCart.addedQty++;
      } else {
        product.addedQty = 1;
        this.inCart.push(product);
      }
      this.cartPrice += product.price;
      console.log(
        '🚀 ~ file: cart.store.js:232 ~ increment ~ this.inCart',
        this.inCart
      );
    },
    decrement(product: any) {
      // product.addedQty--;
      const alreadyInCart = this.inCart.findIndex(
        (cartItem: any) => cartItem.id === product.id
      );
      // if (this.inCart[ alreadyInCart ].addedQty == 1) this.inCart.splice(alreadyInCart, 1);

      if (this.inCart[alreadyInCart].addedQty > 1) {
        this.inCart[alreadyInCart].addedQty--;
      } else {
        this.inCart.splice(alreadyInCart, 1);
      }
      this.cartPrice -= product.price;
      // console.log("🚀 ~ file: cart.store.js:232 ~ increment ~ this.inCart", this.inCart)
    },
    clearCart() {
      this.inCart = [];
      this.cartPrice = 0;
    },
    removeFromCart(product: any) {
      const alreadyInCart = this.inCart.findIndex(
        (cartItem: any) => cartItem.id === product.id
      );
      this.cartPrice -= product.price * product.addedQty;
      this.inCart.splice(alreadyInCart, 1);
    },
  },
});
