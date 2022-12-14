<template>
  <div class="comment shadow-3">
    <div class="added-by">
      {{ comment.username }}
    </div>
    <div class="content">
      {{ comment.contenu }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SujetComment",
  props: {
    comment: { type: Object },
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.comment {
  padding: 10px;
  border-radius: 15px;
  width: 500px;
  margin-bottom: 10px;
  .added-by {
    font-size: 0.8em;
  }
  .content {
    margin-left: 10px;
  }
}
</style>