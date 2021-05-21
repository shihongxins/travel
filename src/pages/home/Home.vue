<template>
  <div class="home">
    <HomeHeader />
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
import { mapState } from 'vuex'
import { getHomeData } from '../../api/index'

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
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['currentCity'])
  },
  methods: {
    // 定义初始化数据的方法
    loadHomeData () {
      // 发送请求获取数据
      getHomeData(this.currentCity).then((data) => {
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      })
    }
  },
  mounted () {
    // 在 mounted 已挂载生命周期钩子时，调用初始化数据的方法，发送请求
    this.loadHomeData()
    // 保存当前的 city
    this.lastCity = this.currentCity
  },
  // keep-alive 组件激活此组件时，判断上一次的 city 是否和当前的相同，不同就发送新请求加载新数据
  activated () {
    if (this.lastCity !== this.currentCity) {
      this.lastCity = this.currentCity
      this.loadHomeData()
    }
  }
}
</script>

<style scoped>

</style>
