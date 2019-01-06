Page({
  data: {
    active:0,
    activeNames: '1',
    noactive:-1,
    fixed:true,
  },
  tap() {
    console.log('tap')
  },
  goodsDetail(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  onChangeOfMainMenu(event) {
    console.log(event);
    this.setData({
      active: event.detail
    });
    switch (event.detail){
      case 0:{
        wx.switchTab({
          url: '/pages/index/index' // 首页
        })
      }
      case 1:{

      }
      case 2:{
        wx.switchTab({
          url: '/pages/mock/mock' // 我的
        })
      }
      case 3:{
        wx.switchTab({
          url: '/pages/my/my' // 我的
        })
      }
      default:{
        wx.switchTab({
          url: '/pages/index/index' // 首页
        })
      }
    }
  },
  onChange(event) {
    console.log('change');
    this.setData({
      activeNames: event.detail
    });
  },
  onLoad: function () {
    //console.log("menu 载入");
    // wx.drawCanvas({
    //   canvasId: 'firstCanvas',
    //   actions: context.getActions() // 获取绘图动作数组
    // });
    var wxCharts = require('../js/wx-charts/wxcharts.js');
    // new wxCharts({
    //   canvasId: 'pieCanvas',
    //   type: 'pie',
    //   series: [{
    //     name: 'cat1',
    //     data: 50,
    //   }, {
    //     name: 'cat2',
    //     data: 30,
    //   }, {
    //     name: 'cat3',
    //     data: 1,
    //   }, {
    //     name: 'cat4',
    //     data: 1,
    //   }, {
    //     name: 'cat5',
    //     data: 46,
    //   }],
    //   width: 400,
    //   height: 280,
    //   dataLabel: true
    // });


    // new wxCharts({
    //   canvasId: 'lineCanvas',
    //   type: 'line',
    //   categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
    //   series: [{
    //     name: '成交量1',
    //     data: [0.15, 0.2, 0.45, 0.37, 0.4, 0.8],
    //     format: function (val) {
    //       return val.toFixed(2) + '万';
    //     }
    //   }, {
    //     name: '成交量2',
    //     data: [0.30, 0.37, 0.65, 0.78, 0.69, 0.94],
    //     format: function (val) {
    //       return val.toFixed(2) + '万';
    //     }
    //   }],
    //   yAxis: {
    //     title: '成交金额 (万元)',
    //     format: function (val) {
    //       return val.toFixed(2);
    //     },
    //     min: 0
    //   },
    //   width: 360,
    //   height: 200
    // });

    // new wxCharts({
    //   canvasId: 'columnCanvas',
    //   type: 'column',
    //   categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
    //   series: [{
    //     name: '成交量1',
    //     data: [15, 20, 45, 37, 4, 80]
    //   }, {
    //     name: '成交量2',
    //     data: [70, 40, 65, 100, 34, 18]
    //   }],
    //   yAxis: {
    //     format: function (val) {
    //       return val + '万';
    //     }
    //   },
    //   width: 360,
    //   height: 200
    // });
  }
})