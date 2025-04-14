import { defineStore } from 'pinia'
import { ref } from 'vue'
import { requestNavList, requestSwiperPic, requestLiveData } from '@/api/loading.js'

export const useLoadingStore = defineStore('loading', () => {
    const navList = ref([])
    const swiperPic = ref([])
    const liveData = ref([])
    const currentPage = ref(0) // 处理多个请求可能会同时修改currentPage
    const totalPage = ref(6)
    let isFetching = false; // 新增锁变量

    const setLiveData = (data) => {
        liveData.value = data
    }
    const setCurrentPage = (data) => {
        currentPage.value = data
    }
    const getNavList = async () => {
        navList.value = await requestNavList();
    }
    const getSwiperPic = async () => {
        swiperPic.value = await requestSwiperPic()
    }
    const getLiveData = async () => {
        console.log(currentPage.value)
        if(isFetching)  return true
        if(currentPage.value >= totalPage.value) return false
        isFetching = true;
        try{
            const res = await requestLiveData(currentPage.value + 1)
            currentPage.value = currentPage.value + 1
            liveData.value.push(...res.list)
            console.log(res.list)
            return true
        }finally{
            isFetching = false;
        }
        
    }
    return {
        navList,
        swiperPic,
        liveData,
        currentPage,
        getLiveData,
        getNavList,
        getSwiperPic,
        setLiveData,
        setCurrentPage
    }
}, {
    persist: {
        storage: sessionStorage
    }
})