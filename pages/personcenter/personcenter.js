// pages/personcenter/personcenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aboutmea:'/images/aboutmea.png',
    data1:"/images/data.png",
    cooperation:"/images/cooperation.png",
    srankg:"/images/srankg.png",
    sranko:"/images/sranko.png",
    srankb:"/images/srankb.png"
  },
  tomaterial: function () {
    wx.navigateTo({
      url: '/pages/mymaterial/mymaterial'
    })
  },
  tobusiness:function(){
    wx.navigateTo({
      url: '/pages/business/business'
    })
  },
  todatashow: function () {
    wx.navigateTo({
      url: '/pages/datashow/datashow'
    })
  },
  toaboutme: function () {
    wx.navigateTo({
      url: '/pages/aboutme/aboutme'
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