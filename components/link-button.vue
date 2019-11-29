<template>
  <div>
    <nuxt-link v-if="isDocumentLink" :to="link" class="link" :class="modifierClass">
      <slot></slot>
    </nuxt-link>
    <a v-if="isWebLink" :href="link" target="_blank" class="link" :class="modifierClass">
      <slot></slot>
    </a>
  </div>
</template>
<script>
export default {
  props: ["data", "modifier", "doc"],
  computed: {
    isDocumentLink() {
      return this.doc || this.data.link_type === "Document";
    },
    isWebLink() {
      return this.data ? this.data.link_type === "Web" : null;
    },
    link() {
      if (this.doc) {
        return this.$prismic.linkResolver(this.doc);
      } else {
        return this.$prismic.asLink(this.data);
      }
    },
    modifierClass() {
      return this.modifier ? "link--" + this.modifier : "";
    }
  }
};
</script>