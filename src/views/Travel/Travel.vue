<template>
  <div>
    <div class="title">疫情期间出行防疫政策</div>
    <!-- 
      van-field
        - v-model(value) 当前输入的值     number|string
        - label 输入框左侧文本
        - is-link 是否展示右侧箭头

      van-cascader
        - options 级联的数据格式，是一个数组
        - active-color 选中状态的高亮颜色
        - @finish 全部选择完毕之后触发 此方法接收三个参数{value, selectedOptions, tabIndex}
        - @close 点击关闭按钮之后触发

     -->
    <van-field
      v-model="goCity"
      is-link
      readonly
      label="出发城市"
      placeholder="请选择所在地区"
      @click="show = true"
    />
    <!-- 点击之后的弹出层 -->
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择出发城市"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>

    <!-- 第二个field -->
    <van-field
      v-model="toCity"
      is-link
      readonly
      label="到达城市"
      placeholder="请选择所在地区"
      @click="show2 = true"
    />
    <!-- 点击之后的弹出层 -->
    <van-popup v-model="show2" round position="bottom">
      <van-cascader
        v-model="cascaderValue2"
        title="请选择到达城市"
        :options="options"
        @close="show2 = false"
        @finish="toFinish"
      />
    </van-popup>

    <!-- 查询按钮 -->
    <div class="search">
      <van-button type="primary" size="large" @click="search"
        >查询疫情防疫</van-button
      >
    </div>

    <!-- 政策查询结果 -->
    <div class="content">
      <div v-if="from_info">
        <p style="font-size: 0.4rem; font-weight: bold">
          出发城市：{{ from_info.city_name }}
        </p>
        <p>健康描述：{{ from_info.health_code_desc }}</p>
        <p>二维码名称：{{ from_info.health_code_name }}</p>
        <p>请扫二维码</p>
        <div>
          <img width="100rem;" :src="from_info.health_code_picture" alt="" />
        </div>
      </div>

      <br /><br /><br />
      <div v-if="to_info">
        <p style="font-size: 0.4rem; font-weight: bold">
          到达城市：{{ to_info.city_name }}
        </p>
        <p>二维码名称：{{ to_info.health_code_name }}</p>
        <p>请扫二维码</p>
        <div>
          <img width="100rem;" :src="to_info.health_code_picture" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../api/index";
export default {
  data() {
    return {
      show: false, // 弹框状态 false隐藏，true显示
      show2: false, // 弹框状态 false隐藏，true显示
      goCity: "", // 出发的值
      toCity: "", // 到达的值
      cascaderValue: "",
      cascaderValue2: "",
      from: "", // 出发的id
      to: "", // 到达的id
      from_info: "",
      to_info: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [],
    };
  },
  created() {
    // 出行城市获取
    api.getTravel().then((res) => {
      let result = res.data.result;
      // 处理数据结构：[{text: '', value: '', children:[{}]}]
      let arr = []; // 外层数组 -- 一级区域
      result.forEach((item) => {
        let obj = {};
        obj.text = item.province; // 省份名称
        obj.value = item.province_id; // 省份的标识id
        obj.children = []; // 二级区域

        // 这次遍历是把citys的数据放到children数组中
        item.citys.forEach((ele) => {
          let child = {};
          child.text = ele.city;
          child.value = ele.city_id;
          // 追加给obj.children=[]
          obj.children.push(child);
        });

        // 把两层遍历后的数据给到arr外层数组
        arr.push(obj);
      });

      // 把处理好的数据，给data中的options
      this.options = arr;
    });
  },

  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ value, selectedOptions, tabIndex }) {
      this.from = value;
      this.show = false;
      this.goCity = selectedOptions.map((option) => option.text).join("/");
    },
    toFinish({ value, selectedOptions, tabIndex }) {
      this.to = value;
      this.show2 = false;
      this.toCity = selectedOptions.map((option) => option.text).join("/");
    },
    // 查询疫情
    search() {
      console.log("查询城市疫情", this.from, this.to);
      api.getTravelQuery({ from: this.from, to: this.to }).then((res) => {
        console.log(res.data);
        this.from_info = res.data.result.from_info;
        this.to_info = res.data.result.to_info;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  padding: 0.3rem;
  font-size: 0.5rem;
  font-weight: bold;
  text-align: center;
}
.search {
  margin: 0.3rem;
}
.content {
  padding-left: 0.3rem;
}
</style>