<template>
  <q-page padding>
    <!-- content -->
    <form action="">
      <div>
        <input type="checkbox" value="naeem" v-model="names" />
        <label>Naeem</label>
      </div>
      <div>
        <input type="checkbox" value="omi" v-model="names" />
        <label>omi</label>
      </div>
      <div>
        <input type="checkbox" value="bubu" v-model="names" />
        <label>bubu</label>
      </div>
    </form>
    <p>names: {{ names }}</p>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName'
  data() {
    return {
      names: [],
    };
  },
};
</script>
