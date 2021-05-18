<template>
  <div class="weekendgo">
    <h2 class="weekendgo__title">周末去哪儿</h2>
    <ul class="weekendgo__list">
      <li
        class="weekendgo__item border-bottom"
        v-for="weekendgo in weekendgoList"
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
  data () {
    return {
      weekendgoList: [{
        id: '0001',
        imgUrl: 'https://qdywxs.github.io/travel-images/weekendList01.jpg',
        title: '北京温泉排行榜',
        desc: '细数北京温泉，温暖你的冬天'
      }, {
        id: '0002',
        imgUrl: 'https://qdywxs.github.io/travel-images/weekendList02.jpg',
        title: '北京必游TOP10',
        desc: '来北京必去的景点非这些地方莫属'
      }, {
        id: '0003',
        imgUrl: 'https://qdywxs.github.io/travel-images/weekendList03.jpg',
        title: '寻找北京的皇城范儿',
        desc: '数百年的宫廷庙宇，至今依旧威严霸气'
      }, {
        id: '0004',
        imgUrl: 'https://qdywxs.github.io/travel-images/weekendList04.jpg',
        title: '学生最爱的博物馆',
        desc: '周末干嘛？北京很多博物馆已经免费开放啦'
      }, {
        id: '0005',
        imgUrl: 'https://qdywxs.github.io/travel-images/weekendList05.jpg',
        title: '儿童剧场，孩子的乐园',
        desc: '带宝贝观看演出，近距离体验艺术的无穷魅力'
      }]
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
