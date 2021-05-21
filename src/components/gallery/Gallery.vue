<template>
  <div class="gallery__container" @click="handleGalleryClick">
    <div class="gallery__wrapper">
      <swiper :options="swiperOption" v-if="imgs.length">
        <!-- slides -->
        <swiper-slide
          v-for="(url,index) in imgs"
          :key="index">
          <img
            class="gallery__img"
            :src="url"
          />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      // 初始化轮播配置对象
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true,
        autoplay: 0,
        observer: true,
        observeParents: true
        // NOTE: 与首页轮播 Swiper 不同，此处 Gallery 组件，本身就通过 v-show 切换显影，因此不需要重新更新分页 onSlideChangeEnd
      }
    }
  },
  props: {
    imgs: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery__container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  background: #000;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  // align-content: center;
  .gallery__wrapper {
    padding-bottom: 75%;
    width: 100%;
    height: 0;
    // overflow: hidden;
    .gallery__img {
      width: 100%;
    }
    .swiper-container {
      overflow: inherit;
      .swiper-pagination {
        bottom: -2em;
        color: #fff;
      }
    }
  }
}
</style>
