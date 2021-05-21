<template>
  <div class="banner__container">
    <div class="banner" @click="handleToggleShowGallery(true)">
      <img
        class="banner__img"
        :src="bannerImg"
        :alt="sightName" >
      <div class="banner__info">
        <h3 class="banner__info__title">{{sightName}}</h3>
        <div class="banner__info__count">
          <i class="iconfont icon-image"></i> {{galleryImgs.length}}
        </div>
      </div>
    </div>
    <AnimationFade>
      <Gallery
        v-show="showGallery"
        :imgs="galleryImgs"
        @close="handleToggleShowGallery(false)" />
    </AnimationFade>
  </div>
</template>

<script>
import AnimationFade from 'components/animations/fade/Fade.vue'
import Gallery from 'components/gallery/Gallery.vue'

export default {
  name: 'DetailBanner',
  components: {
    AnimationFade,
    Gallery
  },
  props: {
    sightName: {
      type: String,
      default: ''
    },
    bannerImg: {
      type: String,
      default: ''
    },
    galleryImgs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    defferScroll (e) {
      e.preventDefault()
    },
    handleToggleShowGallery (show) {
      this.showGallery = show
      if (show) {
        window.addEventListener('wheel', this.defferScroll, {passive: false})
        window.addEventListener('touchmove', this.defferScroll, {passive: false})
      } else {
        window.removeEventListener('wheel', this.defferScroll, {passive: false})
        window.removeEventListener('touchmove', this.defferScroll, {passive: false})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.banner {
  padding-bottom: 55%;
  width: 100%;
  height: 0;
  overflow: hidden;
  background: #eee;
  position: relative;
  &__img {
    width: 100%;
  }
  &__info {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    line-height: .3rem;
    color: #fff;
    background-image: linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,.8));
    display: flex;
    &__title {
      @include reset--box;
      flex: 1;
      padding: 0 .1rem;
      font-size: .16rem;
      font-weight: normal;
    }
    &__count {
      margin-top: .07rem;
      border-radius: .2rem;
      padding: 0 .2rem;
      height: .16rem;
      line-height: .16rem;
      font-size: .12rem;
      background: rgba(0,0,0,.8);
      .icon-img {
        font-size: .24rem;
      }
    }
  }
}
</style>
