<template>
  <div class="add-document">
    <div class="document-type">
      Mon document est un :
      <div class="buttons">
        <q-btn
          label="Sujet"
          no-caps
          :color="type === 'sujet' && !null ? 'primary' : ''"
          :text-color="type === 'sujet' && !null ? '' : 'black'"
          @click="type = 'sujet'"
        />
        <q-btn
          label="Corrigé"
          no-caps
          :color="type === 'corrige' && !null ? 'primary' : ''"
          :text-color="type === 'corrige' && !null ? '' : 'black'"
          @click="uploadCorrigeExplanation = true"
        />
      </div>
    </div>
    <DropDowns ref="dropdowns" class="dropdowns" />
    <input
      type="file"
      style="display: none"
      ref="fileInput"
      accept="application/pdf"
      @change="onFilePicked"
    />
    <div v-if="filename" class="filename">
      <span>Fichier ajouté :</span>
      <span>{{ filename }}</span>
    </div>
    <q-btn
      label="Sélectionner un document (pdf)"
      no-caps
      color="primary"
      @click="$refs.fileInput.click()"
    />
    <q-btn
      label="Envoyer"
      no-caps
      color="primary"
      class="submit"
      @click="submit"
    />
    <q-dialog v-model="uploadCorrigeExplanation">
      <UploadCorrigeExplanation />
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DropDowns from "components/DropDowns";
import UploadCorrigeExplanation from "components/UploadCorrigeExplanation";
import { displayErrors, jsonToFormdata } from "src/helpers/helpers";
import { sendSujet } from "src/helpers/apiCalls";

export default defineComponent({
  name: "AddDocument",
  components: { DropDowns, UploadCorrigeExplanation },
  data() {
    return {
      uploadCorrigeExplanation: false,
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
  methods: {
    onFilePicked(event) {
      const files = event.target.files;
      this.filename = files[0].name;
      this.form.file = files[0];
    },
    submit() {
      const tags = this.$refs.dropdowns.tags;
      let errors = [];
      Object.keys(tags).forEach((key) => {
        if (!tags[key]) {
          errors.push("Sélectionnez l'attribut " + key);
        } else {
          this.form[key] = tags[key];
        }
      });
      console.log(this.form);
      if (!this.form.file) {
        errors.push("Sélectionnez un fichier pdf");
      }
      displayErrors(errors);
      if (errors.length === 0) {
        sendSujet(jsonToFormdata(this.form));
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