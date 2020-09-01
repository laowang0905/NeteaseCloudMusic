const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/theme.less')]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'network': '@/network',
        'components': '@/components',
        'views': '@/views',
        'utils': '@/utils'
      }
    }
  }
}
