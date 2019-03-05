// pages/claimform/claimform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newscla:['请选择新闻分类','时政'],
    newsindex:0,
    workcla: ['请选择工作性质', '时政'],
    workindex:0,
    evalList: [{ tempFilePaths: [], imgList: [] }],
    evalLista: [{ tempFilePathsa: [], imgLista: [] }],
    idnum:'',
    email:'',
    telnum:'',
    check:true,
    alphaData: null
  },
  claimsubmit:function(){
    var animation = wx.createAnimation({})
    animation.opacity(1).step({ duration: 3000 })
    animation.opacity(0).step({ duration: 1000 })
    this.setData({ alphaData: animation.export() })
  },
  emailto: function (e) {
    var email = e.detail.value;
    this.setData({
      email: email
    });
    var evalList = this.data.evalList[0].tempFilePaths[0];
    var telnum = this.data.telnum;
    var idnum = this.data.idnum;
    var email = this.data.email;
    if (idnum == '') {
      this.setData({
        check: true
      })
    } else if (evalList == undefined) {
      this.setData({
        check: true
      })
    } else if (email == '') {
      this.setData({
        check: true
      })
    } else if (telnum == '') {
      this.setData({
        check: true
      })
    } else {
      this.setData({
        check: false
      })
    }
  },
  telnumf:function(e){
    var telnum = e.detail.value;
    this.setData({
      telnum: telnum
    })
    var evalList = this.data.evalList[0].tempFilePaths[0];
    var telnum = this.data.telnum;
    var idnum = this.data.idnum;
    var email = this.data.email;
    if (idnum == '') {
      this.setData({
        check: true
      })
    } else if (evalList == undefined) {
      this.setData({
        check: true
      })
    } else if (email == '') {
      this.setData({
        check: true
      })
    } else if (telnum == '') {
      this.setData({
        check: true
      })
    } else {
      this.setData({
        check: false
      })
    }
  },
  idnumber:function(e){
    var id = e.detail.value;
    this.setData({
      idnum: id
    })
    var evalList = this.data.evalList[0].tempFilePaths[0];
    var telnum = this.data.telnum;
    var idnum = this.data.idnum;
    var email = this.data.email;
    if (idnum == '') {
      this.setData({
        check: true
      })
    } else if (evalList == undefined) {
      this.setData({
        check: true
      })
    } else if (email == '') {
      this.setData({
        check: true
      })
    } else if (telnum == '') {
      this.setData({
        check: true
      })
    } else {
      this.setData({
        check: false
      })
    }
  },
  listenerPickersex: function (options) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      newsindex: options.detail.value
    });
  },
  workPickersex: function (options) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      workindex: options.detail.value
    });
  },

  //添加图片
  joinPicture: function (e) {
    var index = e.currentTarget.dataset.index;
    var evalList = this.data.evalList;
    var that = this;
    var imgNumber = evalList[index].tempFilePaths;
    if (imgNumber.length >= 1) {
      wx.showModal({
        title: '',
        content: '最多上传一张图片',
        showCancel: false,
      })
      return;
    }
    wx.showActionSheet({
      itemList: ["从相册中选择", "拍照"],
      itemColor: "#f7982a",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage("album", imgNumber);
          } else if (res.tapIndex == 1) {
            that.chooseWxImage("camera", imgNumber);
          }
        }
      }
    })
  },
  chooseWxImage: function (type, list) {
    var img = list;
    var len = img.length;
    var that = this;
    var evalList = this.data.evalList;
    wx.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: [type],
      success: function (res) {
        var addImg = res.tempFilePaths;
        var addLen = addImg.length;
        if ((len + addLen) > 1) {
          for (var i = 0; i < (addLen - len); i++) {
            var str = {};
            str.pic = addImg[i];
            img.push(str);
          }
        } else {
          for (var j = 0; j < addLen; j++) {
            var str = {};
            str.pic = addImg[j];
            img.push(str);
          }
        }
        that.setData({
          evalList: evalList
        })
        var evalLista = that.data.evalList[0].tempFilePaths[0];
        var telnum = that.data.telnum;
        var idnum = that.data.idnum;
        var email = that.data.email;
        if (idnum == '') {
          that.setData({
            check: true
          })
        } else if (evalLista == undefined) {
          that.setData({
            check: true
          })
        } else if (email == '') {
          that.setData({
            check: true
          })
        } else if (telnum == '') {
          that.setData({
            check: true
          })
        } else {
          that.setData({
            check: false
          })
        }
      },
    })
  },
  //删除图片
  clearImg: function (e) {
    var index = e.currentTarget.dataset.index;
    var evalList = this.data.evalList;
    var img = evalList[0].tempFilePaths;
    img.splice(index, 1);
    this.setData({
      evalList: evalList
    })
    var evalList = this.data.evalList[0].tempFilePaths[0];
    var telnum = this.data.telnum;
    var idnum = this.data.idnum;
    var email = this.data.email;
    if (idnum == '') {
      this.setData({
        check: true
      })
    } else if (evalList == undefined) {
      this.setData({
        check: true
      })
    } else if (email == '') {
      this.setData({
        check: true
      })
    } else if (telnum == '') {
      this.setData({
        check: true
      })
    } else {
      this.setData({
        check: false
      })
    }
  },

  //添加图片
  joinPicturea: function (e) {
    var index = e.currentTarget.dataset.index;
    var evalList = this.data.evalLista;
    var that = this;
    var imgNumber = evalList[index].tempFilePathsa;
    if (imgNumber.length >= 1) {
      wx.showModal({
        title: '',
        content: '最多上传一张图片',
        showCancel: false,
      })
      return;
    }
    wx.showActionSheet({
      itemList: ["从相册中选择", "拍照"],
      itemColor: "#f7982a",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImagea("album", imgNumber);
          } else if (res.tapIndex == 1) {
            that.chooseWxImagea("camera", imgNumber);
          }
        }
      }
    })
  },
  chooseWxImagea: function (type, list) {
    var img = list;
    var len = img.length;
    var that = this;
    var evalList = this.data.evalLista;
    wx.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: [type],
      success: function (res) {
        var addImg = res.tempFilePaths;
        var addLen = addImg.length;
        if ((len + addLen) > 1) {
          for (var i = 0; i < (addLen - len); i++) {
            var str = {};
            str.pic = addImg[i];
            img.push(str);
          }
        } else {
          for (var j = 0; j < addLen; j++) {
            var str = {};
            str.pic = addImg[j];
            img.push(str);
          }
        }
        that.setData({
          evalLista: evalList
        })
      },
    })
  },
  //删除图片
  clearImga: function (e) {
    var index = e.currentTarget.dataset.index;
    var evalList = this.data.evalLista;
    var img = evalList[0].tempFilePathsa;
    img.splice(index, 1);
    this.setData({
      evalLista: evalList
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