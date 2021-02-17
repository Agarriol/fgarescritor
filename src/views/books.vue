<template>
  <div>
    <v-container fluid>
      <v-row align="center" justify="space-around" class="flex-xs-column">
        <v-card
          class="mx-6 mt-6 mb-6"
          v-for="(book, indexBook) in books"
          :key="book.title"
          elevation="10"
        >
          <v-container>
            <v-img
              :src="imgStringToVariableName(book.img)"
              max-height="400"
              max-width="260"
            ></v-img>

            <v-card-title>{{ book.title }}</v-card-title>

            <v-card-subtitle>{{ book.type }}</v-card-subtitle>

            <v-card-actions>
              <router-link :to="{ name: 'Book', params: { id: indexBook } }">
                <v-btn text>Resumen</v-btn>
              </router-link>

              <a :href="book.url"><v-btn color="indigo" text >Comprar</v-btn></a>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import importBooks from '../components/importBooks.vue';

export default {
  name: 'Book',
  mixins: [importBooks]
};
</script>

<style>
A {text-decoration: none;}
</style>