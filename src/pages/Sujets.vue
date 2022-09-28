<template>
  <div class="sujets-wrapper">
    <div class="title">Sujets et corrigés</div>
    <DropDowns />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DropDowns from "components/DropDowns";

export default defineComponent({
  name: "IndexPage",
  components: { DropDowns },
  data() {
    return {};
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.sujets-wrapper {
}
</style>