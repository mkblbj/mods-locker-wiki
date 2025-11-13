// .vitepress/theme/index.ts
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
//import MyNoticeContent from "./components/MyNoticeContent.vue";
import { h } from "vue";

export default {
  extends: Teek,
      // Layout() {
      //       return h(Teek.Layout, null, {
      //       "teek-notice-content": () => h(MyNoticeContent),
      //       });
      // },
};