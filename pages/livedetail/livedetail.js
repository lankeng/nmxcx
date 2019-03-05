// pages/livedetail/livedetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logo: '/images/logo.png', 
    search: '/images/midsearch.png',
    close: '/images/close.png',
    cnt: false,
    searchval: '',
    author: '/images/authorg.png',
    news: '/images/newsg.png',
    institutions: '/images/authorityg.png',
  },
  searchauthor: function () {
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
    }
  },
  checksearch: function (e) {
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
      cnt: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})