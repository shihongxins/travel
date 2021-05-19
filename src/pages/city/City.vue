<template>
  <div class="city">
    <CityHeader />
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
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
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
    getCitiesData () {
      axios.get('/api/city.json')
        .then((responce) => {
          if (responce && responce.data) {
            this.getCitiesDataSuccess(responce.data)
          } else {
            throw new Error('加载城市数据失败！' + responce.request.responseText)
          }
        })
    },
    getCitiesDataSuccess (res) {
      if (res && res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleAlphabetChange (character) {
      if (character) {
        this.character = character
      }
    }
  },
  mounted () {
    this.getCitiesData()
  }
}
</script>

<style lang="scss" scoped>

</style>
