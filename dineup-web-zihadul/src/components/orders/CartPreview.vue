<template>
  <q-bar class="lg:hidden">
    <div class="text-sm">Message</div>
    <q-space />
    <q-btn dense flat icon="close" v-close-popup>
      <q-tooltip class="bg-white text-primary">Close</q-tooltip>
    </q-btn>
  </q-bar>
  <div class="flex flex-col h-full border border-solid border-[#d54720]">
    <div class="h-14 text-white flex items-center justify-start px-5">
      <div class="flex   items-center justify-between text-gray-600 text-xl md:text-2xl font-bold w-full">
        <div class="flex gap-2">
          <p class="">INVOICE: </p>
          <p>#123132</p>
        </div>
        <q-btn icon="sync_alt" label="change" flat stack class="text-xs" />
      </div>
    </div>
    <div class="flex flex-1">
      <div class="w-full">
        <div class=" w-full">
          <div class="flex   justify-start gap-12 text-lg md:text-xl w-full px-5 mb-2 text-gray-600">
            <div>
              <p>Table No: #123</p>
              <p class="mt-2">CUSTOMER: #123</p>
            </div>
            <div>
              <p>Order No: #123</p>
              <p class="mt-2">Order: #123</p>
            </div>
          </div>
          <q-separator color="primary" class="w-[95%]" inset />
        </div>
        <div class="pl-3 h-full">
          <q-scroll-area visible class="h-[40rem] md:h-[42rem] pr-3" :thumb-style="thumbStyle" :bar-style="barStyle">
            <div class="flex items-center bg-gray-100 p-3 justify-between my-4 row" v-for="item in cartStore.inCart"
              :key="item">
              <div class=" flex items-center md:gap-5 gap-2">
                <q-avatar square size="60px">
                  <img src="https://cdn.quasar.dev/img/avatar.png">
                </q-avatar>
                <div>
                  <p class="text-md lg:text-xl">{{ item.name }}</p>
                  <p class="text-md lg:text-lg">Price: <span class="font-bold">{{ item.price }}</span></p>
                </div>
              </div>
              <div class=" flex items-center gap-2">
                <div class="inline-flex items-center">
                  <q-btn flat @click="cartStore.decrement(item)"
                    class="bg-gray-100 rounded-l border text-white cursor-pointer hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex bg-primary items-center px-1 md:px-2 py-1 border-solid border-[#d54720]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                  </q-btn>
                  <div
                    class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-2 md:px-4 py-1 select-none">
                    {{ item.addedQty }}
                  </div>
                  <q-btn flat @click="cartStore.increment(item)"
                    class="bg-gray-100 rounded-r border text-white cursor-pointer hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex bg-primary items-center px-1 md:px-2 py-1 border-solid border-[#d54720]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </q-btn>
                  <q-btn color="red" class="ml-1" flat dense icon="delete" @click="cartStore.removeFromCart(item)" />
                </div>
              </div>
            </div>
            <div v-if="cartStore.inCart.length">
              <!-- <q-separator color="primary" class="w-full" inset /> -->
              <div class="flex justify-end border-t border-gray-100 pb-2">
                <div class="w-full max-w-lg space-y-4">
                  <dl class="space-y-0.5 text-sm text-gray-700">
                    <div class="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>£250</dd>
                    </div>

                    <div class="flex justify-between">
                      <dt>VAT</dt>
                      <dd>£25</dd>
                    </div>

                    <div class="flex justify-between">
                      <dt>Discount</dt>
                      <dd>-£20</dd>
                    </div>

                    <div class="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>£200</dd>
                    </div>
                  </dl>

                  <div class="flex justify-end gap-2">
                    <q-btn color="primary" class="border border-solid py-0" flat label="add discount"
                      @click="ShowDiscountDialog = true" />
                    <q-btn color="primary" class="border border-solid py-0" flat label="add note"
                      @click="showNoteDialog = true" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row text-2xl flex-center font-bold text-gray-700" v-else>
              <p class="mt-12">No item to proceed</p>
            </div>
          </q-scroll-area>
        </div>
      </div>
    </div>

    <div class="h-16 w-full text-white flex   items-center justify-around border border-solid border-t-[#d54720]">
      <q-btn color="red w-full h-full" flat icon="restart_alt" label="clear all" @click="showCartClearWarning = true" />
      <q-btn color="primary w-full h-full" flat icon="check" label="create order"
        class="border border-t-0 border-r-0 border-b-0 border-solid border-l-[#d54720]" />
    </div>
  </div>

  <!-- discount modal -->
  <q-dialog v-model="ShowDiscountDialog" persistent>
    <q-card class="w-full border border-solid border-[#d54720]">
      <q-card-section class="pb-0">
        <div class="row items-start">
          <span class="text-h6">Give Disount</span>
        </div>
      </q-card-section>
      <q-card-section class="row items-center flex flex-row">
        <q-tabs active-bg-color="primary" dense active-class="text-white" indicator-color="transparent" inline-label
          ripple v-model="discountType" class="text-teal border border-solid bordder-[#d54720] rounded-2xl">
          <q-tab name="parcent" icon="percent" label="percent" />
          <q-tab name="flat" icon="paid" label="Flat" />
        </q-tabs>
      </q-card-section>
      <q-card-section class="flex flex-wrap gap-5" v-if="discountType == 'parcent'">
        <q-btn color="primary" outline rounded label="15%" @click="discountAmount = 15" />
        <q-btn color="primary" outline rounded label="25%" @click="discountAmount = 25" />
        <q-btn color="primary" outline rounded label="35%" @click="discountAmount = 35" />
        <q-btn color="primary" outline rounded label="55%" @click="discountAmount = 55" />
        <q-btn color="primary" outline rounded label="75%" @click="discountAmount = 75" />
      </q-card-section>
      <q-card-section class="flex flex-wrap gap-5" v-else>
        <q-btn color="primary" outline rounded label="100" @click="discountAmount = 100" />
        <q-btn color="primary" outline rounded label="200" @click="discountAmount = 200" />
        <q-btn color="primary" outline rounded label="300" @click="discountAmount = 300" />
        <q-btn color="primary" outline rounded label="500" @click="discountAmount = 500" />
        <q-btn color="primary" outline rounded label="1000" @click="discountAmount = 1000" />
      </q-card-section>
      <q-card-section>
        <q-input v-model="discountAmount" outlined type="text" placeholder="Amount" class="w-full" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="add" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-- note -->
  <q-dialog v-model="showNoteDialog" persistent>
    <q-card class="w-full border border-solid border-[#d54720]">
      <q-card-section class="pb-0">
        <div class="row items-start">
          <span class="text-h6">Order Note/Instruction</span>
        </div>
      </q-card-section>
      <q-card-section class="row items-center">
        <q-input v-model="text" outlined type="textarea" label="Note" class="w-full" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="add" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="showCartClearWarning" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm">Are you sure ?</span>
        <p>You are going to clear current cart</p>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="info" v-close-popup />
        <q-btn flat label="clear" color="red" v-close-popup @click="cartStore.clearCart" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useCartStore } from "../../stores/cart.store"
import { ref } from "vue"
export default {
  data() {
    return {
      showCartClearWarning: ref(false),
      thumbStyle: {
        right: '0px',
        borderRadius: '7px',
        backgroundColor: '#d54720',
        width: '4px',
        opacity: 0.75
      },
      barStyle: {
        right: '0px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.2
      },
    }
  },
  setup() {
    const cartStore = useCartStore()
    const discountType = ref('parcent');
    const discountAmount = ref(0)
    function increment(product) {
      cartStore.increment(product)
    }
    function onClick() {
      confirm.value = true
    }
    return {
      increment,
      showNoteDialog: ref(false),
      ShowDiscountDialog: ref(false),
      onClick,
      cartStore,
      discountType,
      discountAmount
    }
  }

}
</script>
