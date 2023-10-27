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
    color: '#8a8a8a',
    selectedColor: '#1296db',
    list: [{
      pagePath: 'pages/index/index',
      text: '首页',
      iconPath: './asset/imgs/icon/home-icon.png',
      selectedIconPath: './asset/imgs/icon/home-selected-icon.png',

    }, {
      pagePath: 'pages/category/index',
      text: '分类',
      iconPath: './asset/imgs/icon/category-icon.png',
      selectedIconPath: './asset/imgs/icon/category-selected-icon.png',
    }, {
      pagePath: 'pages/shoppingCart/index',
      text: '购物车',
      iconPath: './asset/imgs/icon/shop-cart-icon.png',
      selectedIconPath: './asset/imgs/icon/shop-cart-selected-icon.png',
    }, {
      pagePath: 'pages/myCenter/index',
      text: '个人中心',
      iconPath: './asset/imgs/icon/my-center-icon.png',
      selectedIconPath: './asset/imgs/icon/my-center-selected-icon.png',
    }]
  }
})
