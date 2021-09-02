require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

window.Vue = Vue;
window.Vuex = Vuex;
Vue.use(VueRouter);

import App from '../components'

const app = new Vue({
    el: "#app",
    components: { App },
})