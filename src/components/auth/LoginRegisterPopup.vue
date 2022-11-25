<template>
  <div class="login-register popup">
    <LoginPopup v-if="state === 'login'" @register="state = 'register'" @logged-in="$emit('logged-in')" />
    <RegisterPopup v-if="state === 'register'" @login="state = 'login'" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LoginPopup from "./LoginPopup.vue";
import RegisterPopup from "./RegisterPopup.vue";

export default defineComponent({
  name: "LoginRegister",
  components: { LoginPopup, RegisterPopup },
  data() {
    return {
      state: "login",
    };
  },
  created() {},
  methods: {},
});
</script>
<style lang="scss" scoped>
</style>