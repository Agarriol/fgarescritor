import Vue from 'vue';
import VueRouter from 'vue-router';
import Books from '../views/books.vue';
import Book from '../views/bookInfo.vue';
import About from '../views/about.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Books',
    component: Books
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: Book
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: "*",
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
