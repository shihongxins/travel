// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 2.引入 normalize.css
import 'normalize.css'

// 3.引入移动端 1px border.css 样式
import 'styles/border.css'

// 4.引入 fastclick 解决移动端某些机型点击事件 300ms 问题
import fastclick from 'fastclick'

// 5.安装 sass 与 sass-loader@7 ，并编写 base.scss 引入，重置 html 根字体大小为 100 px 方便适配计算
import 'styles/base.scss'

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
