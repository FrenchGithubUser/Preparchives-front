<template>
  <div class="dropdowns-wrapper">
    <q-select
      filled
      v-model="tags.matiere"
      :options="tagValues.matiere"
      label="Matière"
      class="select"
    />
    <q-select
      filled
      v-model="tags.filiere"
      :options="tagValues.filiere"
      label="Filière"
      class="select"
    />
    <div>
      <q-select
        filled
        v-model="tags.concours"
        :options="
          tagValues.concours[tags.filiere] ?? ['Sélectionnez une filière']
        "
        label="Concours"
        class="select"
        :disable="!tagValues.concours[tags.filiere]"
      />
      <q-tooltip v-if="!tagValues.concours[tags.filiere]">
        Sélectionne une filière
      </q-tooltip>
    </div>
    <q-select
      filled
      v-model="tags.annee"
      :options="tagValues.annee"
      label="Année"
      class="select"
    />
    <q-select
      filled
      v-model="tags.type"
      :options="tagValues.type"
      label="Type"
      class="select"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DropDowns",
  data() {
    return {
      tags: {
        matiere: null,
        filiere: null,
        concours: "",
        annee: "",
        chapitre: "",
        type: "Écrit",
      },
      tagValues: {
        matiere: [
          "Mathématiques",
          "Physique",
          "Chimie",
          "Anglais",
          "Français/Philo",
        ],
        filiere: ["MP", "PC", "PSI", "PT", "BCPST"],
        concours: {
          MP: [],
          PC: ["Polytechnique"],
          PSI: [],
          PT: ["Banque PT"],
          BCPST: [],
        },
        annee: ["2022", "2021", "2020", "2019", "2018"],
        chapitres: {
          Mathématiques: [],
          Physique: [],
          Chimie: [],
          Anglais: [],
        },
        type: ["Écrit", "Oral"],
      },
    };
  },
  created() {
    this.tags.matiere = this.$route.query.matiere;
    this.tags.filiere = this.$route.query.filiere;
    this.tags.concours = this.$route.query.concours;
    this.tags.annee = this.$route.query.annee;
    this.tags.chapitre = this.$route.query.chapitre;
    this.tags.type = this.$route.query.type ?? this.tags.type;
  },
  methods: {},
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