<template>
  <div class="sujets-wrapper">
    <div class="title">Sujets et corrigés</div>
    <div class="criterias shadow-5">
      <DropDowns class="dropdowns" ref="dropdowns" />
      <q-btn
        no-caps
        label="Chercher"
        class="search-button"
        color="primary"
        @click="search"
      />
    </div>
    <div class="table-wrapper">
      <TableSujets class="shadow-5" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DropDowns from "components/DropDowns";
import TableSujets from "components/TableSujets";

export default defineComponent({
  name: "IndexPage",
  components: { DropDowns, TableSujets },
  data() {
    return {};
  },
  methods: {
    search() {
      const tags = this.$refs.dropdowns.tags;
      const query = {};
      Object.keys(tags).forEach((key) => {
        query[key] = tags[key];
      });
      console.log(query);
      this.$router.replace({ query: query });
    },
  },
});
</script>
<style lang="scss" scoped>
.sujets-wrapper {
  .title {
    display: flex;
    justify-content: center;
    font-size: 2em;
    margin-bottom: 50px;
    margin-top: 10px;
  }
  .criterias {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: solid 2px $primary;
    border-radius: 20px;
    margin: 0px 8vw;
    margin-bottom: 15px;
    padding: 10px;
    .search-button {
      margin-top: 10px;
    }
  }
  .table-wrapper {
    display: flex;
    justify-content: center;
  }
}
</style>