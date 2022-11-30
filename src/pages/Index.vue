<template>
  <q-page class="index-container">
    <div class="title">PrepArchives</div>
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
  </q-page>
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
  .title {
    font-size: 4em;
    margin-top: -20vh;
    background: linear-gradient(to right, $primary 0%, #05ec6d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
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