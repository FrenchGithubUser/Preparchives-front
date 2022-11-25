<template>
  <q-layout>
    <q-page-container>
      <div class="header">
        <q-btn color="primary" label="Ajouter" icon="add" no-caps class="button" @click="$router.push('ajouterDocument')" v-if="$route.name !== 'addDocument'" />
        <q-btn color="primary" v-if="!username" label="Connexion" icon="login" no-caps class="button" @click="login" />
        <q-btn color="primary" v-else :label="username" no-caps class="button" />
      </div>
      <router-view />
    </q-page-container>
    <q-dialog v-model="loginRegister">
      <LoginRegisterPopup @logged-in="loggedIn" />
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
      username: null
    };
  },
  created() {
    if (localStorage.getItem('username')){
      this.username = localStorage.getItem('username')
    }
  },
  methods: {
    login() {
      this.loginRegister = true;
    },
    loggedIn(){
      this.loginRegister = false
      this.username = localStorage.getItem('username')
      this.$q.notify({message:'Vous êtes désormais connecté', color: 'positive'})
    }
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
