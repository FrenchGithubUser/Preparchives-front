<template>
  <div class="thanks page">
    <div class="title theme-gradient">Merci pour votre ajout !</div>
    <q-btn no-caps label="Retour à l'accueil" color="primary" @click="$router.push({ name: 'index' })" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import confetti from "canvas-confetti";

export default defineComponent({
  name: "ThankYou",
  data() {
    return {
      confettiInterval: null,
    };
  },
  mounted() {
    const colors = ["#105494", "#ece9e9", "#f02444"];
    function confettiEnter() {
      confetti({
        particleCount: 150,
        angle: 60,
        spread: 1000,
        origin: { x: 0, y: 0.4 },
        colors: colors,
      });
      confetti({
        particleCount: 150,
        angle: 120,
        spread: 1000,
        origin: { x: 1, y: 0.4 },
        colors: colors,
      });
    }
    function confettiAfter() {
      confetti({
        particleCount: 40,
        angle: 60,
        spread: 150,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 40,
        angle: 120,
        spread: 150,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
    }
    confettiEnter();
    this.confettiInterval = setInterval(() => {
      confettiAfter();
    }, 3000);
  },
  beforeRouteLeave() {
    clearInterval(this.confettiInterval);
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.thanks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 4em;
    margin-bottom: 20px;
  }
}
</style>