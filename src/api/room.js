import request from '@/utils/request.js'
import { api } from '@/utils/configs.js'

export const requestChat = () => request.get(api.chat)

export const requestGift = () => request.get(api.gift)