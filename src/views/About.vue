<template>
  <v-container fluid>
    <v-card elevation="10" class="indigo lighten-4">
      <v-row align="center" justify="space-around" class="flex-xs-column">
        <v-col xs="9" sm="6" md="3" lg="3" xl="3" align="center">
          <v-img
            src="https://i2.wp.com/erideediciones.es/wp-content/uploads/2019/09/fernandogarciaflorez1.jpg?resize=300%2C238&ssl=1"
            width="80%"
          />
        </v-col>
        <v-col align="left" xs="12" sm="12" md="9" lg="9" xl="9">
          <v-card-text class="indigo--text text--darken-3">
            {{ about }}
            <i v-for="title in books" :key="title"
              ><b>{{ title }}</b
              >,
            </i>
            y <i><b> El principe de Cristal. </b></i>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      about:
        'Fernando García Flórez nació en Roales de Campos (Valladolid), en 1959. Es licenciado en Derecho por la Universidad de Valladolid y Secretario de Administración Local de primera categoría, ejerciendo actualmente este puesto de trabajo en el Ayuntamiento de Salamanca. Autor de las obras literarias ',
      books: ['El tesoro de Mansada', 'Una infancia inquietante', 'Oasis']
    };
  }
};
</script>
