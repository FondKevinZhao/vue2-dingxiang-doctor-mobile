<template>
  <div class="num">
    <div class="content">
      <!-- <div class="title">截至2021-11-24 11:03:05全国数据统计</div> -->
      <div class="title">截至{{ getDayJs }}全国数据统计</div>
      <ul class="wrap">
        <li>
          <span>较昨日-8850</span>
          <div class="bold">
            {{ formatNum(covData.currentConfirmedCount + "") }}
          </div>
          <strong>现存确诊</strong>
        </li>
        <li>
          <span>较昨日-96</span>
          <div class="bold">{{ formatNum(covData.suspectedCount + "") }}</div>
          <strong>境外输入</strong>
        </li>
        <li>
          <span>较昨日-7720</span>
          <div class="bold">{{ formatNum(covData.seriousCount + "") }}</div>
          <strong>现存无症状</strong>
        </li>
        <li>
          <span>较昨日-580</span>
          <div class="bold">{{ formatNum(covData.confirmedCount + "") }}</div>
          <strong>累计确证</strong>
        </li>
        <li>
          <span>较昨日-87</span>
          <div class="bold">{{ formatNum(covData.deadCount + "") }}</div>
          <strong>累计死亡</strong>
        </li>
        <li>
          <span>较昨日-380</span>
          <div class="bold">{{ formatNum(covData.curedCount + "") }}</div>
          <strong>累计治愈</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    covData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getDayJs() {
      return dayjs(this.covData.modifyTime).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  methods: {
    formatNum(str) {
      var newStr = "";
      var count = 0;

      if (str.indexOf(".") == -1) {
        for (var i = str.length - 1; i >= 0; i--) {
          if (count % 3 == 0 && count != 0) {
            newStr = str.charAt(i) + "," + newStr;
          } else {
            newStr = str.charAt(i) + newStr;
          }
          count++;
        }
        str = newStr + ".00"; //自动补小数点后两位
      } else {
        for (var i = str.indexOf(".") - 1; i >= 0; i--) {
          if (count % 3 == 0 && count != 0) {
            newStr = str.charAt(i) + "," + newStr;
          } else {
            newStr = str.charAt(i) + newStr; //逐个字符相接起来
          }
          count++;
        }
        str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
      }
      return str;
    },
  },
};
</script>

<style lang="less" scoped>
.num {
  margin-top: 0.3rem;
  background-color: #fff;
  .content {
    min-height: 2rem;
    padding: 0.3rem;
    border-radius: 0.2rem 0.2rem 0 0;
    .title {
      color: #666;
      margin-bottom: 0.2rem;
    }
  }
  .wrap {
    display: flex;
    flex-wrap: wrap;
    padding-top: 0.2rem;
    border-radius: 0.08rem;
    box-shadow: 0 0 5px 1px rgba(194, 192, 192, 0.4);
    // justify-content: space-between;
    li {
      width: 33.33333%;
      text-align: center;
      margin-bottom: 0.2rem;
      color: #666;
      strong {
        color: #333;
      }
    }
    .bold {
      font-weight: bold;
    }
    // li:nth-child()
    li:nth-child(1) .bold {
      color: rgb(247, 76, 49);
    }
    li:nth-child(2) .bold {
      color: rgb(247, 130, 7);
    }
    li:nth-child(3) .bold {
      color: rgb(162, 90, 78);
    }
    li:nth-child(4) .bold {
      color: rgb(174, 33, 44);
    }
    li:nth-child(5) .bold {
      color: rgb(93, 112, 146);
    }
    li:nth-child(6) .bold {
      color: rgb(40, 183, 163);
    }
  }
}
</style>