<template>
  <div class="city">
    <CityHeader />
    <CitySearch :cities="cities" />
    <CityList
      :character="character"
      :hotCities="hotCities"
      :cities="cities" />
    <CityAlphabet
      :cities="cities"
      @alphabetChange="handleAlphabetChange" />
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import { getCitiesData } from '../../api/index'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      character: '',
      hotCities: [],
      cities: []
    }
  },
  methods: {
    // 定义初始化数据的方法
    loadCitiesData () {
      // 发送请求获取数据
      getCitiesData().then((data) => {
        this.hotCities = data.hotCities
        this.cities = data.cities
      })
    },
    handleAlphabetChange (character) {
      if (character) {
        this.character = character
      }
    }
  },
  mounted () {
    // 在 mounted 已挂载生命周期钩子时，调用初始化数据的方法，发送请求
    this.loadCitiesData()
  }
}
</script>

<style lang="scss" scoped>

</style>
