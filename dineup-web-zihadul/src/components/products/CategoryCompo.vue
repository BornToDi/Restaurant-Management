<template>
  <div>
    <div class="flex items-center justify-between pb-5">
      <p class="text-h6 pl-2">Catrgories</p>
      <q-btn class="body-btn" icon="add" label="create" unelevated @click="openCategoryCreateDialog" />
    </div>
    <q-list v-for="(cate, i) in categoryStore.categories" :key="i" class="mb-2 card">
      <q-item clickable :active="selectedCategory && selectedCategory.id === cate.id" active-class="card "
        @click="selectCategory(cate)">
        <q-item-section>
          <div class="flex items-center justify-between">
            <p class="">
              {{ cate.title }}
              <q-chip v-if="!cate.isActive" color="accent" size="sm" icon="visibility_off">
                Disabled
              </q-chip>
            </p>
            <q-btn color="accent" flat round dense icon="settings" @click="editCategory(cate)" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-dialog v-model="createCategoryDialog" transition-show="slide-up" transition-hide="slide-down">
    <q-card class="w-full border border-solid border-[#26a69a]">
      <q-card-section class="pb-0">
        <div class="row items-start">
          <span class="text-h6">Add Category</span>
        </div>
      </q-card-section>
      <q-card-section class="row items-center gap-5">
        <q-input color="accent" v-model="categoryCreatePayload.title" outlined type="text" label="Title" class="w-full" />
        <div class="w-full flex items-center gap-5 px-2">
          <p>Active:</p>
          <q-toggle v-model="categoryCreatePayload.isActive" color="accent" />
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn outline class="w-28" label="Cancel" color="red" v-close-popup @click="
          (categoryCreatePayload.title = ''),
          (categoryCreatePayload.isActive = false)
        " />
        <q-btn outline class="w-28" label="add" color="info" v-close-popup @click="createCategory" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="editCategoryDialog" transition-show="slide-up" transition-hide="slide-down">
    <q-card class="w-full border border-solid border-[#26a69a]">
      <q-card-section class="pb-0">
        <div class="row items-start">
          <span class="text-h6">Add Category</span>
        </div>
      </q-card-section>
      <q-card-section class="row items-center gap-5">
        <q-input color="accent" v-model="editCategoryPayload.title" outlined type="text" label="Title" class="w-full" />
        <div class="w-full flex items-center gap-5 px-2">
          <p>Active:</p>
          <q-toggle v-model="editCategoryPayload.isActive" color="accent" />
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn outline class="w-28" label="Cancel" color="red" v-close-popup />
        <q-btn outline class="w-28" label="save" color="info" v-close-popup @click="updateCategory" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { reactive, ref } from "vue";
import { useCategoryStore } from "../../stores/category.store";
export default {
  name: "CategoryCompo",
  setup(props, { emit }) {
    const selectedCategory = ref(null);
    const categoryStore = useCategoryStore();
    const editCategoryDialog = ref(false);
    const createCategoryDialog = ref(false);
    const categoryCreatePayload = reactive({
      title: "",
      isActive: true,
    });
    const editCategoryPayload = reactive({
      id: "",
      title: "",
      isActive: true,
    });

    function editCategory(category) {
      // console.log("🚀 ~ file: CategoryCompo.vue:88 ~ editCategory ~ category:", category)
      editCategoryPayload.id = category.id;
      editCategoryPayload.title = category.title;
      editCategoryPayload.isActive = category.isActive;
      editCategoryDialog.value = true;
    }

    function updateCategory() {
      // console.log("🚀 ~ file: CategoryCompo.vue:97 ~ updateCategory ~ editCategoryPayload:", editCategoryPayload)
      categoryStore.updateCategory(editCategoryPayload);
    }

    function openCategoryCreateDialog() {
      createCategoryDialog.value = true;
      categoryCreatePayload.title = "";
      categoryCreatePayload.isActive = true;
    }

    function createCategory() {
      categoryStore.addNewCategory(categoryCreatePayload);
    }

    function selectCategory(category) {
      selectedCategory.value = category;
      emit("activeCategory", category);
    }

    return {
      categoryCreatePayload,
      createCategoryDialog,
      editCategoryDialog,
      editCategoryPayload,
      editCategory,
      categoryStore,
      selectCategory,
      selectedCategory,
      updateCategory,
      createCategory,
      openCategoryCreateDialog,
    };
  },
};
</script>
