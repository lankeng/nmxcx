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
    hntime: '2018年6月20日至今',
    npaper: '1,011',
    nnews: '596,623',
    nauthor: '119,635',
    // livedata:'微软投资东南亚出行公司Grab，将进行AI等技术合作将进行AI等技术合作将进行AI等技术合',
    iptval: '',
    list: [{
        livedata: '微软投资东南亚出行公司Grab，将进行AI等技术合作将进行AI等技术合作将进行AI等技术合',
        datatime: '2018-09-30 18:30:12',
        item: [{
          itemName: '中国消费者协会发布的《100款App个人信息收集与隐私政策评测报告》显示，10款住宿旅游类App被评为四星的是飞猪，三星或三星半的是同程旅游、携程旅游、途牛旅游；去哪儿旅游被评为二星；管票家、百城旅行、天巡旅行、6人游、居家游被评为一星。此外，测评结果显示，去哪儿网App关于“所有去哪儿网提供的服务都来在第三方合作伙伴”的表述存在推脱嫌疑，如广告服务应为网站本身所提供的，此为不合理的免责条款。',
        }]
      },
      {
        livedata: '微软投资东南亚出行公司Grab，将进行AI等技术合作将进行AI等技术合作将进行AI等技术合',
        datatime: '2018-09-30 18:30:12',
        item: [{
          itemName: '中国消费者协会发布的《100款App个人信息收集与隐私政策评测报告》显示，10款住宿旅游类App被评为四星的是飞猪，三星或三星半的是同程旅游、携程旅游、途牛旅游；去哪儿旅游被评为二星；管票家、百城旅行、天巡旅行、6人游、居家游被评为一星。此外，测评结果显示，去哪儿网App关于“所有去哪儿网提供的服务都来在第三方合作伙伴”的表述存在推脱嫌疑，如广告服务应为网站本身所提供的，此为不合理的免责条款。',
        }]
      },
      {
        livedata: '微软投资东南亚出行公司Grab，将进行AI等技术合作将进行AI等技术合作将进行AI等技术合',
        datatime: '2018-09-30 18:30:12',
        item: [{
          itemName: '中国消费者协会发布的《100款App个人信息收集与隐私政策评测报告》显示，10款住宿旅游类App被评为四星的是飞猪，三星或三星半的是同程旅游、携程旅游、途牛旅游；去哪儿旅游被评为二星；管票家、百城旅行、天巡旅行、6人游、居家游被评为一星。此外，测评结果显示，去哪儿网App关于“所有去哪儿网提供的服务都来在第三方合作伙伴”的表述存在推脱嫌疑，如广告服务应为网站本身所提供的，此为不合理的免责条款。',
        }]
      },
      {
        livedata: '微软投资东南亚出行公司Grab，将进行AI等技术合作将进行AI等技术合作将进行AI等技术合',
        datatime: '2018-09-30 18:30:12',
        item: [{
          itemName: '中国消费者协会发布的《100款App个人信息收集与隐私政策评测报告》显示，10款住宿旅游类App被评为四星的是飞猪，三星或三星半的是同程旅游、携程旅游、途牛旅游；去哪儿旅游被评为二星；管票家、百城旅行、天巡旅行、6人游、居家游被评为一星。此外，测评结果显示，去哪儿网App关于“所有去哪儿网提供的服务都来在第三方合作伙伴”的表述存在推脱嫌疑，如广告服务应为网站本身所提供的，此为不合理的免责条款。',
        }]
      },
      {
        livedata: '微软投资东南亚出行公司Grab，将进行AI等技术合作将进行AI等技术合作将进行AI等技术合',
        datatime: '2018-09-30 18:30:12',
        item: [{
          itemName: '中国消费者协会发布的《100款App个人信息收集与隐私政策评测报告》显示，10款住宿旅游类App被评为四星的是飞猪，三星或三星半的是同程旅游、携程旅游、途牛旅游；去哪儿旅游被评为二星；管票家、百城旅行、天巡旅行、6人游、居家游被评为一星。此外，测评结果显示，去哪儿网App关于“所有去哪儿网提供的服务都来在第三方合作伙伴”的表述存在推脱嫌疑，如广告服务应为网站本身所提供的，此为不合理的免责条款。',
        }]
      }
    ]
  },
  listTap(e) {
    // console.log('触发了最外层');
    let Index = e.currentTarget.dataset.parentindex, //获取点击的下标值
      list = this.data.list;
    list[Index].show = !list[Index].show || false; //变换其打开、关闭的状态
    if (list[Index].show) { //如果点击后是展开状态，则让其他已经展开的列表变为收起状态
      this.packUp(list, Index);
    }

    this.setData({
      list
    });
  },
  //让所有的展开项，都变为收起
  packUp(data, index) {
    for (let i = 0, len = data.length; i < len; i++) { //其他最外层列表变为关闭状态
      if (index != i) {
        data[i].show = false;
        for (let j = 0; j < data[i].item.length; j++) { //其他所有内层也为关闭状态
          data[i].item[j].show = false;
        }
      }
    }
  },
  checksearch: function(e) {
    if (e.detail.value != '') {
      this.setData({
        cnt: true,
        iptval: e.detail.value
      })
    } else {
      this.setData({
        cnt: false,
        iptval: ''
      })
    }
  },
  closeipt: function() {
    this.setData({
      searchval: '',
      cnt: false,
      iptval: '' 
    })
  },
  searchauthor: function() {
    var that = this;
    if (this.data.iptval == '') {
      wx.showModal({
        title: '提示',
        content: '请输入关键词再进行搜索!',
        showCancel: false,
        confirmColor: '#00C200',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      return false;
    } else {
      var str = that.data.iptval;
      wx.navigateTo({
        url: '/pages/searchresult/searchresult?str=' + str
      })
      // console.log(str);
      // wx.request({
      //   url: 'http://115.29.178.200:8111/mediaworkers?search='+ str,
      //   method: 'GET',
      //   header: {
      //     'content-type': 'application/json' // 默认值
      //   },
      //   data: {},
      //   success: function (e) {
      //     console.log(e.data)
      //   },
      //   fail: function () {
      //     console.log('系统错误')
      //   }
      // })
    }
  },
  searchnews: function() {
    if (this.data.iptval == '') {
      wx.showModal({
        title: '提示',
        content: '请输入关键词再进行搜索!',
        showCancel: false,
        confirmColor: '#00C200',
        success: function(res) {
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
  searchist: function() {
    if (this.data.iptval == '') {
      wx.showModal({
        title: '提示',
        content: '请输入关键词再进行搜索!',
        showCancel: false,
        confirmColor: '#00C200',
        success: function(res) {
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