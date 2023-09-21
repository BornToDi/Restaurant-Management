<template>
  <q-page>
    <!--front page-->
    <div>
      <div class="q-ml-xl q-mt-xl">
        <div class="text-h4 text-bold">Offers</div>
      </div>
      <div
        style="
          background-color: #f2f5f6;
          margin-right: 80px;
          border-style: solid;
          border-width: 1px;
          border-color: #e1e0e0;
        "
        class="q-mt-md q-ml-xl"
      >
        <div
          class="row text-bold q-px-md text-grey-8"
          style="padding-top: 35px; padding-bottom: 30px; padding-left: 40px"
        >
          <div Offers class="col-12 col-md-9" style="font-size: 20px">
            Offers <br />
            <span style="font-size: 15px">Your offer cards</span>
          </div>
          <div class="col-12 col-md-3">
            <div class="text-right q-pr-xl">
              <q-btn
                class="bg-teal-7 q-px-xl q-py-sm text-white"
                style="font-size: medium"
                @click="$router.replace('/offer/createOffer')"
              >
                creat offer
              </q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="q-my-md q-mx-xl q-py-xl">
        <div style="text-align: center">
          <div style="font-size: 50px">
            <q-icon color="grey" class="q-pl-sm" name="cases"></q-icon>
          </div>
          <div class="text-grey">No offer created yet!</div>
        </div>
      </div>
    </div>
    <!--front page finish-->

    <!--hide page finish-->
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  // name: 'PageName'
  setup() {
    return {
      show: ref(false),
      maximizedToggle: ref(true),
    };
  },
});
</script>
