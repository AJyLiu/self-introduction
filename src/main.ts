import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 注册路由
import 'element-plus/dist/index.css';
import '@/assets/style/global.less';
import '@/assets/style/animate.less';

const app = createApp(App);
app.use(router);
app.mount('#app');
