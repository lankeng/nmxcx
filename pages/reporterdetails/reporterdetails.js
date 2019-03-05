// pages/reporterdetails/reporterdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headimg:"/images/headimg.png",
    member: "/images/member.png",
    srankg: "/images/srankg.png",
    sranko: "/images/sranko.png",
    srankb: "/images/srankb.png",
    navbar: ["当前排名", "最新稿件", "稿件排行"],
    currentTab: 0,
    showdata:[]
    
  },
  toclaim: function () {
    wx.navigateTo({
      url: '/pages/claimform/claimform'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.fd_id);
    var fd_id = options.fd_id;
    wx.request({
      url: 'http://115.29.178.200:8111/mediaworkers/',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {},
      success: function (e) {
        //console.log(e.data)
        var showdata = e.data.results;
        //console.log(showdata);
        for(var i = 0; i<showdata.length;i++){
          if (showdata[i].fd_id == fd_id){
            that.setData({
              showdata: showdata[i]
            })
          }
        }
        console.log(that.data.showdata)
      },
      fail: function () {
        console.log('系统错误')
      }
    })
  },
  //导航栏切换
  navbarTap: function (options) {
    console.log(options.currentTarget.dataset);
    this.setData({
      currentTab: options.currentTarget.dataset.idx
    })
  },

  makebtn:function(){
    wx.navigateTo({
      url: '/pages/articledetails/articledetails',
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