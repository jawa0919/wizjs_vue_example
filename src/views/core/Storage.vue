<!--
 * @FilePath     : /wizjs_vue_example/src/views/core/Storage.vue
 * @Date         : 2021-07-22 10:38:19
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 数据缓存
-->

<template>
  <div class="Storage page">
    <AppBar title="数据缓存" />
    <van-field
      label="数据文本"
      v-model="storageRes"
      placeholder="请输入storage"
    />
    <van-cell-group inset title="将数据存储在本地缓存中指定的 key 中">
      <van-cell title="setStorage" @click="setStorageTest" is-link />
    </van-cell-group>
    <van-cell-group inset title="从本地缓存中移除指定 key">
      <van-cell title="removeStorage" @click="removeStorageTest" is-link />
    </van-cell-group>
    <van-cell-group inset title="从本地缓存中异步获取指定 key 的内容">
      <van-cell title="getStorage" @click="getStorageTest" is-link />
    </van-cell-group>
    <van-cell-group inset title="获取当前storage的相关信息">
      <van-cell title="getStorageInfo" @click="getStorageInfoTest" is-link />
    </van-cell-group>
    <van-cell-group inset title="清理本地数据缓存">
      <van-cell title="clearStorage" @click="clearStorageTest" is-link />
    </van-cell-group>

    <van-cell-group inset title="查看所以数据存储">
      <van-cell title="AllStorage" @click="allStorageTest" is-link />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { Notify, Toast } from "vant";
import { Options, Vue } from "vue-class-component";
import AppBar from "@/components/AppBar.vue";
import {
  setStorage,
  isDebugSDK,
  navigateTo,
  removeStorage,
  getStorage,
  getStorageInfo,
  clearStorage
} from "wizjs";

@Options({ name: "Storage", components: { AppBar } })
export default class Storage extends Vue {
  router = useRouter();
  testRes = "";
  storageRes = "";

  created(): void {
    console.log("Storage created");
    console.log("" + isDebugSDK());
  }

  setStorageTest(): void {
    setStorage("storageInput", this.storageRes)
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  removeStorageTest(): void {
    removeStorage("storageInput")
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  getStorageTest(): void {
    getStorage("storageInput")
      .then(res => {
        console.log("res", res);
        Toast(JSON.stringify(res));
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  getStorageInfoTest(): void {
    getStorageInfo()
      .then(res => {
        console.log("res", res);
        Toast(JSON.stringify(res));
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  clearStorageTest(): void {
    clearStorage()
      .then(res => {
        console.log("res", res);
        Toast(JSON.stringify(res));
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  allStorageTest(): void {
    navigateTo("/Storage")
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
.Storage {
  padding-bottom: 16px;
}
</style>
