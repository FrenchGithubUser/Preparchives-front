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
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from "vue";
import LoginRegisterButton from "components/auth/LoginRegisterButton";

export default defineComponent({
  name: "MainLayout",
  components: { LoginRegisterButton },
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
</style>
