<!--
 * @FilePath     : /wizjs_vue_example/src/views/core/Location.vue
 * @Date         : 2021-07-22 10:38:19
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 位置
-->

<template>
  <div class="Location page">
    <AppBar title="位置" />
    <van-cell-group inset title="获取定位信息">
      <van-button block @click="getLocationTest" text="getLocation" />
    </van-cell-group>
    <van-cell-group v-if="locationRes.latitude" inset title=" ">
      <van-cell title="locationRes" is-link>
        <template v-slot:label>
          <div v-if="locationRes.latitude">{{ locationRes }}</div>
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
import { getLocation, isDebugSDK } from "wizjs";

@Options({ name: "Location", components: { AppBar } })
export default class Location extends Vue {
  router = useRouter();
  locationRes = {};

  created(): void {
    console.log("Location created");
    console.log("" + isDebugSDK());
  }

  getLocationTest(): void {
    getLocation()
      .then(res => {
        console.log("res", res);
        this.locationRes = res;
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
}
</script>
