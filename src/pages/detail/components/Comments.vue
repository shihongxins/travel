<template>
  <div class="comments">
    <h2 class="comments__title">用户评论</h2>
    <div
      class="comment border-bottom"
      v-for="comment in commentList"
      :key="comment.id">
      <div class="comment__info">
        <div class="comment__info__rate">{{comment.star}}</div>
        <div class="comment__info__date">{{comment.date}}</div>
      </div>
      <p class="comment__content">{{comment.content}}</p>
      <div class="comment__imgs__container">
        <div
          class="comment__img__wrapper"
          v-for="(url,index) in comment.imgUrl"
          :key="index">
          <img :src="url" alt="" class="comment__img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailComments',
  props: {
    commentList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";

.comments {
  &__title {
    @include section__title;
    font-size: initial;
  }
  .comment {
    padding: .05rem .1rem .1rem;
    // 评分信息
    &__info {
      height: .3rem;
      line-height: .3rem;
      display: flex;
      justify-content: space-between;
      &__rate {
        color: #ffb436;
      }
      &__date {
        font-size: .12rem;
      }
    }
    // 评论内容
    &__content {
      line-height: .22rem;
    }
    // 评论图片区域
    &__imgs__container {
      padding-bottom: 50%;
      width: 100%;
      height: 0;
      overflow: hidden;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }
    // 图片容器
    &__img__wrapper {
      margin-bottom: .1rem;
      padding-bottom: 23%;
      width: 31%;
      height: 0;
      overflow: hidden;
    }
    &__img {
      width: 100%;
    }
  }
}
</style>
