<template>
  <div>
    <div class="home">
      <!-- 1. 疫情图片 -->
      <div class="nav-pic">
        <img src="../../assets/images/1.jpg" width="100%" alt="" />
        <router-link class="select-city" to="/select-city">{{
          city
        }}</router-link>
      </div>
      <!-- 2. 病毒信息 -->
      <CovInfo :newslist="newslist"></CovInfo>

      <!-- 3. 疫情小导航 -->
      <div class="list">
        <div class="oneDollar">
          <router-link to="/area">
            <img src="../../assets/images/1.png" alt="" />
            <div>风险地区</div>
          </router-link>
        </div>
        <div class="check">
          <router-link to="/hesuan">
            <img src="../../assets/images/2.png" alt="" />
            <div>核算检测</div>
          </router-link>
        </div>
        <div class="goods">
          <router-link to="/prevention">
            <img src="../../assets/images/3.png" alt="" />
            <div>防疫物资</div>
          </router-link>
        </div>
        <div class="policy">
          <router-link to="/travel">
            <img src="../../assets/images/4.png" alt="" />
            <div>出行政策</div>
          </router-link>
        </div>
      </div>

      <!-- 4. 数据统计 -->
      <CovNumber :covData="covData"></CovNumber>

      <!-- 5. 地图展示 -->
      <ChinaMap></ChinaMap>

      <!-- 6. 轮播 -->
      <VueSwiper></VueSwiper>
    </div>
  </div>
</template>

<script>
/**
  currentConfirmedCount 现存确诊
  suspectedCount  新增境外输入人数
  seriousCount  现存无症状人数
  confirmedCount  累计确诊
  deadCount   累计死亡人数
  curedCount    累计治愈人数

  modifyTime    截至的时间
*/

import CovInfo from "./CovInfo/CovInfo.vue";
import CovNumber from "./CovInfo/CovNumber.vue";
import ChinaMap from "./VueEcharts/ChinaMap.vue";
import api from "../../api/index";
import VueSwiper from "./VueSwiper/VueSwiper.vue";
export default {
  name: "Home",
  components: { CovInfo, CovNumber, ChinaMap, VueSwiper },
  data() {
    return {
      newslist: [],
      covData: {}, // 全国数据统计
      city: localStorage.getItem("city") + "疫情" || "北京疫情", // 选择城市
    };
  },
  mounted() {
    // 请求病毒接口
    api.getCovInfo().then((res) => {
      this.newslist = res.data.newslist[0].news;
      // console.log(res.data.newslist[0]);

      // 全国疫情的数据统计信息
      let data = res.data.newslist[0].desc;
      this.covData = {
        currentConfirmedCount: data.currentConfirmedCount,
        suspectedCount: data.suspectedCount,
        seriousCount: data.seriousCount,
        confirmedCount: data.confirmedCount,
        deadCount: data.deadCount,
        curedCount: data.curedCount,
        modifyTime: data.modifyTime,
      };
      // console.log("covData", this.covData);
    });
  },
};
</script>
<style lang="less" scoped>
/* .box {
  width: 200px;
  height: 200px;
} */
.list {
  // border: 1px solid red;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  height: 1.5rem;
  padding: 0 0.24rem;
  div img {
    width: 0.8rem;
    margin-left: 0.14rem;
  }
}

.nav-pic {
  position: relative;
  .select-city {
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.24rem;
    padding: 0.15rem 0.4rem;
    margin: 0.1rem 0.1rem 0 0;
    color: #fff;
    background-color: rgba(0, 0, 249, 0.38);
    border: 0.005rem solid hsla(0, 0%, 100%, 0.38);
    border-radius: 0.12rem;
  }
}
</style>