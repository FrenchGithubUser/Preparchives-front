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
          @click="$router.push({ name: 'addDocument' })"
          v-if="$route.name !== 'addDocument'"
        />
        <LoginRegisterButton />
      </div>
      <router-view />
      <div class="footer">
        <FooterItem label="À propos" />
        <FooterItem label="Contact" />
        <FooterItem label="Conditions d'utilisation" />
      </div>
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from "vue";
import LoginRegisterButton from "components/auth/LoginRegisterButton";
import FooterItem from "components/FooterItem";

export default defineComponent({
  name: "MainLayout",
  components: { LoginRegisterButton, FooterItem },
  data() {
    return {};
  },
  created() {},
  methods: {},
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
