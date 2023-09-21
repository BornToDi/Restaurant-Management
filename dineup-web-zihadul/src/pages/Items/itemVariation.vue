<template>
  <q-page>
    <navHeader first="Items" second="Category" />
    <!--items part-->
    <div class="bg-slate-200 mx-4 md:mx-20 mt-3 md:mt-8">
      <div class="row md:py-5">
        <div
          class="col-4 col-md-2 pl-2 md:pl-8 pt-5 md:py-5 text-lg md:text-2xl text-gray-500"
        >
          {{ title }}
        </div>
        <div class="col-0 col-md-8 pt-4 px-5"></div>

        <div class="col-6 col-md-2 py-4 md:px-5 text-right">
          <q-btn
            @click="cardVariation = true"
            class="md:py-3 md:px-10 text-sm"
            color="secondary"
            no-caps
            label="create Variation"
          />
        </div>
      </div>
      <q-separator></q-separator>
      <q-separator></q-separator>
      <div class="pl-2 md:pl-8 text-base text-gray-500 py-5">
        {{ updateVariation }}
      </div>
    </div>
    <!--dialoug-->
    <q-dialog v-model="cardVariation">
      <q-card class="my-card" style="width: 800px; height: 700px">
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis q-pt-sm">Create Variations</div>
            <div class="col-auto text-grey items-center">
              <q-icon
                name="cancel"
                flat
                round
                dense
                v-close-popup
                class="cursor-pointer text-h6"
              />
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <form>
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1 q-py-sm">Name</div>
            <div class="text-grey">
              <q-input
                square
                outlined
                color="blue"
                required
                v-model="categoryName"
                label="Category Name"
              >
              </q-input>
            </div>

            <!--sub-title-->

            <div class="pl-1 text-base text-bold text-gray-500">Subtitle</div>
            <q-input
              class="pl-1"
              v-model="textareaModel"
              filled
              clearable
              type="textarea"
              color="info"
              label="Category subtitle"
              :shadow-text="textareaShadowText"
              @keydown="processTextareaFill"
              @focus="processTextareaFill"
            />
            <!--sub-title finish-->
            <div>
              <q-checkbox
                v-model="teal"
                label="Allow multiple select"
                color="teal"
              />
            </div>
            <!--hide show-->
            <div class="pl-2 text-xl text-bold text-gray-500 pt-2">Option</div>
            <div class="text-gray-500 pl-2">No option added</div>
            <!--addoption-->
            <button
              @click="showDiv"
              class="no-border ml-2 my-3 text-base text-blue"
            >
              <span v-if="showOption">Hide Option</span>
              <span v-else>Add Option</span>
            </button>
            <!--add option finish-->
            <div v-if="showOption" class="md:flex py-3 pl-2 gap-5">
              <div class="text-base text-bold">
                <div>Name</div>
                <div>
                  <input class="" v-model="addOption" type="text" required />
                </div>
              </div>
              <div class="flex flex-col text-base text-bold">
                <div>Price</div>
                <div>
                  <input type="number" required />
                </div>
              </div>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right" class="gap-5">
            <div class="q-mx-md q-py-sm">
              <q-btn v-close-popup flat color="danger" label="close" />
              <q-btn v-close-popup flat color="info" label="Create" />
            </div>
          </q-card-actions>
        </form>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import navHeader from 'src/components/items/navHeader.vue';
import { ref } from 'vue';
export default {
  components: { navHeader },
  data() {
    return {
      title: 'Variations',
      updateVariation: 'No Variations added yet!',
      cardVariation: 'false',
      teal: ref(true),
      addOption: ref(''),
      showOption: ref(false),
    };
  },
  methods: {
    showDiv() {
      this.showOption = !this.showOption;
    },
  },
};
</script>
