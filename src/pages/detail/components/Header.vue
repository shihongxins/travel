<template>
  <div class="header">
    <div class="header__min" v-if="headerStatus==='min'">
      <router-link to="/">
        <div class="btn--back">
          <i class="iconfont icon-back"></i>
        </div>
      </router-link>
    </div>
    <div
      class="header__fixed"
      v-if="headerStatus==='fixed'"
      :style="{opacity}">
      <router-link to="/">
        <div class="btn--back">
          <i class="iconfont icon-back"></i>
        </div>
      </router-link>
      <div class="header__title">景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      headerStatus: 'min',
      opacity: 0
    }
  },
  methods: {
    handleOnScroll () {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 50) {
        const opacity = scrollTop / 150
        this.opacity = opacity > 1 ? 1 : opacity
        this.headerStatus = 'fixed'
      } else {
        this.headerStatus = 'min'
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleOnScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleOnScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.header {
  &__min {
    position: fixed;
    top: .1rem;
    left: .1rem;
    z-index: 2;
    border-radius: 50%;
    width: .4rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    color: #fff;
    background: rgba(0, 0, 0, .8);
    .icon-back {
      font-size: .23rem;
    }
  }
  &__fixed {
    @include header;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    .btn--back {
      @include btn--back;
      position: absolute;
    }
    .header__title {
      height: .43rem;
      text-align: center;
    }
  }
}
</style>
