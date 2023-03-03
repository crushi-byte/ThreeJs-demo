import { createApp } from 'vue'
import App from './App.vue'
import CUSHUI from '../packages/index'
import router from '@/router'
import hljs from "highlight.js";
import "highlight.js/styles/color-brewer.css";

const app = createApp(App);

app.use(CUSHUI);
app.use(router);
app.mount('#app');

// 自定义语法高亮指令
app.directive("highlight", function (el) {
    const blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
});
