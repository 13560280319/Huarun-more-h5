module.exports = {
  plugins: {
    autoprefixer: {}, // autoprefixer 配置方式 1，使用外部 .browserslistrc 文件中的数据
    // autoprefixer: {
    //   overrideBrowserslist: ['> 1%', 'last 2 versions'] // 似乎必须配置，autoprefixer 才生效
    // }, // autoprefixer 配置方式 2，使用自身属性 overrideBrowserslist 的值
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      mediaQuery: true
    }
  }
}
