<template>
  <q-layout view="lHr lpR lFr" unelevated>
    <q-header reveal class="text-white" height-hint="64">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-item to="/" clickable style="max-width: 220px">
            <div class="text-white">Iching Resturant</div>
          </q-item>
        </q-toolbar-title>

        <q-btn dense flat  no-caps label="Login" to="/auth" />
      </q-toolbar>
    </q-header>

    <q-drawer :width="300" v-model="leftDrawerOpen" side="left" bordered>
      <dashboard-nav />
    </q-drawer>

    <!-- <q-drawer v-model="rightDrawerOpen" behavior="mobile" side="right" bordered>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import DashboardNav from 'src/components/navs/DashboardNav.vue';

export default {
  components: {
    DashboardNav,
  },
  setup() {
    const leftDrawerOpen = ref(true);
    // const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      // rightDrawerOpen,
      // toggleRightDrawer() {
      //   rightDrawerOpen.value = !rightDrawerOpen.value;
      // },
    };
  },
};
</script>
