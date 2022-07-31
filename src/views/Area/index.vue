<template>
  <div class="area">
    <h2>风险地区</h2>
    <div class="content">
      <!-- 高风险 -->
      <template v-if="high.length > 0">
        <div class="title">高风险区{{ handleHigh.length }}个</div>
        <ul>
          <li v-for="item in handleHigh" :key="item">{{ item }}</li>
        </ul>
      </template>

      <!-- 中风险 -->
      <template>
        <div class="title">中风险区{{ handleMid.length }}个</div>
        <ul>
          <li v-for="item in handleMid" :key="item">{{ item }}</li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
import api from "../../api/index";

export default {
  data() {
    return {
      high: [], // 高风险区的数据
      mid: [], // 低风险区域
    };
  },
  created() {
    // 请求病毒接口
    api.getCovInfo().then((res) => {
      // 全国疫情的数据统计信息
      let riskarea = res.data.newslist[0].riskarea;
      console.log("covData", riskarea);
      // 解析数据
      this.high = riskarea.high;
      this.mid = riskarea.mid;
    });
  },
  computed: {
    // high的内容太多了，截取high的长度展示
    handleHigh() {
      return this.high.splice(0, 2);
    },

    handleMid() {
      return this.mid.splice(0, 20);
    },
  },
};
</script>

<style lang="less" scoped>
.area {
  background-color: #fff;
}
</style>