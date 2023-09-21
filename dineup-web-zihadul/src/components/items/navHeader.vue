<template>
  <!--header-->
  <div class="px-2 md:px-20 pt-4 md:pt-20">
    <div class="text-3xl text-bold text-gray-500 pl-4">Items</div>
    <div class="flex py-2 text-base md:text-lg">
      <q-item
        clickable
        v-ripple
        to="/items"
        class="text-gray-400 hover:text-gray-700"
      >
        <q-item-section> {{ first }} </q-item-section></q-item
      >
      <q-item
        clickable
        v-ripple
        to="/Items/category"
        class="text-gray-400 hover:text-gray-700"
        ><q-item-section> {{ second }} </q-item-section></q-item
      >
      <q-item
        clickable
        v-ripple
        to="/Items/addons"
        class="text-gray-400 hover:text-gray-700"
      >
        <q-item-section> Add ons </q-item-section></q-item
      >
      <q-item
        clickable
        v-ripple
        to="/Items/variations"
        class="text-gray-400 hover:text-gray-700"
      >
        <q-item-section> Variations </q-item-section></q-item
      >
    </div>
    <q-separator></q-separator>
    <q-separator></q-separator>
  </div>

  <!--header-->
</template>

<script>
export default {
  props: ['first', 'second'],
  data() {
    return {};
  },
};
</script>
