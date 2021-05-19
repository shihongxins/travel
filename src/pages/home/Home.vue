<template>
  <div class="home">
    <HomeHeader :city="city" />
    <HomeSwiper :swiperList="swiperList" />
    <HomeIcons :iconList="iconList" />
    <HomeRecommend :recommendList="recommendList" />
    <HomeWeekendGo :weekendList="weekendList" />
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekendGo from './components/WeekendGo'
// 引入 axios ，发送网络请求
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekendGo
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    // 定义获取首页数据的办法
    getHomeData () {
      // 向 api 地址请求数据，实际上会被 /config/index.js 中的 proxyTable 配置拦截转发到本地的模拟数据
      axios.get('/api/home.json')
        .then((responce) => {
          if (responce && responce.data) {
            this.getHomeDataSuccess(responce.data)
          } else {
            throw new Error('加载城市数据失败！' + responce.request.responseText)
          }
        })
    },
    // 获取数据成功
    getHomeDataSuccess (res) {
      if (res && res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    // 在 mounted 已挂载生命周期钩子时，调用获取数据的方法，发送请求
    this.getHomeData()
  }
}
</script>

<style scoped>

</style>
