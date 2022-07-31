<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in banner" :key="item.title">
        <img :src="item.image" width="100%" alt="" />
      </swiper-slide>
      <!-- swiper小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <!-- 轮播的图片按钮 --- 也得banner遍历才行 -->
    <ul class="list">
      <li
        v-for="(item, index) in banner"
        :key="item.title"
        :class="{ active: index === num }"
        @click="changeSwiper(index)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../../../api/index";
export default {
  data() {
    // 接收this，方便给slideChangeTransitionEnd里函数内的this.num，不然这个函数的this指向是swiper，而不是外部的data
    let that = this;
    return {
      // swiper配置内容
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // 自动播放
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 无缝轮播
        loop: true,
        // on 里面是用来放监听事件的
        on: {
          // 切换图片的时候触发
          slideChangeTransitionStart: function () {
            // console.log(this.activeIndex); // 因为是无缝轮播，那么会在前一个图片和最后一张图上多添加一张图，所以这个this.activeIndex需要进行处理一下，然后赋值给num
            // 轮播切换的时候，我们获取activeIndex，然后修改num同步切换高亮
            if (this.activeIndex === that.arr.length + 1) {
              that.num = 0;
            } else {
              that.num = this.activeIndex - 1;
            }
          },
        },
      },

      // 轮播的图片按钮数据
      arr: [1, 2, 3, 4, 5],
      num: 0,
      // 轮播图数据
      banner: [], //
    };
  },
  mounted() {
    api.getSwiperBanner().then((res) => {
      // console.log("res", res.data);
      this.banner = res.data.result;
      // console.log(this.banner);
    });
  },
  computed: {
    // 获取swiper实例对象
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    changeSwiper(index) {
      // 高亮选中
      this.num = index;
      // 点击按钮让swiper的索引跟着变
      // 参数一：图片下标的位置。参数二：时长，1000表示一秒钟后切换到index的位置
      this.swiper.slideTo(index + 1, 1000, false);
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  li {
    flex: 1;
    padding: 0.1rem;
    font-size: 0.24rem;
    line-height: 0.35rem;
    margin: 0.1rem;
    background: #eee;
    color: #d56355;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active {
    background-color: rgb(87, 87, 192);
    color: #fff;
  }
}
</style>