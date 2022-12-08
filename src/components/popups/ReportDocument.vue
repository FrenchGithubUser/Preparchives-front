<template>
  <div class="popup">
    <div class="title">Signaler un document</div>
    Cela concerne :
    <div class="buttons">
      <q-btn
        label="Sujet"
        no-caps
        :color="corrige ? 'white' : 'primary'"
        :text-color="corrige ? 'black' : 'white'"
        @click="corrige = false"
      />
      <q-btn
        label="Corrigé"
        no-caps
        :color="corrige ? 'primary' : 'white'"
        :text-color="corrige ? 'white' : 'black'"
        @click="corrige = true"
      />
    </div>
    <q-input
      v-model="comment"
      type="textarea"
      label="Raison du signalement"
      filled
    />
    <q-btn
      label="Envoyer"
      no-caps
      icon="send"
      color="primary"
      class="send"
      @click="submit"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ReportDocument",
  data() {
    return {
      corrige: false,
      comment: "",
    };
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
  text-align: center;
  width: 400px;
  max-width: 95vw;
  .title {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    margin: 10px 0px;
  }
  .send {
    margin-top: 10px;
  }
}
</style>