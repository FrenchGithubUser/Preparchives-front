<template>
  <div class="sujet-detail">
    <div class="title">Titre sujet</div>
    <div class="download-buttons">
      <q-btn no-caps label="Sujet" color="primary" @click="dlSujet" />
      <q-btn no-caps label="Corrigé" color="primary" @click="dlCorrige" />
    </div>
    <div class="feedback">
      <div class="leave-comment">
        <div class="hint">Laisser un commentaire</div>
        <q-input
          filled
          v-model="text"
          label="Commentaire"
          class="input"
          type="textarea"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SujetDetail",
  components: {},
  data() {
    return {
      sujet: {
        link: "https://link.link",
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
  .download-buttons {
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .feedback {
    margin-top: 15px;
    .leave-comment {
      .hint {
        opacity: 0.8;
      }
      .input {
        width: 400px;
        max-width: 80vw;
      }
    }
  }
}
</style>