<!--
 * @FilePath     : /wizjs_vue_example/src/views/core/Ui.vue
 * @Date         : 2021-07-22 11:05:25
 * @Author       : jawa0919 <jawa0919@163.com>
 * @Description  : 界面
-->

<template>
  <div class="Ui page">
    <AppBar title="界面" />
    <van-cell-group inset title="停止当前页面下拉刷新">
      <van-cell
        title="stopPullDownRefresh"
        @click="stopPullDownRefreshTest"
        is-link
      />
    </van-cell-group>
    <van-cell-group inset title="开始下拉刷新。调用后触发下拉刷新动画">
      <van-cell
        title="startPullDownRefresh"
        @click="startPullDownRefreshTest"
        is-link
      />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { Notify } from "vant";
import { Options, Vue } from "vue-class-component";
import AppBar from "@/components/AppBar.vue";
import { stopPullDownRefresh, startPullDownRefresh, isDebugSDK } from "wizjs";

@Options({ name: "Ui", components: { AppBar } })
export default class Ui extends Vue {
  router = useRouter();

  created(): void {
    console.log("Ui created");
    console.log("" + isDebugSDK());
  }

  stopPullDownRefreshTest(): void {
    stopPullDownRefresh()
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  startPullDownRefreshTest(): void {
    startPullDownRefresh()
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
}
</script>
