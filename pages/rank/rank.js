// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:['时政','社会','金融'],
    rankname: ['时政', '1', '2'],
    index:0,
    selectimg:'/images/select.png',
    rankindex:0,
    repordata:[],
    sourcePage:1
  },
  toaudetail: function (e) {
    var fd_id = e.currentTarget.dataset.fdid
    wx.navigateTo({
      url: '/pages/reporterdetails/reporterdetails?fd_id=' + fd_id
    })
  },
  listenerPickersex: function (options) {//选择性别
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: options.detail.value
    });
  },
  listenerPickersexrank: function (options) {//选择性别
    //改变index值，通过setData()方法重绘界面
    this.setData({
      rankindex: options.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://115.29.178.200:8111/mediaworkers/',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {},
      success: function (e) {
        console.log(e.data)
        that.setData({
          repordata: e.data.results,

        })
        //console.log(that.data.repordata)
      },
      fail: function () {
        console.log('系统错误')
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    wx.request({
      url: 'http://115.29.178.200:8111/mediaworkers/',
      success: (res) => {
        this.setData({
          repordata: res.data.results
        });
        console.log(this.data.repordata)
      },
      complete: () => {
        // complete
        this.setData({
          sourcePage: 1
        })
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }
    })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    var page = this.data.sourcePage + 1
    var sourceArr = []
    wx.request({
      url: 'http://115.29.178.200:8111/mediaworkers/?page=' + page,
      success: (res) => {
        sourceArr = res.data.results
        this.setData({
          repordata: this.data.repordata.concat(sourceArr)
        });
      },
      complete: () => {
        // complete
        this.setData({
          sourcePage: page
        })
        wx.hideNavigationBarLoading() //完成停止加载
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})