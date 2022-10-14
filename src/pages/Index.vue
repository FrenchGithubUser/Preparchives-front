<template>
  <q-page class="index-container">
    <div class="title">PrepArchives</div>
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
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
  .title {
    font-size: 2em;
    margin-bottom: 50px;
    margin-top: 50px;
  }
  .browse-button {
    margin-top: 50px;
  }
}
</style>