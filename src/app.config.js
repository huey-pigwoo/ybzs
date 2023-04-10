// eslint-disable-next-line no-undef
export default defineAppConfig({
  pages: [
    'pages/index/index',
    // 'pages/test/test',
    'pages/about/about',
    // 'pages/index/index',
    'pages/list/list',
    'pages/detail/detail'
  ],
  navigationStyle: 'custom',
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    // navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
