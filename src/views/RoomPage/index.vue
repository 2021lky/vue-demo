<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { requestChat, requestGift } from '@/api/room.js'
const active = ref(0);
const route = useRoute()
console.log(route.query)

const getChatList = () => {
    
}
</script>

<template>
    <div class="room">
        <video width="100%"
        src="/Users/kangyanli/Documents/VUEDemo/dy_vue_demo/src/assets/movie.mp4"
        autoplay
        loop
        muted
        playsinline
        controlslist="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        :controls="false"
        class="no-controls"/>

        <van-tabs v-model:active="active">
        <van-tab title="聊天">
            <div class="chat">
                
            </div>

            <div class="sendMsg">

            </div>
        </van-tab>
        <van-tab title="动态">
            该功能暂未开发
        </van-tab>
        </van-tabs>

    </div>

</template>
<style scoped>
.room{
    height: 100vh;
}

.no-controls {
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
}


</style>