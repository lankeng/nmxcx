// pages/searchresult/searchresult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: '/images/midsearch.png',
    author: '/images/authorg.png',
    news: '/images/newsg.png',
    institutions: '/images/authorityg.png',
    close: '/images/close.png',
    cnt: false,
    showdata: [],
    ifshow:true,
    iptval:''
  },
  checksearch: function(e) {
    if (e.detail.value != '') {
      this.setData({
        cnt: true,
        iptval: e.detail.value
      })
    } else {
      this.setData({
        cnt: false
      })
    }
  },
  closeipt: function () {
    this.setData({
      searchval: '',
      cnt: false,
      iptval: ''
    })
  },
  searchauthor: function () {
    var that = this;
    if (this.data.iptval == '') {
      wx.showModal({
        title: '提示',
        content: '请输入关键词再进行搜索!',
        showCancel: false,
        confirmColor: '#00C200',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      return false;
    } else {
      var str = that.data.iptval;
      // console.log(str);
      wx.request({
        url: 'http://115.29.178.200:8111/mediaworkers?search='+ str,
        method: 'GET',
        header: {
          'content-type': 'application/json' // 默认值
        },
        data: {},
        success: function (e) {
          console.log(e.data)
          var showdata = e.data.results;
          if (showdata == '') {
            that.setData({
              ifshow: false
            })
          } else {
            that.setData({
              showdata: showdata,
              ifshow: true
            })
          }
          console.log(that.data.showdata)
        },
        fail: function () {
          console.log('系统错误')
        }
      })
    }
  },
  searchnews: function () {
    if (this.data.iptval == '') {
      wx.showModal({
        title: '提示',
        content: '请输入关键词再进行搜索!',
        showCancel: false,
        confirmColor: '#00C200',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '/pages/searchresult/searchresult'
      })
    }
  },
  searchist: function () {
    if (this.data.iptval == '') {
      wx.showModal({
        title: '提示',
        content: '请输入关键词再进行搜索!',
        showCancel: false,
        confirmColor: '#00C200',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '/pages/searchresult/searchresult'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  toaudetail: function (e) {
    var fd_id = e.currentTarget.dataset.fdid
    wx.navigateTo({
      url: '/pages/reporterdetails/reporterdetails?fd_id=' + fd_id
    })
  },
  onLoad: function(options) {
    var that = this;
    var str = options.str;
    that.setData({
      iptval: str,
      cnt: true
    })
    console.log(str);
    wx.request({
      url: 'http://115.29.178.200:8111/mediaworkers?search=' + str,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {},
      success: function(e) {
        console.log(e)
        var showdata = e.data.results;
        if (showdata == ''){
          that.setData({
            ifshow: false
          })
        }else{
          that.setData({
            showdata: showdata,
            ifshow: true
          })
        }
        console.log(that.data.showdata)
      },
      fail: function() {
        console.log('系统错误')
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})