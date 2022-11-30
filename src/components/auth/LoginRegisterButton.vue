<template>
  <div class="login-register-button">
    <q-btn
      color="primary"
      v-if="!username"
      label="Connexion"
      icon="login"
      no-caps
      class="button"
      @click="login"
    />
    <q-btn color="primary" v-else :label="username" no-caps class="button">
      <q-menu class="user-menu">
        <q-btn class="logout-button" no-caps @click="logout" color="primary">
          <div class="content">
            <q-icon name="logout" class="icon" />
            Déconnexion
          </div>
        </q-btn>
      </q-menu>
    </q-btn>
    <q-dialog v-model="loginRegister">
      <LoginRegisterPopup @logged-in="loggedIn" />
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LoginRegisterPopup from "components/auth/LoginRegisterPopup.vue";
import { logout } from "src/helpers/apiCalls";

export default defineComponent({
  name: "LoginRegisterButton",
  components: { LoginRegisterPopup },
  props: {},
  data() {
    return {
      loginRegister: false,
      username: null,
    };
  },
  created() {
    if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username");
    }
  },
  methods: {
    login() {
      this.loginRegister = true;
    },
    logout() {
      logout().finally(() => {
        this.username = null;
      });
    },
    loggedIn() {
      this.loginRegister = false;
      this.username = localStorage.getItem("username");
      this.$q.notify({
        message: "Vous êtes désormais connecté",
        color: "positive",
      });
    },
  },
});
</script>
<style lang="scss" scoped>
.login-register-button {
  margin-right: 10px;
}
</style>
<style lang="scss">
.user-menu {
  margin-top: 10px !important;
  .logout-button {
    .content {
      display: flex;
      .icon {
        margin-right: 5px;
      }
    }
  }
}
</style>