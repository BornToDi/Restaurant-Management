<template>
  <div class="text-red" @click="closeThis">
    <div><h1>Hello beautiful</h1></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showText: false,
    };
  },
  methods: {
    closeThis() {
      this.$emit('close');
    },
  },
};
</script>
