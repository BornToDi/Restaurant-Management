<template>
  <div class="">
    <div class="text-h4 text-bold pl-3 md:pl-10 py-2 md:py-8">Store</div>
    <!--First part-->
    <div
      style="
        background-color: #f2f5f6;

        border-style: solid;
        border-width: 1px;
        border-color: #e1e0e0;
      "
      class="mx-3 md:mx-10"
    >
      <!--basic details-->
      <div class="text-h4 text-bold pl-3 md:pl-10 py-2 md:py-5 text-grey-8">
        Basic Details
        <div class="group relative inline-block">
          <q-icon
            class="text-lg text-white"
            color="blue-7"
            name="info"
          ></q-icon>
          <div
            class="absolute bottom-full left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100"
          >
            <span
              class="absolute bottom-[-4px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"
            ></span>
            Store basic details
          </div>
        </div>
      </div>
      <!--basic details finish-->
      <!--First part finish-->
      <hr style="text-color: #e1e0e0" />

      <!--Second part-->
      <div class="row">
        <!--first column-->
        <div class="col-12 col-md-6 pl-3 md:pl-10">
          <div>
            <!--bussiness name-->
            <div class="q-pt-md text-bold" style="font-size: 18px">
              Bussiness name
            </div>
            <div class="q-pt-md text-h6 text-gray-700">
              {{ genius }}
              <div class="group relative inline-block">
                <q-icon
                  @click="card = !card"
                  class="q-px-md"
                  color="blue-7"
                  name="edit_square"
                ></q-icon>
                <div
                  class="absolute bottom-full left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100"
                >
                  <span
                    class="absolute bottom-[-4px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"
                  ></span>
                  Edit name
                </div>
              </div>
            </div>
            <!--bussiness name finish-->
            <!--user name and edit-->
            <div class="q-pt-md text-bold" style="font-size: 18px">
              Username
            </div>
            <div class="q-pt-md text-h6 text-bold text-gray-700">
              {{ username }}
              <div class="group relative inline-block">
                <q-icon
                  class="q-px-md"
                  color="blue-7"
                  name="bookmarks"
                ></q-icon>
                <div
                  class="absolute bottom-full left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100"
                >
                  <span
                    class="absolute bottom-[-4px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"
                  ></span>
                  copy
                </div>
              </div>
              <div class="group relative inline-block">
                <q-icon
                  @click="card2 = !card2"
                  color="blue-7"
                  name="edit_square"
                ></q-icon>
                <div
                  class="absolute bottom-full left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100"
                >
                  <span
                    class="absolute bottom-[-4px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"
                  ></span>
                  Edit name
                </div>
              </div>
            </div>
            <!--user name and edit finish-->
            <!--ordering link-->
            <div class="q-pt-md text-bold" style="font-size: 18px">
              Ordering link
            </div>
            <div>
              <p class="q-py-md text-h6 text-gray-700">
                <a href="  https://github.com/BornToDi"
                  >https://engaze.ai/genius
                  <div class="group relative inline-block">
                    <q-icon
                      class="q-px-md"
                      color="blue-7"
                      name="bookmarks"
                    ></q-icon>
                    <div
                      class="absolute bottom-full left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100"
                    >
                      <span
                        class="absolute bottom-[-4px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"
                      ></span>
                      copy
                    </div>
                  </div>
                </a>
              </p>
            </div>
            <!--ordering link finish-->
            <!--QR code-->
            <a
              class=""
              href="www.qr-code-generator.com/"
              border="0"
              style="cursor: default"
              rel="nofollow"
            ></a
            ><img
              src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.example.com&chs=180x180&choe=UTF-8&chld=L|2"
            />
            <!--QR code finish-->
            <!--Download-->
            <div>
              <p class="q-py-md text-h6">
                <a href=" ">Download </a>
              </p>
            </div>
            <!--Download finish-->
            <div class="q-pt-md text-bold" style="font-size: 18px">
              Category
            </div>
            <div class="q-pt-md text-h6 text-bold text-gray-700">
              {{ category }}

              <div class="group relative inline-block">
                <q-icon
                  @click="card3 = !card3"
                  class="q-px-md"
                  color="blue-7"
                  name="edit_square"
                ></q-icon>
                <div
                  class="absolute bottom-full left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100"
                >
                  <span
                    class="absolute bottom-[-4px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"
                  ></span>
                  Edit category
                </div>
              </div>
            </div>

            <div class="q-pt-md text-bold" style="font-size: 18px">
              Country - Currency
            </div>

            <div class="q-py-md text-h6 text-bold text-gray-700">
              {{ country }}

              <div class="group relative inline-block">
                <q-icon
                  @click="card4 = !card4"
                  class="q-px-md"
                  color="blue-7"
                  name="edit_square"
                ></q-icon>
                <div
                  class="absolute bottom-full left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100"
                >
                  <span
                    class="absolute bottom-[-4px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"
                  ></span>
                  Edit
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--second column-->
        <div class="col-12 col-md-6 pl-3 md:pl-10">
          <div class="text-h6 q-pt-md">Logo</div>
          <img
            class="h-32 w-44 border-solid border-3 rounded-md border-teal-600"
            src="./logo.png"
            alt="Logo"
          />
        </div>
      </div>
      <!--Second part finish-->
    </div>
    <!--3rd part-->
    <div
      style="
        background-color: #f2f5f6;
        border-style: solid;
        border-width: 1px;
        border-color: #e1e0e0;
      "
      class="mx-3 md:mx-10 my-3 md:my-5"
    >
      <div class="row text-bold text-grey-8 md:py-4">
        <div class="col-6 col-md-9 pl-3 md:pl-10 text-xl pt-3">
          Branches

          <div class="group relative inline-block">
            <q-icon class="text-lg" color="blue-7" name="info"></q-icon>
            <div
              class="absolute bottom-full left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100"
            >
              <span
                class="absolute bottom-[-4px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"
              ></span>
              Add/Edit your branches settings
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="text-right py-2 mr-2 md:mr-7">
            <q-btn
              @click="$router.replace('/admin/addBranch')"
              class="bg-secondary text-white"
              no-caps
              >Add Branch</q-btn
            >
          </div>
        </div>
      </div>
      <hr style="text-color: #ebe5e5" />

      <div class="row text-bold text-black">
        <div class="col text-xl pl-3 md:pl-10 pb-2">Genius house</div>

        <div class="col">
          <div
            class="q-px-xl text-2xl md:text-4xl md:pb-2 text-right text-white q-pr-xl"
          >
            <q-icon
              @click="showText = !showText"
              color="info"
              name="arrow_circle_down"
            ></q-icon>
          </div>
        </div>
      </div>
      <q-separator></q-separator>
      <div v-if="showText" class="row q-pb-md py-3">
        <div class="col-3 pl-3 md:pl-10 text-h6" style="text-align: left">
          <span class="text-grey">city</span> <br />
          Banani
        </div>
        <div class="col-3 pl-3 md:pl-10 text-h6">
          <span class="text-grey">Area</span> <br />
          Banani
        </div>

        <div class="col-6 pl-3 md:pl-10 text-h6" style="text-align: left">
          <span class="text-gray-400">Map Location</span> <br />
          Unnamed Road, Dhaka 1212, Bangladesh
        </div>
        <div class="py-4 pl-3 md:pl-10">
          <q-btn class="text-bold q-mx-xs" outline color="info" label="Edit" />
          <q-btn class="text-bold q-mx-xs" outline color="red" label="Delete" />
        </div>
      </div>
    </div>
    <!--dialoug 1-->
    <q-dialog v-model="card">
      <q-card class="my-card" style="width: 700px; height: 300px">
        <q-card-section>
          <q-input square outlined v-model="text" label="Square outlined" />
        </q-card-section>
        <div class="q-mx-md">
          <q-btn v-close-popup flat color="danger" label="close" />
          <q-btn @click="apple" v-close-popup flat color="info" label="done" />
        </div>
        <q-separator />
      </q-card>
    </q-dialog>
    <!--dialoug finish-->
    <!--dialoug 2-->
    <q-dialog v-model="card2">
      <q-card class="my-card" style="width: 700px; height: 300px">
        <q-card-section>
          <q-input square outlined v-model="text2" label="Square outlined" />
        </q-card-section>
        <div class="q-mx-md">
          <q-btn v-close-popup flat color="danger" label="close" />
          <q-btn @click="apple1" v-close-popup flat color="info" label="done" />
        </div>
        <q-separator />
      </q-card>
    </q-dialog>
    <!--dialoug finish-->
    <!--dialoug 3-->
    <q-dialog v-model="card3">
      <q-card class="my-card" style="width: 700px; height: 300px">
        <q-card-section>
          <q-input square outlined v-model="text3" label="Square outlined" />
        </q-card-section>
        <div class="q-mx-md">
          <q-btn v-close-popup flat color="danger" label="close" />
          <q-btn @click="apple2" v-close-popup flat color="info" label="done" />
        </div>
        <q-separator />
      </q-card>
    </q-dialog>
    <!--dialoug 3 done-->
    <!--dialoug 3-->
    <q-dialog v-model="card4">
      <q-card class="my-card" style="width: 700px; height: 300px">
        <q-card-section>
          <q-input square outlined v-model="text4" label="Square outlined" />
        </q-card-section>
        <div class="q-mx-md">
          <q-btn v-close-popup flat color="danger" label="close" />
          <q-btn @click="apple3" v-close-popup flat color="info" label="done" />
        </div>
        <q-separator />
      </q-card>
    </q-dialog>
    <!--dialoug 3 done-->
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showText = ref(false);
const card = ref(false);
const card2 = ref(false);
const card3 = ref(false);
const card4 = ref(false);
const text = ref('');
const text2 = ref('');
const text3 = ref('');
const text4 = ref('');
let genius = 'naeem';
let username = '/genius';
let category = 'Restaurant/Cloud kitchens';
let country = 'Bangladesh - BDT';

function apple() {
  genius = text.value;
}
function apple1() {
  username = text2.value;
}
function apple2() {
  category = text3.value;
}
function apple3() {
  country = text4.value;
}
</script>
