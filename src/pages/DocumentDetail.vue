<template>
  <div class="sujet-detail page">
    <div class="tags">
      <TagBadge :label="sujetData.matiere" type="matiere" :loading="loading" />
      <TagBadge :label="sujetData.filiere" type="filiere" :loading="loading" />
      <TagBadge
        :label="sujetData.concours"
        type="concours"
        :loading="loading"
      />
      <TagBadge :label="sujetData.annee" type="annee" :loading="loading" />
      <TagBadge
        :label="sujetData.ecrit === 1 ? 'Écrit' : 'Oral'"
        type="type"
        :loading="loading"
      />
    </div>
    <div class="download-buttons">
      <a
        :href="'https://api.preparchive.com/sujet/pdf?id=' + $route.query.id"
        target="_blank"
      >
        <q-btn
          no-caps
          label="Sujet"
          color="primary"
          icon="download"
          class="btn"
      /></a>
      <q-btn
        no-caps
        label="Corrigé"
        color="primary"
        icon="download"
        class="btn"
        @click="downloadCorrectionPopup = true"
      />
    </div>
    <q-btn
      no-caps
      label="Signaler"
      color="primary"
      icon="warning"
      class="btn"
      dense
      @click="reportDocumentPopup = true"
    />
    <q-btn
      label="Ajouter un corrigé pour ce sujet"
      color="primary"
      icon="add"
      no-caps
      class="add-correction"
      @click="addCorrection"
    />
    <div class="comments">
      <Comment v-for="comment in comments" :key="comment" :comment="comment" />
    </div>
    <div class="feedback">
      <div class="leave-comment">
        <div class="hint">Laisser un commentaire</div>
        <div class="comment">
          <q-input
            filled
            v-model="comment"
            label="Commentaire"
            class="input"
            type="textarea"
          />
          <q-btn
            label="Envoyer"
            color="primary"
            icon="send"
            :loading="sendingComment"
            no-caps
            @click="submitComment"
          />
        </div>
      </div>
    </div>
    <q-dialog v-model="downloadCorrectionPopup">
      <DownloadCorrection />
    </q-dialog>
    <q-dialog v-model="reportDocumentPopup">
      <ReportDocument />
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TagBadge from "components/TagBadge";
import DownloadCorrection from "components/popups/DownloadCorrection";
import ReportDocument from "components/popups/ReportDocument";
import Comment from "components/Comment";
import { getSujet, sendComment, getCommentaires } from "src/helpers/apiCalls";
import { jsonToFormdata } from "src/helpers/helpers";

export default defineComponent({
  name: "DocumentDetail",
  components: { TagBadge, DownloadCorrection, ReportDocument, Comment },
  data() {
    return {
      loading: true,
      sujetData: {
        matiere: "Mathématiques",
        filiere: "MP",
        concours: "Polytechnique",
        annee: "2021",
        // chapitre: "",
        type: "Écrit",
      },
      comment: "",
      comments: [],
      sendingComment: false,
      downloadCorrectionPopup: false,
      reportDocumentPopup: false,
    };
  },
  created() {
    getSujet(this.$route.query.id).then((data) => {
      console.log(data);
      this.sujetData = data;
      this.loading = false;
    });
    getCommentaires(this.$route.query.id).then((data) => {
      this.comments = data;
    });
  },
  methods: {
    submitComment() {
      if (!localStorage.getItem("username")) {
        this.emitter.emit("popup:open", "account-needed");
        return;
      }
      this.sendingComment = true;
      let form = { contenu: this.comment, id_sujet: this.$route.query.id };
      sendComment(jsonToFormdata(form)).finally(() => {
        this.sendingComment = false;
        this.comments.push({
          contenu: this.comment,
          username: localStorage.getItem("username"),
        });
        this.comment = "";
      });
    },
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
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
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