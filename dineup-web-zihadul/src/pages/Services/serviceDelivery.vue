<template>
  <q-page class="q-pa-md">
    <!--first part-->
    <div class="pl-3 md:ml-12 mt-1 md:mt-10">
      <div class="text-h4 text-bold">Delivery service</div>
    </div>
    <!--done-->
    <!--second part-->
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
      <div
        class="flex text-bold text-base md:text-2xl q-pa-md px-3 md:px-7 text-grey-7"
        style="padding-top: 30px; padding-bottom: 30px"
      >
        Delivery availability

        <div style="padding-left: 30px" class="visible md:visible">
          <q-icon class="cursor-pointer text-blue align-center" name="info_i" />
        </div>
      </div>
      <!--First part finish-->
      <hr style="text-color: #e1e0e0" />
      <div
        class="row pl-3 md:pl-7 text-bold q-py-sm text-grey-8 text-base md:text-xl"
        style="
          padding-top: 20px;
          padding-bottom: 20px;

          padding-right: 40px;
        "
      >
        <div class="col-12 col-sm-9 flex">
          <q-icon
            class="cursor-pointer text-red q-pr-sm text-grey-7"
            style="padding-top: 3px"
            name="radio_button_checked"
          />

          Pickup service is turned off
        </div>

        <div
          class="col-12 col-sm-3 pl-3 pt-3 md:pt-0 text-left md:text-right"
          style="justify-items: center"
        >
          <q-btn
            @click="card = true"
            class="sm:w-24 text-weight-bolder"
            outline
            rounded
            color="green"
            label="Turn on"
          />
        </div>
      </div>
    </div>
    <!--second part done-->
    <!--q-dialoug Turn On-->
    <q-dialog v-model="card">
      <q-card class="my-card" style="width: 600px; height: 150px">
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis q-pt-sm">
              Turn on Delivery functionalities for your store.
            </div>
          </div>
        </q-card-section>
        <q-separator />

        <q-card-actions align="right">
          <div class="q-mx-md q-py-sm">
            <q-btn v-close-popup outline rounded color="info" label="close" />
            <q-btn outline rounded color="green" label="turn on delivery" />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--q-dialoug finish-->
    <!--3rd part-->
    <div class="pl-3 md:ml-12 q-mt-xl">
      <div class="text-h4 text-bold">Delivery systems</div>
    </div>
    <!--done-->
    <!--4th part-->
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
      <div
        class="flex text-bold text-base md:text-2xl q-pa-md px-3 md:px-7 text-grey-7"
        style="padding-top: 30px; padding-bottom: 30px"
      >
        Delivery system

        <div style="padding-left: 30px" class="visible md:visible">
          <q-icon class="cursor-pointer text-blue align-center" name="info_i" />
        </div>
      </div>
      <!--3rd part finish-->
      <hr style="text-color: #e1e0e0" />
      <div
        class="row pl-3 md:pl-7 text-bold q-py-sm text-grey-8 text-base md:text-xl"
        style="
          padding-top: 20px;
          padding-bottom: 20px;

          padding-right: 40px;
        "
      >
        <div class="col-12 col-sm-9">
          Personal deliveries <br />
          <span class="font-light q-py-sm"
            >No personal delivery system added</span
          >
        </div>

        <div
          class="col-12 col-sm-3 pl-3 pt-3 md:pt-0 text-left md:text-right"
          style="justify-items: center"
        >
          <q-btn
            @click="card = true"
            class="sm:w-24 text-weight-bolder"
            outline
            rounded
            color="blue"
            label="add"
          />
        </div>
      </div>
      <!--delivery partners-->
      <div class="row">
        <div
          class="col-6 col-md-4 ml-2 md:ml-6 mr-6 py-4 mb-5 rounded-md border-solid border-2 border-gray-800 bg-slate-200"
        >
          <div class="text-h6 pl-3">pandaGo</div>

          <div
            class="pt-3 md:pt-1 text-left pl-3"
            style="justify-items: center"
          >
            <q-btn
              @click="$router.replace('/serviceDelivery/activate')"
              class="sm:w-24 text-weight-bolder"
              outline
              rounded
              color="green"
              label="activate"
            />
          </div>
        </div>
      </div>
    </div>
    <!--4th part done-->
    <!--5th part-->
    <div class="pl-3 md:ml-12 q-mt-xl">
      <div class="text-h4 text-bold">Delivery settings</div>
    </div>
    <!--done-->
    <!--4th part-->
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
      <div
        class="flex text-bold text-base md:text-2xl q-pa-md px-3 md:px-7 text-grey-7"
        style="padding-top: 30px; padding-bottom: 30px"
      >
        Genius house
        <div style="padding-left: 30px" class="visible md:visible">
          <q-icon class="cursor-pointer text-blue align-center" name="info_i" />
        </div>
      </div>
      <!--First part finish-->
      <hr style="text-color: #e1e0e0" />
      <div
        class="row pl-3 md:pl-7 text-bold q-py-sm text-grey-8 text-base md:text-xl"
        style="
          padding-top: 20px;
          padding-bottom: 20px;

          padding-right: 40px;
        "
      >
        <div class="col-12 col-sm-9 flex">
          <q-icon
            class="cursor-pointer text-info q-pr-sm text-grey-7"
            style="padding-top: 3px"
            name="radio_button_checked"
          />
          Delivery service not available
        </div>

        <div
          class="col-12 col-sm-3 pl-3 pt-3 md:pt-0 text-left md:text-right"
          style="justify-items: center"
        >
          <q-btn
            @click="card2 = true"
            class="sm:w-24 text-weight-bolder"
            outline
            rounded
            color="green"
            label="Activate"
          />
        </div>
      </div>
    </div>
    <!--4th part done-->
    <!--q-dialoug Active-->
    <q-dialog v-model="card2">
      <q-card class="my-card" style="width: 600px; height: 300px">
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis q-pt-sm">
              Activate delivery - Genius house branch
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <div class="text-base text-red-900 ellipsis q-py-sm q-pl-md">
          Make sure all required information is given.
        </div>
        <div class="q-pt-sm q-pl-md text-base">
          Phone number <br />
          Opening hours <br />
          Payment methods <br />
          Delivery systems
        </div>
        <q-card-actions align="right">
          <div class="q-mx-md q-py-sm">
            <q-btn v-close-popup outline rounded color="info" label="close" />
            <q-btn outline rounded color="green" label="turn on dine in" />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--q-dialoug finish-->
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  // name: 'PageName'
  setup() {
    return {
      card: ref(false),
      card2: ref(false),
      text: ref(''),
    };
  },
});
</script>
