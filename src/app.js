import Vue from 'vue';
import Header from './components/header.vue';
import SuiVue from 'semantic-ui-vue';

import 'semantic-ui-css/semantic.min.css';

Vue.use(SuiVue);
new Vue({
  el: '#app',
  components: {
    'header-view': Header
  }
});
