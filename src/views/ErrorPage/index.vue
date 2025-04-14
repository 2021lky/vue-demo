<script setup>
import router from '@/routers/index.js'
const toHome = () => {
    router.push('/')
}

</script>

<template>
    <div> 请点击 <a href='' @click="toHome">这里</a>跳转到首页</div>
</template>