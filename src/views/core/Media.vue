<!--
 * @FilePath     : /wizjs_vue_example/src/views/core/Media.vue
 * @Date         : 2021-07-22 10:38:19
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 媒体
-->

<template>
  <div class="Media page">
    <AppBar title="媒体" />
    <van-cell-group inset title="图片">
      <van-cell
        title="chooseImage"
        :label="imageRes"
        @click="chooseImageTest"
        is-link
      />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { Notify } from "vant";
import { Options, Vue } from "vue-class-component";
import AppBar from "@/components/AppBar.vue";
import { isDebugSDK, chooseImage } from "wizjs";

@Options({ name: "Media", components: { AppBar } })
export default class Media extends Vue {
  router = useRouter();
  imageRes = "";

  created(): void {
    console.log("Media created");
    console.log("" + isDebugSDK());
  }

  chooseImageTest(): void {
    chooseImage()
      .then(res => {
        console.log("res", res);
        this.imageRes = res.pop()?.path ?? "";
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
}
</script>
