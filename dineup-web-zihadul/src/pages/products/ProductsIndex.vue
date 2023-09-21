<template>
  <div class="px-2 pt-2 flex-col h-screen flex gap-2 overflow-hidden" style="height: calc(100vh - 64px)">
    <div class="row w-full">
      <div class="col-3 h-full gt-sm p-2 card">
        <CategoryCompo />
      </div>
      <div class="col q-ml-sm h-full">
        <div class="row w-full flex justify-between items-center h-[40px] px-2 gap-2">
          <q-input v-model="search" debounce="1000" placeholder="Search" outlined dense class="md:w-1/2 w-full">
            <template v-slot:append>
              <q-icon color="accent" name="search" />
            </template>
          </q-input>
          <q-btn icon="menu" class="mr-2.5 lg:hidden xs:hidden" unelevated color="accent" outline
            @click="drawerRight = !drawerRight" />
          <q-btn icon="add" no-caps class="gt-sm body-btn" label="add product" unelevated @click="createProduct = true" />
        </div>
        <div style="height: calc(100% - 30px)" class="col-md-9 col-12 w-full p-2 relative">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pr-2 h-[88vh] overflow-y-scroll">
            <div class="" v-for="(product, i) in cartStore.items" :key="i">
              <div
                class="relative h-auto flex justify-between shadow-md overflow-hidden rounded-lg border border-solid border-gray-100">

                <div class=" w-full transform">
                  <img class="h-48 w-full object-cover object-center"
                    src="https://static.hungrynaki.com/hungrynaki-v4/restaurants/kacchi_xpress/meta/kacchi_xpress_cover_1637777092465.jpeg"
                    alt="Product Image" />
                  <div class="p-3">
                    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">{{ product.name }}</h2>
                    <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                    <div class="flex items-center">
                      <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${{ product.price }}</p>
                      <div class="ml-auto text-base font-medium text-green-500">
                        <div class="col-2 flex items-end">
                          <q-btn flat dense color="accent" round icon="visibility" />
                          <q-btn flat dense color="accent" round icon="settings" @click="editProductDialog = true" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <q-drawer side="right" v-model="drawerRight" bordered :width="300" :breakpoint="1500" content-class="bg-grey-3" overlay
    class="p-5">
    <q-btn icon="add" class="body-btn full-width q-mb-md" label="add product" unelevated @click="createProduct = true" />
    <CategoryCompo />
  </q-drawer>

  <q-dialog v-model="createProduct" transition-show="slide-up" transition-hide="slide-down">
    <q-card class="w-full border border-solid border-[#d54720]">
      <q-card-section class="pb-0">
        <div class="row items-start">
          <span class="text-h6">Add Product</span>
        </div>
      </q-card-section>
      <q-card-section class="row items-center gap-5">
        <q-input v-model="productCreatePayload.name" outlined type="text" color="accent" label="Product Name"
          class="w-full" />
        <q-input v-model="productCreatePayload.description" outlined color="accent" type="text"
          label="Product Description" class="w-full" />
        <q-input v-model="productCreatePayload.price" outlined type="text" color="accent" label="Product Price"
          class="w-full" />
        <q-select class="w-full" outlined v-model="productCreatePayload.category" color="accent"
          :options="categoryStore.getCategoriesForSelect" label="Select Category" />
        <q-uploader color="accent" flat bordered class="w-full" />
        <div class="w-full flex items-center gap-5 px-2">
          <p>Active:</p>
          <q-toggle v-model="productCreatePayload.isActive" color="accent" />
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn outline class="w-28" label="Cancel" color="red" v-close-popup />
        <q-btn outline class="w-28" label="add" color="info" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="editProductDialog" transition-show="slide-up" transition-hide="slide-down">
    <q-card class="w-full border border-solid border-[#d54720]">
      <q-card-section class="pb-0">
        <div class="row items-start">
          <span class="text-h6">Edit Product</span>
        </div>
      </q-card-section>
      <q-card-section class="row items-center gap-5">
        <q-input v-model="productCreatePayload.name" color="accent" outlined type="text" label="Product Name"
          class="w-full" />
        <q-input v-model="productCreatePayload.description" color="accent" outlined type="text"
          label="Product Description" class="w-full" />
        <q-input color="accent" v-model="productCreatePayload.price" outlined type="text" label="Product Price"
          class="w-full" />
        <q-select class="w-full" color="accent" outlined v-model="productCreatePayload.category"
          :options="categoryStore.getCategoriesForSelect" label="Select Category" />
        <q-uploader color="accent" flat bordered class="w-full" />
        <div class="w-full flex items-center gap-5 px-2">
          <p>Active:</p>
          <q-toggle v-model="productCreatePayload.isActive" color="accent" />
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn outline class="w-28" label="Cancel" color="red" v-close-popup />
        <q-btn outline class="w-28" label="save" color="info" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import { useCartStore } from "../../stores/cart.store";
import { useCategoryStore } from "../../stores/category.store";
import CategoryCompo from "src/components/products/CategoryCompo.vue";

export default {
  name: "OrderIndex",
  components: {
    CategoryCompo,
  },
  setup() {
    const cartStore = useCartStore();
    const categoryStore = useCategoryStore();
    const createProduct = ref(false);
    const productCreatePayload = ref({
      category: "",
      name: "",
      description: "",
      price: "",
      images: [],
      isActive: false,
    });

    return {
      showCartPreview: ref(false),
      drawerRight: ref(false),
      cartStore,
      createProduct,
      productCreatePayload,
      categoryStore,
      editProductDialog: ref(false),
    };
  },
};
</script>
<style scoped>
.product-image {
  width: 100%;
  height: 130px;
  border-radius: 9px 9px 0px 0px;
  -webkit-border-radius: 9px 9px 0px 0px;
  -moz-border-radius: 9px 9px 0px 0px;
}
</style>
