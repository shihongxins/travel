<template>
  <div class="recommend">
    <h2 class="recommend__title">热销推荐</h2>
    <ul class="recommend__list">
      <li
        class="recommend__item border-bottom"
        v-for="recommend in recommendList"
        :key="recommend.id">
        <img
          class="recommend__item__img"
          :src="recommend.imgUrl"
          :alt="recommend.title">
        <div class="recommend__item__info">
          <h3 class="recommend__item__title">{{recommend.title}}</h3>
          <p class="recommend__item__desc">{{recommend.desc}}</p>
          <button class="recommend__item__detail__btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://qdywxs.github.io/travel-images/recommendList01.jpg',
        title: '故宫',
        desc: '东方宫殿建筑代表，世界宫殿建筑典范'
      }, {
        id: '0002',
        imgUrl: 'https://qdywxs.github.io/travel-images/recommendList02.jpg',
        title: '南山滑雪场',
        desc: '北京专业级滑雪圣地'
      }, {
        id: '0003',
        imgUrl: 'https://qdywxs.github.io/travel-images/recommendList03.jpg',
        title: '天安门广场',
        desc: '我爱北京天安门，天安门上太阳升'
      }, {
        id: '0004',
        imgUrl: 'https://qdywxs.github.io/travel-images/recommendList04.jpg',
        title: '水立方',
        desc: '中国的荣耀，阳光下的晶莹水滴'
      }, {
        id: '0005',
        imgUrl: 'https://qdywxs.github.io/travel-images/recommendList05.jpg',
        title: '温都水城养生馆',
        desc: '各种亚热带植物掩映其间，仿佛置身热带雨林'
      }]
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
    margin: 0;
    line-height: .4rem;
    font-size: .14rem;
    font-weight: normal;
    text-indent: .1rem;
    background: #eee;
  }
  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
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
