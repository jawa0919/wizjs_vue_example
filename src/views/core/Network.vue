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
        <van-cell-group inset title="url">
          <van-field autosize type="textarea" v-model="url" />
        </van-cell-group>

        <van-cell-group inset title="method">
          <van-field name="radio">
            <template #input>
              <van-radio-group v-model="method" direction="horizontal">
                <van-radio name="GET">GET</van-radio>
                <van-radio name="POST">POST</van-radio>
              </van-radio-group>
            </template>
          </van-field>
        </van-cell-group>

        <van-cell-group inset title="header">
          <van-field
            autosize
            type="textarea"
            v-model="headerJson"
            placeholder="请求header"
          />
        </van-cell-group>

        <van-cell-group v-if="method == 'POST'" inset title="data">
          <van-field
            autosize
            type="textarea"
            v-model="dataJson"
            placeholder="请求data"
          />
        </van-cell-group>

        <van-cell-group inset title="request">
          <van-cell title="request" @click="requestTest" is-link>
            <template v-slot:label>
              <div v-if="requestRes.url">{{ requestRes }}</div>
            </template>
          </van-cell>
        </van-cell-group>
      </van-tab>

      <van-tab title="下载文件">
        <van-cell-group inset title="下载文件">
          <van-cell title="downloadFile" @click="downloadFileTest" is-link />
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
import { useRouter } from "vue-router";
import { Notify } from "vant";
import { Options, Vue } from "vue-class-component";
import AppBar from "@/components/AppBar.vue";
import { request, downloadFile, isDebugSDK, uploadFile } from "wizjs";

@Options({ name: "Network", components: { AppBar } })
export default class Network extends Vue {
  router = useRouter();

  url = "https://api.github.com/users/jawa0919";
  method: "GET" | "POST" = "GET";
  headerJson = "{}";
  dataJson = "{}";
  requestRes = {};

  created(): void {
    console.log("Network created");
    console.log("" + isDebugSDK());
  }
  requestTest(): void {
    request({
      url: this.url,
      method: this.method,
      header: JSON.parse(this.headerJson),
      data: this.method == "POST" ? JSON.parse(this.dataJson) : null
    })
      .then(res => {
        console.log("res", res);
        this.requestRes = res.data;
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

<style>
.van-tabs {
  padding-bottom: 16px;
}
</style>
