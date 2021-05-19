<template>
  <div class="icons">
    <swiper
      :options="swiperOption"
      v-if="showSwiper">
      <swiper-slide
        v-for="(icons,page) in iconPages"
        :key="page">
        <div
          class="icon__item"
          v-for="icon in icons"
          :key="icon.id">
          <div class="icon__img__wrapper">
            <img
              class="icon__img"
              :src="icon.imgUrl"
              :alt="icon.desc">
          </div>
          <p class="icon__desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 0 // 禁止自动轮播
      }
    }
  },
  props: {
    iconList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    iconPages () {
      const data = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!data[page]) { data[page] = [] }
        data[page].push(item)
      })
      return data
    },
    showSwiper () {
      return this.iconList.length
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.icons {
  // 增加与轮播的间隙
  margin-top: .05rem;
  // 图片区域撑开防抖动，区域的高为屏幕的宽的 1/2
  padding-bottom: 50%;
  height: 0;
  overflow: hidden;
  .icon__item {
    // 图标的高为图片区域容器宽的 1/4 (正好显示两行)
    padding-bottom: 25%;
    // 图标的宽为图片区域容器的 1/4 (一行四个)
    width: 25%;
    height: 0;
    overflow: hidden;
    /**
    NOTE: 不给 .icons 设置 flex 布局，而让图标 .icon__item 浮动的原因是：
        .icon__item 不是 .icons 的直接子元素，而是包裹了 swiper 的，
        因此 flex 得设置再 swiper 上或者另外包一层 DOM 给 .icon__item ，
        这显然不便，不如直接浮动
    */
    float: left;
    position: relative;
    .icon__img__wrapper {
      // NOTE: 不要吝啬给图片包裹容器，它能更好的帮助图标定位
      position: absolute;
      top: 0;
      right: 0;
      bottom: .22rem;
      left: 0;
      padding: .05rem; // 增加图标间的间隙
      .icon__img {
        display: block;
        margin: auto;
        height: 100%; // 图标充满小容器
      }
    }
    .icon__desc {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      margin: 0;
      padding: 0 .1rem;
      height: .22rem;
      line-height: .22rem;
      text-align: center;
      color: $textcolor-main;
      // 防止图标描述溢出
      @include ellipsis;
    }
  }
}
// 最后设置当图标较少时，轮播区域范围仍然不变要是整个 icons 区域，而不是由图标数量决定轮播高度
.icons >>> .swiper-container {
  padding-bottom: 50%;
  width: 100%;
  height: 0;
}
</style>
