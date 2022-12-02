<template>
  <div class="tag-badge shadow-3">
    <div class="badge" v-if="!loading">
      <img
        v-if="type !== 'annee'"
        :src="'icons/tags/' + label + '.svg'"
        class="tag-icon"
      />
      {{ label }}
    </div>
    <q-skeleton class="loading" v-else />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TagBadge",
  props: {
    label: { type: String },
    type: { type: String },
    loading: { type: Boolean },
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.tag-badge {
  background-color: $secondary;
  border-radius: 10px;
  margin: 3px;
  .badge {
    color: white;
    padding: 7px;
    display: flex;
    .tag-icon {
      width: 20px;
      margin-right: 5px;
    }
  }
  .loading {
    width: 70px;
    height: 30px;
  }
}
</style>