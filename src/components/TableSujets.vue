<template>
  <q-table class="table" :rows="rows" :columns="columns" row-key="name" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableSujets",
  data() {
    return {
      columns: [
        {
          name: "Annee",
          label: "Année",
          field: (row) => row.annee,
          sortable: true,
          align: "left",
        },
        {
          name: "Matiere",
          label: "Matière",
          field: (row) => row.matiere,
          sortable: true,
          align: "left",
        },
        {
          name: "Chapitres",
          label: "Chapitres",
          field: (row) => row.chapitres,
          sortable: true,
          align: "left",
        },
        {
          name: "Sujet",
          label: "Sujet",
          field: (row) => row.sujet,
          sortable: true,
          align: "left",
        },
        {
          name: "Corrige",
          label: "Corrigé",
          field: (row) => row.corrige,
          sortable: true,
          align: "left",
        },
        {
          name: "Credit",
          label: "Crédit",
          field: (row) => row.credit,
          sortable: true,
          align: "left",
        },
      ],
      rows: [
        {
          annee: 2020,
          matiere: "Mathématiques",
          sujet: "http://link.com",
          corrige: "http://link.com",
          chapitres: [],
          credit: "Prof de maths",
        },
      ],
    };
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.table {
  width: 80vw;
}
</style>