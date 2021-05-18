<template>
  <div class="home">
    <HomeHeader />
    <HomeSwiper />
    <HomeIcons />
    <HomeRecommend />
    <HomeWeekendGo />
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekendGo from './components/WeekendGo'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekendGo
  }
}
</script>

<style scoped>

</style>
