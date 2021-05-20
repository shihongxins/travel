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
import axios from 'axios'

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
    getDetailData () {
      axios.get('/api/detail.json?id=' + this.$route.params.id)
        .then((responce) => {
          if (responce && responce.data) {
            this.getDetailDataSuccess(responce.data)
          } else {
            throw new Error('加载城市数据失败！' + responce.request.responseText)
          }
        })
    },
    getDetailDataSuccess (res) {
      if (res && res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
        this.tickets = data.tickets
        this.commentList = data.commentList
      }
    }
  },
  mounted () {
    this.getDetailData()
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: 200vh;
}
</style>
