<template>
  <div class="add-document page">
    <div class="document-type">
      Mon document est un :
      <div class="buttons">
        <q-btn label="Sujet" no-caps :color="type === 'sujet' && !null ? 'primary' : ''" :text-color="type === 'sujet' && !null ? '' : 'black'" @click="type = 'sujet'" />
        <q-btn label="Corrigé" no-caps :color="type === 'corrige' && !null ? 'primary' : ''" :text-color="type === 'corrige' && !null ? '' : 'black'" @click="uploadCorrigeExplanation = true" />
      </div>
    </div>
    <DropDowns ref="dropdowns" class="dropdowns" :showEpreuve="true" :disable="type === 'corrige'" />
    <input type="file" style="display: none" ref="fileInput" accept="application/pdf" @change="onFilePicked" />
    <div v-if="filename" class="filename">
      <span>Fichier ajouté :</span>
      <span>{{ filename }}</span>
    </div>
    <q-btn label="Sélectionner un document (pdf)" no-caps color="primary" @click="$refs.fileInput.click()" />
    <q-btn label="Envoyer" no-caps color="primary" class="submit" @click="submit" :loading="loading" />
    <q-dialog v-model="uploadCorrigeExplanation">
      <UploadCorrigeExplanation />
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DropDowns from "components/DropDowns";
import UploadCorrigeExplanation from "components/popups/UploadCorrigeExplanation";
import { displayErrors, jsonToFormdata } from "src/helpers/helpers";
import { sendCorrection, sendSujet } from "src/helpers/apiCalls";

export default defineComponent({
  name: "AddDocument",
  components: { DropDowns, UploadCorrigeExplanation },
  data() {
    return {
      uploadCorrigeExplanation: false,
      loading: false,
      type: "sujet",
      filename: null,
      form: {
        file: null,
        matiere: null,
        filiere: null,
        concours: null,
        annee: null,
        // chapitre: null,
        type: null,
      },
    };
  },
  created() {
    if (this.$route.query.sujetId) {
      this.type = "corrige";
    }
  },
  methods: {
    onFilePicked(event) {
      const files = event.target.files;
      this.filename = files[0].name;
      this.form.file = files[0];
    },
    submit() {
      this.loading = true;
      if (!this.form.file) {
        displayErrors(["Sélectionnez un fichier pdf"]);
        this.loading = false;
        return;
      }
      this.type === "sujet" ? this.submitSujet() : this.submitCorrection();
    },
    submitCorrection() {
      const correctionInfo = {
        id_sujet: this.$route.query.sujetId,
        file: this.form.file,
      };
      sendCorrection(jsonToFormdata(correctionInfo))
        .then(() => {
          this.$router.push({ name: "thankYou" });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    submitSujet() {
      let tags = this.$refs.dropdowns.getTags();
      let errors = [];
      Object.keys(tags).forEach((key) => {
        if (["Toutes", "Tous"].indexOf(tags[key]) >= 0) {
          console.log(key, tags[key]);
          errors.push("Sélectionnez l'attribut " + key);
        } else {
          this.form[key] = tags[key];
        }
      });
      if (errors.length !== 0) {
        this.loading = false;
        displayErrors(errors);
      }
      if (errors.length === 0) {
        sendSujet(jsonToFormdata(this.form))
          .then(() => {
            this.$router.push({ name: "thankYou" });
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.add-document {
  display: flex;
  align-items: center;
  flex-direction: column;
  .document-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    .buttons {
      margin-top: 10px;
      width: 180px;
      display: flex;
      justify-content: space-between;
    }
  }
  .dropdowns {
    margin-bottom: 15px;
    margin-top: 15px;
  }
  .filename {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px $primary solid;
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 15px;
  }
  .submit {
    margin-top: 15px;
  }
}
</style>