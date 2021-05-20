<template>
  <!-- 使用 Better-scroll 插件完成滚动（主要是需要与字母表联动，不然普通滚动可用定位完成） -->
  <div class="container" ref="betterScrollContainer">
    <div class="better-scroll__wrapper">
      <div class="container__section">
        <h3 class="container__section__title border-topbottom">当前城市</h3>
        <ul class="container__section__list">
          <li class="container__section__list__item">
            <div class="button">{{this.currentCity}}</div>
          </li>
        </ul>
      </div>
      <div class="container__section">
        <h3 class="container__section__title border-topbottom">热门城市</h3>
        <ul class="container__section__list">
          <li
            class="container__section__list__item"
            v-for="hotCity in hotCities"
            :key="hotCity.id"
            @click="handleCityItemClick(hotCity.name)">
            <div class="button">{{hotCity.name}}</div>
          </li>
        </ul>
      </div>
      <div
        class="container__section"
        v-for="(list,character) in cities"
        :key="character"
        :ref="character">
        <!-- ref 绑定 character 的作用是与传入的 character 对比，然后通过 better-scroll 滚动到此元素 -->
        <h3 class="container__section__title border-topbottom">{{character}}</h3>
        <ul class="container__section__list cities__list--vertical">
          <li
            class="container__section__list__item border-bottom"
            v-for="city in list"
            :key="city.id"
            @click="handleCityItemClick(city.name)">{{city.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引入 Better-Scroll 完成与字母表的联动滚动
import BetterScroll from 'better-scroll'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'CityList',
  props: {
    character: {
      type: String,
      default: 'A'
    },
    hotCities: {
      type: Array,
      default: () => []
    },
    cities: {
      type: [Object, Array],
      default: () => {}
    }
  },
  updated () {
    // 实例化滚动插件
    this.betterScroll = new BetterScroll(this.$refs.betterScrollContainer)
  },
  // 监听 character 变化，然后滚动到 refs 中的 character 元素
  watch: {
    character () {
      const elem = this.$refs[this.character][0]
      this.betterScroll.refresh()
      this.betterScroll.scrollToElement(elem)
    }
  },
  computed: {
    // 使用 mapState
    ...mapState(['currentCity'])
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
  },
  deactivated () {
    this.betterScroll.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

// 首先调整分割线 .border 的样式，加深颜色
.border-bottom, .border-topbottom {
  &::before {
    border-color: #ccc;
  }
  &::after {
    border-color: #ccc;
  }
}

.container {
  // 给容器设置绝对定位，并固定大小，使 Better-Scroll 插件监听滚动生效
  position: absolute;
  // 顶部留出标题按钮和搜索框高度
  top: .87rem;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  &__section {
    &__title {
      @include section__title;
      line-height: .26rem;
      font-size: .13rem;
      color: #666;
    }
    &__list {
      @include reset--list;
      // 设置内边距，防止离屏幕边界太近，右边距设置为 0.3rem 为侧边字母栏空出位置
      padding: .05rem .3rem .05rem .05rem;
      display: flex;
      flex-flow: row wrap;
      &__item {
        width: 33.3%;
        // NOTE: 涉及到自适应容器的按钮，还是使用 div 代替 button 吧！ button 样式难以重置/设置
        .button {
          margin: .05rem;
          border: .01rem solid #ccc;
          border-radius: .03rem;
          padding: .05rem 0;
          text-align: center;
        }
      }
      // 具体详细城市列表
      &.cities__list--vertical {
        flex-flow: column nowrap;
        padding: 0;
        line-height: .38rem;
        text-indent: .1rem;
        .container__section__list__item {
          width: 100%;
        }
      }
    }
  }
}
</style>
