<template>
  <div class="q-ml-xl q-mt-xl">
    <div class="text-h4 text-bold">Order Management</div>
  </div>
  <div
    style="
      background-color: #f2f5f6;

      border-style: solid;
      border-width: 1px;
      border-color: #e1e0e0;
    "
    class="q-my-xl q-mx-xl"
  >
    <div
      class="row text-bold q-px-md q-py-sm text-grey-8"
      style="
        padding-top: 35px;
        padding-bottom: 30px;
        padding-left: 40px;
        font-size: 25px;
      "
    >
      <div class="col-12 col-md-9">Order management portal - admins</div>
      <div class="col-12 col-md-3">
        <div class="text-right q-pr-xl">
          <q-btn
            class="bg-secondary q-px-xl q-py-sm text-white"
            style="font-size: medium"
          >
            Launch
            <q-icon color="white" class="q-pl-sm" name="north_east"></q-icon>
          </q-btn>
        </div>
      </div>
    </div>
    <hr style="text-color: #e1e0e0" />

    <div
      class="row q-px-md q-pt-sm"
      style="padding-top: 30px; padding-bottom: 10px; padding-left: 40px"
    >
      <div class="col q-pb-md text-grey-8" style="font-size: 20px">
        Portal to manage orders, accept and cancel orders, request deliveries
        and more.
      </div>
      <div class="col">
        <div
          class="q-px-xl text-h3 text-right q-py-sm text-white q-pr-xl"
        ></div>
      </div>
    </div>
  </div>
  <!--order manager part-->
  <div
    style="
      background-color: #f2f5f6;
      border-style: solid;
      border-width: 1px;
      border-color: #e1e0e0;
      font-size: 25px;
    "
    class="q-mt-md q-mb-xl q-mx-xl"
  >
    <div
      class="text-bold q-pa-md text-grey-8"
      style="padding-top: 30px; padding-bottom: 30px; padding-left: 40px"
    >
      Order manager
    </div>
    <!--First part finish-->
    <hr style="text-color: #e1e0e0" />
    <div
      class="row text-bold q-px-md q-py-sm text-grey-8"
      style="
        padding-top: 35px;
        padding-bottom: 30px;
        padding-left: 40px;
        font-size: 25px;
      "
    >
      <div class="col-12 col-md-9">Order manger portal</div>
      <div class="col-12 col-md-3">
        <div class="text-right q-pr-xl">
          <q-btn
            class="bg-secondary q-px-xl q-py-sm text-white"
            style="font-size: medium"
          >
            Launch
            <q-icon color="white" class="q-pl-sm" name="north_east"></q-icon>
          </q-btn>
        </div>
      </div>
    </div>
    <hr style="text-color: #c5c5c5; width: 93%" />
    <div
      class="row text-bold q-px-md q-py-sm text-grey-8"
      style="
        padding-top: 35px;
        padding-bottom: 30px;
        padding-left: 40px;
        font-size: 25px;
      "
    >
      <div class="col-6" style="font-size: 20px">
        Portal to manage orders by order managers. Order managers have special
        access to only manage orders.
      </div>
    </div>
    <!--download app-->
    <div class="q-px-xl q-py-sm">
      <q-btn
        class="text-bold text-h6 q-mx-xs q-px-md q-py-sm"
        outline
        color="positive"
      >
        <q-icon
          color="green"
          class="q-pl-sm"
          name="download_for_offline"
        ></q-icon>
        Download app
      </q-btn>
    </div>
    <!--download app finish-->

    <!--order manager-->
    <div
      class="row text-bold q-px-md q-py-sm text-grey-8"
      style="
        padding-top: 35px;
        padding-bottom: 30px;
        padding-left: 40px;
        font-size: 25px;
      "
    >
      <div class="col-12 col-md-9">Order managers</div>
      <div class="col-12 col-md-3">
        <div class="text-right q-pr-xl">
          <q-btn
            class="bg-secondary q-px-xl q-py-sm text-white"
            style="font-size: medium"
            @click="card = true"
          >
            add manager
          </q-btn>
        </div>
      </div>
    </div>
    <!--order manager finish-->
    <hr style="text-color: #c5c5c5; width: 93%" />
    <!--no order-->
    <div
      class="q-pa-md text-grey-8"
      style="
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 40px;
        font-size: 18px;
      "
    >
      No order managers added yet
    </div>
    <!--no order finish-->
  </div>

  <!--add manager dialoug-->
  <q-dialog v-model="card">
    <q-card class="my-card" style="width: 800px; height: 540px">
      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis q-pt-sm">Add order manager</div>
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
      <!--user name-->
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1 text-grey q-py-sm">user name</div>
        <div class="text-grey">
          <q-input
            color="blue"
            square
            outlined
            v-model="text"
            label="user name"
          >
          </q-input>
        </div>
      </q-card-section>
      <!--user name done-->
      <!--password -->
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1 text-grey q-py-sm">password</div>
        <div class="text-grey">
          <q-input
            color="blue"
            square
            outlined
            v-model="text2"
            :type="isPwd ? 'password' : 'text'"
            label="password"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
      </q-card-section>
      <!--password done-->
      <!--manager branches-->
      <div class="row no-wrap items-center q-mx-md q-pb-md">
        <div class="col text-h6 ellipsis q-pt-sm">Managed Branches</div>
        <div class="col-auto flex text-grey items-center q-pa-md">
          <div class="">
            <q-checkbox
              @click="showBranch = !showBranch"
              color="blue"
              v-model="val"
            />
          </div>
          <div class="text-black text-bold">All</div>
        </div>
      </div>
      <!--manager branches done-->
      <!--hide brach-->
      <div class="text-grey q-px-md q-pb-md" v-if="showBranch">
        <q-input
          color="blue"
          square
          outlined
          v-model="text3"
          label="select barnches"
        >
        </q-input>
      </div>
      <!--hide brach-->

      <q-separator />
      <!--button part-->
      <q-card-actions align="right" class="gap-5">
        <div class="q-mx-md q-py-sm">
          <q-btn v-close-popup flat color="danger" label="cancel" />
          <q-btn v-close-popup flat color="info" label="add" />
        </div>
      </q-card-actions>
      <!--button part done-->
    </q-card>
  </q-dialog>
  <!--add manager dialoug done-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  // name: 'PageName'
  setup() {
    return {
      card: ref(false),
      text: ref(''),
      text2: ref(''),
      text3: ref(''),
      icon: ref(false),

      password: ref(''),
      isPwd: ref(true),

      val: ref(true),

      showBranch: false,
    };
  },
});
</script>
