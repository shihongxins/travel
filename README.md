# travel

> 基于 Vue 2 开发的 仿去哪网 移动端项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 项目地址
Github: [https://github.com/shihongxins/travel](https://github.com/shihongxins/travel) .
预览地址: [https://shihongxins.github.io/travel/](https://shihongxins.github.io/travel/) .

## 1.5 移动端首要的 4 件事

### 1.5.1 禁用缩放
给单页面应用的首页模板 index.html 设置禁止手动缩放
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```
当然如果后续使用 rem + 自适应像素比 可用 js 动态调整此参数。

### 1.5.2 统一样式 Reset.css/ Normalize.css
通过引入 Reset.css 或 Normalize.css 重置浏览器样式，或设置统一默认样式（推荐使用 Normalize.css）。

### 1.5.3 `border-width:1px` 问题
由于移动端“超视网膜屏”的普及，分辨率远远高于普通PC，普通 PC 上的 1px 对应的 1 物理像素，在移动端多倍分辨率屏幕上 1px 对应多倍的物理像素。<br />通过对 **border.css** 的引用，声明了一系列的 1px border 类名。<br />实现原理：
- `transform:scale` 缩放特性；

### 1.5.4 用 fastclick 解决移动端 click 300ms 延迟问题
在移动端中， click 点击事件会有 300ms 的延迟响应问题，造成体验不佳。通过安装使用 fastclick 插件，解决此问题。
- 首先项目中下载插件： `npm install -S fastclick` 
- 接着在应用入口文件 **/src/main.js** 中引入插件，并绑定到 body 上
```javascript
// /src/main.js
// ...
import fastclick from "fastclick";
// ...
fastclick.attach(document.body);
// ...
```

# 2 安装 CSS 预编译器

## 2.1 使用 stylus CSS 预编译器
```shell
npm i -D stylus stylus-loader
```

## 2.2 使用 scss CSS 预编译器
```shell
npm i -D sass sass-loader@7
```

重启项目<br />如果打印警告 `{ parser: "babylon" } is deprecated; we now treat it as { parser: "babel" }.` ，是由于 prettier 版本导致的，安装指定版本的 prettier 即可 `npm i -D prettier@~1.12.0` 。

## 2.3 初始化样式
- 下载使用的字体图标 _/src/assets/styles/iconfont/_ 中
- 此项目使用 rem 单位布局，因此可以再 _/src/assets/styles/_ 下新建 _base.scss_ 文件，里面设置
```css
html {
  font-size: 100px;
}
body {
  font-size: .14rem;
}
a {
  color: inherit;
  text-decoration: none;
}
// 引入字体图标
@import url('./iconfont/iconfont.css');
```
方便适配计算，最后再入口文件 _/src/main.js_ 中引入此文件即可。
- 同样要在 _/src/main.js_ 中引入 border.css 文件设置边框
- 最后在 _/src/assets/styles/_ 下建立其他的 SASS 文件方便使用，如常用公共变量 variables.scss , 常用公共代码块 mixins.scss 等。

# 3 路径别名配置 alias

-  vue-cli@2 通过修改 _/build/webpack.base.conf.js_ 文件中的 `alias` 字段，修改 webpack 中的路径别名
```javascript
// vue-cli@2 /build/webpack.base.conf.js
...
module.exports = {
  ...
  resolve: {
    ...
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles': path.resolve(__dirname, '../src/assets/styles')
    }
  }
}
```

- vue-cli@^3 及以上通过创建根目录的 _/vue.config.js_ 文件中的 `alias` 字段，修改 webpack 路径别名
```javascript
// vue-cli@^3 /vue.config.js
const path = require("path");  //引入path

module.exports = {
  // 配置 webpack
  chainWebpack: config => {
    config.resolve.alias
      .set('style', path.resolve(__dirname, './src/assets/style/'))
      .set('views', path.resolve(__dirname, './src/view/'))
      .set('components', path.resolve(__dirname, './src/components/'))
  }
}
```
路径别名配置好后**需要重启服务**，然后可像使用 `@` 代替 `/src` 一样，使用别名代替完整路径（**注意别名再非 Javascript 代码中使用时需要加上前缀 **`~`** 表明是个模块资源**）。

# 4 配置请求拦截模拟网络请求数据

- 在 _/static/_ 下新建 _/static/mock/home.json_ 文件，里面保存首页的模拟数据；
- 安装 axios 插件 `npm i -S axios` ，然后再首页中引入此插件；
- 修改 _/config/index.js_ 中的 `proxyTable` 选项，实现发送请求前拦截请求，转发到指定目标并配置地址
```javascript
    proxyTable: {
      // 模拟请求数据的地址拦截转发配置
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    },
```
注意 proxyTable 配置只能用于开发环境，编译后的正式环境并不能通过此参数跨域，请尝试封装 axios 实例，或其他代理方式。

# 5 经验记录

## 5.1 低网速下非固定大小的自适应图片加载抖动问题
低网速情况下，自适应图片一点一点的加载，渲染时也是从上往下一点一点的渲染，可能出现，图片后续文字先占据了未加载完成的图片的位置，等图片一点点加载出现时，内容文字的位置不断向下移动，导致内容抖动的情况。
解决办法：给图片包裹容器，然后设置容器的高度为 0 ，实际高度由 `padding-bottom` 撑开，撑开的高度由图片的高宽比决定。如一张图片大小 1500*388 。则代码为
```css
/* scss */
.img-warpper {
  height: 0;
  padding-bottom: percentage(388/1500);
  overflow: hidden;
  .img {
    width: 100%;
  }
}
```

## 5.2 深度作用选择器
vue的单文件组件中，通常给样式标签 `<style>` 添加 `scoped` 属性，使其单文件组件中的样式产生“组件作用域”不会影响其他组件的样式。 原理是，通过 `scoped` 属性，在编译时该组件生成一个 `data-v-[hash:8]` 的字符串并应用给使用到样式的 DOM 元素，使得样式规则的选择器被编译后也得带有此 `attr` 才能生效。<br />
问题：对于多组件共用的公共组件，如果需要对细微的样式进行调整带来不便。<br />
解决：
- 公共组件不使用 `scoped` 属性（不推荐，可能影响全局）
- 公共组件对于可能修改的部分再编写一段 `<style>` 且不使用 `scoped` （vue 支持多段样式标签）
- 使用 vue 提供的深度作用选择器对公共组件的样式进行微调
   - 普通 css 编写的样式使用方法 `.curr_parent >>> .pub__scop`
   - 对于 scss 等预处理器编写的样式使用 `.curr__parent /deep/ .pub__scop` 或者 `.curr__parent ::v-deep .pub__scop`
      - vue 3 提示 `::v-deep` 建议改为 `:deep()` 形式。

## 5.3 弹性容器宽度自适应时如何设置文本溢出显示省略号
弹性布局，宽度自适应的情况下，**子元素**的文本溢出不生效，是因为它默认 `width: auto` 。要保持弹性的情况下**给子元素**溢出提供一个可参考的宽度可设置 `min-width: 0` ，覆盖 `width: auto` 。
```css
/* SCSS */
.container {
  display: flex;
  .wrapper_1 {
    width: 60px;
  }
  .wrapper_2 {
    flex: 1; //宽度自适应
    min-width: 0; // 给子元素提供一个宽度参考，使其溢出显示省略号生效
    .child {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
```

## 5.4 swiper 3 异步加载数据时的问题

### 5.4.1 异步加载数据后，轮播图显示从最后一张图片开始
解决办法：<br />给 swiper 的设置项中设置 `observer: true,  observeParents: true,` 两个属性，让其监听容器的变化，在容器状态改变时自动更新一下 swiper 。

### 5.4.2 异步数据加载后，轮播图分页显示不正常
```javascript
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        /**
         * NOTE: 一下配置均是为了解决，swiper3 异步加载数据，轮播图片更新了，分页器没有更新
         * 设置 abserver,observeParents 后也只是在下一轮更新
         * 最终通过回调函数 onSlideChangeStart 再每次切换图片后执行一次 update 解决
         * https://github.com/surmon-china/vue-awesome-swiper/issues/237
         * https://3.swiper.com.cn/api/function/2015/0308/257.html
         */
        observer: true,
        observeParents: true,
        onSlideChangeEnd (swiper) {
          swiper.update()
        }
      }
```

## 5.5 按钮标签 button 还是 div ?
涉及到自适应容器的按钮，还是使用 `div` 代替 `button` 吧！ `button` 样式难以重置/设置！

## 5.6 滚动到某一元素？（字母表）
可给每个字母表章节标题设置 `ref` 属性，然后再实例中通过 `$refs` 找到此章节标题元素，然后安装 Better-Scroll 插件，使用其滚动到指定元素的方法。

## 5.7 组件间数据共享
使用 Vuex 实现组件间数据共享，还可以通过 localStorage 实现数据持久化（注意某些浏览器可能不支持，或用户开启了**隐身模式**，要设置异常捕获，即使不能持久化数据，也不能使程序异常停止）。
## 5.8 缓存失活组件 keep-alive
通过 keep-alive 组件可将失活的页面组件缓存，而不是销毁。由此在切换时分别产生两个额外的生命周期钩子   `activated` 激活与 `deactivated` 失活。

## 5.9 性能优化

- 页面组件在 Vue-router 中使用异步加载的方式；
- 监听 `touchmove` 事件，注意使用防抖节约性能；
