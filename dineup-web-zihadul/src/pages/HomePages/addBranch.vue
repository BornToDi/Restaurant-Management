<template>
  <q-page>
    <div class="text-h4 text-grey q-pt-md q-pb-sm q-pl-md">Add new branch</div>
    <div
      style="
        background-color: #f2f5f6;

        border-style: solid;
        border-width: 1px;
        border-color: #e1dddd;
      "
      class="q-my-md q-mx-md"
    >
      <div class="q-mx-xl q-py-xl">
        <!--add details-->
        <div class="flex gap-3 q-pb-md">
          <div style="font-size: 20px; color: #5f5d5d; font-weight: 500">
            Add details
          </div>
          <q-icon
            style="font-size: 20px; padding-top: 5px"
            color="blue-5"
            name="info"
          ></q-icon>
        </div>
        <!--add details finish-->
        <q-separator />
        <!--branch name & input-->
        <div class="q-py-sm">
          <div style="font-size: 17px; color: #807c7c; font-weight: 500">
            Branch name
          </div>
          <div class="q-py-sm">
            <q-input
              color="blue"
              outlined
              v-model="text"
              :dense="dense"
              label="Enter branch name"
            />
          </div>
        </div>
        <!--branch name & input finish-->
        <!--branch city & area-->
        <div class="row">
          <div class="col q-py-sm q-pr-sm">
            <div style="font-size: 17px; color: #807c7c; font-weight: 500">
              Branch City
            </div>
            <div class="q-py-sm">
              <q-input
                color="blue"
                outlined
                v-model="text"
                :dense="dense"
                label="Enter branch city"
              />
            </div>
          </div>
          <div class="col q-py-sm q-pl-sm">
            <div style="font-size: 17px; color: #807c7c; font-weight: 500">
              Branch Area
            </div>
            <div class="q-py-sm">
              <q-input
                color="blue"
                outlined
                v-model="text"
                :dense="dense"
                label="Enter branch area"
              />
            </div>
          </div>
        </div>
        <!--branch city & area done-->
        <!--Branch address (Optional)-->
        <div class="q-py-sm">
          <div style="font-size: 17px; color: #807c7c; font-weight: 500">
            Branch address (Optional)
          </div>
          <div class="q-py-sm">
            <q-input
              color="blue"
              outlined
              v-model="text"
              :dense="dense"
              label="Enter branch address"
            />
          </div>
        </div>
        <!--branch address finish-->
        <!--Branch map (Optional)-->
        <div class="q-py-sm">
          <div style="font-size: 17px; color: #807c7c; font-weight: 500">
            Branch map link (Optional)
          </div>
          <div class="q-py-sm">
            <q-input
              color="blue"
              outlined
              v-model="text"
              :dense="dense"
              label="Enter branch map link"
            />
          </div>
        </div>
        <!--Branch map finish-->
        <!--Branch map location-->
        <div class="q-py-sm">
          <div style="font-size: 17px; color: #807c7c; font-weight: 500">
            Branch location on map *
          </div>
          <div class="q-py-sm">
            <q-input
              color="blue"
              outlined
              v-model="text"
              :dense="dense"
              label="Enter branch map location"
            />
          </div>
        </div>
        <!--Branch map location finish-->
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'addBranch',
});
</script>
