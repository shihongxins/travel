<template>
  <div class="detail">
    <DetailHeader />
    <DetailBanner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :galleryImgs="galleryImgs" />
    <DetailTickets :tickets="tickets" />
    <DetailComments :commentList="commentList" />
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailTickets from './components/Tickets'
import DetailComments from './components/Comments'
import { getDetailData } from '../../api/index'

export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner,
    DetailTickets,
    DetailComments
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      tickets: [],
      commentList: []
    }
  },
  methods: {
    // 定义初始化数据的方法
    loadDetailData () {
      // 发送请求获取数据
      getDetailData(this.$route.params.id).then((data) => {
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
        this.tickets = data.tickets
        this.commentList = data.commentList
      })
    }
  },
  mounted () {
    // 在 mounted 已挂载生命周期钩子时，调用初始化数据的方法，发送请求
    this.loadDetailData()
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: 200vh;
}
</style>
