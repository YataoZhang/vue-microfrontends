import './set-public-path'
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

window.one = {
    render: (h) => h(App),
    router
};
