<script setup>
const emits = defineEmits(['onFinish'])
const onFinish = () => {
    emits('onFinish')  // 触发父组件的onFinish事件
}

const onChange = () => {
    
}
</script>

<template>
    <div class='countdown'> 
        <span> 跳过 </span>
        <van-count-down 
        time="3000"
        format="ss"
        @change = "onChange"
        @finish = "onFinish">
            <template #default="timeData">
                <span style="color: red; font-size: 16px"> {{ timeData.seconds }} </span>
            </template>
        </van-count-down>
    </div>
</template>

<style scoped>
.countdown {
    border-radius: 4px;
    background-color: #444;
    display: flex;
    flex-direction: row;
    padding: 8px;
    align-items: center;
    span {
        color: #fff;
        margin-right: 6px;
    }
}
</style>