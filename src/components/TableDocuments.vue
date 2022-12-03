<template>
  <q-table class="table" :rows="rows" :columns="columns" row-key="name" @row-click="sujetClicked" :loading="loading" :rows-per-page-options="[25, 50]">
    <template v-slot:body-cell-Sujet="props">
      <q-td :props="props">{{ props.row.sujet ? "✅" : "❌" }}</q-td>
    </template>
    <template v-slot:body-cell-Corrige="props">
      <q-td :props="props">{{ props.row.has_correction ? "✅" : "❌" }}</q-td>
    </template>
    <template v-slot:body-cell-Type="props">
      <q-td :props="props">{{ props.row.ecrit ? "Écrit" : "Oral" }}</q-td>
    </template>
  </q-table>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableDocuments",
  props: { rows: { type: Array }, loading: { type: Boolean } },
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
          name: "Concours",
          label: "Concours",
          field: (row) => row.concours,
          sortable: true,
          align: "left",
        },
        // {
        //   name: "Chapitres",
        //   label: "Chapitres",
        //   field: (row) => row.chapitres,
        //   sortable: true,
        //   align: "left",
        // },
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
          name: "Type",
          label: "Type",
          field: (row) => row.ecrit,
          sortable: true,
          align: "left",
        },
        // {
        //   name: "Credit",
        //   label: "Crédit",
        //   field: (row) => row.credit,
        //   sortable: true,
        //   align: "left",
        // },
      ],
      // rows: [
      //   {
      //     id: 1,
      //     annee: 2020,
      //     matiere: "Mathématiques",
      //     sujet: true,
      //     corrige: true,
      //     chapitres: [],
      //     credit: "Prof de maths",
      //   },
      //   {
      //     id: 2,
      //     annee: 2021,
      //     matiere: "Physique",
      //     sujet: true,
      //     corrige: false,
      //     chapitres: [],
      //     credit: "Prof de physique",
      //   },
      // ],
    };
  },
  methods: {
    sujetClicked(evt, row, index) {
      this.$router.push({
        name: "documentDetail",
        query: {
          id: row.id,
        },
      });
    },
  },
});
</script>
<style lang="scss" scoped>
.table {
  width: 80vw;
}
</style>