<template>
  <div class="about page">
    <div class="title theme-gradient">À propos</div>
    <div class="description"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutWebsite",
  methods: {},
});
</script>
<style lang="scss" scoped>
.about {
  padding: 10px;
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 3em;
  }
}
</style>