<template>
  <div class="contact page">
    <div class="title theme-gradient">Contact</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactUs",
  methods: {},
});
</script>
<style lang="scss" scoped>
.contact {
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