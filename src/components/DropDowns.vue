<template>
  <div class="dropdowns-wrapper">
    <q-select
      filled
      v-model="tags.filiere"
      :options="tagValues.filiere"
      label="Filière"
      class="select"
      :disable="disable"
    />
    <q-select
      filled
      v-model="tags.matiere"
      :options="tagValues.matiere"
      label="Matière"
      class="select"
      :disable="disable"
    />
    <!-- <div> -->
    <q-select
      filled
      v-model="tags.concours"
      :options="tagValues.concours"
      label="Concours"
      class="select"
      :disable="disable"
    />
    <!-- :disable="!tagValues.concours[tags.filiere]"
      <q-tooltip v-if="!tagValues.concours[tags.filiere]">
        Sélectionne une filière
    </q-tooltip>-->
    <!-- </div> -->
    <q-select
      filled
      v-model="tags.annee"
      :options="tagValues.annee"
      label="Année"
      class="select"
      :disable="disable"
    />
    <q-select
      filled
      v-model="tags.type"
      :options="tagValues.type"
      label="Type"
      class="select"
      :disable="disable"
    />
    <q-select
      filled
      v-model="tags.epreuve"
      :options="tagValues.epreuve"
      label="Épreuve"
      class="select"
      :disable="disable"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DropDowns",
  props: {
    showEpreuve: { type: Boolean, default: false },
    disable: { type: Boolean, default: false },
  },
  data() {
    return {
      tags: {
        matiere: "Toutes",
        filiere: "Toutes",
        concours: "Tous",
        annee: "Toutes",
        type: "Tous",
        epreuve: "Toutes",
        // chapitre: "",
      },
      tagValues: {
        matiere: [
          "Toutes",
          "Mathematiques",
          "Physique-Chimie",
          "SI",
          "Informatique",
          "Biologie",
          "Anglais",
          "Français-Philo",
        ],
        filiere: [
          "Toutes",
          "MP",
          "PC",
          "PSI",
          "PT",
          "BCPST",
          "TSI",
          "ECG",
          "AL",
          "BL",
        ],
        concours: [
          "Tous",
          "X-ENS",
          "Banque PT",
          "CCINP",
          "E3A Polytech",
          "Mines Ponts",
          "Centrale Supelec",
        ],
        annee: [
          "Toutes",
          "2022",
          "2021",
          "2020",
          "2019",
          "2018",
          "2017",
          "2016",
          "2015",
          "2014",
          "2013",
          "2012",
          "2011",
          "2010",
          "2009",
          "2008",
          "2007",
          "2006",
        ],
        // chapitres: {
        //   Mathématiques: [],
        //   Physique: [],
        //   Chimie: [],
        //   Anglais: [],
        // },
        type: ["Tous", "Écrit", "Oral"],
        epreuve: ["Toutes", "a", "b", "c"],
      },
    };
  },
  created() {
    Object.keys(this.tags).forEach((tag) => {
      this.tags[tag] = this.$route.query[tag] ?? this.tags[tag];
    });
  },
  methods: {
    getTags() {
      let tags = { ...this.tags };
      tags.ecrit = tags.type === "Écrit" ? 1 : tags.type === "Oral" ? 0 : "";
      return tags;
    },
  },
});
</script>
<style lang="scss" scoped>
.dropdowns-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around !important;
  width: 80vw;
  .select {
    width: 170px !important;
    margin: 5px;
  }
}
</style>