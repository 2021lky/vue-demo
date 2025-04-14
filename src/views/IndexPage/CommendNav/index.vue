<script setup>
/**
 * 实现上拉刷新，下拉加载
 */
import { ref } from 'vue'
import navlist from './navlist.vue'
import roomItem from '@/components/RoomItem.vue'
import { useLoadingStore } from '@/stores/index.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const loadingStore = useLoadingStore();

const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const navActive = ref(0)
const searchValue = ref('')

const onRefresh = () => {  // 上拉刷新
    finished.value = false;
    loadingStore.setLiveData([])
    loadingStore.setCurrentPage(0)
    // 将 loading 设置为 true，表示处于加载状态
    loading.value = true;
    onLoad();
}

// 下拉多次触发load事件的原因，是因为共享一个currentPage参数，getLiveData设置了锁，所以加锁会返回空
// 返回空，视图是没有变化的，再次下拉又会触发，所以表现为load多次才得到数据
const onLoad = async () => {  // 下拉加载
    loading.value = false;
    if (refreshing.value){
        refreshing.value = false
    }
    const res = await loadingStore.getLiveData()
    if(!res){
        finished.value = true;
    }
}
const classAll = () => {
    console.log("跳转到全部分类页面")
}

const toRoom = (value) => {
    router.push({
        path: '/room',
        query: value
    })
}
</script>

<template>
    <div class="commend">
        <van-pull-refresh  v-model="refreshing" @refresh="onRefresh" success-text="刷新成功">
            <!-- 分类列 -->
            <navlist :value="loadingStore.navList" v-model:active="navActive" @toall="classAll"></navlist>
            <!-- 搜索列  -->
            <van-search class='search' v-model="searchValue" shape="round" placeholder="请输入搜索关键词" />
            <!-- 轮播图 -->
            <van-swipe class="custom-swipe" :autoplay="3000" indicator-color="white" lazy-render>
                <van-swipe-item v-for="item in loadingStore.swiperPic" :key="item">
                    <img :src="item" style="width: 100%; height: 100%;">
                </van-swipe-item>
            </van-swipe>

            <!-- 实时列表 -->
            <van-list
                v-model:loading="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                class='livedata-list'
                v-if="loadingStore.liveData.length > 0"
            >
                <!-- 数据变多的时候，采用可视窗口，解决dom节点爆炸的问题 -->
                <van-grid :column-num="2" :border="false">
                    <van-grid-item v-for="value in loadingStore.liveData" :key="value">
                        <roomItem :value="value" @click="toRoom(value)"></roomItem> 
                    </van-grid-item>
                </van-grid>
            </van-list>
            <van-loading size="24px" v-else>加载中...</van-loading>
        </van-pull-refresh>
    </div>
</template>

<style scoped>
.commend {
    background-color: #fafafa;
    padding: 2px 8px 50px 8px;
    .custom-swipe{
        height: calc(100vh / 3.5);
        background-color: blue;
        margin-bottom: 8px;
        border-radius: 4px;
        overflow: hidden;
    }
    .custom-swipe:deep(.van-swipe__indicators){
        position: absolute;
        right: 14px;
        bottom: 16px;
        left: auto; /* 覆盖默认的居中定位 */
        transform: none; /* 清除默认的居中变换 */
        justify-content: flex-end; /* 右对齐指示点 */
    }
    .livedata-list{
        margin: -4px -4px !important;
    }
    .livedata-list:deep(.van-grid-item__content){
        padding: 4px;
        background-color: inherit;
    }
    .search{
        margin-bottom: 4px;
    }
}

.commend:deep(.van-search){
    padding: 0;
    background-color: inherit;
}
.commend:deep(.van-search__content){
    background-color: #f5f5f5;
}

</style>
