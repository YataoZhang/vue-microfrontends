import './set-public-path'
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

window.two={
    render: (h) => h(App),
    router
};
