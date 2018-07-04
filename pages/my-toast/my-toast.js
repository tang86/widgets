// pages/my-toast/my-toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  toastShow: function (str, icon) {
    var _this = this;
    _this.setData({
      isShow: true,
      txt: str,
      iconClass: icon
    });
    setTimeout(function () {    //toast消失
      _this.setData({
        isShow: false
      });
    }, 3000);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.toastShow("登录名不能为空\r\n阅读文章+1积分", "icon-suo");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
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
  
  }, 
  
  showDialog() {
    this.dialog.showDialog();
  },

  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  }

})