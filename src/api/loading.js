import request from '@/utils/request.js'
import { api } from '@/utils/configs.js'

export const requestNavList = () => {
    return request.get(api.nav)
}

export const requestSwiperPic = () => request.get(api.swiper)

export const requestLiveData = (page) => request.get(api.liveData, {page})
