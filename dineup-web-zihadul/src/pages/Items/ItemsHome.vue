<template>
  <q-page>
    <navHeader first="Items" second="Category" />

    <!--practice-->
    <!--<div v-if="showText">
      <practiceOne @close="showThis" />
    </div>
    <div><button @click="showThis">Add me</button></div>-->
    <!--practice-->

    <!--items part-->
    <div class="bg-slate-200 mx-5 md:mx-20 mt-2 md:mt-8 h-24 md:h-36">
      <div class="row">
        <div class="col-6 pl-3 lg:pl-5 py-5">
          <div class="row flex">
            <div
              class="col-4 col-md-3 text-sm md:text-xl text-gray-500 text-bold md:pl-10"
            >
              Items <br />
              <span class="text-sm text-gray-400 invisible md:visible"
                >your item card</span
              >
            </div>
            <div class="col-4 col-md-3">
              <q-btn
                to="/Items/createItem"
                class="md:py-3 px-1 lg:mx-0 md:px-8 text-xs"
                color="secondary"
                no-caps
                label="Create Item"
              />
            </div>
            <div class="col-4 col-md-3">
              <q-btn
                class="md:py-3 mx-1 lg:mx-0 px-1 md:px-8 text-xs"
                color="secondary"
                no-caps
                label="Imports Item"
              />
            </div>
          </div>
        </div>
        <div class="col-6 pt-4 px-5">
          <div class="row">
            <div class="col-6"></div>
            <div class="col-12 col-md-6">
              <q-input
                color="teal"
                outlined
                v-model="searchItem"
                label="search item"
                counter
                maxlength="12"
                :dense="dense"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="searchItem !== ''"
                    name="close"
                    @click="searchItem = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import navHeader from 'src/components/items/navHeader.vue';
import { ref } from 'vue';
//import practiceOne from 'src/components/items/practiceOne.vue';

export default {
  components: { navHeader },
  //components: { navHeader, practiceOne },
  methods: {
    showThis() {
      this.showText = !this.showText;
    },
  },
  setup() {
    return {
      searchItem: ref(''),
      showText: false,
    };
  },
};
</script>
