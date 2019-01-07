//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    phone: 'anx',
    password: '123456'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  // 获取输入账号 
   phoneInput: function (e) {
     this.setData({
        phone: e.detail.value
     })
   },

  // 获取输入密码 
   passwordInput: function (e) {
     this.setData({
        password: e.detail.value
     })
   },

  // 登录 
   login: function () {
     if (this.data.phone.length == 0 ) {
        wx.showToast({
          title: '用户名不能为空',
          icon: 'loading',
          duration: 2000
        })
     }else if (this.data.password.length == 0) {
       wx.showToast({
         title: '密码不能为空',
         icon: 'loading',
         duration: 2000
       })
     } else {
       // 这里登录成跳转的页面 
       if (this.data.password == '123456'&&this.data.phone=='anx'){
         wx.showToast({
           title: '登录成功',
           icon: 'success',
           duration: 2000
         });
        // console.log("登录成功");
         wx.navigateTo({
           url: '/pages/menu/menu?userId=' + this.data.phone　　// 页面 A
         })
       }
     }
   },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
