// pages/findback/findback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    codename: '发送验证码',
    iscode: null,
    alphaData: null,
  },
  tologin: function () {
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },
  claimsubmit: function () {
    var animation = wx.createAnimation({})
    animation.opacity(1).step({ duration: 3000 })
    animation.opacity(0).step({ duration: 1000 })
    this.setData({
      alphaData: animation.export(),
      mn: true
    })
  },
  tostop: function () {
    this.setData({
      mn: false
    })
  },
  getPhoneValue: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  getCode: function() {
    var a = this.data.phone;
    var _this = this;
    var myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
    if (this.data.phone == "") {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1000
      })
      return false;
    } else if (!myreg.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
      return false;
    } else {
      wx.request({
        data: {},
        'url': '',
        success(res) {
          console.log(res.data.data)
          _this.setData({
            iscode: res.data.data
          })
          var num = 61;
          var timer = setInterval(function() {
            num--;
            if (num <= 0) {
              clearInterval(timer);
              _this.setData({
                codename: '重新发送',
                disabled: false
              })

            } else {
              _this.setData({
                codename: num + "s"
              })
            }
          }, 1000)
        }
      })
    }
  },
  //获取验证码
  getVerificationCode() {
    this.getCode();
    var _this = this
    _this.setData({
      disabled: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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