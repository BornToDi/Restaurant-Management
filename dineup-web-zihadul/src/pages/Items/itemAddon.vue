<template>
  <q-page>
    <navHeader :first="first" second="Category" />
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
            @click="card = true"
            class="md:py-3 md:px-10 text-sm"
            color="secondary"
            no-caps
            label="Create Add On"
          />
        </div>
      </div>
      <q-separator></q-separator>
      <q-separator></q-separator>
      <div class="pl-2 md:pl-8 text-base text-gray-500 py-5">
        {{ updateAddon }}
      </div>
    </div>
    <!--dialoug-->
    <q-dialog v-model="card">
      <q-card class="my-card" style="width: 800px; height: 600px">
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis q-pt-sm">Create Add-on</div>
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
                label="Add on Name"
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
              label="add on subtitle"
              :shadow-text="textareaShadowText"
              @keydown="processTextareaFill"
              @focus="processTextareaFill"
            />
            <!--sub-title finish-->
            <div class="text-subtitle1 q-py-sm">Price</div>
            <div class="text-grey">
              <q-input
                square
                outlined
                color="blue"
                required
                v-model="categoryName"
                label="Add on price"
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

export default {
  components: { navHeader },

  data() {
    return {
      title: 'Add Ons',
      updateAddon: 'No Add-on added yet!',
      first: 'Items',
      card: 'false',
    };
  },
};
</script>
