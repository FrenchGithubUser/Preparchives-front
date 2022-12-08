<template>
  <div class="login">
    <div class="title">Connexion</div>
    <q-input class="input" v-model="form.username" label="Email/username" />
    <q-input
      class="input"
      v-model="form.password"
      label="Mot de passe"
      type="password"
    />
    <q-btn
      class="validate"
      no-caps
      label="Valider"
      color="primary"
      @click="submit"
      :loading="loading"
    />
    <div class="no-account">
      Pas encore de compte ?
      <div class="cliquable" @click="$emit('register')">Créer un compte</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { login } from "../../helpers/apiCalls.js";
import { jsonToFormdata } from "../../helpers/helpers.js";

export default defineComponent({
  name: "LoginPopup",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      loading: false,
    };
  },
  created() {},
  methods: {
    submit() {
      this.loading = true;
      login(jsonToFormdata(this.form))
        .then(() => {
          localStorage.setItem("username", this.form.username);
          this.$emit("logged-in");
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 1.5em;
  }
  .input {
    width: 20em;
  }
  .validate {
    margin-top: 15px;
  }
  .no-account {
    text-align: center;
    margin-top: 10px;
    font-size: 0.9em;
  }
}
</style>