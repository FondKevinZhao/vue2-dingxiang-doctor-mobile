/**
 * 所有的请求接口的方法
 */

// 引入axios
import axios from 'axios';
// 引入接口地址文件
import base from './base';

// 请求方法
const api = {
  /**
   * 病毒信息获取
   *  axios.get(base.host + base.covInfo); 这句话的意思就是：
   *  http://api.tianapi.com/ncov/index?key=41c02053fe4ba2f27f646b4a6428a5a6
   */
  getCovInfo() {
    return axios.get(base.host + base.covInfo);
  },

  /**
   * 获取国内疫情
   */
  chinaData() {
    return axios.get(base.baseUrl + base.chinaData);
  },

  /**
   * 轮播数据接口
   */
  getSwiperBanner() {
    return axios.get(base.swiperBanner);
  },

  /**
   * 疫情出行政策接口
   */
  getTravel() {
    return axios.get(base.travel);
  },

  /**
   * 疫情出行根据关键字点击搜索获取详情
   * axios 中get传参
   *  1. ?a=1&b=2
   *  2. {params:{a:1, b:2}}
   */
  getTravelQuery(params) {
    return axios.get(base.travelQuery, {
      params
    })
  },

  /**
   * 360城市选择接口
   */
  getSelectCity() {
    return axios.get(base.selectCity);
  }
}
export default api;