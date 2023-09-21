<template>
  <q-page>
    <div class="pl-3 md:ml-10 q-mt-xl">
      <div class="text-h4 text-bold text-grey-8">Activate pandago</div>
    </div>
    <div
      style="
        background-color: #f2f5f6;
        border-style: solid;
        border-width: 1px;
        border-color: #e1e0e0;
        font-size: 25px;
      "
      class="q-mt-md q-mb-xl md:mx-12 sm:font-light"
    >
      <div class="pl-5 py-5 text-bold text-grey-6">
        Bank account <br />
        <span class="text-base">Select one of your bank accounts</span>
      </div>
      <q-separator />
      <div class="row">
        <div class="col-12 col-sm-6 px-3 md:px-5 py-5 text-bold text-grey-6">
          Bank name <br />
          <span class="text-base">
            <q-input
              class=""
              color="blue"
              outlined
              square
              v-model="text1"
              label="Bank Name"
              :dense="dense"
            />
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-sm-6 px-3 md:px-5 py-5 text-bold text-grey-6">
          Branch name <br />
          <span class="text-base">
            <q-input
              class=""
              color="blue"
              outlined
              square
              v-model="text2"
              label="Branch name"
              :dense="dense"
            />
          </span>
        </div>
        <div class="col-12 col-sm-6 px-3 md:px-5 py-5 text-bold text-grey-6">
          Routing number <br />
          <span class="text-base">
            <q-input
              class=""
              color="blue"
              outlined
              square
              v-model="text3"
              label="Routing number"
              :dense="dense"
            />
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 px-3 md:px-5 py-5 text-bold text-grey-6">
          Account name <br />
          <span class="text-base">
            <q-input
              class=""
              color="blue"
              outlined
              square
              v-model="text4"
              label="Account name"
              :dense="dense"
            />
          </span>
        </div>
        <div class="col-12 col-sm-6 px-3 md:px-5 py-5 text-bold text-grey-6">
          Account number <br />
          <span class="text-base">
            <q-input
              class=""
              color="blue"
              outlined
              square
              v-model="tex5t"
              label="Account number"
              :dense="dense"
            />
          </span>
        </div>
      </div>
      <q-separator></q-separator>
      <div class="row lg:mx-28 bg-grey-3 pl-7 lg:pl-28 rounded-md my-5 py-8">
        <div class="col-12 col-sm-6 col-md-4 py-3 ml-0">
          <div class="text-grey-6 font-medium">Bank Check Front</div>
          <div>
            <q-file
              filled
              v-model="model"
              class="w-80 bg-blue-100"
              color="blue"
              label="Click To Upload"
            >
              <template v-slot:prepend>
                <q-icon name="cloud_upload" @click.stop.prevent />
              </template>
              <template v-slot:append>
                <q-icon
                  name="close"
                  @click.stop.prevent="model = null"
                  class="cursor-pointer"
                />
              </template>
            </q-file>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 py-3">
          <div class="text-grey-6 font-medium">NID Front</div>
          <div>
            <q-file
              filled
              v-model="model"
              class="w-80 bg-blue-100"
              color="blue"
              label="Click To Upload"
            >
              <template v-slot:prepend>
                <q-icon name="cloud_upload" @click.stop.prevent />
              </template>
              <template v-slot:append>
                <q-icon
                  name="close"
                  @click.stop.prevent="model = null"
                  class="cursor-pointer"
                />
              </template>
            </q-file>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 py-3">
          <div class="text-grey-6 font-medium">NID Back</div>
          <div>
            <q-file
              filled
              v-model="model"
              class="w-80 bg-blue-100"
              color="blue"
              label="Click To Upload"
            >
              <template v-slot:prepend>
                <q-icon name="cloud_upload" @click.stop.prevent />
              </template>
              <template v-slot:append>
                <q-icon
                  name="close"
                  @click.stop.prevent="model = null"
                  class="cursor-pointer"
                />
              </template>
            </q-file>
          </div>
        </div>
      </div>
    </div>
    <!--email part-->
    <div
      style="
        background-color: #f2f5f6;
        border-style: solid;
        border-width: 1px;
        border-color: #e1e0e0;
        font-size: 25px;
      "
      class="q-mt-md q-mb-xl md:mx-12 sm:font-light"
    >
      <div class="pl-5 py-5 text-bold text-grey-6">Email</div>
      <q-separator />
      <div class="row">
        <div class="col-12 col-md-6 pl-5 py-4 text-base text-grey-7">
          Email Address
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 col-sm-6 pl-5 pr-5 md:pr-0 pb-6 text-base text-grey-7"
        >
          <span>
            <q-input
              class="text-lg"
              color="blue "
              outlined
              square
              v-model="text6"
              label="Enter Email "
              :dense="dense"
            />
          </span>
        </div>
      </div>
    </div>
    <!--email part finish-->
    <!--branch part-->
    <div
      style="
        background-color: #f2f5f6;
        border-style: solid;
        border-width: 1px;
        border-color: #e1e0e0;
        font-size: 25px;
      "
      class="q-mt-md q-mb-xl md:mx-12 sm:font-light"
    >
      <div class="pl-4 md:pl-6 py-5 text-bold text-grey-6">Branch</div>
      <q-separator />
      <!--add phone number-->
      <div class="px-4 md:px-7 border-8 rounded-2xl">
        <div class="q-py-md md: text-grey">phone number</div>

        <div class="md:w-1/2">
          <q-input
            class="q-pb-xl text-xl"
            color="blue"
            outlined
            v-model="text"
            :dense="dense"
            label="Phone"
            mask="### ### - ######"
            hint="Mask: +8801 ### - ######"
          />
        </div>

        <div class="q-pb-xl">
          <q-btn label="Add" type="submit" color="info" />
        </div>
      </div>
      <!--add phone number finish-->
    </div>
    <!--branch part finish-->
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      text1: ref(''),
      text2: ref(''),
      text3: ref(''),
      text4: ref(''),
      text5: ref(''),
      ph: ref(''),
      dense: ref(false),
      text6: ref(''),
      model: ref(null),
    };
  },
};
</script>
