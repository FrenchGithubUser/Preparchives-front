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
          @click="type = 'corrige'"
        />
      </div>
    </div>
    <DropDowns />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DropDowns from "components/DropDowns";

export default defineComponent({
  name: "AddDocument",
  components: { DropDowns },
  data() {
    return {
      type: null,
    };
  },
  methods: {
    search() {},
  },
});
</script>
<style lang="scss" scoped>
.add-document {
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
}
</style>