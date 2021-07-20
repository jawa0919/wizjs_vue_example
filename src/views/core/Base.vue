<!--
 * @FilePath     : /wizjs_vue_example/src/views/core/Base.vue
 * @Date         : 2021-07-19 17:04:52
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 基础
-->

<template>
  <div class="Base">
    <van-nav-bar title="基础" left-arrow />
    <van-cell title="test" :label="testRes" @click="testTest" />
    <van-cell title="env" :label="envRes" @click="envTest" />
    <van-cell title="getSystemInfo" @click="getSystemInfoTest">
      <template v-slot:label>
        <div v-if="getSystemInfoRes.brand">{{ getSystemInfoRes }}</div>
      </template>
    </van-cell>
    <van-notice-bar scrollable :text="ua" />
  </div>
</template>

<script lang="ts">
import { Notify } from "vant";
import { Options, Vue } from "vue-class-component";
import { test, env, isDebugSDK, getSystemInfo, WizSystemInfo } from "wizjs";

@Options({
  name: "Base",
  components: {}
})
export default class Base extends Vue {
  ua = "";
  testRes = "";
  envRes = "";
  getSystemInfoRes: WizSystemInfo = {} as WizSystemInfo;

  created(): void {
    console.log("Base created");
    this.ua = navigator.userAgent;
    // if (window.Wiz) {
    //   window.Wiz.mode = "debug";
    // }
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
