<template>
  <div class="recommend">
    <h2 class="recommend__title">热销推荐</h2>
    <ul class="recommend__list">
      <router-link
        class="recommend__item border-bottom"
        v-for="recommend in recommendList"
        :key="recommend.id"
        tag="li"
        :to="`/detail/${recommend.id}`">
        <img
          class="recommend__item__img"
          :src="recommend.imgUrl"
          :alt="recommend.title">
        <div class="recommend__item__info">
          <h3 class="recommend__item__title">{{recommend.title}}</h3>
          <p class="recommend__item__desc">{{recommend.desc}}</p>
          <button class="recommend__item__detail__btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.recommend {
  // 与图标区域的间隙
  margin-top: .1rem;
  &__title {
    @include section__title;
  }
  &__list {
    @include reset--list;
  }
  &__item {
    height: .85rem;
    overflow: hidden;
    display: flex;
    &__img {
      padding: .05rem;
      // 固定大小图片不需要 padding-bottom 占位
      width: .75rem;
      height: .75rem;
    }
    &__info {
      flex: 1;
      padding: .05rem;
      // NOTE: 弹性布局，宽度自适应的情况下，子元素的文本溢出不生效，是因为它默认 width: auto 。
      // 要保持弹性的情况下给子元素溢出提供一个可参考的宽度可设置 min-width: 0 ，覆盖 width: auto
      min-width: 0;
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
    &__detail__btn {
      margin-top: .08rem;
      padding: 0 .1rem;
      border: none;
      border-radius: .03rem;
      line-height: .22rem;
      color: #fff;
      background: #ff9300;
    }
  }
}
</style>
