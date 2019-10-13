import './set-public-path'
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;


window.init = {
    render: (h) => {
        return h(App)
    },
    router,
};
