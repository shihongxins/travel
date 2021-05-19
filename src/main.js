// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 2.引入 normalize.css
import 'normalize.css'

// 3.引入移动端 1px border.css 样式
import 'styles/border.css'

// 4.引入 fastclick 解决移动端某些机型点击事件 300ms 问题
import fastclick from 'fastclick'

// 5.安装 sass 与 sass-loader@7 ，并编写 base.scss 引入，重置 html 根字体大小为 100 px 方便适配计算
import 'styles/base.scss'

// 安装 vue-awesome-swiper@2.6.7 插件，实现首页轮播效果 https://github.com/surmon-china/vue-awesome-swiper/tree/v2.6.7
// 此插件 @2.6.7 版本基于 Swiper 3 https://3.swiper.com.cn/api/index.html
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
Vue.use(VueAwesomeSwiper)

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 将 vuex store 传入根实例
  components: { App },
  template: '<App/>'
})
