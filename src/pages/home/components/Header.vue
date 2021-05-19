<template>
  <div class="header">
    <div class="btn--back">
      <i class="iconfont icon-back"></i>
    </div>
    <div class="input--search">
      <i class="iconfont icon-search"></i>
      <input type="search" placeholder="输入城市/景点/游玩主题">
    </div>
    <router-link to="/city">
      <div class="droplist">
        {{city}}<i class="iconfont icon-drop"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: {
      type: String,
      default: () => '北京'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.header {
  @include header;
  height: .43rem; // 设计稿是按 750px 设计的 86px ，是 iphone 6 的两倍
  display: flex;
  .btn--back {
    @include btn--back;
  }
  .input--search {
    @include input--search;
    flex: 1;
    padding: 0 0 0 .1rem;
  }
  .droplist {
    padding: 0 .1rem;
    min-width: .44rem; // 城市名称长度不固定
    max-width: 6em; // 但也不能太长
    @include ellipsis;
    text-align: center;
    .icon-drop {
      position: relative;
      top: -0.03rem; // 调整下垂直对齐的位置
      padding-left: .05rem;
      font-size: .12rem;
    }
  }
}
</style>
