<template>
  <div class="flex text-sm text-bold py-2 text-grey-8 px-3 md:pl-8">
    <div>Add Phone number</div>
  </div>

  <div class="px-1 md:px-4">
    <!-- List box -->
    <div class="pl-2 md:pl-4 rounded">
      <!-- Add task -->
      <form @submit.prevent="addTask()">
        <div>
          <q-input
            class="w-2/3 md:w-1/3"
            square
            rounded
            outlined
            color="blue"
            v-model="taskInput"
            label="Type number.."
            mask="### ### - ######"
            hint="Mask: +8801 ### - ######"
          ></q-input>
        </div>
        <div class="pt-4">
          <q-btn
            class="bg-green-600 hover:bg-green-500 px-6 py-2 text-white"
            type="submit"
            v-close-popup
            flat
            no-caps
            label="Add Number"
          />
        </div>
      </form>

      <!-- Add task end-->

      <!-- Tasks List -->
      <div class="my-5 gap-2 md:gap-1 row">
        <!--Single task-->
        <div
          class="col-8 col-sm-5 px-1 py-1.5 bg-indigo-50 hover:bg-indigo-100 items-center border-solid border-2 border-gray-400 rounded-lg text-xs md:text-xl"
          v-for="(task, index) in tasksList"
          :key="index"
        >
          <div class="">
            <div class="py-2">
              <input
                v-model="task.isComplete"
                :value="true"
                type="checkbox"
                class="w-8 h-4 rounded text-indigo-500 cursor-pointer"
              />

              <span
                class="text-gray-800 text-lg"
                :class="{ 'line-through': task.isComplete }"
                >{{ task.value }}</span
              >

              <q-icon
                @click="removeTask(index)"
                color="red"
                class="pl-2 md:pl-1 pb-1 text-2xl cursor-pointer"
                name="delete"
              />
            </div>
          </div>
        </div>
        <!--Single task end-->

        <!--If no tasks-->
        <div v-if="tasks.length === 0" class="text-gray-600 text-center mt-8">
          You have no Number :)
        </div>
      </div>
      <!-- Tasks List end -->

      <!-- Clear all -->
      <div class="my-4">
        <button
          @click="clearAll()"
          class="px-9 py-2 text-white bg-red-600 hover:bg-red-500 rounded text-sm"
        >
          Clear all
        </button>
      </div>
      <!-- Clear all end -->
    </div>
    <!-- List box end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      taskInput: null,

      showNumber: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push({
        value: this.taskInput,
        isComplete: false,
      });
      this.taskInput = null;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    clearAll() {
      this.tasks = [];
    },
  },
  computed: {
    tasksList() {
      if (this.searchInput) {
        return this.tasks.filter(
          (task) => task.value.indexOf(this.searchInput) !== -1
        );
      } else {
        return this.tasks;
      }
    },
  },
};
</script>
