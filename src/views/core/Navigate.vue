<!--
 * @FilePath     : /wizjs_vue_example/src/views/core/Navigate.vue
 * @Date         : 2021-07-22 10:38:19
 * @Author       : jawa0919 <jawa0919@163.com>
 * @Description  : 跳转
-->

<template>
  <div class="Navigate page">
    <AppBar title="跳转" />
    <van-cell-group inset title="测试">
      <van-cell title="test" :label="testRes" @click="testTest" is-link />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { Notify } from "vant";
import { Options, Vue } from "vue-class-component";
import AppBar from "@/components/AppBar.vue";
import { test, isDebugSDK } from "wizjs";

@Options({ name: "Navigate", components: { AppBar } })
export default class Navigate extends Vue {
  router = useRouter();
  testRes = "";

  created(): void {
    console.log("Navigate created");
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
}
</script>
