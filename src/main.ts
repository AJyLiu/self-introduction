import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 注册路由
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
