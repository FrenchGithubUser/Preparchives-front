<template>
  <div class="footer-item">
    <div class="label">{{ label }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterItem",
  props: {
    label: { type: String },
    icon: { type: String },
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.footer-item {
  margin: 0px 15px;
  cursor: pointer;
}
</style>