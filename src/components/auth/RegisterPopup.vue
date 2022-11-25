<template>
  <div class="login">
    <div class="title">Créer un compte</div>
    <q-input class="input" v-model="form.username" label="Nom d'utilisateur" />
    <q-input class="input" v-model="form.prenom" label="Prénom" />
    <q-input class="input" v-model="form.nom" label="Nom" />
    <q-input class="input" v-model="form.email" label="Email" />
    <q-input class="input" v-model="form.password" label="Mot de passe" type="password" />
    <q-btn class="validate" no-caps label="Valider" color="primary" @click="submit" />
    <div class="existing-account">
      Vous avez déjà un compte ?
      <div class="cliquable" @click="$emit('login')">Connexion</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { register } from "../../helpers/apiCalls.js";
import {jsonToFormdata} from "../../helpers/helpers.js"

export default defineComponent({
  name: "LoginPopup",
  data() {
    return {
      form: {
        username: "",
        prenom: "",
        nom: "",
        email: "",
        password: "",
      },
    };
  },
  created() {},
  methods: {
    submit() {
      register(jsonToFormdata(this.form)).then((data) => {
        if (data.Registered){
          this.$emit('login')
          this.$q.notify({message:'Compte créé avec succès', color: 'positive'})
        }
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
  .existing-account {
    text-align: center;
    margin-top: 10px;
    font-size: 0.9em;
  }
}
</style>