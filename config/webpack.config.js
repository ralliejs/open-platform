const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const DotEnv = require('dotenv-webpack')

const postcssOptions = require('./postcss.config')
const lessOptions = require('./less.config')
const cssOptions = require('./css.config')

const styleLoaders = (useLess) => {
  const loaders = [
    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
    { loader: 'css-loader', options: cssOptions },
    { loader: 'postcss-loader', options: { postcssOptions } },
  ]
  if (useLess) {
    loaders.push({ loader: 'less-loader', options: { lessOptions } })
  }
  return loaders
}

// constants
const isProduction = process.env.NODE_ENV === 'production'
const appEnv = process.env.APP_ENV || 'dev'

const config = {
  entry: {
    main: './src/entry.tsx',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[contenthash:8].js',
    clean: true, // 取代cleanWebpackPlugin
  },
  devServer: {
    hot: true,
    open: ['/#/'],
    host: 'localhost',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.svg'],
    alias: {
      '@': path.resolve(__dirname, '../src/components'), // 组件目录别名
      '#': path.resolve(__dirname, '../src/views'), // 页面目录别名
      '~': path.resolve(__dirname, '../src'), // src根目录别名
    },
  },
  externals: {}, // 外部依赖库
  cache: {
    type: 'memory', // 开启构建缓存，如果开发机内存比较小可以改成filesystem
  },
  optimization: {
    // 只需要把chunks配置为all即可，默认的分包规则会把node_modules里面的内容单独分包
    splitChunks: {
      chunks: 'all',
    },
  },
  stats: {
    errorDetails: true, // 构建出错时打印详细的错误信息
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ProgressBarPlugin(),
    new DotEnv({
      path: path.resolve(__dirname, `../env/${appEnv}.env`),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
        use: { loader: 'ts-loader' }, // 后面项目滚得比较大之后再添加thread-loader
      },
      {
        test: /\.less$/i,
        use: styleLoaders(true),
      },
      {
        test: /\.css$/i,
        use: styleLoaders(false),
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg|gif)$/i, // 静态资源
        exclude: /\.react\.svg/i,
        type: 'asset',
      },
      {
        test: /\.react\.svg/i, // svg文件转react组件
        use: [{ loader: '@svgr/webpack' }],
      },
    ],
  },
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'
    config.plugins.push(
      new MiniCssExtractPlugin({
        // 生产环境下css文件单独打包
        filename: 'static/css/[name].[contenthash:8].css',
      }),
    )
  } else {
    config.mode = 'development'
  }
  return config
}
