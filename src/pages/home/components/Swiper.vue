<template>
  <div class="carousel">
    <swiper
      ref="mySwiper"
      v-if="showSwiper"
      :options="swiperOption">
      <!-- slides -->
      <swiper-slide
        v-for="img in swiperList"
        :key="img.id">
        <img
          class="carousel-img"
          :src="img.imgUrl"
        />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      // 初始化轮播配置对象
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        /**
         * NOTE: 一下配置均是为了解决，swiper3 异步加载数据，轮播图片更新了，分页器没有更新
         * 设置 abserver,observeParents 后也只是在下一轮更新
         * 最终通过回调函数 onSlideChangeStart 再每次切换图片后执行一次 update 解决
         * https://github.com/surmon-china/vue-awesome-swiper/issues/237
         * https://3.swiper.com.cn/api/function/2015/0308/257.html
         */
        observer: true,
        observeParents: true,
        onSlideChangeEnd (swiper) {
          swiper.update()
        }
      }
    }
  },
  props: {
    swiperList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="scss" scoped>
// 设置轮播图容器样式（主要设置宽高比，防止图片加载时抖动，不直接写死宽高的原因是本项目要自适应）
.carousel {
  padding-bottom: percentage(
    200/640
  ); // 容器高度由 padding-bottom 撑开（按图片宽高比自适应屏幕大小），防止图片加载时抖动
  width: 100%;
  height: 0;
  overflow: hidden;
  background: #eee;
  .carousel-img {
    width: 100%; // 图片充满整个容器
  }
}
// Vue深度作用选择器修改公共组件中的 scoped 的样式
.carousel >>> .swiper-pagination-bullet {
  background: #ccc;
  &-active {
    background: #eee;
  }
}
</style>
