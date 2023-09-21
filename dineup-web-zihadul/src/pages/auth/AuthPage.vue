<template>
  <component :is="activeComponent" @changeCompo="changeComponent"></component>
</template>

<script>
import { ref } from 'vue'
import LoginCompo from 'src/components/auth/LoginCompo.vue'
import RegisterCompo from 'src/components/auth/RegisterCompo.vue'
import ForgetPassCompo from 'src/components/auth/ForgetPassCompo.vue'
export default {
  components: {
    LoginCompo,
    RegisterCompo,
    ForgetPassCompo
  },
  setup() {
    const activeComponent = ref('LoginCompo');

    function changeComponent(component) {
      activeComponent.value = component;
    }

    return {
      activeComponent,
      changeComponent
    }
  }
}
</script>
