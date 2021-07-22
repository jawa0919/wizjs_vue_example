<!--
 * @FilePath     : /wizjs_vue_example/src/views/core/Storage.vue
 * @Date         : 2021-07-22 10:38:19
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 数据缓存
-->

<template>
  <div class="Storage page">
    <AppBar title="数据缓存" />
    <van-cell-group inset title="测试">
      <van-cell title="test" :label="testRes" @click="testTest" is-link />
    </van-cell-group>
    <van-cell-group inset title="输入">
      <van-field v-model="storageRes" placeholder="请输入storage" />
    </van-cell-group>
    <van-cell-group inset title="将数据存储在本地缓存中指定的 key 中">
      <van-cell title="setStorage" @click="setStorageTest" is-link />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { Notify } from "vant";
import { Options, Vue } from "vue-class-component";
import AppBar from "@/components/AppBar.vue";
import { test, setStorage, isDebugSDK } from "wizjs";

@Options({ name: "Storage", components: { AppBar } })
export default class Storage extends Vue {
  router = useRouter();
  testRes = "";
  storageRes = "";

  created(): void {
    console.log("Storage created");
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
}
</script>
