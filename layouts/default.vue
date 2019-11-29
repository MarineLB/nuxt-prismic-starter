<template>
  <div class="layout">
    <site-header />
    <nuxt />
    <site-footer />
  </div>
</template>
<script>
import siteHeader from "~/components/siteHeader.vue";
import siteFooter from "~/components/siteFooter.vue";

export default {
  components: {
    siteHeader,
    siteFooter
  },
  head() {
    return {
      link: [
        {
          rel: "canonical",
          href: "https://SITENAME.com" + this.$route.path
        }
      ]
    };
  },
  methods: {
    async loadSettings() {
      const data = await this.$store.dispatch("settings/getSettings");
    }
  },
  mounted() {
    if (true) {
      this.loadSettings();
    }
  }
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
img {
  max-width: 100%;
}
</style>
