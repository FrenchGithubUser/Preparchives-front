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
          @click="addDocument"
          v-if="$route.name !== 'addDocument'"
        />
        <LoginRegisterButton />
      </div>
      <router-view />
      <div class="footer">
        <FooterItem label="À propos" link="à-propos" />
        <FooterItem label="Contact" link="contact" />
        <FooterItem
          label="Conditions d'utilisation"
          link="conditions-dutilisation"
        />
      </div>
      <AccountNeeded />
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from "vue";
import LoginRegisterButton from "components/auth/LoginRegisterButton";
import FooterItem from "components/FooterItem";
import AccountNeeded from "components/popups/AccountNeeded";

export default defineComponent({
  name: "MainLayout",
  components: { LoginRegisterButton, FooterItem, AccountNeeded },
  data() {
    return {};
  },
  created() {
    // this.$q.dark.set(true);
  },
  methods: {
    addDocument() {
      if (!localStorage.getItem("username")) {
        this.emitter.emit("popup:open", "account-needed");
        return;
      }
      this.$router.push({ name: "addDocument" });
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
.footer {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
