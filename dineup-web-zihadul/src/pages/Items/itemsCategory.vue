<template>
  <q-page>
    <navHeader first="Items" second="Category" />
    <div class="bg-slate-200 mx-4 md:mx-20 mt-3 md:mt-8">
      <div class="row flex md:py-5">
        <div
          class="col-4 col-md-2 pl-2 md:pl-8 pt-5 md:py-5 text-lg md:text-2xl text-gray-500"
        >
          {{ title }}
        </div>

        <div class="col-0 col-md-8 pt-4 px-5"></div>

        <div class="col-6 col-md-2 py-4 md:px-5 text-right">
          <q-btn
            @click="card = true"
            no-caps
            class="md:py-3 md:px-10 text-sm"
            color="secondary"
            label="Create Category"
          />
        </div>
      </div>
      <q-separator></q-separator>
      <q-separator></q-separator>
      <div class="pl-2 md:pl-8 text-base text-gray-500 py-5">
        {{ categoryUpdate }}
      </div>
    </div>
    <!--dialoug-->
    <q-dialog v-model="card">
      <q-card class="my-card" style="width: 800px; height: 800px">
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis q-pt-sm">Create category</div>
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
            <!--upload file-->
            <div class="m-4">
              <div class="pb-2 text-gray-500 text-xl">Category Image</div>
              <div class="flex items-center justify-center w-32">
                <label
                  class="flex flex-col w-full h-32 border border-dashed border-blue-300 rounded-lg hover:bg-gray-100 hover:border-gray-300"
                >
                  <div class="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p
                      class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600"
                    >
                      Upload a photo
                    </p>
                  </div>
                  <input type="file" class="opacity-0" />
                </label>
              </div>
            </div>
            <!--upload file finish-->

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
            <div class="text-subtitle1 q-py-sm">Category index</div>
            <div class="text-grey">
              <q-input
                square
                outlined
                color="blue"
                required
                v-model="categoryName"
                label="Category sequence index"
              >
              </q-input>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right" class="gap-5">
            <div class="q-mx-md q-py-sm">
              <q-btn v-close-popup flat color="danger" label="close" />
              <q-btn v-close-popup flat color="info" label="done" />
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
  setup() {
    return {
      card: ref('false'),
    };
  },
  data() {
    return {
      title: 'Category',
      categoryUpdate: 'No categories added yet!',
    };
  },
};
</script>
