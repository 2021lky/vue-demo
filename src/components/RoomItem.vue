<script setup>
import labelItem from '@/components/LabelItem.vue'
import { id2Cate } from '@/utils/configs.js'
import huomiao from '@/assets/images/huomiao.png'
const props = defineProps({
    value: {
        type: Object
    }
})
const toClass = () =>{
    console.log("去往类别")
}
</script>
<template>
<div class="item">
    <!-- <video width="100%" height="100px" 
    src="/Users/kangyanli/Documents/VUEDemo/dy_vue_demo/src/assets/movie.mp4"
    autoplay
    loop
    muted
    playsinline
    controlslist="nodownload nofullscreen noremoteplayback"
    disablePictureInPicture
    :controls="false"
    class="no-controls">
    </video> -->
    <img :src="value.roomSrc" style="width: 100%; height: 120px; object-fit: cover;">
    <div class="user">
        <span>{{ value.nickname }}</span>
        <span style="display: flex; align-items: center;"> 
            <img :src="huomiao">
            <span> {{ value.hn }}</span>
        </span>
    </div>
    <van-text-ellipsis :content="value.roomName" />
    <div class = 'labellist'>
        <labelItem :title="id2Cate[value.cate2Id]" @to="toClass"></labelItem>
    </div>
</div>
</template>

<style scoped>
.item{
    border-radius: 4px;
    overflow: hidden;
    background-color: #fff;
    position: relative;
    height: inherit;
    width: inherit;
    /* 关闭vedio中的播放设置 */
    /* .no-controls {
        pointer-events: none;
    }
    .no-controls::-webkit-media-controls {
        display: none !important;
    }
    .no-controls::-webkit-media-controls-timeline {
        display: none;
    }
    .no-controls::-webkit-media-controls-toggle-closed-captions-button {
        display: none;
    } */

    .labellist {
        padding: 2px 6px;
        font-size: 16px;
    }
}

.item:deep(.van-text-ellipsis){
    font-size: 16px;
    color: #444;
    width: 100%;
    padding: 0 6px;
}

.user{
    margin-top: -22px;
    background-color: transparent;
    font-size: 14px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    img{
        height: 14px;
        width: 14px;
    }
}
</style>