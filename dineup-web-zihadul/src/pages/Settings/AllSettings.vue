<template>
  <q-page padding>
    <!--first part-->
    <div class="ml-3 md:ml-12 mt-3 md:mt-10">
      <div class="text-h4 text-bold">{{ head }}</div>
    </div>
    <!--second part-->
    <div
      style="
        background-color: #f2f5f6;
        border-style: solid;
        border-width: 1px;
        border-color: #e1e0e0;
        font-size: 25px;
      "
      class="my-3 md:my-8 mx-2 md:mx-10"
    >
      <div class="flex text-bold text-gray-600 ml-3 md:ml-10 py-2 md:py-8">
        Access
        <div class="px-6 ml-2">
          <q-icon class="cursor-pointer text-blue align-center" name="info_i" />
        </div>
      </div>
      <!--First part finish-->
      <hr style="text-color: #e1e0e0" />
      <div class="row text-bold pl-3 md:pl-10 text-grey-8">
        <div class="col-12 col-md-9">Creator</div>
      </div>
      <!--line-->
      <hr style="text-color: #c5c5c5; width: 93%" />
      <!--line-->
      <div class="row text-grey-8 pl-3 md:pl-10">
        <div class="col-6" style="font-size: 20px">
          <div class="row">
            <div class="col-3 flex gap-6">
              <div>
                <q-icon
                  style="font-size: 50px"
                  color="grey"
                  name="account_circle"
                ></q-icon>
              </div>
              <div class="q-mr-md">
                {{ number }} <br />
                <span style="font-size: 17px">{{ email }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--order manager-->
      <div class="row text-grey-8 py-3">
        <div class="col-6 text-bold pl-3 md:pl-10">{{ position }}</div>
        <div class="col-6">
          <div class="text-right q-pr-xl">
            <q-btn class="bg-secondary text-white" no-caps @click="card = true">
              Invite Admin
            </q-btn>
          </div>
        </div>
      </div>
      <!--order manager finish-->
      <hr style="text-color: #c5c5c5; width: 93%" />

      <div class="row pl-3 md:pl-10 text-grey-8">
        <div class="col-6">
          <div class="row text-base">{{ adminUpdate }}</div>
        </div>
      </div>

      <!--order manager-->
      <div class="row text-grey-8 py-3">
        <div class="col-6 text-bold pl-3 md:pl-10">{{ positionEditor }}</div>
        <div class="col-6">
          <div class="text-right q-pr-xl">
            <q-btn class="bg-secondary text-white" no-caps @click="card = true">
              {{ btnEditor }}
            </q-btn>
          </div>
        </div>
      </div>
      <q-separator></q-separator>
      <div class="pl-3 md:pl-10 text-base py-2">{{ editorUpdate }}</div>
      <!--q-dialoug admin-->
      <q-dialog v-model="card">
        <q-card class="my-card" style="width: 700px; height: 300px">
          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis q-pt-sm">invite admin</div>
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

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1 q-py-sm">
              Share this link to invite an user as admin
            </div>
            <div class="text-grey">
              <q-input square outlined v-model="text" label="Square outlined">
                <q-icon
                  name="content_copy"
                  class="cursor-pointer q-pt-md text-h6 text-h6"
                ></q-icon>
              </q-input>
              <div
                class="text-caption text-blue q-py-sm"
                style="font-size: 15px"
              >
                <q-icon
                  class="cursor-pointer align-center q-pl-md"
                  name="info_i"
                />
                Link expires in 5 days
              </div>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right" class="gap-5">
            <div class="q-mx-md q-py-sm">
              <q-btn v-close-popup flat color="danger" label="close" />
              <q-btn v-close-popup flat color="info" label="done" />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
      <!--q-dialoug finish-->
      <!--q-dialoug editor-->
      <q-dialog v-model="card2">
        <q-card class="my-card" style="width: 700px; height: 300px">
          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis q-pt-sm">invite editor</div>
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

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1 q-py-sm">
              Share this link to invite an user as editor
            </div>
            <div class="text-grey">
              <q-input square outlined v-model="text" label="Square outlined">
                <q-icon
                  name="content_copy"
                  class="cursor-pointer q-pt-md text-h6 text-h6"
                ></q-icon>
              </q-input>
              <div
                class="text-caption text-blue q-py-sm"
                style="font-size: 15px"
              >
                <q-icon
                  class="cursor-pointer align-center q-pl-md q-py-sm"
                  name="info_i"
                />
                Link expires in 5 days
              </div>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right" class="gap-5">
            <div class="q-mx-md">
              <q-btn v-close-popup flat color="danger" label="close" />
              <q-btn v-close-popup flat color="info" label="done" />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
      <!--q-dialoug finish-->
      <!--q-dialoug delete-->
      <q-dialog v-model="card3">
        <q-card class="my-card" style="width: 700px; height: 300px">
          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 text-red-700 ellipsis q-pt-sm">
                <q-icon
                  color="red"
                  class="q-pl-sm"
                  style="font-size: 25px"
                  name="error"
                ></q-icon>
                Delete Permanently
              </div>
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

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1 q-py-sm">
              Please make sure all services are deactivated and integrations are
              removed.
            </div>
            <div class="text-grey">
              <div>
                Type
                <span style="font-weight: 600; color: rgb(230, 27, 27)"
                  >"delete permanently"</span
                >
                to confirm
              </div>
              <q-input square outlined v-model="text" label="Square outlined">
              </q-input>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right" class="gap-5">
            <div class="q-mx-md">
              <q-btn v-close-popup flat color="danger" label="cancel" />
              <q-btn
                v-close-popup
                flat
                color="info"
                label="delete permanently"
              />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
      <!--q-dialoug finish-->
    </div>

    <!--last part-->
    <div
      style="
        background-color: #f2f5f6;
        border-style: solid;
        border-width: 1px;
        border-color: #e1e0e0;
        font-size: 25px;
      "
      class="mx-2 md:mx-10"
    >
      <div class="pl-3 md:pl-10 text-xl text-bold text-gray-600 py-3">
        Danger zone
      </div>
      <!--First part finish-->
      <q-separator />

      <div class="row pl-3 py-0 md:py-3 md:pl-10 text-grey-8">
        <div class="col-12 col-sm-6" style="font-size: 20px">
          Delete {{ userName }} from engaze.ai. This will permanently delete all
          your data.
        </div>
      </div>
      <!--delete item-->
      <div class="q-pb-md py-2 pl-3 md:pl-10">
        <q-btn
          no-caps
          class="text-bold text-h6"
          style="border-radius: 15px"
          outline
          color="red"
          @click="card3 = true"
        >
          <q-icon color="red" class="" name="delete"></q-icon>
          Delete Permanently
        </q-btn>
      </div>
      <!--delete item finish-->
    </div>
    <!--last part done-->
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
      card3: ref(false),
      text: ref(''),
      icon: ref(false),
    };
  },
  data() {
    return {
      head: 'Setting',
      number: '01749470282',
      email: 'z.i.nayeem45@gmail.com',
      position: 'Admin',
      positionEditor: 'Editors',
      btnEditor: 'Invite Editor',
      adminUpdate: 'No admin added yet!!',
      editorUpdate: 'No edit added yet!!',
      userName: 'Genius',
    };
  },
});
</script>
