module.exports = {
  modules: {
    auto: true, // 只为.module.[css-ext]结尾的样式文件应用css-module
    localIdentName: '[local]__[hash:base64:8]', // 添加原始类名
  },
}
