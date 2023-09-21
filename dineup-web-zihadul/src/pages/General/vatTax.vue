<template>
  <div
    style="
      background-color: #f2f5f6;
      border-style: solid;
      border-width: 1px;
      border-color: #e1e0e0;
      font-size: 25px;
    "
    class="q-mt-sm q-mb-xl pl-1 md:px-5 mx-3 md:mx-10"
  >
    <div class="ml-3 md:ml-10 py-5 text-lg text-bold text-grey">
      {{ header }}
    </div>
    <q-separator></q-separator>
    <vatPercent
      add="Add VAT / TAX "
      percent="VAT / TAX percentage"
      enter="Enter vat/tax percentage.."
      headline=" Please insert VAT/TAX percentage according to authorities. Even if your
        menu prices include VAT/TAX"
      caption="VAT/TAX can still be configured for each item"
    />
  </div>
</template>

<script>
import vatPercent from 'src/components/general/vatPercent.vue';

export default {
  components: { vatPercent },
  data() {
    return {
      header: 'VAT / TAX',
    };
  },
};
</script>
