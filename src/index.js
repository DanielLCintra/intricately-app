import 'Styles/main.scss';
import Vue from 'vue';
import Home from './features/Home/HomeIndex.vue';

new Vue({
  render: createElement => createElement(Home),
  el: '#app'
});
