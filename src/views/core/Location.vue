<!--
 * @FilePath     : /wizjs_vue_example/src/views/core/Location.vue
 * @Date         : 2021-07-22 10:38:19
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 位置
-->

<template>
  <div class="Location page">
    <AppBar title="位置" />
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

@Options({ name: "Location", components: { AppBar } })
export default class Location extends Vue {
  router = useRouter();
  testRes = "";

  created(): void {
    console.log("Location created");
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
