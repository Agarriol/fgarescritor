<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="indigo lighten-2"
      dark
      disable-resize-watcher
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://i2.wp.com/erideediciones.es/wp-content/uploads/2019/09/fernandogarciaflorez1.jpg?resize=300%2C238&ssl=1"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ appTitle }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.url"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-card class="overflow-hidden">
      <v-app-bar prominent color="indigo darken-4" dark>
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click="drawer = !drawer"
        />

        <v-spacer class="hidden-sm-and-down" />
        <v-toolbar-title class="display-2 hidden-sm-and-down">{{
          appTitle
        }}</v-toolbar-title>
        <v-toolbar-title class="hidden-md-and-up">{{
          appTitle
        }}</v-toolbar-title>
        <v-spacer class="hidden-sm-and-down" />

        <template v-slot:extension>
          <v-tabs centered class="hidden-sm-and-down">
            <v-tab
              text
              v-for="item in items"
              :key="item.title"
              :to="item.url"
              >{{ item.title }}</v-tab
            >
          </v-tabs>
          <v-spacer class="hidden-sm-and-down" />
        </template>
      </v-app-bar>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appTitle: 'Fernando García Flórez',
      drawer: false,
      items: [
        {
          icon: 'mdi-book-open-page-variant',
          title: 'Obras',
          url: { name: 'Books' }
        },
        {
          icon: 'mdi-account',
          title: 'Bibliografía',
          url: { name: 'About' }
        }
      ]
    };
  }
};
</script>
