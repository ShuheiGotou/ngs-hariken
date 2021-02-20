// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import ons from 'onsenui';

import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import * as VueGoogleMaps from 'vue2-google-maps';

import './style.scss';

import router from './router';
import App from './App';
import { GOOGLE_MAP_API } from '../.env';
import store from './vuex/store';


Vue.use(VueOnsen);
ons.forcePlatformStyling('ios');

Vue.use(VueGoogleMaps, {
  load: {
    key: GOOGLE_MAP_API,
    language: 'en',
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
