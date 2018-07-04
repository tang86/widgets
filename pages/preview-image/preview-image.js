// pages/preview-image/preview-image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      pictures: [
        'http://99gw.oss-cn-shanghai.aliyuncs.com/common/be/dc/29/5e/5ae01680dce54.png',
        'http://99gw.oss-cn-shanghai.aliyuncs.com/goods/8c/fa/72/c8/5aaf8120c102d.jpg',
      ]
      }
  },
  //图片点击事件
  imgYu: function (event) {
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = event.currentTarget.dataset.list;//获取data-list
    console.log(src);
    console.log(imgList);
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList, // 需要预览的图片http链接列表
      success: function (e) {
        console.log(e);
      },
      fail: function (e) {
        console.log(e);
      }
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