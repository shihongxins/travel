<template>
  <div class="container">
    <div class="container__section">
      <h3 class="container__section__title border-topbottom">当前城市</h3>
      <ul class="container__section__list">
        <li class="container__section__list__item">
          <div class="button">北京</div>
        </li>
      </ul>
    </div>
    <div class="container__section">
      <h3 class="container__section__title border-topbottom">热门城市</h3>
      <ul class="container__section__list">
        <li class="container__section__list__item">
          <div class="button">北京</div>
        </li>
        <li class="container__section__list__item">
          <div class="button">上海</div>
        </li>
        <li class="container__section__list__item">
          <div class="button">广州</div>
        </li>
        <li class="container__section__list__item">
          <div class="button">深圳</div>
        </li>
        <li class="container__section__list__item">
          <div class="button">成都</div>
        </li>
        <li class="container__section__list__item">
          <div class="button">重庆</div>
        </li>
      </ul>
    </div>
    <div class="container__section">
      <h3 class="container__section__title border-topbottom">A</h3>
      <ul class="container__section__list citys__list--vertical">
        <li class="container__section__list__item border-bottom">阿拉善</li>
        <li class="container__section__list__item border-bottom">阿拉善</li>
        <li class="container__section__list__item border-bottom">阿拉善</li>
        <li class="container__section__list__item border-bottom">阿拉善</li>
        <li class="container__section__list__item border-bottom">阿拉善</li>
        <li class="container__section__list__item border-bottom">阿拉善</li>
      </ul>
    </div>
    <div class="container__section">
      <h3 class="container__section__title border-topbottom">A</h3>
      <ul class="container__section__list citys__list--vertical">
        <li class="container__section__list__item border-bottom">阿拉善</li>
        <li class="container__section__list__item border-bottom">阿拉善</li>
        <li class="container__section__list__item border-bottom">阿拉善</li>
        <li class="container__section__list__item border-bottom">阿拉善</li>
        <li class="container__section__list__item border-bottom">阿拉善</li>
        <li class="container__section__list__item border-bottom">阿拉善</li>
      </ul>
    </div>
    <div class="container__section">
      <h3 class="container__section__title border-topbottom">A</h3>
      <ul class="container__section__list citys__list--vertical">
        <li class="container__section__list__item border-bottom">阿拉善</li>
        <li class="container__section__list__item border-bottom">阿拉善</li>
        <li class="container__section__list__item border-bottom">阿拉善</li>
        <li class="container__section__list__item border-bottom">阿拉善</li>
        <li class="container__section__list__item border-bottom">阿拉善</li>
        <li class="container__section__list__item border-bottom">阿拉善</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

// 首先调整分割线 .border 的样式，加深颜色
.border-bottom, .border-topbottom {
  &::before {
    border-color: #ccc;
  }
  &::after {
    border-color: #ccc;
  }
}

.container {
  &__section {
    &__title {
      @include section__title;
      line-height: .26rem;
      font-size: .13rem;
      color: #666;
    }
    &__list {
      @include reset--list;
      // 设置内边距，防止离屏幕边界太近，右边距设置为 0.3rem 为侧边字母栏空出位置
      padding: .05rem .3rem .05rem .05rem;
      display: flex;
      flex-flow: row wrap;
      &__item {
        width: 33.3%;
        // NOTE: 涉及到自适应容器的按钮，还是使用 div 代替 button 吧！ button 样式难以重置/设置
        .button {
          margin: .05rem;
          border: .01rem solid #ccc;
          border-radius: .03rem;
          padding: .05rem 0;
          text-align: center;
        }
      }
      // 具体详细城市列表
      &.citys__list--vertical {
        flex-flow: column nowrap;
        padding: 0;
        line-height: .38rem;
        text-indent: .1rem;
        .container__section__list__item {
          width: 100%;
        }
      }
    }
  }
}
</style>
