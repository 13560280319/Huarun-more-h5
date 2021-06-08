module.exports = {
  plugins: {
    autoprefixer: {},
    // autoprefixer: {
    //   overrideBrowserslist: ['> 1%', 'last 2 versions']
    // },
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
