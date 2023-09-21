<template>
  <q-page class="flex justify-center items-center">
    <div class="bg-green-500 h-[400px] relative w-[700px] m-auto">
      <p
        class="py-5 bg-red-400 rounded-full w-[200px] h-[200px] p-[50px] absolute top-0 left-0 right-0 bottom-0 m-auto"
      ></p>
      <div>i m zihadul</div>
    </div>
    <div class="container text-center py-5">
      <div class="row">
        <div class="col-md-4 col-12 py-5 bg-green-500">Column</div>
        <div class="col-md-4 col-12 py-5 bg-yellow-500">Column</div>
        <div class="col-md-4 col-12 py-5 bg-pink-500">Column</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
});
</script>
