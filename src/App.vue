<template>
  <div id="app">
    <!-- 使用 keep-alive 缓存组件，优化性能 -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
