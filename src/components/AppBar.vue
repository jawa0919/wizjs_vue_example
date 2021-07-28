<template>
  <van-nav-bar
    class="NavBar"
    v-if="isShowNavBar"
    placeholder
    fixed
    z-index="100"
    safe-area-inset-top
    :left-arrow="isShowNavBar && isShowNavBack"
    @click-left="clickLeft"
    :title="title"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useRouter, useRoute } from "vue-router";

@Options({ name: "AppBar", props: { title: String } })
export default class AppBar extends Vue {
  route = useRoute();
  router = useRouter();
  title: string = "";

  get isShowNavBar(): boolean {
    const noNavBar = this.route.query.noNavBar ?? "0";
    return noNavBar == "0";
  }
  get isShowNavBack(): boolean {
    const noNavBack = this.route.query.noNavBack ?? "0";
    return noNavBack == "0" || history.state.position > 0;
  }
  created(): void {
    console.log("AppBar created");
  }
  clickLeft() {
    if (history.state.position == 0) {
      // (window as any).Wiz.closeWin();
    } else {
      this.router.back();
    }
  }
}
</script>
