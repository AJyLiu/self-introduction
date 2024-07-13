import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 注册路由
import 'element-plus/dist/index.css';
import '@/assets/style/global.less';

const app = createApp(App);
app.use(router);
app.mount('#app');
