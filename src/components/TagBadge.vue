<template>
  <div class="tag-badge">
    <img
      v-if="type !== 'annee'"
      :src="'icons/tags/' + label + '.svg'"
      class="tag-icon"
    />
    {{ label }}
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TagBadge",
  props: { label: { type: String }, type: { type: String } },
  data() {
    return {};
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.tag-badge {
  background-color: $primary;
  color: white;
  padding: 7px;
  border-radius: 10px;
  margin: 2px;
  display: flex;
  .tag-icon {
    width: 20px;
    margin-right: 5px;
  }
}
</style>