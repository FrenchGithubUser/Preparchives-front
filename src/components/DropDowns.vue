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
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      tags: {
        matiere: null,
        filiere: null,
        concours: "",
        annee: "",
        chapitres: [],
        type: "",
      },
      tagValues: {
        matiere: [
          "Mathématiques",
          "Physique",
          "Chimie",
          "Anglais",
          "Français/Philo",
        ],
        filiere: ["MP", "PC", "PSI", "PT"],
        concours: {
          MP: [],
          PC: [],
          PSI: [],
          PT: [],
        },
        annee: [],
        chapitres: {
          Mathématiques: [],
          Physique: [],
          Chimie: [],
          Anglais: [],
        },
      },
    };
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.dropdowns-wrapper {
  display: flex;
  justify-content: space-around;
  .select {
    width: 200px;
  }
}
</style>