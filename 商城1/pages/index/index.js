const utils = require('../../utils/util.js');
const api = require('../../config/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newGoods: [],
    hotGoods: [],
    topics: [],
    brands: [],
    groupons: [],
    floorGoods: [],
    banner: [],
    channel: [],
    coupon: [],
    goodsCount: 0

  },

  getGoodsCount() {
    utils.request(api.GoodsCount).then(res => {
      this.setData({
        goodsCount: res.data
      })
    });
  },
  receive(){
    wx.showToast({
      title: '领取成功',
      icon: 'success',
      duration: 2000
    })
  },

  getIndexData(){
    utils.request(api.IndexUrl).then(res=>{
      this.setData({
        newGoods: res.data.newGoodsList,
        hotGoods: res.data.hotGoodsList,
        topics: res.data.topicList,
        brands: res.data.brandList,
        floorGoods: res.data.floorGoodsList,
        banner: res.data.banner,
        groupons: res.data.grouponList,
        channel: res.data.channel,
        coupon: res.data.couponList
      });
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIndexData();
    this.getGoodsCount();
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