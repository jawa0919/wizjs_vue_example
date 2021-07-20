<template>
  <div class="home">
    <h1>WizJsSdk</h1>
    <van-cell-group inset>
      <van-cell title="基础" to="Base" is-link />
      <van-cell title="单元格1" is-link />
      <van-cell title="单元格2" value="内容" />
      <van-cell title="单元格3" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {}
})
export default class Home extends Vue {}
</script>
