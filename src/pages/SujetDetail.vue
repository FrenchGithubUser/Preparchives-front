<template>
  <div class="sujet-detail">
    <div class="title"></div>
    <div class="download-buttons">
      <q-btn no-caps label="Sujet" color="primary" @click="dlSujet" />
      <q-btn no-caps label="Corrigé" color="primary" @click="dlCorrige" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SujetDetail",
  components: {},
  data() {
    return {
      sujet: {
        link: "https://link.link",
      },
    };
  },
  methods: {
    search() {},
  },
});
</script>
<style lang="scss" scoped>
</style>