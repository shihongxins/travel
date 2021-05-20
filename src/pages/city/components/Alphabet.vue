<template>
  <ul class="city__alphabet" ref="alphabetElem">
    <li
      class="character"
      v-for="character in cityAlphabet"
      :key="character"
      @click="handleCharacterClick"
      @touchstart.prevent="handleAlphabetTouchstart"
      @touchmove="handleAlphabetTouchmove"
      @touchend="handleAlphabetTouchend">{{character}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchEventData: {
        touchStatus: false,
        touchId: null,
        offsetTop: 0,
        clientY: 0,
        timer: null
      }
    }
  },
  props: {
    cities: {
      type: [Object, Array],
      default: () => {}
    }
  },
  computed: {
    cityAlphabet () {
      return Object.keys(this.cities)
    }
  },
  updated () {
    // A 据屏幕顶部的距离 = A 距容器的距离 + A的容器距屏幕的距离
    this.touchEventData.offsetTop = this.$refs.alphabetElem.children[0].offsetTop + this.$refs.alphabetElem.offsetTop
  },
  methods: {
    handleCharacterClick (e) {
      const target = e.target || e.srcElement
      this.$emit('alphabetChange', target.innerText.toUpperCase())
    },
    handleAlphabetTouchstart (e) {
      if (this.touchEventData.touchStatus === false && this.touchEventData.touchId === null) {
        this.touchEventData.touchStatus = true
        this.touchEventData.touchId = e.touches[0].identifier
      }
    },
    handleAlphabetTouchmove (e) {
      if (e.touches[0].identifier === this.touchEventData.touchId) {
        // 防抖
        if (this.touchEventData.timer) {
          clearTimeout(this.touchEventData.timer)
        }
        this.touchEventData.timer = setTimeout(() => {
          // 终点为触摸点据屏幕顶部的距离
          this.touchEventData.clientY = e.touches[0].clientY
          const alphabet = Object.keys(this.cities)
          // 距离 = 终点 - A 据屏幕顶部的距离
          const distance = (this.touchEventData.clientY - this.touchEventData.offsetTop)
          // 判断下标
          const index = Math.floor(distance / 20)
          // 获取字符
          const character = alphabet[index]
          // console.log(length, index, character)
          // 如果存在该字符（没有越界）
          if (character) {
            // 向外触发字符改变事件
            this.$emit('alphabetChange', character)
          }
        }, 30)
      }
    },
    handleAlphabetTouchend (e) {
      this.touchEventData.touchStatus = false
      this.touchEventData.touchId = null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.city__alphabet {
  @include reset--list;
  position: absolute;
  top: .87rem;
  right: 0;
  bottom: 0;
  width: .2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  .character {
    line-height: .2rem;
    text-align: center;
    text-transform: uppercase;
    color: $bgcolor--main;
  }
}
</style>
