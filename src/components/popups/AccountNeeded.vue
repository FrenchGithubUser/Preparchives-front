<template>
  <q-dialog v-model="popupOpened">
    <div class="popup">
      <div class="explanation">
        Vous devez être connecté pour ajouter du contenu.
      </div>
      <q-btn
        label="Connexion"
        color="primary"
        no-caps
        @click="login"
        class="search-btn"
      />
    </div>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AccountNeeded",
  data() {
    return {
      popupOpened: false,
    };
  },
  created() {
    this.emitter.on("popup:open", this.openPopup);
  },
  methods: {
    login() {
      this.emitter.emit("popup:open", "login-register");
      this.popupOpened = false;
    },
    openPopup(name) {
      if (name === "account-needed") {
        this.popupOpened = true;
      }
    },
  },
  beforeUnmount() {
    this.emitter.off("popup:open", this.openPopup);
  },
});
</script>
<style lang="scss" scoped>
.popup {
  padding: 15px;
  text-align: center;
  .search-btn {
    margin-top: 15px;
  }
}
</style>