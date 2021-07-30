<!--
 * @FilePath     : /wizjs_vue_example/src/views/core/Network.vue
 * @Date         : 2021-07-22 10:38:19
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 网络
-->

<template>
  <div class="Network page">
    <AppBar title="网络" />
    <van-tabs>
      <van-tab title="网络请求">
        <NetworkRequest />
      </van-tab>
      <van-tab title="下载文件">
        <van-cell-group title="downloadFile-url">
          <van-field autosize type="textarea" v-model="url" />
        </van-cell-group>

        <van-cell-group inset title=" ">
          <van-button block @click="downloadFileTest" text="downloadFile" />
        </van-cell-group>
      </van-tab>
      <van-tab title="上传文件">
        <van-cell-group inset title="上传文件">
          <van-cell title="uploadFile" is-link />
          <van-uploader :after-read="uploadFileTest" />
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Notify } from "vant";
import { Options, Vue } from "vue-class-component";
import AppBar from "@/components/AppBar.vue";
import NetworkRequest from "./NetworkRequest.vue";
import { isDebugSDK, downloadFile, uploadFile } from "wizjs";

@Options({ name: "Network", components: { AppBar, NetworkRequest } })
export default class Network extends Vue {
  created(): void {
    console.log("Network created");
    console.log("" + isDebugSDK());
  }

  url =
    "https://npm.taobao.org/mirrors/node/v14.17.4/node-v14.17.4-win-x64.zip";

  downloadFileTest(): void {
    // TODO 2021-07-30 15:42:50 需要文件系统辅助
    let filePath = "";
    downloadFile(this.url, filePath)
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: "err" });
      });
  }
  uploadFileTest(file: any): void {
    // TODO 2021-07-30 15:42:50 需要文件系统辅助
    console.log(file);
    let url = " ";
    let filePath = "";
    uploadFile(url, filePath)
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

<style>
.van-tabs {
  padding-bottom: 16px;
}
</style>
