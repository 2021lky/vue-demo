<script setup>
// 1. 列表  2. 跳往全部分类的按钮
const props = defineProps({
    active: {
        type: Number,
        default: 0
    },
    value: {
        type: Array,
        default: () => []
    }
})
const emits = defineEmits(['update:active', 'toall'])

const handleClick = (index) => {
    emits('update:active', index);
}
const toAll = () => { 
    emits('toall');
}
</script>

<template>
    <!-- 列表 -->
    <div class='nlist'>
        <div class='navlist'>
            <div 
            v-for='(item, index) in value' 
            :key='item'
            @click="handleClick(index)" 
            :class="{ 'item-active': index == active, 'navlist-item': true }"> 
                {{ item }}
            </div>
        </div>
        <!-- 按钮 -->
        <van-icon class='iconfont fenlei' class-prefix='icon' name='fenlei' @click='toAll'/>
    </div>
    
</template>

<style scoped>
.nlist{
    display: flex;
    flex-direction: row;
    margin-left: -7px;
    background-color: inherit;
}
.navlist::-webkit-scrollbar{
    width: 0;
    height: 0;
    display: none;
}
.navlist{
    height: 25px;
    width: auto;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    white-space: nowrap;
    flex: 1;
    align-items: center;

    .navlist-item {
        display: flex;
        font-size: 18px;
        color: #999;
        margin-left: 8px;
        margin-right: 8px;
        cursor: pointer;
    }
    .item-active {
        transform: scale(1.1);
        color: #000;
        font-weight: bold;
    }
}

.fenlei {
    height: 25px;
    width: 25px;
    /* padding: 4px 0; */
    padding: 0;
    margin: 0;
    font-size: 24px;
    box-sizing: content-box;
}

</style>

