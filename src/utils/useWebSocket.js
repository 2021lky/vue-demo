// src/composables/useWebSocket.js
import { ref, onUnmounted } from 'vue'

export default function useWebSocket(url) {
    const socket = ref(null)  // WebSocket实例
    const message = ref(null)  // 服务器推送数据，最新接收的消息
    const isConnected = ref(false)  // 连接状态
    const reconnectAttempts = ref(0)  // 当前重连接次数
    const maxReconnectAttempts = 5  // 最大重连接次数
    var heartbeatInterval  // 定时器

    // 初始化连接
    const connect = () => {
        socket.value = new WebSocket(url)  //实例化WebSocket
        
        // 成功建立连接的回调函数
        socket.value.onopen = () => {
            isConnected.value = true
            reconnectAttempts.value = 0
            console.log('WebSocket connected')

            // 心跳检测
            heartbeatInterval = setInterval(() => {
                if (socket.value?.readyState === WebSocket.OPEN) {
                    socket.value.send(JSON.stringify({ type: 'ping' }))
                }
            }, 30000)
        }

        // 接收消息的回调函数
        socket.value.onmessage = (event) => {
            try {
                message.value = JSON.parse(event.data)
            } catch (e) {
                message.value = event.data
            }
        }
        // 连接关闭回调
        socket.value.onclose = () => {
            isConnected.value = false  // 标记断开链接
            // 实现连接断开后的自动重连机制，在限制次数后，按指数退避算法尝试重新连接
            if (reconnectAttempts.value < maxReconnectAttempts) {
                // 计算延迟时间，1000*2^reconnectAttempts, 但不超过30秒
                const delay = Math.min(1000 * 2 ** reconnectAttempts.value, 30000)
                setTimeout(() => {
                    reconnectAttempts.value++
                    console.log(`Reconnecting... (attempt ${reconnectAttempts.value})`)
                    connect()  // 重新连接
                }, delay)
            }
        }
        // 错误处理回调
        socket.value.onerror = (error) => {
            console.error('WebSocket error:', error)
        }
  }

    // 发送消息
    const send = (data) => {
        if (socket.value?.readyState === WebSocket.OPEN) {  // 只在连接状态下建立连接
            const payload = typeof data === 'string' ? data : JSON.stringify(data)
            socket.value.send(payload)
        } else {
            console.warn('WebSocket is not connected')
        }
    }

    // 关闭连接
    const close = () => {
        clearInterval(heartbeatInterval)  // 清除定时器
        if (socket.value) {
            socket.value.close()  // 关闭websocket
        }
    }

    // 组件卸载时自动关闭
    onUnmounted(() => {
        close()
    })

    return {
        socket,
        message,
        isConnected,
        connect,
        send,
        close
    }
}