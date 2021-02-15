<template>
  <header>
    <h1>
      <!-- 🌷TODO it🌷 -->
      <!-- {{ this.$store.state.headerText }} -->
      {{ this.getHeaderText }}
    </h1>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getHeaderText"]),
  },
};
</script>

<style scoped>
/*scoped 해당 컴포넌트 안에서만 적용  */
h1 {
  color: darksalmon;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
