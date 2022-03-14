const autoprefixer = require('autoprefixer')
// const pxToViewport = require('postcss-px-to-viewport')

module.exports = {
  plugins: [
    autoprefixer({
      overrideBrowserslist: ['last 2 versions', '>1%', 'ios 7'],
    }),
    // pxToViewport({
    //   unitToConvert: 'px', // 要转化的单位
    //   viewportWidth: 1920, // UI设计稿的宽度
    //   unitPrecision: 6, // 转化后保留的小数位数
    //   viewportUnit: 'vw'
    // })
  ],
}
