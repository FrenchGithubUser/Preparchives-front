<template>
  <div class="login">
    <div class="title">Connexion</div>
    <q-input class="input" v-model="form.username" label="Email/username" />
    <q-input class="input" v-model="form.password" label="Mot de passe" />
    <q-btn
      class="validate"
      no-caps
      label="Valider"
      color="primary"
      @click="submit"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { login } from "../../helpers/apiCalls.js";

export default defineComponent({
  name: "LoginPopup",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  created() {},
  methods: {
    submit() {
      let formData = new FormData();
      // formData.append("file", JSON.stringify(this.form));
      formData.append("username", this.username);
      formData.append("password", this.password);
      login(formData).then((data) => {
        console.log(data);
      });
    },
  },
});
</script>
<style lang="scss" scoped>
.login {
  padding: 15px;
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
}
</style>