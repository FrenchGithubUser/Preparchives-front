<template>
  <div class="sujet-detail page">
    <div class="tags">
      <TagBadge :label="sujetData.matiere" type="matiere" :loading="loading" />
      <TagBadge :label="sujetData.filiere" type="filiere" :loading="loading" />
      <TagBadge :label="sujetData.concours" type="concours" :loading="loading" />
      <TagBadge :label="sujetData.annee" type="annee" :loading="loading" />
      <TagBadge :label="sujetData.ecrit === 1 ? 'Écrit' : 'Oral'" type="type" :loading="loading" />
    </div>
    <div class="download-buttons">
      <q-btn no-caps label="Sujet" color="primary" icon="download" class="btn" />
      <q-btn no-caps label="Corrigé" color="primary" icon="download" class="btn" />
    </div>
    <q-btn label="Ajouter un corrigé" color="primary" icon="add" no-caps class="add-correction" @click="addCorrection" />
    <div class="feedback">
      <div class="leave-comment">
        <div class="hint">Laisser un commentaire</div>
        <div class="comment">
          <q-input filled v-model="comment" label="Commentaire" class="input" type="textarea" />
          <q-btn label="Envoyer" color="primary" icon="send" no-caps />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TagBadge from "components/TagBadge";
import { getSujet } from "src/helpers/apiCalls";

export default defineComponent({
  name: "DocumentDetail",
  components: { TagBadge },
  data() {
    return {
      sujetData: {
        matiere: "Mathématiques",
        filiere: "MP",
        concours: "Polytechnique",
        annee: "2021",
        // chapitre: "",
        type: "Écrit",
      },
      comment: "",
      loading: true,
    };
  },
  created() {
    getSujet(this.$route.query.id).then((data) => {
      console.log(data);
      this.sujetData = data;
      this.loading = false;
    });
  },
  methods: {
    addCorrection() {
      let query = { sujetId: this.sujetData.id };
      query.matiere = this.sujetData.matiere;
      query.filiere = this.sujetData.filiere;
      query.concours = this.sujetData.concours;
      query.annee = this.sujetData.annee;
      query.type = this.sujetData.type;
      query.epreuve = this.sujetData.epreuve;
      query.type = this.sujetData.ecrit === 1 ? "Écrit" : "Oral";
      this.$router.push({
        name: "addDocument",
        query: query,
      });
    },
  },
});
</script>
<style lang="scss" scoped>
.sujet-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  .tags {
    display: flex;
  }
  .download-buttons {
    display: flex;
    margin-top: 15px;
    .btn {
      margin: 10px;
    }
  }
  .add-correction {
    margin: 15px 0px;
  }
  .feedback {
    margin-top: 15px;
    .leave-comment {
      .hint {
        opacity: 0.8;
      }
      .comment {
        display: flex;
        flex-direction: column;
        align-items: center;
        .input {
          width: 400px;
          max-width: 80vw;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>