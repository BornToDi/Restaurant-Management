<template>
  <div
    class="px-2 pt-2 flex flex-col h-screen overflow-hidden"
    style="height: calc(100vh - 64px)"
  >
    <div class="row w-full flex justify-between items-center h-14 px-1 gap-2">
      <q-input
        v-model="search"
        debounce="1000"
        placeholder="Search"
        color="accent"
        outlined
        dense
        class="md:w-1/2 w-full"
      >
        <template v-slot:append>
          <q-icon name="search" color="accent" />
        </template>
      </q-input>

      <q-btn
        color="primary"
        icon="menu"
        class="mr-2.5 lg:hidden"
        unelevated
        outline
        @click="drawerRight = true"
      />
    </div>
    <div class="flex">
      <div class="col-3 gt-sm mt-2 p-2 border border-solid border-[#d54720]">
        <p class="text-h6 mb-2">Catrgories</p>
        <q-list bordered v-for="i in 5" :key="i" class="mb-2">
          <q-item
            clickable
            :active="i === 2"
            active-class="bg-primary text-white"
            v-ripple
          >
            <q-item-section>Icon as avatar</q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-md-9 col-12 w-full p-2 relative hidden">
        <q-scroll-area
          visible
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          class="h-[45rem] md:h-[53rem]"
        >
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 pr-2">
            <q-list
              bordered
              v-for="(product, i) in cartStore.getItems"
              :key="i"
              @click="addToCart(product, i)"
            >
              <q-item
                class="border border-solid border-[#d54720]"
                clickable
                v-ripple
              >
                <div class="w-full transform">
                  <img
                    class="h-48 w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="Product Image"
                  />
                  <div class="">
                    <h2
                      class="mb-2 text-lg font-medium dark:text-white text-gray-900"
                    >
                      {{ product.name }}
                    </h2>
                    <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                      Product description goes here.
                    </p>
                    <div class="flex items-center">
                      <p
                        class="mr-2 text-lg font-semibold text-gray-900 dark:text-white"
                      >
                        ${{ product.price }}
                      </p>
                      <div class="ml-auto text-base font-medium text-green-500">
                        <div class="col-2 flex items-end">
                          <div
                            v-show="product.addedQty"
                            class="w-10 h-7 rounded bg-primary flex justify-center items-center text-white"
                          >
                            <p>{{ product.addedQty }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </q-item>
            </q-list>
          </div>
        </q-scroll-area>
        <div
          @click="showCartPreview = true"
          v-if="cartStore.totalQuantity > 0"
          class="absolute h-12 w-[90%] text-white font-bold flex justify-around items-center bg-primary bottom-[15px] left-[20px] lg:hidden rounded-full shadow-2xl"
        >
          <div class="flex items-center gap-2">
            <q-icon name="shopping_cart" />
            <p>{{ cartStore.totalQuantity }} items</p>
          </div>
          <p>Total: {{ cartStore.cartPrice }}</p>
          <div class="flex items-center gap-2">
            <p>View Cart</p>
            <q-icon name="expand_less" />
          </div>
        </div>
      </div>
      <div
        class="h-full w-full grid grid-cols-1 gap-2 md:gap-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 bg-white md:p-5 p-2 rounded-lg shadow overflow-y-scroll"
      >
        <div
          v-for="(product, i) in cartStore.getItems"
          :key="i"
          @click="addToCart(product, i)"
        >
          <div
            class="relative h-auto flex justify-between shadow-md overflow-hidden rounded-lg border border-solid border-gray-100"
          >
            <div class="w-full transform">
              <img
                class="h-48 w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Product Image"
              />
              <div class="">
                <h2
                  class="mb-2 text-lg font-medium dark:text-white text-gray-900"
                >
                  {{ product.name }}
                </h2>
                <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                  Product description goes here.
                </p>
                <div class="flex items-center">
                  <p
                    class="mr-2 text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    ${{ product.price }}
                  </p>
                  <div class="ml-auto text-base font-medium text-green-500">
                    <div class="col-2 flex items-end">
                      <div
                        v-show="product.addedQty"
                        class="w-10 h-7 rounded bg-primary flex justify-center items-center text-white"
                      >
                        <p>{{ product.addedQty }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CartPreview class="hidden" />
    </div>
    <q-drawer
      side="right"
      v-model="drawerRight"
      bordered
      :width="300"
      :breakpoint="500"
      content-class="bg-grey-3"
      class="p-5"
    >
      <p class="text-h6 mb-2">Catrgories</p>
      <q-list bordered v-for="i in 50" :key="i" class="mb-2">
        <q-item
          clickable
          :active="i === 2"
          active-class="bg-primary text-white"
          v-ripple
        >
          <q-item-section>Icon as avatar</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-dialog
      v-model="showCartPreview"
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <div class="bg-white h-full">
        <CartPreview />
      </div>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue';
import CartPreview from 'src/components/orders/CartPreview.vue';
import { useCartStore } from '../../stores/cart.store';

export default {
  name: 'OrderIndex',
  components: {
    CartPreview,
  },
  setup() {
    const cartStore = useCartStore();

    function addToCart(product, i) {
      cartStore.increment(product);
    }

    return {
      showCartPreview: ref(false),
      drawerRight: ref(false),
      thumbStyle: {
        right: '0px',
        borderRadius: '7px',
        backgroundColor: '#d54720',
        width: '4px',
        opacity: 0.75,
      },
      barStyle: {
        right: '0px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.2,
      },
      addToCart,
      cartStore,
    };
  },
};
</script>
