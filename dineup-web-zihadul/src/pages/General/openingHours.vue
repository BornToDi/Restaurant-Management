<template>
  <q-page padding>
    <div
      style="
        background-color: #f2f5f6;
        border-style: solid;
        border-width: 1px;
        border-color: #e1e0e0;
        font-size: 25px;
      "
      class="q-mt-sm q-mb-xl pl-1 md:pl-5 mx-1 md:mx-6"
    >
      <div class="pl-2 py-5 text-2xl text-bold text-grey">{{ name }}</div>
      <q-separator></q-separator>
      <!--result show-->
      <div class="row gap-3 px-3 md:px-10 my-4">
        <div
          class="w-96 md:w-68 px-3 py-2 text-lg text-gray-900 border-solid border-neutral-500 border-1 md:border-2 rounded-xl bg-zinc-200"
          v-for="(item, index) in openingHour"
          :key="index"
        >
          <div class="">
            <div class="py-1">
              {{ item.Always }} {{ item.General }} {{ item.Daywise }}
            </div>

            <div>
              <q-icon color="blue" name="info" />
              <span class="text-red-700 pl-1">General Opening :</span>
              {{ item.start }}{{ 'AM' }}
              {{ '-' }}
              {{ item.end }}{{ 'PM' }}
            </div>
            <div>
              <q-icon color="blue" name="info" />
              <span class="text-red-700 pl-1"> Day-wise opening :</span>
              <br />
              <div class="text-blue-800 pl-5">
                Sunday - {{ item.day1 }} {{ 'AM' }} {{ '-' }} {{ item.night1
                }}{{ 'PM' }} <br />

                Monday - {{ item.day2 }} {{ 'AM' }} {{ '-' }} {{ item.night2
                }}{{ 'PM' }} <br />
                Tuesday - {{ item.day3 }} {{ 'AM' }} {{ '-' }} {{ item.night3
                }}{{ 'PM' }} <br />
                Wednesday - {{ item.day4 }} {{ 'AM' }} {{ '-' }} {{ item.night4
                }}{{ 'PM' }} <br />
                Thursday - {{ item.day5 }} {{ 'AM' }} {{ '-' }} {{ item.night5
                }}{{ 'PM' }} <br />
                Friday - {{ item.day6 }} {{ 'AM' }} {{ '-' }} {{ item.night6
                }}{{ 'PM' }} <br />
                Saturday - {{ item.day7 }} {{ 'AM' }} {{ '-' }} {{ item.night7
                }}{{ 'PM' }} <br />
              </div>
              <div class="flex">
                <q-icon class="pt-1" color="blue" name="info" />
                <div class="text-red-700 pl-1">Close :</div>
                <div class="gap-2 row pl-1">
                  <div v-if="!sundayTime">Sunday</div>
                  <div v-if="!mondayTime">Monday</div>
                  <div v-if="!tuesdayTime">Tuesday</div>
                  <div v-if="!wednesdayTime">Wednesday</div>
                  <div v-if="!thursdayTime">Thursday</div>
                  <div v-if="!fridayTime">Friday</div>
                  <div v-if="!saturdayTime">Saturday</div>
                </div>
              </div>
            </div>

            <div class="py-1">
              <q-icon color="blue" name="info" />
              <span class="text-red-700 pl-1"> Use-for :</span>

              {{ item.checkIn }} {{ item.checkUp }}
              {{ item.checkDelivery }}
            </div>

            <div class="py-1">
              <q-icon color="blue" name="info" />
              <span class="text-red-700 pl-1"> Use-in :</span>
              {{ item.allBranch }}
            </div>
            <button
              @click="removeTask(index)"
              class="my-1 ml-5 px-2 text-center md:px-10 pb-1 text-base text-white rounded-lg cursor-pointer bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <!--result show end-->
      <div class="text-lg text-gray-600 text-bold pl-1 md:pl-3 py-1 md:py-3">
        Add Opening hour
      </div>
      <q-separator />
      <div class="my-3 mx-3">
        <form @submit.prevent="addItem">
          <p>
            <input
              class="h-4 w-4 rounded-full"
              type="checkbox"
              v-model="Always"
              true-value="Always open"
            />
            <label class="pl-2 text-lg text-bold text-gray-800"
              >Always open</label
            >
            <br />
            <span class="text-base italic"
              >Store is open 24 hours, 7 days a week</span
            >
          </p>
          <!--general opening time-->
          <p>
            <input
              @click="generalTime"
              class="h-4 w-4 rounded-full"
              type="checkbox"
              v-model="General"
              true-value="General opening"
            />
            <label class="pl-2 text-lg text-bold text-gray-800"
              >General opening hours</label
            >
            <br />
            <span class="text-base italic"
              >Common store opening hours for 7 days of the week</span
            >
          </p>
          <div v-if="showTime" class="text-base my-2">
            <input
              class="mx-2 py-1 px-2 text-blue-600 border-gray-400 rounded-md"
              type="time"
              v-model="start"
            />
            <input
              class="mx-2 py-1 px-2 text-red-700 border-gray-400 rounded-md"
              type="time"
              v-model="end"
            />
          </div>
          <!--general opening time finish-->
          <!--daywise opening-->
          <p>
            <input
              @click="showDaywise = !showDaywise"
              class="h-4 w-4 rounded-full"
              type="checkbox"
              v-model="Daywise"
              true-value="Day wise opening"
            />
            <label class="pl-2 text-lg text-bold text-gray-800"
              >Day wise opening hours</label
            >
            <br />
            <span class="text-base italic"
              >Specific store opening hours depending on day of week</span
            >
          </p>
          <!--hide day wise-->
          <div v-if="showDaywise">
            <div>
              <div class="row text-lg gap-3 my-3">
                <div class="col-3 col-md-1 pl-3">Sunday</div>
                <p class="col-6 col-md-1">
                  <input
                    @click="check1"
                    class="h-4 w-4"
                    type="checkbox"
                    v-model="sunday"
                    true-value="sunday"
                  />
                  <label
                    v-if="open1"
                    class="pl-2 text-lg text-bold text-gray-800"
                    >Close</label
                  >
                  <label v-else class="pl-2 text-lg text-bold text-gray-800"
                    >Open</label
                  >
                </p>
                <div v-if="sundayTime" class="col-12 col-md-3 text-base">
                  <input
                    class="mx-2 px-2 text-blue-600 border-gray-400 rounded-md"
                    type="time"
                    v-model="startDaywise1"
                  />
                  <input
                    class="mx-2 px-2 text-red-700 border-gray-400 rounded-md"
                    type="time"
                    v-model="endDaywise1"
                  />
                </div>
              </div>
              <div class="row text-lg gap-3 my-3">
                <div class="col-3 col-md-1 pl-3">Monday</div>
                <p class="col-6 col-md-1">
                  <input
                    @click="check2"
                    class="h-4 w-4"
                    type="checkbox"
                    v-model="monday"
                    true-value="monday"
                  />
                  <label
                    v-if="open2"
                    class="pl-2 text-lg text-bold text-gray-800"
                    >Close</label
                  >
                  <label v-else class="pl-2 text-lg text-bold text-gray-800"
                    >Open</label
                  >
                </p>
                <div v-if="mondayTime" class="col-12 col-md-3 text-base">
                  <input
                    class="mx-2 px-2 text-blue-600 border-gray-400 rounded-md"
                    type="time"
                    v-model="startDaywise2"
                  />
                  <input
                    class="mx-2 px-2 text-red-700 border-gray-400 rounded-md"
                    type="time"
                    v-model="endDaywise2"
                  />
                </div>
              </div>
              <div class="row text-lg gap-3 my-3">
                <div class="col-3 col-md-1 pl-3">Tuesday</div>
                <p class="col-6 col-md-1">
                  <input
                    @click="check3"
                    class="h-4 w-4"
                    type="checkbox"
                    v-model="tuesday"
                    true-value="tuesday"
                  />
                  <label
                    v-if="open3"
                    class="pl-2 text-lg text-bold text-gray-800"
                    >Close</label
                  >
                  <label v-else class="pl-2 text-lg text-bold text-gray-800"
                    >Open</label
                  >
                </p>
                <div v-if="tuesdayTime" class="col-12 col-md-3 text-base">
                  <input
                    class="mx-2 px-2 text-blue-600 border-gray-400 rounded-md"
                    type="time"
                    v-model="startDaywise3"
                  />
                  <input
                    class="mx-2 px-2 text-red-700 border-gray-400 rounded-md"
                    type="time"
                    v-model="endDaywise3"
                  />
                </div>
              </div>
              <div class="row text-lg gap-3 my-3">
                <div class="col-3 col-md-1 pl-3">Wednesday</div>
                <p class="col-6 col-md-1">
                  <input
                    @click="check4"
                    class="h-4 w-4"
                    type="checkbox"
                    v-model="wednesday"
                    true-value="wednesday"
                  />
                  <label
                    v-if="open4"
                    class="pl-2 text-lg text-bold text-gray-800"
                    >Close</label
                  >
                  <label v-else class="pl-2 text-lg text-bold text-gray-800"
                    >Open</label
                  >
                </p>
                <div v-if="wednesdayTime" class="col-12 col-md-3 text-base">
                  <input
                    class="mx-2 px-2 text-blue-600 border-gray-400 rounded-md"
                    type="time"
                    v-model="startDaywise4"
                  />
                  <input
                    class="mx-2 px-2 text-red-700 border-gray-400 rounded-md"
                    type="time"
                    v-model="endDaywise4"
                  />
                </div>
              </div>
              <div class="row text-lg gap-3 my-3">
                <div class="col-3 col-md-1 pl-3">Thursday</div>
                <p class="col-6 col-md-1">
                  <input
                    @click="check5"
                    class="h-4 w-4"
                    type="checkbox"
                    v-model="thursday"
                    true-value="thursday"
                  />
                  <label
                    v-if="open5"
                    class="pl-2 text-lg text-bold text-gray-800"
                    >Close</label
                  >
                  <label v-else class="pl-2 text-lg text-bold text-gray-800"
                    >Open</label
                  >
                </p>
                <div v-if="thursdayTime" class="col-12 col-md-3 text-base">
                  <input
                    class="mx-2 px-2 text-blue-600 border-gray-400 rounded-md"
                    type="time"
                    v-model="startDaywise5"
                  />
                  <input
                    class="mx-2 px-2 text-red-700 border-gray-400 rounded-md"
                    type="time"
                    v-model="endDaywise5"
                  />
                </div>
              </div>
              <div class="row text-lg gap-3 my-3">
                <div class="col-3 col-md-1 pl-3">Friday</div>
                <p class="col-6 col-md-1">
                  <input
                    @click="check6"
                    class="h-4 w-4"
                    type="checkbox"
                    v-model="friday"
                    true-value="friday"
                  />
                  <label
                    v-if="open6"
                    class="pl-2 text-lg text-bold text-gray-800"
                    >Close</label
                  >
                  <label v-else class="pl-2 text-lg text-bold text-gray-800"
                    >Open</label
                  >
                </p>
                <div v-if="fridayTime" class="col-12 col-md-3 text-base">
                  <input
                    class="mx-2 px-2 text-blue-600 border-gray-400 rounded-md"
                    type="time"
                    v-model="startDaywise6"
                  />
                  <input
                    class="mx-2 px-2 text-red-700 border-gray-400 rounded-md"
                    type="time"
                    v-model="endDaywise6"
                  />
                </div>
              </div>
              <div class="row text-lg gap-3 my-3">
                <div class="col-3 col-md-1 pl-3">Saturday</div>
                <p class="col-6 col-md-1">
                  <input
                    @click="check7"
                    class="h-4 w-4"
                    type="checkbox"
                    v-model="saturday"
                    true-value="saturday"
                  />
                  <label
                    v-if="open7"
                    class="pl-2 text-lg text-bold text-gray-800"
                    >Close</label
                  >
                  <label v-else class="pl-2 text-lg text-bold text-gray-800"
                    >Open</label
                  >
                </p>
                <div v-if="saturdayTime" class="col-12 col-md-3 text-base">
                  <input
                    class="mx-2 px-2 text-blue-600 border-gray-400 rounded-md"
                    type="time"
                    v-model="startDaywise7"
                  />
                  <input
                    class="mx-2 px-2 text-red-700 border-gray-400 rounded-md"
                    type="time"
                    v-model="endDaywise7"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--daywise opening finish-->
          <p class="text-gray-600 text-xl text-bold pt-3">
            Use In <br />
            <input
              class="h-4 w-4"
              type="checkbox"
              v-model="allBranch"
              true-value="All Branch"
              required
            />
            <label class="text-lg text-bold text-gray-800"> All Branch</label>
          </p>
          <div class="py-3 text-gray-600 text-xl text-bold">
            Use for
            <div class="flex gap-4">
              <p>
                <input
                  class="h-4 w-4"
                  type="checkbox"
                  v-model="checkIn"
                  true-value="Dine-in"
                />
                <label class="pl-2 text-lg text-bold text-gray-800"
                  >Dine In</label
                >
              </p>
              <p>
                <input
                  class="h-4 w-4"
                  type="checkbox"
                  v-model="checkUp"
                  true-value="Pick-up"
                />
                <label class="pl-2 text-lg text-bold text-gray-800"
                  >Pick Up</label
                >
              </p>
              <p>
                <input
                  class="h-4 w-4"
                  type="checkbox"
                  v-model="checkDelivery"
                  true-value="Delivery"
                />
                <label class="pl-2 text-lg text-bold text-gray-800"
                  >Delivery</label
                >
              </p>
            </div>
          </div>
          <button
            class="rounded-md text-lg bg-teal-500 text-white px-8 py-1 my-4"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
export default {
  data() {
    return {
      name: 'Opening hour',
      showTime: false,
      showDaywise: false,

      Always: null,
      General: null,
      start: 0,
      end: 0,
      Daywise: null,
      startDaywise1: 0,
      startDaywise2: 0,
      startDaywise3: 0,
      startDaywise4: null,
      startDaywise5: null,
      startDaywise6: null,
      startDaywise7: null,
      endDaywise1: null,
      endDaywise2: null,
      endDaywise3: null,
      endDaywise4: null,
      endDaywise5: null,
      endDaywise6: null,
      endDaywise7: null,
      allBranch: null,
      checkIn: null,
      checkUp: null,
      checkDelivery: null,
      open: ref('true'),
      sunday: ref('sunday'),
      sundayTime: true,
      monday: ref('monday'),
      mondayTime: ref('true'),
      tuesday: ref('tuesday'),
      tuesdayTime: ref('true'),
      wednesday: ref('wednesday'),
      wednesdayTime: ref('true'),
      thursday: ref('thursday'),
      thursdayTime: ref('true'),
      friday: ref('friday'),
      fridayTime: ref('true'),
      saturday: ref('saturday'),
      saturdayTime: ref('true'),
      openingHour: [],
    };
  },
  methods: {
    addItem() {
      let item = {
        Always: this.Always,
        General: this.General,
        start: this.start,
        end: this.end,
        Daywise: this.Daywise,
        allBranch: this.allBranch,
        checkIn: this.checkIn,
        checkUp: this.checkUp,
        checkDelivery: this.checkDelivery,
        showTime: this.showTime,
        day1: this.startDaywise1,
        day2: this.startDaywise2,
        day3: this.startDaywise3,
        day4: this.startDaywise4,
        day5: this.startDaywise5,
        day6: this.startDaywise6,
        day7: this.startDaywise7,
        night1: this.endDaywise1,
        night2: this.endDaywise2,
        night3: this.endDaywise3,
        night4: this.endDaywise4,
        night5: this.endDaywise5,
        night6: this.endDaywise6,
        night7: this.endDaywise7,
      };

      this.openingHour.push(item);
      this.Always = null;
      this.General = null;
      this.start = null;
      this.end = null;
      this.Daywise = null;
      this.startDaywise = null;
      this.endDaywise = null;
      this.allBranch = null;
      this.checkIn = null;
      this.checkUp = null;
      this.checkDelivery = null;
      this.showTime = false;
      this.showDaywise = false;
      this.startDaywise1 = null;
      this.startDaywise2 = null;
      this.startDaywise3 = null;
      this.startDaywise4 = null;
      this.startDaywise5 = null;
      this.startDaywise6 = null;
      this.startDaywise7 = null;
      this.endDaywise1 = null;
      this.endDaywise2 = null;
      this.endDaywise3 = null;
      this.endDaywise4 = null;
      this.endDaywise5 = null;
      this.endDaywise6 = null;
      this.endDaywise7 = null;
    },
    generalTime() {
      this.showTime = !this.showTime;
    },
    check1() {
      this.open1 = !this.open1;
      this.sundayTime = !this.sundayTime;
    },
    check2() {
      this.open2 = !this.open2;
      this.mondayTime = !this.mondayTime;
    },
    check3() {
      this.open3 = !this.open3;
      this.tuesdayTime = !this.tuesdayTime;
    },
    check4() {
      this.open4 = !this.open4;
      this.wednesdayTime = !this.wednesdayTime;
    },
    check5() {
      this.open5 = !this.open5;
      this.thursdayTime = !this.thursdayTime;
    },
    check6() {
      this.open6 = !this.open6;
      this.fridayTime = !this.fridayTime;
    },
    check7() {
      this.open7 = !this.open7;
      this.saturdayTime = !this.saturdayTime;
    },
    removeTask(index) {
      this.openingHour.splice(index, 1);
    },
  },
};
</script>
