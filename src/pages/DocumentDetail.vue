<template>
  <div class="sujet-detail">
    <div class="tags">
      <TagBadge :label="sujetData.matiere" type="matiere" />
      <TagBadge :label="sujetData.filiere" type="filiere" />
      <TagBadge :label="sujetData.concours" type="concours" />
      <TagBadge :label="sujetData.annee" type="annee" />
      <TagBadge :label="sujetData.type" type="type" />
    </div>
    <div class="download-buttons">
      <q-btn
        no-caps
        label="Sujet"
        color="primary"
        icon="download"
        class="btn"
      />
      <q-btn
        no-caps
        label="Corrigé"
        color="primary"
        icon="download"
        class="btn"
      />
    </div>
    <div class="feedback">
      <div class="leave-comment">
        <div class="hint">Laisser un commentaire</div>
        <div class="comment">
          <q-input
            filled
            v-model="text"
            label="Commentaire"
            class="input"
            type="textarea"
          />
          <q-btn label="Envoyer" color="primary" icon="send" no-caps />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TagBadge from "components/TagBadge";

export default defineComponent({
  name: "DocumentDetail",
  components: { TagBadge },
  data() {
    return {
      sujetData: {
        sujet: "https://link.link",
        corrige: "https://link.link",
        matiere: "Mathématiques",
        filiere: "MP",
        concours: "Polytechnique",
        annee: "2021",
        // chapitre: "",
        type: "Écrit",
        credit: "https://link.link",
      },
    };
  },
  methods: {
    search() {},
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