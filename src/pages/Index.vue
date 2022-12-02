<template>
  <div class="index-container">
    <div class="title theme-gradient">PrepArchive</div>
    <div class="description">
      Sujets et corrigés des concours de prépas. Toutes les filiaires, toutes
      les matières.
    </div>
    <q-btn
      no-caps
      label="Chercher un sujet/corrigé"
      class="browse-button"
      @click="goTo('sujets')"
      color="primary"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  methods: {
    goTo(name) {
      this.$router.push(name);
    },
  },
});
</script>
<style lang="scss" scoped>
.index-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: var(--page-height);
  .title {
    font-size: 4em;
  }
  .description {
    text-align: center;
    margin: 0px 15px;
  }
  .browse-button {
    margin-top: 50px;
  }
}
</style>