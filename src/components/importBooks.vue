<script>
/*eslint-disable no-unused-vars*/
import elTesoroDeMansada from '../assets/elTesoroDeMansada.jpg';
import unaInfanciaInquietante from '../assets/unaInfanciaInquietante.jpg';
import Oasis from '../assets/Oasis.jpg';
import elPrincipeDeCristal from '../assets/elPrincipeDeCristal.jpg';
import books from '../books.json';

export default {
  name: 'Book',
  data() {
    return {
      books: books
    };
  },
  methods: {
    imgStringToVariableName(imgString) {
      const imgStringToVariable = {
        elTesoroDeMansada: elTesoroDeMansada,
        unaInfanciaInquietante: unaInfanciaInquietante,
        Oasis: Oasis,
        elPrincipeDeCristal: elPrincipeDeCristal
      };
      return imgStringToVariable[imgString];
    }
  }
};
</script>
