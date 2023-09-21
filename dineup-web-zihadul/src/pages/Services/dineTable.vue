<template>
  <q-page>
    <!--first part-->
    <div class="pl-3 md:ml-12 q-mt-xl">
      <div class="text-xl md:text-3xl text-bold">Dine in Tables</div>
    </div>
    <!--done-->
    <div
      style="
        background-color: #f2f5f6;
        border-style: solid;
        border-width: 1px;
        border-color: #e1e0e0;
        font-size: 25px;
      "
      class="q-mt-md q-mb-xl md:ml-12 md:mr-24 sm:font-light"
    >
      <div class="row py-4">
        <div
          class="col-6 pl-2 md:pl-5 py-3 md:py-5 text-base md:text-xl text-bold text-grey-7"
        >
          Table management
        </div>
        <div class="col-6 pr-3">
          <q-select
            color="blue"
            filled
            v-model="model"
            :options="options"
            label="select"
          >
            <template v-if="model" v-slot:append>
              <q-icon
                name="cancel"
                @click.stop.prevent="model = null"
                class="cursor-pointer"
              />
            </template>
          </q-select>
        </div>
      </div>
      <div class="row flex">
        <div class="px-6 text-base pb-4">
          <q-btn color="info" icon="add" label="Group" />
        </div>
        <div class="px-2 text-base pb-4">
          <q-btn color="info" icon="add" label="Table" />
        </div>
      </div>

      <q-separator />
      <div class="text-base md:text-xl text-grey-7 text-bold pl-3 py-4">
        {{ branchTable }}
      </div>

      <q-separator></q-separator>
      <div class="q-my-md q-mx-xl q-py-xl">
        <div style="text-align: center">
          <div style="font-size: 50px">
            <q-icon color="grey" class="q-pl-sm" name="cases"></q-icon>
          </div>
          <div class="text-grey">No tables!</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      model: ref(null),
      options: ['Genius House'],
      branchTable: 'Genius house Branch Tables',
    };
  },
};
</script>
