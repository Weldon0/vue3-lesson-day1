// vite下面的默认入口

// 构建一个vue的入口 >> vue3
import {createApp} from "vue";

// 引入组件
import App from './6.computed.vue'

// 创建vue实例
const app = createApp(App);

// 挂载
app.mount('#app');
