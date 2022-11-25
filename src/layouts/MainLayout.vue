<template>
  <q-layout>
    <q-page-container>
      <div class="header">
        <q-btn
          color="primary"
          label="Ajouter"
          icon="add"
          no-caps
          class="button"
          @click="$router.push('ajouterDocument')"
          v-if="$route.name !== 'addDocument'"
        />
        <q-btn
          color="primary"
          label="Connexion"
          icon="login"
          no-caps
          class="button"
          @click="login"
        />
      </div>
      <router-view />
    </q-page-container>
    <q-dialog v-model="loginRegister">
      <LoginRegisterPopup />
    </q-dialog>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from "vue";
import LoginRegisterPopup from "components/auth/LoginRegisterPopup.vue";

export default defineComponent({
  name: "MainLayout",
  components: { LoginRegisterPopup },
  data() {
    return {
      loginRegister: false,
    };
  },
  created() {},
  methods: {
    login() {
      this.loginRegister = true;
    },
  },
});
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: right;
  padding-top: 10px;
  .button {
    margin-right: 10px;
  }
}
</style>
