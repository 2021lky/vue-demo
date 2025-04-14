<script setup>
    import CountDown from './CountDown.vue'
    import logo from '@/assets/images/SplashView/init_logo.webp'
    import icon from '@/assets/images/SplashView/init_icon.png'
    import router from '@/routers/index.js'
    import { useLoadingStore } from '@/stores/index.js'
    
    const loadingStore = useLoadingStore()

    const getNav= async () => {
        await loadingStore.getNavList()
    }
    const getSwiper = async () => {
        await loadingStore.getSwiperPic()
    }
    const getLive = async () => {
        await loadingStore.getLiveData()
    }
    const finish = () => {
        // console.log("跳转到首页")
        router.replace('/index')
    }
    getNav();
    getSwiper();
    getLive();
</script>

<template>
    <CountDown class="CountDown" @onFinish="finish"></CountDown>
    <div class="plash">
        <img :src="logo" alt="">
        <img :src="icon" alt="">
    </div>
</template>

<style scoped>
    .plash {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img:first-child{
            width: 300px;
            margin-bottom: 60px;
        }
        img:last-child{
            width: 90px;
        }
    }
    .CountDown {
        position: fixed;
        right: 20px;
        top: 20px;
    }
</style>