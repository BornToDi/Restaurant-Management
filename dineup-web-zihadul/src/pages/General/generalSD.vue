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
      <div class="pl-2 py-5 text-lg text-bold text-grey">{{ name }}</div>
      <q-separator></q-separator>
      <sdPercentage
        add="Add supplementary duty"
        percent="SD percentage"
        headline="Please insert SD percentage according to authorities"
      />
    </div>
  </q-page>
</template>

<script>
import sdPercentage from 'src/components/general/sdPercentage.vue';

export default {
  components: { sdPercentage },
  data() {
    return {
      name: 'Supplementary Duty (SD)',
    };
  },
};
</script>
