/**
 * 公共的请求的接口
 */

const base = {
  host: 'http://api.tianapi.com', // 来自于天行数据 --- 疫情病毒
  covInfo: '/ncov/index?key=41c02053fe4ba2f27f646b4a6428a5a6', // base + covInfo 就是天行的病毒信息

  // 地图接口
  baseUrl: 'https://yupn.api.storeapi.net', // 挖数据网的接口---疫情接口
  chinaData: '/api/94/219?format=json&appid=6938&sign=687569b1fd450f3491cd6e72f82aacf7', // 国内疫情的接口

  // 轮播接口 --- get
  swiperBanner: 'http://iwenwiki.com/wapicovid19/ncovimg.php',

  // 疫情出行政策 --- get  --- 这个接口会跨域
  // travel: 'https://apis.juhe.cn/springTravel/citys?key=171e165a7d991c5f6ecd5194c54778ef'
  travel: '/api/springTravel/citys?key=674d6ec65afc51339176339dc899e16e',

  // 疫情出行根据关键字点击搜索获取详情 --- get  --- 这个接口会跨域
  // /api/springTravel/query?key=&from=10191&to=10349'
  travelQuery: '/api/springTravel/query?key=674d6ec65afc51339176339dc899e16e', // from 和 to动态传入


  // 360城市选择接口 --- get --- 会跨域
  // https://bang.360.cn/aj/getcitycode
  selectCity: '/foo/aj/getcitycode',

}
export default base;