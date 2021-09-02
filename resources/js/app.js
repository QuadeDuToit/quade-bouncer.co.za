require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

window.Vue = Vue;
window.Vuex = Vuex;
Vue.use(VueRouter);

import App from '../components'

import routes from '../routes';

const app = new Vue({
    el: "#app",
    router: routes,
    components: { App },
})