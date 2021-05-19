<template>
  <div class="header">
    <router-link to="/">
      <div class="btn--back">
        <i class="iconfont icon-back"></i>
      </div>
    </router-link>
    <div class="header__title">城市选择</div>
    <div class="input--search">
      <i class="iconfont icon-search"></i>
      <input type="search" placeholder="输入城市名或拼音">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.header {
  @include header;
  position: relative;
  .btn--back {
    @include btn--back;
    position: absolute;
  }
  &__title {
    height: .43rem;
    text-align: center;
  }
  .input--search {
    @include input--search;
    input {
      text-align: center;
    }
  }
}
</style>
