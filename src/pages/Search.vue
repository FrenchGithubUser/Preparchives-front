<template>
  <div class="sujets-wrapper page">
    <div class="title">Sujets et corrigés</div>
    <div class="criterias shadow-5">
      <DropDowns class="dropdowns" ref="dropdowns" />
      <q-btn no-caps label="Chercher" class="search-button" color="primary" @click="search" />
    </div>
    <div class="table-wrapper">
      <TableDocuments :loading="loading" class="shadow-7" :rows="rows" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DropDowns from "components/DropDowns";
import TableDocuments from "components/TableDocuments";
import { searchSujets } from "src/helpers/apiCalls";

export default defineComponent({
  name: "SearchSujets",
  components: { DropDowns, TableDocuments },
  data() {
    return {
      loading: false,
      rows: [],
    };
  },
  methods: {
    search() {
      this.loading = true;
      let tags = this.$refs.dropdowns.getTags();
      const query = {};
      Object.keys(tags).forEach((key) => {
        query[key] = tags[key];
        if (["Tous", "Toutes"].indexOf(tags[key]) >= 0) {
          tags[key] = "";
        }
      });
      this.$router.replace({ query: query });
      searchSujets(tags).then((data) => {
        this.rows = data;
        this.loading = false;
      });
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
    .table {
      border-radius: 20px;
    }
  }
}
</style>