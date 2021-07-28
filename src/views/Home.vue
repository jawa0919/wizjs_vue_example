<template>
  <div class="home page">
    <h1 class="home-title">WizJsSdk</h1>
    <van-cell-group inset title="功能">
      <van-cell title="基础" to="Base" is-link />
      <van-cell title="路由" to="Route" is-link />
      <van-cell title="跳转" to="Navigate" is-link />
      <van-cell title="转发" to="Share" is-link />
      <van-cell title="界面" to="Ui" is-link />
      <van-cell title="网络" to="Network" is-link />
      <van-cell title="数据缓存" to="Storage" is-link />
      <van-cell title="媒体" to="Media" is-link />
      <van-cell title="位置" to="Location" is-link />
      <van-cell title="文件" to="File" is-link />
      <van-cell title="开放接口" to="OpenApi" is-link />
      <van-cell title="设备" to="Device" is-link />
    </van-cell-group>
    <van-cell-group inset title="userAgent">
      <van-cell :title="ua" />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({ name: "Home", components: {} })
export default class Home extends Vue {
  ua = "";
  created(): void {
    console.log("Home created");
    this.ua = navigator.userAgent;
  }
}
</script>

<style>
.home {
  padding: 16px 0;
}
.home-title {
  display: inline-block;
  margin: 0 32px;
}
</style>
