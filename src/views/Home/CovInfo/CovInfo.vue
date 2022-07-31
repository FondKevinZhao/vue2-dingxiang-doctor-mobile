<template>
  <div class="info">
    <div class="title">
      <img src="../../../assets/images/yiqingredian.png" alt="" />
    </div>
    <a href="#" class="latest" v-for="item in newslist" :key="item.id">
      <div class="latest-left">最新</div>
      <div class="content" ref="getText">{{ item.title }}</div>
      <div class="arrow-right">></div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    newslist: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped>
.info {
  background-color: #fff;
  padding: 0.2rem;
  .title {
    border-left: 0.1rem solid #4169e2;
    padding-left: 0.1rem;
    margin-bottom: 0.2rem;
    height: 20px;
    img {
      height: 24px;
      vertical-align: middle;
    }
  }
  p {
    line-height: 0.4rem;
    color: #666;
  }
  .latest {
    display: block;
    height: 26px;
    line-height: 26px;
    margin-bottom: 0.2rem;
    .latest-left {
      float: left;
      height: 0.3rem;
      line-height: 0.31rem;
      background-color: #f74c31;
      color: #fff;
      font-size: 0.11rem;
      border-radius: 3px;
      padding: 0 0.03rem;
      margin-top: 0.1rem;
    }
    .content {
      float: left;
      color: #1a1a1a;
      margin-left: 0.1rem;
    }
    .arrow-right {
      float: right;
      color: #ccc;
      font-weight: bold;
      font-size: 18px;
    }
  }
}
</style>