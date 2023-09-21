<template>
  <div class="q-pa-md bg-white">
    <div class="text-bold text-h6 q-ml-xl">All Orders</div>

    <div class="q-mx-xl q-my-md bg-indigo-1">
      <!--first row-->
      <div class="grid lg:grid-cols-4 md:grid-cols-2">
        <div class="">
          <div class="q-pa-md">
            <q-input
              outlined
              v-model="text"
              :dense="dense"
              label="Search Order"
              class="bg-white"
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </div>
        <div class="">
          <div class="q-pa-md">
            <q-btn-dropdown
              color="white-3"
              class="text-blue-grey-13 q-py-md full-width bg-white"
              label="Select order status"
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
        <div class="">
          <div class="q-pa-md">
            <q-btn-dropdown
              color="white"
              class="text-blue-grey-13 q-py-md full-width"
              label="Select Order type"
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
        <div class="">
          <div class="q-pa-md">
            <q-btn-dropdown
              color="white"
              class="text-blue-grey-13 q-py-md full-width"
              label="Select Branch"
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
        <div class="">
          <div class="q-pa-md">
            <q-btn-dropdown
              outlined
              color="white"
              class="text-blue-grey-13 q-py-md full-width"
              label="Delivery System"
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
        <div class="">
          <div class="">
            <div class="q-pa-md" style="max-width: 600px">
              <q-input
                filled
                class="full-width text-slate-200"
                color="white"
                v-model="date"
                mask="date"
                :rules="['date']"
                label="From"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="date">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="blue"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
        </div>
        <div class="">
          <div class="">
            <div class="q-pa-md" style="max-width: 600px">
              <q-input
                filled
                v-model="dateTo"
                mask="date"
                :rules="['date']"
                label="To"
                class="full-width"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="dateTo">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
        </div>
      </div>
      <!--finish-->
    </div>
    <!--Order list-->
    <div>
      <div class="q-mx-xl q-mt-md bg-indigo-1">
        <div class="row">
          <div class="text-h6 text-bold q-pl-xl q-py-md col-12 col-md-6">
            Order list
          </div>
          <div class="col-12 col-md-6 q-py-md gap-14 q-pl-xl">
            <q-btn
              active
              @click="showText = !showText"
              class="q-mx-xs q-pl-sm"
              outline
              color="black"
              label="Export Products Count"
            />
            <q-btn
              @click="showText2 = !showText2"
              class="q-mx-xs q-pl-sm"
              outline
              color="black"
              label="Export Users "
            />
            <q-btn
              class="q-mx-xs q-pl-sm"
              outline
              color="black"
              label="Export Orders"
            />
          </div>
        </div>

        <hr class="text-grey-12" />
        <!--table part-->
        <div>
          <!--table part1-->
          <div v-if="showText">
            <div class="text-h6 text-info text-bold text-center q-py-sm">
              Exports Products Count
            </div>
            <q-table
              class="flex rounded-borders"
              :rows="[
                {
                  Name: 'Naeem',
                  Email: 'z.i.nayeem45@gmail.com',
                  Age: 24,
                  Adress: 'Dhaka',
                  Salary: 24000,
                },
                {
                  Name: 'Shuvo',
                  Email: 'shuvo@gmail.com',
                  Age: 23,
                  Adress: 'Khulna',
                  Salary: 24000,
                },
                {
                  Name: 'Siyam',
                  Email: 'Siyam@gmail.com',
                  Age: 20,
                  Adress: 'Dhaka',
                  Salary: 26000,
                },
                {
                  Name: 'Opu',
                  Email: 'opu@gmail.com',
                  Age: 27,
                  Adress: 'Barisal',
                  Salary: 22000,
                },
                {
                  Name: 'Srabonty',
                  Email: 'srabonti@gmail.com',
                  Age: 22,
                  Adress: 'Dhaka',
                  Salary: 20000,
                },
              ]"
              :column="[
                {
                  label: 'Name',
                  field: 'name',
                  name: 'name',
                  align: 'left',
                },
                {
                  label: 'Email',
                  field: 'Email',
                  name: 'Email',
                  align: 'left',
                },
                {
                  label: 'Age',
                  field: 'Age',
                  name: 'Age',
                  align: 'center',
                },
                {
                  label: 'Adress',
                  field: 'Adress',
                  name: 'Adress',
                  align: 'left',
                },
              ]"
            >
            </q-table>
            <q-pagination
              class="flex flex-center q-my-sm q-py-md bg-blue-50 rounded-borders"
              color="grey"
              v-model="current"
              :max="5"
              direction-links
              boundary-links
            />
          </div>
          <!--finish-->

          <!--table 2-->
          <div v-if="showText2">
            <div class="text-h6 text-info text-bold text-center q-py-sm">
              Exports Users
            </div>
            <q-table
              class="flex rounded-borders"
              :rows="[
                {
                  Name: 'Sabbir',
                  Email: 'sasabbir@gmail.com',
                  Age: 24,
                  Adress: 'Dhaka',
                },
                {
                  Name: 'Ariful',
                  Email: 'arif@gmail.com',
                  Age: 23,
                  Adress: 'Barisal',
                },
                {
                  Name: 'Siyam',
                  Email: 'Siyam@gmail.com',
                  Age: 20,
                  Adress: 'Dhaka',
                  Salary: 26000,
                },
                {
                  Name: 'Opu',
                  Email: 'opu@gmail.com',
                  Age: 27,
                  Adress: 'Barisal',
                  Salary: 22000,
                },
                {
                  Name: 'Srabonty',
                  Email: 'srabonti@gmail.com',
                  Age: 22,
                  Adress: 'Dhaka',
                  Salary: 20000,
                },
              ]"
              :column="[
                {
                  label: 'Name',
                  field: 'name',
                  name: 'name',
                  align: 'left',
                },
                {
                  label: 'Email',
                  field: 'Email',
                  name: 'Email',
                  align: 'left',
                },
                {
                  label: 'Age',
                  field: 'Age',
                  name: 'Age',
                  align: 'left',
                },
                {
                  label: 'Adress',
                  field: 'Adress',
                  name: 'Adress',
                  align: 'center',
                },
              ]"
            ></q-table>
            <q-pagination
              class="flex flex-center q-my-sm q-py-md bg-blue-50 rounded-borders"
              color="grey"
              v-model="current1"
              :max="5"
              direction-links
              boundary-links
            />
          </div>
          <!--finish-->
        </div>
      </div>
    </div>

    <!--finish-->
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'OrderIndex',

  components: {},
  setup() {
    return {
      date: ref('yyyy/mm/dd'),
      dateTo: ref('yyyy/mm/dd'),
      current: ref(1),
      current1: ref(1),
    };
  },
  data() {
    return {
      showText: true,
      showText2: false,
    };
  },
};
</script>
