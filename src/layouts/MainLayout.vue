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
        />
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  components: {},
  setup() {
    return {};
  },
  created() {},
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
