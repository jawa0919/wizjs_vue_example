import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 全局vant组件库
import Vant from "vant";
import "vant/lib/index.css";
import "@vant/touch-emulator";
import { Toast, Notify, Dialog } from "vant";

// 全局vxe-table组件库
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";

// 移动端日志打印
import eruda from "eruda";
if (process.env.NODE_ENV === "development") {
  const ua = navigator.userAgent;
  if (ua.match(/Android/i) !== null || ua.match(/iPad|iPod|iPhone/i) !== null) {
    eruda.init();
  }
}

// WizJs测试
import { debugMode } from "wizjs";
debugMode();

createApp(App)
  .use(store)
  .use(router)
  .use(Vant)
  .use(Toast)
  .use(Notify)
  .use(Dialog)
  .use(VXETable)
  .mount("#app");
