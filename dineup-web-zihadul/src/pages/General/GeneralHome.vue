<template>
  <div
    style="
      margin-top: 60px;
      background-color: #f2f5f6;
      border-style: solid;
      border-width: 1px;
      border-color: #e1e0e0;
      font-size: 25px;
    "
    class="q-mb-xl ml-4 mr-4 md:ml-20 md:mr-32"
  >
    <div class="flex text-bold py-3 text-grey-8 px-3 md:pl-8">
      Phone Numbers
    </div>
    <q-separator />
    <div>
      <addPhone />
    </div>
  </div>
</template>

<script>
import addPhone from 'src/components/general/addPhone.vue';
export default {
  components: { addPhone },
};
</script>

<!--
//import { ref } from 'vue';

//const textThree = ref('');

//const card = ref(false);

//let tasks = ref([]);

/*function submitTask() {
  if (this.task.length === 0) return;

  this.tasks.push({
    name: this.task,
  });
}*/
/*function hideShow() {
  showText.value = !showText.value;
}*/

/*function removeTask(index) {
  tasks.value.splice(index, 1);
}*/
/*function pushTask() {
  task.value = textThree.value;
  this.tasks.push({
    name: this.task,
  });
}*/

-->
