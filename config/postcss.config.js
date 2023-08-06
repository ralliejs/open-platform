const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const nesting = require('tailwindcss/nesting')
const cssnano = require('cssnano')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    nesting(),
    tailwindcss(path.resolve(__dirname, '../tailwind.config.js')),
    autoprefixer({
      overrideBrowserslist: ['last 2 versions', '>1%', 'ios 7'],
    }),
  ].concat(isProduction ? [cssnano()] : []),
}
