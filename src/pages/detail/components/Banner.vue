<template>
  <div>
    <div class="banner" @click="handleToggleShowGallery(true)">
      <img class="banner__img" src="https://qdywxs.github.io/travel-images/detail-banner-img.jpg" alt="">
      <div class="banner__info">
        <h3 class="banner__info__title">故宫</h3>
        <div class="banner__info__count">
          <i class="iconfont icon-image"></i> {{'3'}}
        </div>
      </div>
    </div>
    <Gallery
      v-show="showGallery"
      :imgs="imgs"
      @close="handleToggleShowGallery(false)" />
  </div>
</template>

<script>
import Gallery from 'components/gallery/Gallery.vue'

export default {
  name: 'DetailBanner',
  components: {
    Gallery
  },
  data () {
    return {
      showGallery: false,
      imgs: [
        'https://qdywxs.github.io/travel-images/detail-gallary-img01.jpg',
        'https://qdywxs.github.io/travel-images/detail-gallary-img02.jpg']
    }
  },
  methods: {
    handleToggleShowGallery (show) {
      this.showGallery = show
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
