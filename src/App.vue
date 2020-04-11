<template>
  <v-app>
    <layout-menu />

    <v-content transition="slide-x-transition" class="indigo lighten-5">
      <router-view />
    </v-content>
    <footer-menu />
  </v-app>
</template>

<script>
// eslint-disable-next-line
//https://www.freecodecamp.org/news/how-to-build-a-single-page-application-using-vue-js-vuex-vuetify-and-firebase-838b40721a07/
import layoutMenu from '@/components/layout-menu';
import footerMenu from '@/components/footer';

export default {
  name: 'App',
  components: {
    layoutMenu,
    footerMenu
  }
};
</script>

<style></style>
