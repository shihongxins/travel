<template>
  <div class="swiper-container">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide
        v-for="img in swiperList"
        :key="img.id">
        <img
          class="swiper-img"
          :src="img.imgUrl"
        />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      // 初始化轮播配置对象
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      },
      swiperList: [
        {
          /* 4️⃣-①：在 data 中，定义一个 swiperList 数组（模拟数据， 数组里有四个对象，每个对象包含一个 id 和一个图片地址）； */
          id: '0001',
          imgUrl: 'https://qdywxs.github.io/travel-images/swiperList01.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://qdywxs.github.io/travel-images/swiperList02.jpg'
        },
        {
          id: '0003',
          imgUrl: 'https://qdywxs.github.io/travel-images/swiperList03.jpg'
        },
        {
          id: '0004',
          imgUrl: 'https://qdywxs.github.io/travel-images/swiperList04.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// 设置轮播图容器样式（主要设置宽高比，防止图片加载时抖动，不直接写死宽高的原因是本项目要自适应）
.swiper-container {
  padding-bottom: percentage(
    200/640
  ); // 容器高度由 padding-bottom 撑开（按图片宽高比自适应屏幕大小），防止图片加载时抖动
  width: 100%;
  height: 0;
  overflow: hidden;
  background: #eee;
  .swiper-img {
    width: 100%; // 图片充满整个容器
  }
}
// Vue深度作用选择器修改公共组件中的 scoped 的样式
.swiper-container >>> .swiper-pagination-bullet {
  background: #ccc;
  &-active {
    background: #eee;
  }
}
</style>
