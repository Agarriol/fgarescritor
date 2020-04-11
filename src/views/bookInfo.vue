<template>
  <v-container fluid>
    <v-card elevation="10" class="indigo lighten-4">
      <v-row align="center" justify="space-around" class="flex-xs-column ">
        <h1 class="indigo--text text--darken-4">{{ books[bookId].title }}</h1>
      </v-row>
      <v-row align="center" justify="space-around" class="flex-xs-column">
        <v-col xs="9" sm="6" md="3" lg="3" xl="3" align="center">
          <v-img
            :src="imgStringToVariableName(books[bookId].img)"
            width="80%"
          ></v-img>
        </v-col>
        <v-col align="left" xs="12" sm="12" md="9" lg="9" xl="9">
          <v-card-text class="indigo--text text--darken-3">
            {{ books[bookId].text }}</v-card-text
          >
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import importBooks from '../components/importBooks.vue';

export default {
  name: 'Book',
  mixins: [importBooks],
  data() {
    return {
      bookId: this.$route.params.id
    };
  }
};
</script>
