const { resolve } = require('path')

module.exports = async function fullPageModule (moduleOptions) {
  const options = Object.assign({
    animate: false
  }, moduleOptions)

  this.options.css.unshift('fullpage-vue/src/fullpage.css')
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    ssr: false,
    options
  })
}

module.exports.meta = require('../package.json')
