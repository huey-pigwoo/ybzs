const { resolve } = require('path');

const config = {
  projectName: 'ybzsTaro',
  alias: {
    utils: resolve(__dirname,'../src/utils'),
    components: resolve(__dirname,'../src/components'),
    static: resolve(__dirname,'../src/static'),
    public: resolve(__dirname,'../src/public'),
    services: resolve(__dirname,'../src/services')
  },
  date: '2023-3-23',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    // [
    //   'import',
    //   {
    //     libraryName: 'ossaui',
    //     customName: (name) => `ossaui/lib/components/${name.replace(/^os-/, '')}`,
    //     customStyleName: (name) => `ossaui/dist/style/components/${name.replace(/^os-/, '')}.scss`,
    //   },
    //   'ossaui',
    // ],
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: {
      exclude: ['ossaui']
    }
  },
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    esnextModules: ['ossaui']
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      }
    }
  },
  weapp: {
    esnextModules: ['@reduxjs/toolkit'],
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
