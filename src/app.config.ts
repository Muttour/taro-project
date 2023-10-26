export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/category/index',
    'pages/shoppingCart/index',
    'pages/myCenter/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [{
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      pagePath: 'pages/category/index',
      text: '分类'
    }, {
      pagePath: 'pages/shoppingCart/index',
      text: '购物车'
    }, {
      pagePath: 'pages/myCenter/index',
      text: '个人中心'
    }]
  }
})
