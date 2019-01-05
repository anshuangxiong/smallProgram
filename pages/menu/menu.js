Page({
  data: {
    active:-1,
    noactive:-1,
    fixed:false,
    nodes: [{
      type:'node',
      name: 'table',
      attrs: {
        class: 'table',
        style: 'line-height: 30px;',
        width:'100%',
      },
      children: [{
        type: 'node',
        name: 'tr',
        attrs: {
          class: 'tr bg-g',
        },
        children:[{
          type:'node',
          attrs: {
            class: 'td',
          },
          name:'td',
          children: [
          {
            type: 'text',
            text: '模拟组合',
          }]
        },
        {
          type: 'node',
          name: 'td',
          attrs: {
            class: 'td',
          },
          children: [{
           type: 'text',
            text: '金股推荐',
          }]
        },
          {
            type: 'node',
            name: 'td',
            attrs: {
              class: 'td',
            },
            children: [{
              type: 'text',
              text: '行业预测',
            }]
          },
          {
            type: 'node',
            name: 'td',
            attrs: {
              class: 'td',
            },
            children: [{
              type: 'text',
              text: '投资建议',
            }]
          }]
      },
        {
          type: 'node',
          name: 'tr',
          attrs: {
            class: 'tr bg-g',
          },
          children: [{
            type: 'node',
            name: 'td',
            attrs: {
              class: 'td',
            },
            children: [{
              type: 'text',
              text: '深度报告',
            }]
          },
          {
            type: 'node',
            name: 'td',
            attrs: {
              class: 'td',
            },
            children: [{
              type: 'text',
              text: '调研报告',
            }]
          },
            {
              type: 'node',
              name: 'td',
              attrs: {
                class: 'td',
              },
              children: [{
                type: 'text',
                text: '会议报告',
              }]
            },
            {
              type: 'node',
              name: 'td',
              attrs: {
                class: 'td',
              },
              children: [{
                type: 'text',
                text: '路演报告',
              }]
            }]
        }]
    }]
  },
  tap() {
    console.log('tap')
  },
  onChange(event) {
    console.log(event.detail);
    console.log(event);
    if (event.detail==0){
      wx.navigateTo({
        url: '/pages/mock/mock'
      })
    }
  },
  onLoad: function () {
    console.log("menu 载入");
    // wx.drawCanvas({
    //   canvasId: 'firstCanvas',
    //   actions: context.getActions() // 获取绘图动作数组
    // });
    var wxCharts = require('../js/wx-charts/wxcharts.js');
    new wxCharts({
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: 'cat1',
        data: 50,
      }, {
        name: 'cat2',
        data: 30,
      }, {
        name: 'cat3',
        data: 1,
      }, {
        name: 'cat4',
        data: 1,
      }, {
        name: 'cat5',
        data: 46,
      }],
      width: 400,
      height: 280,
      dataLabel: true
    });


    new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
      series: [{
        name: '成交量1',
        data: [0.15, 0.2, 0.45, 0.37, 0.4, 0.8],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '成交量2',
        data: [0.30, 0.37, 0.65, 0.78, 0.69, 0.94],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        title: '成交金额 (万元)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: 360,
      height: 200
    });

    new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
      series: [{
        name: '成交量1',
        data: [15, 20, 45, 37, 4, 80]
      }, {
        name: '成交量2',
        data: [70, 40, 65, 100, 34, 18]
      }],
      yAxis: {
        format: function (val) {
          return val + '万';
        }
      },
      width: 360,
      height: 200
    });
  }
})