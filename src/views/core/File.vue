<!--
 * @FilePath     : /wizjs_vue_example/src/views/core/File.vue
 * @Date         : 2021-07-22 10:38:19
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 文件
-->

<template>
  <div class="File page">
    <AppBar title="文件" />
    <van-cell-group inset title="env">
      <van-cell title="env" :label="rootPath" @click="envTest" is-link />
    </van-cell-group>
    <van-cell-group inset title="saveFile">
      <van-cell
        title="saveFile"
        :label="saveFilePath"
        @click="saveFileTest"
        is-link
      />
    </van-cell-group>
    <van-cell-group inset title="removeSavedFile">
      <van-cell title="removeSavedFile" @click="removeSavedFileTest" is-link />
    </van-cell-group>
    <van-cell-group inset title="openDocument">
      <van-cell
        title="openDocument"
        @click="openDocumentTest"
        is-link
      /> </van-cell-group
    ><van-cell-group inset title="getFileInfo">
      <van-cell title="getFileInfo" @click="getFileInfoTest" is-link />
    </van-cell-group>
    <van-cell-group v-if="fileInfoRes.digest" inset title=" ">
      <van-cell title="fileInfoRes" is-link>
        <template v-slot:label>
          <div v-if="fileInfoRes.digest">{{ fileInfoRes }}</div>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { Notify } from "vant";
import { Options, Vue } from "vue-class-component";
import AppBar from "@/components/AppBar.vue";
import {
  saveFile,
  removeSavedFile,
  openDocument,
  getFileInfo,
  unzip,
  isDebugSDK,
  env
} from "wizjs";

@Options({ name: "File", components: { AppBar } })
export default class File extends Vue {
  router = useRouter();
  rootPath = "";

  saveFilePath = "";

  fileInfoRes = {};

  created(): void {
    console.log("File created");
    console.log("" + isDebugSDK());
  }

  testTest(): void {
    env()
      .then(res => {
        console.log("res", res);
        this.rootPath = res;
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }

  saveFileTest(): void {
    saveFile(`${this.rootPath}/a.txt`)
      .then(res => {
        console.log("res", res);
        this.saveFilePath = res.savedFilePath;
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }

  removeSavedFileTest(): void {
    removeSavedFile(`${this.rootPath}/a.txt`)
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  openDocumentTest(): void {
    openDocument(`${this.rootPath}/a.pdf`)
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }

  getFileInfoTest(): void {
    getFileInfo(`${this.rootPath}/a.pdf`)
      .then(res => {
        console.log("res", res);
        this.fileInfoRes = res;
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }

  unzipTest(): void {
    unzip(`${this.rootPath}/a.zip`, `${this.rootPath}/zipDir`)
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
