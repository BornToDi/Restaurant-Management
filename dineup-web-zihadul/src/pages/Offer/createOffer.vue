<template>
  <q-page>
    <!--hide page-->

    <q-card-section>
      <div
        class="row"
        style="
          margin-left: 250px;
          margin-right: 250px;
          margin-top: 80px;
          margin-bottom: 80px;
        "
      >
        <div class="col q-mx-md">
          <q-card white bordered class="bg-white my-card">
            <q-card-section>
              <div style="text-align: center">
                <div style="font-size: 80px; padding-bottom: 20px">
                  <q-icon color="grey" class="q-pl-sm" name="cases"></q-icon>
                </div>
                <div class="text-black" style="font-size: medium">
                  Genaral Offer
                </div>
                <p class="text-grey">
                  offer in payment,special <br />
                  gift,package offer
                </p>
              </div>
            </q-card-section>

            <q-separator dark inset />
          </q-card>
        </div>
        <div class="col q-mx-md">
          <q-card white bordered class="bg-white my-card">
            <q-card-section>
              <div style="text-align: center">
                <div style="font-size: 80px; padding-bottom: 20px">
                  <q-icon color="grey" class="q-pl-sm" name="cases"></q-icon>
                </div>
                <div class="text-black" style="font-size: medium">
                  Discount Offer
                </div>
                <p class="text-grey">
                  offer in payment,special <br />
                  gift,package offer
                </p>
              </div>
            </q-card-section>

            <q-separator dark inset />
          </q-card>
        </div>
      </div>
    </q-card-section>
    <!---->
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'createOffer',
});
</script>
