<template>
  <div class="about page">
    <div class="title theme-gradient">À propos</div>
    <div class="description">
      <div class="paragraph">
        PrepArchive est né d'un besoin. Un des créateurs de ce site était
        étudiant en prépa et avait besoin de ressources pour préparer les
        nombreux examens. Les annales de concours sont disponibles sur internet
        mais bien souvent éparpillées sur un grand nombre de sites différents.
        Il en était de même pour les corrigés, très importants pour progresser.
      </div>
      <div class="paragraph">
        Il est vrai que certains sites regroupent un grand nombre d'annales de
        concours. Cependant leur organisation n'est pas toujours la plus
        pratique pour trouver les documents voulus. Par ailleurs, si un
        sujet/corrigé est manquant, seuls les créateurs du site peuvent
        l'ajouter, et les élèves/professeurs ne peuvent pas poser leurs
        questions/remarques. PrepArchive souhaite répondre à ces problèmes en
        proposant toutes les fonctionnalités nous semblant importantes, et en
        publiant le code source, permettant à chacun d'apporter ses
        modifications.
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutWebsite",
  methods: {},
});
</script>
<style lang="scss" scoped>
.about {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 3em;
    margin-bottom: 20px;
  }
  .description {
    width: 90vw;
    .paragraph {
      margin-bottom: 10px;
    }
  }
}
</style>