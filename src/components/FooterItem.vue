<template>
  <div class="footer-item">
    <router-link :to="link" style="text-decoration: none;">
      <div class="label">{{ label }}</div>
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterItem",
  props: {
    label: { type: String },
    icon: { type: String },
    link: { type: String },
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
  .label {
  }
}
</style>