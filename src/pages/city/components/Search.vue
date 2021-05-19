<template>
  <div class="search">
    <div class="input--search">
      <i class="iconfont icon-search"></i>
      <input
        type="search"
        placeholder="输入城市名或拼音"
        v-model="keywords">
    </div>
    <!-- 有关键字才展示搜索结果 -->
    <div
      class="search__result"
      v-show="keywords.length">
      <ul class="search__result__container">
        <li
          class="search__result__item border-bottom"
          v-for="city in result"
          :key="city.id"
          @click="handleCityItemClick(city.name)">{{city.name}}</li>
        <!-- 关键字没有搜索到时提醒信息 -->
        <li
          class="search__result__item border-bottom"
          v-show="result.length === 0">没有匹配的城市数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: {
      type: [Object, Array],
      default: () => []
    }
  },
  data () {
    return {
      keywords: '',
      timer: null,
      result: []
    }
  },
  watch: {
    keywords () {
      // 关键字为空，清空搜索结果，直接返回
      if (this.keywords.length === 0) {
        this.result = []
        return
      }
      // 防抖
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        let tempRes = []
        for (const i in this.cities) {
          const list = this.cities[i]
          if (list) {
            list.forEach((city) => {
              if (city && city.id && (city.spell.indexOf(this.keywords) > -1 || city.name.indexOf(this.keywords) > -1)) {
                tempRes.push(city)
              }
            })
          }
        }
        this.result = tempRes
      }, 30)
    }
  },
  methods: {
    ...mapMutations(['changeCurrentCity']),
    handleCityItemClick (city) {
      // 更新 vuex state 不含异步操作，直接提交，不用 dispatch 分发给 action
      // this.$store.commit('changeCurrentCity', city)
      // 使用 mapMutations
      this.changeCurrentCity(city)
      // 更新完后转到首页
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.search {
  // 没有内容时与 header 类似
  @include header;
  .input--search {
    @include input--search;
    input {
      text-align: center;
    }
  }
  // 搜索结果绝对定位脱离父元素
  &__result {
    position: absolute;
    // 顶部留出标题按钮和搜索框高度
    top: .87rem;
    right: 0;
    bottom: 0;
    left: 0;
    // 在 List.vue 的前面
    z-index: 1;
    overflow: hidden;
    background: #eee;
    &__container {
      @include reset--list;
      // 搜索结果容器要能够溢出时滚动（教程说要用 better-scroll 插件，但我觉得原生两行就能搞定）
      height: 100%;
      overflow-y: auto;
    }
    &__item {
      line-height: .3rem;
      text-indent: .1rem;
      color: #666;
      background: #fff;
    }
  }
}
</style>
