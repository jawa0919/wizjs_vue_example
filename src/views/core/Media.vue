<!--
 * @FilePath     : /wizjs_vue_example/src/views/core/Media.vue
 * @Date         : 2021-07-22 10:38:19
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 媒体
-->

<template>
  <div class="Media page">
    <AppBar title="媒体" />
    <van-tabs>
      <van-tab title="图片">
        <van-cell-group inset title=" ">
          <van-cell
            title="saveImageToPhotosAlbum"
            @click="saveImageToPhotosAlbumTest"
            is-link
          />
          <van-cell title="getImageInfo" @click="getImageInfoTest" is-link />
          <van-cell title="compressImage" @click="compressImageTest" is-link />
          <van-cell title="chooseImage" @click="chooseImageTest" is-link />
        </van-cell-group>
      </van-tab>
      <van-tab title="视频">
        <van-cell-group inset title=" ">
          <van-cell
            title="saveVideoToPhotosAlbum"
            @click="saveVideoToPhotosAlbumTest"
            is-link
          />
          <van-cell title="getVideoInfo" @click="getVideoInfoTest" is-link />
          <van-cell title="compressVideo" @click="compressVideoTest" is-link />
          <van-cell title="chooseVideo" @click="chooseVideoTest" is-link />
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
import {
  isDebugSDK,
  saveImageToPhotosAlbum,
  chooseImage,
  getImageInfo,
  compressImage,
  saveVideoToPhotosAlbum,
  getVideoInfo,
  compressVideo,
  chooseVideo
} from "wizjs";

@Options({ name: "Media", components: { AppBar } })
export default class Media extends Vue {
  router = useRouter();
  imageRes = "";

  created(): void {
    console.log("Media created");
    console.log("" + isDebugSDK());
  }

  saveImageToPhotosAlbumTest(): void {
    saveImageToPhotosAlbum("")
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  getImageInfoTest(): void {
    getImageInfo("")
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  compressImageTest(): void {
    compressImage("")
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  chooseImageTest(): void {
    chooseImage()
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }

  saveVideoToPhotosAlbumTest(): void {
    saveVideoToPhotosAlbum("")
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  getVideoInfoTest(): void {
    getVideoInfo("")
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  compressVideoTest(): void {
    compressVideo("")
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
  chooseVideoTest(): void {
    chooseVideo()
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
