<template>
  <q-page padding>
    <div class="text-2xl text-bold text-gray-500 pl-8 py-6">Create Item</div>

    <div class="bg-gray-200 mx-8 px-10">
      <div class="py-5 text-lg text-gray-600 text-bold">Main Details</div>
      <q-separator></q-separator>
      <form>
        <div class="row">
          <div class="col-6 flex-col flex">
            <div>
              <label class="text-lg text-bold py-2 text-gray-500">Title</label>
              <q-input
                class="bg-white"
                outlined
                v-model="text"
                color="info"
                label="Type Item name"
              />
            </div>

            <div>
              <label class="text-lg text-bold py-2 text-gray-500"
                >Category</label
              >
              <div class="flex">
                <q-input
                  class="bg-white"
                  outlined
                  v-model="text"
                  color="info"
                  label="Select Category"
                />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      text: ref(''),
    };
  },
};
</script>
