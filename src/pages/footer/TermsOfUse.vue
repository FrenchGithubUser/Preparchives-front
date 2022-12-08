<template>
  <div class="terms-of-use page">
    <div class="title theme-gradient">Conditions d'utilisation</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TermsOfUse",
  methods: {},
});
</script>
<style lang="scss" scoped>
.terms-of-use {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 3em;
    margin-bottom: 20px;
  }
}
</style>