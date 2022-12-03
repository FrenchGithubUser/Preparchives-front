<template>
  <div class="popup">
    <div class="explanation">
      Gardez en tête :
      <ul>
        <li>Lisez le corrigé après avoir réfléchis sur le sujet. La lecture seule du corrigé est drastiquement moins efficace.</li>
        <li>Ceci est une proposition de correction. D'autres réponses sont probablement tout aussi valables que celles présentées.</li>
        <li>PrepArchives n'a pas rédigé cette correction. Elle provient d'une source externe.</li>
      </ul>
    </div>
    <div class="credit">Source originale de cette correction :</div>
    <q-btn label="Voir le corrigé" color="primary" no-caps @click="goToSearch" class="btn" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DownloadCorrectionExplanation",
  props: { credit: {} },
  data() {
    return {};
  },
  methods: {
    goToSearch() {
      this.$router.push("search");
    },
  },
});
</script>
<style lang="scss" scoped>
.popup {
  padding: 15px;
  text-align: center;
  .explanation {
    text-align: left;
    ul {
      margin-left: -15px !important;
      li {
        margin-top: 5px;
      }
    }
  }
  .btn {
    margin-top: 15px;
  }
}
</style>