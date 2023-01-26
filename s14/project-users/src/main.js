import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const app = createApp(App);
app.use(router);
app.use(ToastPlugin, {
   position: 'bottom-left'
});
app.mount('#app');
