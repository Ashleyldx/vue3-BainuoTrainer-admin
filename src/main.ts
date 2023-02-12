import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import {store} from "./store";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons'
// import 'element-plus/theme-chalk/index.css';

const app = createApp(App)
for (const name in ElIcons) {
  app.component(name,(ElIcons as any)[name])
}
app.use(store).use(router).use(ElementPlus).mount('#app')