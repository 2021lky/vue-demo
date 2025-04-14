<script setup>
import { ref } from 'vue'
import nav11 from '@/assets/images/IndexPage/nav-11.jpg'
import nav12 from '@/assets/images/IndexPage/nav-12.jpg'
import nav21 from '@/assets/images/IndexPage/nav-21.jpg'
import nav22 from '@/assets/images/IndexPage/nav-22.jpg'
import nav31 from '@/assets/images/IndexPage/nav-31.jpg'
import nav32 from '@/assets/images/IndexPage/nav-32.jpg'
import nav41 from '@/assets/images/IndexPage/nav-41.jpg'
import nav42 from '@/assets/images/IndexPage/nav-42.jpg'
import nav51 from '@/assets/images/IndexPage/nav-51.jpg'
import nav52 from '@/assets/images/IndexPage/nav-52.jpg'

const active = ref(0) // 默认选中第一个
</script>

<template>
    <router-view/>

    <van-tabbar route v-model="active" active-color="#FF5D23">
    <van-tabbar-item replace to="/index/commend">
        <span>推荐</span>
        <template #icon="props">
            <img 
            :src="props.active ? nav12 : nav11" 
            :style="{ transform: props.active ? 'scale(1.1)' : 'scale(1)' }"/>
        </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/index/funny">
        <span>娱乐</span>
        <template #icon="props">
            <img 
            :src="props.active ? nav22 : nav21" 
            :style="{ transform: props.active ? 'scale(1.1)' : 'scale(1)' }"/>
        </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/index/fishbar">
        <span>鱼吧</span>
        <template #icon="props">
            <img 
            :src="props.active ? nav32 : nav31" 
            :style="{ transform: props.active ? 'scale(1.1)' : 'scale(1)' }"/>
        </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/index/focus">
        <span>关注</span>
        <template #icon="props">
            <img 
            :src="props.active ? nav42 : nav41" 
            :style="{ transform: props.active ? 'scale(1.1)' : 'scale(1)' }"/>
        </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/index/develop">
        <span>发现</span>
        <template #icon="props">
            <img 
            :src="props.active ? nav52 : nav51" 
            :style="{ transform: props.active ? 'scale(1.1)' : 'scale(1)' }"/>
        </template>
    </van-tabbar-item>
    </van-tabbar>

</template>

<style scoped>

</style>