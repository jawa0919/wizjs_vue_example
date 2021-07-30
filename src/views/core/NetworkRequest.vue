<!--
 * @FilePath     : /wizjs_vue_example/src/views/core/NetworkRequest.vue
 * @Date         : 2021-07-29 10:02:15
 * @Author       : jawa0919 <jawa0919@163.com>
 * @Description  : 网络-request
-->

<template>
  <div class="NetworkRequest">
    <van-cell-group title="method-url">
      <van-field name="radio">
        <template #input>
          <van-radio-group v-model="method" direction="horizontal">
            <van-radio name="GET">GET</van-radio>
            <van-radio name="POST">POST</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field autosize type="textarea" v-model="url" />
    </van-cell-group>

    <van-cell-group title="header">
      <vxe-table border size="mini" :data="headerMap" :edit-config="editC">
        <vxe-column title="KEY" width="30%" field="key" :edit-render="editR" />
        <vxe-column title="VALUE" field="value" :edit-render="editR" />
      </vxe-table>
      <van-cell title="Add Header" @click="addHeader" is-link />
    </van-cell-group>

    <van-cell-group v-if="method == 'POST'" title="data">
      <vxe-table border size="mini" :data="dataMap" :edit-config="editC">
        <vxe-column title="KEY" width="30%" field="key" :edit-render="editR" />
        <vxe-column title="VALUE" field="value" :edit-render="editR" />
      </vxe-table>
      <van-cell title="Add Data" @click="addData" is-link />
    </van-cell-group>

    <van-cell-group inset title=" ">
      <van-button block @click="requestTest" text="request" />
    </van-cell-group>

    <van-cell-group v-if="requestRes.url" inset title=" ">
      <van-cell title="requestRes" is-link>
        <template v-slot:label>
          <div v-if="requestRes.url">{{ requestRes }}</div>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Notify } from "vant";
import { Options, Vue } from "vue-class-component";
import { isDebugSDK, request } from "wizjs";

@Options({ name: "NetworkRequest", components: {} })
export default class NetworkRequest extends Vue {
  url = "https://gitee.com/api/v5/users/jawa0919";
  method: "GET" | "POST" = "GET";
  headerMap = [{ key: "", value: "" }];
  get header(): Record<string, string> {
    let temp: Record<string, string> = {};
    this.headerMap
      .filter(r => r.key != "")
      .forEach(r => {
        temp[r.key] = r.value;
      });
    return temp;
  }

  editC = { trigger: "click", mode: "row" };
  editR = { name: "input", placeholder: "请输入..." };
  dataMap = [{ key: "", value: "" }];

  requestRes = {};

  created(): void {
    console.log("NetworkRequest created");
    console.log("" + isDebugSDK());
  }
  addHeader(): void {
    this.headerMap = this.headerMap
      .filter(r => r.key != "")
      .concat({ key: "", value: "" });
  }
  addData(): void {
    this.dataMap = this.dataMap
      .filter(r => r.key != "")
      .concat({ key: "", value: "" });
  }
  requestTest(): void {
    const { url, method, header, dataMap } = this;
    let data: string | undefined;
    if (method == "POST") {
      let temp: Record<string, string> = {};
      dataMap
        .filter(r => r.key != "")
        .forEach(r => {
          temp[r.key] = r.value;
        });
      data = JSON.stringify(temp);
    }
    console.log(header);
    request({ url, method, header, data })
      .then(res => {
        console.log("res", res);
        this.requestRes = res.data;
      })
      .catch(err => {
        console.error("err", err);
        Notify({ type: "danger", message: err });
      });
  }
}
</script>
