<!--
 * @FilePath     : /wizjs_vue_example/src/views/core/Network.vue
 * @Date         : 2021-07-22 10:38:19
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 网络
-->

<template>
  <div class="Network page">
    <AppBar title="网络" />
    <van-cell-group inset title="测试">
      <van-cell title="test" :label="testRes" @click="testTest" is-link />
    </van-cell-group>
    <van-cell-group inset title="网络请求">
      <van-cell title="requestGet" @click="get1Test" is-link />
      <van-cell title="requestPost" @click="post1Test" is-link />
      <van-cell :title="requestRes" />
    </van-cell-group>
    <van-cell-group inset title="下载文件">
      <van-cell title="downloadFile" @click="downloadFileTest" is-link />
    </van-cell-group>
    <van-cell-group inset title="上传文件">
      <van-cell title="uploadFile" is-link />
      <van-uploader :after-read="uploadFileTest" />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { Notify } from "vant";
import { Options, Vue } from "vue-class-component";
import AppBar from "@/components/AppBar.vue";
import { test, request, downloadFile, isDebugSDK, uploadFile } from "wizjs";

@Options({ name: "Network", components: { AppBar } })
export default class Network extends Vue {
  router = useRouter();
  testRes = "";
  requestRes = "requestRes";
  baseUrl = "https://api.github.com";

  created(): void {
    console.log("Network created");
    console.log("" + isDebugSDK());
  }

  testTest(): void {
    test()
      .then(res => {
        console.log("res", res);
        this.testRes = res;
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  get1Test(): void {
    request(`${this.baseUrl}/repos/vasanthv/jsonbox`)
      .then(res => {
        console.log("res", res);
        this.requestRes = `${JSON.stringify(res.data)}`;
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  post1Test(): void {
    request({
      url: `https://jsonbox.io/box_749b4566cbcb028922df`,
      method: "POST",
      header: {
        "content-type": "application/json; charset=utf-8",
        "X-Api-Key": "7b3b910b-a7ad-41e8-89d6-5e28e2e34e70"
      },
      data: { a: true, b: 123, c: "456", d: ["7", "8", "9"] }
    })
      .then(res => {
        console.log("res", res);
        this.requestRes = `${JSON.stringify(res.data)}`;
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  downloadFileTest(): void {
    let url =
      "https://npm.taobao.org/mirrors/node/v14.14.0/node-v14.14.0-x86.msi";
    let filePath = "";
    downloadFile(url, filePath)
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  uploadFileTest(file: any): void {
    console.log(file);
    let url =
      "https://npm.taobao.org/mirrors/node/v14.14.0/node-v14.14.0-x86.msi";
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
