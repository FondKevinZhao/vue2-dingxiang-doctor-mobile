<template>
  <div>
    <div class="title">国内疫情地图</div>
    <!-- 地图容器 -->
    <!-- 为 Echarts 准备一个定义了宽高的 DOM -->

    <van-tabs v-model="active" animated>
      <van-tab title="现存确诊">
        <div id="nowMain" style="width: 7.5rem; height: 7rem"></div>
      </van-tab>
      <van-tab title="累计确诊">
        <div id="main" style="width: 7.5rem; height: 7rem"></div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// 1. 安装 echarts 2. 组件中谁用谁导入echarts 3. 创建echarts的实例
// import echarts from "echarts"; // 已经全局引用了

// 引入api
// import api from "../../../api/index";
export default {
  data() {
    return {
      active: 0,
    };
  },
  // 创建echarts的实例
  mounted() {
    // 获取疫情数据------------------------
    // 这个接口要收费了，暂时不用了
    /* api.chinaData().then((res) => {
      console.log("res", res.data);
    }); */

    // 使用自己封装的$myChart
    // 第二个参数是一个数据data, [{ name: "内蒙古", value: 200 }]，需要通过接口获取
    // 接口要收费了，写一个内蒙古的假数据吧
    // 这里读取数据会报错，所以用$nextTick()进行包裹
    this.$nextTick(() => {
      this.$myChart.chinaMap("nowMain", [{ name: "内蒙古", value: 200 }]);
      // this.$myChart.chinaMap("main");
    });

    // console.log(this);
  },
  methods: {
    /* getBar() {
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "Echarts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图案
      myChart.setOption(option);
    }, */
  },
};
</script>

<style lang="less" scoped>
.title {
  padding: 0.26rem;
  font-size: 0.31rem;
  font-weight: bold;
  background-color: #fff;
}
.title::before {
  content: "";
  display: inline-block;
  height: 0.4rem;
  vertical-align: middle;
  margin-right: 0.1rem;
  margin-top: -0.1rem;
  border-left: 0.1rem solid #4169e2;
}
#main {
  background-color: #f5f5f5;
}
</style>