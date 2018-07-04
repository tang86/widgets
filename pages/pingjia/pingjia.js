// pages/pingjia/pingjia.js
Page({
  // 星星点击事件
  starTap: function (e) {
    var index = e.currentTarget.dataset.index; // 获取当前点击的是第几颗星星
    var tempUserStars = this.data.userStars; // 暂存星星数组
    var len = tempUserStars.length; // 获取星星数组的长度
    console.log(index)
    for (var i = 0; i < len; i++) {
      if (i <= index) { // 小于等于index的是满心
        tempUserStars[i] = '../../images/star_sel.png'
      } else { // 其他是空心
        tempUserStars[i] = '../../images/star_nor.png'
      }
    }
    // 重新赋值就可以显示了
    this.setData({
      userStars: tempUserStars
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    userStars: [
      '../../images/star_sel.png',
      '../../images/star_nor.png',
      '../../images/star_nor.png',
      '../../images/star_nor.png',
      '../../images/star_nor.png'
    ],
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