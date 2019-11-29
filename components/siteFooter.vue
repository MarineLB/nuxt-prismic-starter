<template>
  <footer class="site-footer" itemscope itemtype="https://schema.org/LocalBusiness">
    <div class="site-footer__links">
      <div>
        <h4 class="site-footer__audioconseil" itemprop="name">AudioConseil</h4>
        <p>
          <time
            itemprop="openingHours"
            datetime="Mo,Fr 9:00-12:00 14:00-18:00"
          >Ouvert du lundi au vendredi de 9h à 12h et de 14h à 18h.</time>
        </p>
      </div>
      <div class="site-footer__contact">
        <div class="site-footer__contact-item">
          <h5>Téléphone</h5>
          <a
            itemprop="telephone"
            :content="`+33${settings.phone_number}`"
            :href="`tel:+33${settings.phone_number}`"
          >0{{ phone }}</a>
        </div>
        <div class="site-footer__contact-item">
          <h5>Adresse</h5>
          <p itemprop="address" v-html="address"></p>
        </div>
      </div>
      <div class="site-footer__sitemap">
        <h5>Plan du site</h5>
        <ul>
          <li class="footer-menu__item" v-for="item in menuItems" :key="item.link.slug">
            <nuxt-link
              :to="$prismic.linkResolver(item.link)"
              class="footer-menu__link"
            >{{ item.text }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="site-footer__bottom">
      <div class="site-footer__bottom-wrapper">
        <div class="site-footer__copyright">©2019 Audio Conseil. Tout droits réservés.</div>
        <div class="site-footer__legal">
          <nuxt-link to="/mentions-legales">Mentions légales</nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      msg: "footer"
    };
  },
  computed: {
    address() {
      return this.$store.state.settings.settings.data.address;
    },
    menuItems() {
      return this.$store.state.settings.settings.data.menu;
    },
    settings() {
      return this.$store.state.settings.settings.data;
    },
    phone() {
      return this.settings.phone_number
        .toString()
        .replace(/(\d)(?=(\d{2})+$)/g, "$1 ");
    }
  }
};
</script>
<style lang="scss">
.site-footer {
  background: $darkgrey;
  color: #a9acad;
  padding: 3rem 1.5rem 1.5rem;
  margin-top: 3rem;

  @include breakpoint(small) {
    padding: 6rem 3rem 3rem;
    margin-top: 6rem;
  }
}
.site-footer h4,
.site-footer h5 {
  color: white;
  text-transform: none;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.site-footer a {
  color: inherit;
  text-decoration: none;
  padding: 0.25rem 0;
  display: block;
  &:hover {
    text-decoration: underline;
  }
}

.site-footer ul {
  list-style-type: none;
  padding: 0;
}

.site-footer__links {
  @include breakpoint("small") {
    @include site-padding;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
  }
}

.site-footer__contact-item {
  margin-bottom: 1rem;
  white-space: pre-line;
}

.site-footer__bottom {
  @include breakpoint("small") {
    @include site-padding;
  }
}
.site-footer__bottom-wrapper {
  border-top: 1px solid $grey;
  font-weight: bold;
  font-size: 0.9rem;
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: left;
  @include breakpoint("small") {
    display: grid;
    margin-top: 4rem;
    // grid-template-columns: 1fr 1fr 1fr;
    text-align: inherit;
    grid-template-columns: 1fr 1fr;
  }
}

.site-footer__copyright {
  margin-bottom: 1rem;
  @include breakpoint("small") {
    margin-bottom: 0;
  }
}

.site-footer__legal {
  margin-bottom: 1rem;
  @include breakpoint("small") {
    display: grid;
    //grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 0;
    // text-align: center;
    text-align: right;
  }
}

.site-footer__social {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  @include breakpoint("small") {
    justify-content: flex-end;
    margin-bottom: 0;
  }
}
.site-footer__social-item {
  margin-left: 0.5rem;
}
</style>