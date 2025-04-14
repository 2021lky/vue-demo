module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: 375, // 设计稿宽度
            unitPrecision: 5, // 视口单位的小数位数
            propList: ['*'], // 要转换的属性列表，设置为 '*' 表示转换所有属性
            viewportUnit: 'vw',
            fontViewportUnit: 'vw', // 字体使用的视口单位
            selectorBlackList: [], // 不进行转换的选择器列表
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: undefined,
            include: undefined,
            landscape: false
        }
    }
};