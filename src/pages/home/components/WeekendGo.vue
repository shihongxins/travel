<template>
  <div class="weekendgo">
    <h2 class="weekendgo__title">周末去哪儿</h2>
    <ul class="weekendgo__list">
      <li
        class="weekendgo__item border-bottom"
        v-for="weekendgo in weekendList"
        :key="weekendgo.id">
        <!-- 与 Recommend 不同，此处非固定图片大小，而是根据屏幕自适应宽高比，因此需要一个容器 -->
        <div class="weekendgo__item__img__wrapper">
          <img
            class="weekendgo__item__img"
            :src="weekendgo.imgUrl"
            :alt="weekendgo.title">
        </div>
        <div class="weekendgo__item__info">
          <h3 class="weekendgo__item__title">{{weekendgo.title}}</h3>
          <p class="weekendgo__item__desc">{{weekendgo.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekendGo',
  props: {
    weekendList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.weekendgo {
  // 与图标区域的间隙
  margin-top: .1rem;
  &__title {
    @include section__title;
  }
  &__list {
    @include reset--list;
  }
  &__item {
    // 非固定大小图片，自适应屏幕大小的固定宽高比图片，需要用 padding-bottom 占位
    &__img__wrapper {
      padding-bottom: 38%;
      width: 100%;
      height: 0;
    }
    &__img {
      width: 100%;
    }
    &__info {
      padding: .05rem;
    }
    &__title {
      margin: 0;
      line-height: .26rem;
      font-size: .16rem;
      font-weight: normal;
      @include ellipsis;
    }
    &__desc {
      margin: 0;
      line-height: .2rem;
      color: #ccc;
      @include ellipsis;
    }
  }
}
</style>
