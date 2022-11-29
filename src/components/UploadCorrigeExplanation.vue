<template>
  <div class="popup">
    <div class="explanation">
      Vous pouvez ajouter un corrigé depuis le détail d'un sujet
    </div>
    <q-btn
      label="Chercher un sujet"
      color="primary"
      no-caps
      @click="goToSearch"
      class="search-btn"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UploadCorrigeExplanation",
  data() {
    return {};
  },
  methods: {
    goToSearch() {
      this.$router.push("sujets");
    },
  },
});
</script>
<style lang="scss" scoped>
.popup {
  padding: 15px;
  text-align: center;
  .search-btn {
    margin-top: 15px;
  }
}
</style>