<template>
  <nuxt-link to="/" class="logo">
    <img :src="settings.logo.url" :alt="settings.logo.alt" />
  </nuxt-link>
</template>
<script>
export default {
  computed: {
    settings() {
      return this.$store.state.settings.settings.data;
    }
  }
};
</script>
<style lang="scss" scoped>
.logo {
  max-width: 140px;
  margin-top: 0.5rem;

  @include breakpoint(small) {
    max-width: 162px;
  }
}
</style>