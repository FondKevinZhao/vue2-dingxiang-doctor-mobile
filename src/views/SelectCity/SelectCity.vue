<template>
  <div class="SelectCity">
    <h2 class="title">城市选择</h2>
    <!-- 
      属性：
        index-list	索引字符列表	string[] | number[] 默认值：A-Z
        index	索引字符	number | string

        van-cell身上有一个 click 事件，点击单元格的时候会触发
     -->
    <van-index-bar :index-list="indexList">
      <!-- 遍历对象 -->
      <template v-for="(item, key) in citylistObj">
        <van-index-anchor :index="key" :key="key" />
        <!-- 遍历数组 -->
        <van-cell
          :title="ele.name"
          v-for="ele in item"
          :key="ele.id"
          @click="tiao"
        />
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import api from "../../api/index";
export default {
  data() {
    return {
      indexList: [], // 自定义索引
      citylistObj: {}, // 城市列表，大对象
    };
  },
  created() {
    api.getSelectCity().then((res) => {
      // console.log(res.data.result.citylist);
      this.citylistObj = res.data.result.citylist;
      // 通过Object.keys(obj) 获取所有的键名，得到一个含键名的数组[]
      // console.log(Object.keys(this.citylistObj));
      this.indexList = Object.keys(this.citylistObj);
    });
  },
  methods: {
    tiao(e) {
      // e.currentTarget.innerText 能拿到当前点击的城市名称
      // console.log("tiao", e.currentTarget.innerText);
      // 传数据：本地存储
      localStorage.setItem("city", e.currentTarget.innerText);
      // 跳转首页 并把获取的城市名称传递给首页
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped>
.SelectCity {
  background-color: #f5f5f5;
  .title {
    padding: 0.2rem;
  }
}
</style>