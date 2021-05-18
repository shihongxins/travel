<template>
  <div class="header">
    <div class="btn-back">
      <i class="iconfont icon-back"></i>
    </div>
    <div class="input-search">
      <i class="iconfont icon-search"></i>
      <input type="search" placeholder="输入城市/景点/游玩主题">
    </div>
    <div class="droplist">
      城市<i class="iconfont icon-drop"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.header {
  line-height: .43rem; // 设计稿是按 750px 设计的 86px ，是 iphone 6 的两倍
  color: #fff;
  background: $bgcolor-main;
  display: flex;
  .btn-back {
    width: .3rem;
    text-align: center;
    .icon-back {
      font-size: .23rem;
      vertical-align: middle;
    }
  }
  .input-search {
    flex: 1;
    padding: 0 0 0 .1rem;
    position: relative;
    .icon-search {
      position: absolute;
      top: .01rem;
      left: 1em;
      color: #ccc;
    }
    input {
      @include input-reset;
      padding: 0 1em 0 2em;
      height: .32rem;
      line-height: .32rem;
      vertical-align: middle;
      color: #ccc;
      background: #fff;
      border-radius: .05rem;
    }
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
