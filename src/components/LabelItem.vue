<script setup>
// 类别标签  粉丝牌标签
const props = defineProps({
    title: {
        type: String,
        default: ' '
    }
})
const emits = defineEmits(['to'])
</script>

<template>
    
    <div>
        <!-- 类别标签 -->
        <div v-if="title == '王者荣耀'" 
        class="label" 
        @click="emits('to')"
        >
            <span> {{ title }} </span>
            <van-icon name="arrow" size="12px"></van-icon>
        </div>
        <!-- 粉丝牌标签 -->
        <div v-else class="label" style="color: #0066CC; background-color: #E6F2FF; ">
            <span>{{ title }}</span>
        </div>
    </div>

</template>

<style scoped>
.label{
    font-size: 14px;
    display: inline-block;
    background-color: #efefef;
    color: #666;
    padding: 2px 6px;
    border-radius: 12px;
    overflow: hidden;
}
</style>