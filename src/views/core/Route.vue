<!--
 * @FilePath     : /wizjs_vue_example/src/views/core/Route.vue
 * @Date         : 2021-07-21 10:15:41
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 路由
-->

<template>
  <div class="Route page">
    <AppBar title="路由" />
    <van-cell-group inset title="url">
      <van-field v-model="url" placeholder="请输入url" />
    </van-cell-group>
    <van-cell-group inset title="关闭所有页面，打开到应用内的某个页面">
      <van-cell title="reLaunch" @click="reLaunchTest" is-link />
    </van-cell-group>
    <van-cell-group inset title="关闭当前页面，跳转到应用内的某个页面">
      <van-cell title="redirectTo" @click="redirectToTest" is-link />
    </van-cell-group>
    <van-cell-group inset title="保留当前页面，跳转到应用内的某个页面">
      <van-cell title="navigateTo" @click="navigateToTest" is-link />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Notify } from "vant";
import { Options, Vue } from "vue-class-component";
import { isDebugSDK, reLaunch, redirectTo, navigateTo } from "wizjs";
import AppBar from "@/components/AppBar.vue";

@Options({ name: "Route", components: { AppBar } })
export default class Route extends Vue {
  url = "/about?type=0&uid=wangjia";

  created(): void {
    console.log("Route created");
    console.log("" + isDebugSDK());
  }
  reLaunchTest(): void {
    reLaunch<string>(this.url)
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  redirectToTest(): void {
    redirectTo<string>(this.url)
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  navigateToTest(): void {
    navigateTo<string>(this.url)
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
