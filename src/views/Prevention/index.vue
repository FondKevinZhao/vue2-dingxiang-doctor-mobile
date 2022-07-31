<template>
  <div class="wuzi">
    <!-- 顶部logo -->
    <img width="100%" src="../../assets/images/wuzi.png" alt="" />

    <!-- 物资内容 -->
    <div class="wrapper">
      <van-tabs v-model="active" animated>
        <van-tab v-for="item in arr" :title="item.title" :key="item.title">
          <img src="100%" :src="item.img" alt="" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// 要先导入图片，才能在data中使用。直接在data中使用的话，拿不到。
import img1 from "../../assets/images/jiujing.png";
import img2 from "../../assets/images/kouzhao.png";

export default {
  data() {
    return {
      active: 0,
      arr: [
        { img: img1, title: "消毒剂" },
        { img: img2, title: "口罩" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 99.5%;
  height: 100%;
  img {
    width: 100%;
  }
}

/deep/.van-tab {
  color: #333;
  background-color: #eee;
}
</style>