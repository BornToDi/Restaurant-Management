<template>
  <q-section>
    <div class="text-xl pl-3 md:pl-10 pt-5 pb-1 text-bold text-gray-600">
      {{ add }}
    </div>

    <q-separator></q-separator>
    <!--start form-->

    <div class="pl-3 md:pl-10 py-4">
      <form @submit.prevent="addItem">
        <p class="flex flex-col text-gray-600">
          <span class="text-lg text-bold"> Service charge percentage</span>
          <input
            class="w-2/3 md:w-1/3 md:h-10 text-sm border-sky-500 rounded-lg hover:border-sky-700"
            type="number"
            required
            placeholder="Enter SD percentage.."
            v-model="itemName"
          />
        </p>

        <p class="text-gray-600 text-xl text-bold pt-3">
          Use In <br />
          <input
            class="h-4 w-4"
            type="checkbox"
            v-model="allBranch"
            true-value="All Branch"
          />
          <label class="text-lg text-bold text-gray-800"> All Branch</label>
        </p>
        <div class="py-3 text-gray-600 text-xl text-bold">
          Use for
          <div class="flex gap-4">
            <p>
              <input
                class="h-4 w-4"
                type="checkbox"
                v-model="checkUp"
                true-value="Dineup"
              />
              <label class="pl-2 text-lg text-bold text-gray-800"
                >Dine Up</label
              >
            </p>
            <p>
              <input
                class="h-4 w-4"
                type="checkbox"
                v-model="checkIn"
                true-value="Dinein"
              />
              <label class="pl-2 text-lg text-bold text-gray-800"
                >Dine In</label
              >
            </p>
            <p>
              <input
                class="h-4 w-4"
                type="checkbox"
                v-model="checkDown"
                true-value="Dinedown"
              />
              <label class="pl-2 text-lg text-bold text-gray-800"
                >Dine Down</label
              >
            </p>
          </div>
        </div>

        <button
          class="rounded-xl text-lg bg-teal-600 text-white px-3 py-1"
          type="submit"
        >
          Add item
        </button>
      </form>
    </div>

    <div class="row gap-3 px-3 md:px-10 my-4">
      <div
        class="w-96 md:w-60 px-3 py-2 text-lg text-gray-900 border-solid border-neutral-500 border-1 md:border-2 rounded-xl bg-zinc-200"
        v-for="(item, index) in shoppingList"
        :key="index"
      >
        <span>
          <span class="py-1"> {{ item.name + '%' + 'VAT/TAX' }}</span> <br />
          <span class="py-1">
            <q-icon color="blue" name="info" />
            {{ item.select1 }} {{ item.select2 }} {{ item.select3 }}
          </span>
          <br />

          <span class="py-1">
            <q-icon color="blue" name="info" />{{ item.branch }}
          </span>
          <br />
        </span>

        <button
          @click="removeTask(index)"
          class="my-1 px-2 text-center md:px-5 pb-1 text-base text-white rounded-lg cursor-pointer bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  </q-section>
</template>

<script>
//import { ref } from 'vue';

export default {
  data() {
    return {
      itemName: null,

      allBranch: null,
      checkUp: null,
      checkIn: null,
      checkDown: null,
      shoppingList: [],

      add: 'Add service charge',
    };
  },
  methods: {
    addItem() {
      let item = {
        name: this.itemName,

        branch: this.allBranch,
        select1: this.checkUp,
        select2: this.checkIn,
        select3: this.checkDown,
      };
      this.shoppingList.push(item);
      this.itemName = null;

      this.allBranch = null;
      this.checkUp = null;
      this.checkIn = null;
      this.checkDown = null;
    },
    removeTask(index) {
      this.shoppingList.splice(index, 1);
    },
  },
};
</script>
