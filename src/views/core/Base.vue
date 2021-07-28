<!--
 * @FilePath     : /wizjs_vue_example/src/views/core/Base.vue
 * @Date         : 2021-07-20 17:13:20
 * @Author       : jawa0919 <jawa0919@163.com>
 * @Description  : 基础
-->

<template>
  <div class="Base page">
    <AppBar title="基础" />
    <van-cell-group inset title="测试">
      <van-cell title="test" :label="testRes" @click="testTest" is-link />
    </van-cell-group>
    <van-cell-group inset title="环境变量">
      <van-cell title="env" :label="envRes" @click="envTest" is-link />
    </van-cell-group>
    <van-cell-group inset title="获取系统信息">
      <van-cell title="getSystemInfo" @click="getSystemInfoTest" is-link>
        <template v-slot:label>
          <div v-if="getSystemInfoRes.brand">{{ getSystemInfoRes }}</div>
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
import { test, env, isDebugSDK, getSystemInfo, WizSystemInfo } from "wizjs";

@Options({ name: "Base", components: { AppBar } })
export default class Base extends Vue {
  router = useRouter();
  testRes = "";
  envRes = "";
  getSystemInfoRes: WizSystemInfo = {} as WizSystemInfo;

  created(): void {
    console.log("Base created");
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
  envTest() {
    env()
      .then(res => {
        console.log("res", res);
        this.envRes = res;
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  getSystemInfoTest() {
    getSystemInfo()
      .then(res => {
        console.log("res", res);
        this.getSystemInfoRes = res;
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
}
</script>
