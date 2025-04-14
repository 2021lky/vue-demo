<script setup>
import { onBeforeUnmount, onMounted } from 'vue';
import { useLoadingStore } from '@/stores/index.js';

const store = useLoadingStore();

onMounted(() => {
  // beforeunload 是一个在浏览器中使用的事件，它会在窗口、文档或其资源即将被卸载（unload）之前触发
  // window.addEventListener('beforeunload', function() {
  //   console.log('销毁中...')
  // })
  // window.addEventListener('pagehide', function() {
  //   console.log('销毁中...')
  // })

})

</script>

<template>
  <router-view></router-view>
</template>
