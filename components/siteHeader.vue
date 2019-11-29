<template>
  <header class="site-header" :class="{'site-header--mobile-open': menuIsOpen}">
    <div class="inner-header">
      <logo class="logo" />
      <nav-menu class="desktop-menu" />
      <a
        class="site-header__cta button button--phone button--green"
        :href="`tel:+33${settings.phone_number}`"
        v-if="settings.phone_number"
      >
        <phoneSvg class="button__icon" />
        <span class="button__text">0{{ phone }}</span>
      </a>
      <div
        class="mobile-menu-toggle"
        :class="{'mobile-menu-toggle--open': menuIsOpen}"
        @click="toggleMenu"
      >
        <span class="mobile-menu-toggle__line"></span>
        <span class="mobile-menu-toggle__line"></span>
        <span class="mobile-menu-toggle__line"></span>
      </div>
    </div>
    <transition name="fade">
      <nav-menu class="mobile-menu" modifier="mobile" v-show="menuIsOpen" />
    </transition>
  </header>
</template>
<script>
import logo from "@/components/logo.vue";
import navMenu from "@/components/navMenu.vue";
import phoneSvg from "@/assets/svg/phone.svg";
export default {
  components: {
    logo,
    navMenu,
    phoneSvg
  },
  data() {
    return {
      menuIsOpen: false
    };
  },
  computed: {
    settings() {
      return this.$store.state.settings.settings.data;
    },
    phone() {
      return this.settings.phone_number
        .toString()
        .replace(/(\d)(?=(\d{2})+$)/g, "$1 ");
    }
  },
  watch: {
    $route() {
      this.menuIsOpen = false;
    }
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    }
  }
};
</script>
<style lang="scss">
.site-header {
  position: fixed;
  width: 100%;
  max-width: 100vw;
  background: white;
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.04);
  z-index: 1000;

  &--mobile-open {
    height: 100vh;
  }
}
.site-header__cta {
  margin-left: auto;
  font-size: 0.7rem;

  @include breakpoint("medlarge") {
    font-size: 1rem;
  }

  .button__text {
    display: none;
    @include breakpoint("small") {
      display: inline;
    }
  }
}
.inner-header {
  @include site-padding;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mobile-menu-toggle {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  cursor: pointer;
  @include breakpoint("medlarge") {
    display: none;
  }

  &--open {
    .mobile-menu-toggle__line {
      &:first-child {
        transform-origin: top right;
        transform: rotate(-45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:last-child {
        transform-origin: bottom right;
        transform: rotate(45deg);
      }
    }
  }
}
.mobile-menu-toggle__line {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  &:before {
    content: "";
    width: 2rem;
    height: 3px;
    line-height: 1;
    border-radius: 1px;
    background: $primary;
    display: block;
    margin-bottom: 0.5rem;
  }
  &:last-child {
    &:before {
      margin-bottom: 0;
    }
  }
}

.desktop-menu {
  display: none;
  @include breakpoint("medlarge") {
    display: block;
  }
}

.mobile-menu {
  display: block;
  @include breakpoint("medlarge") {
    display: none;
  }
}
</style>