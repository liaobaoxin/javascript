const utils = require('../../utils/util.js');
const api = require('../../config/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "keyword": null,
    "defaultKeyword": null,
    "hotKeywordList": null,
    "historyKeywordList": null
  },

  getSearchKeyword() {
    utils.request(api.SearchIndex).then(res => {
      this.setData({
        defaultKeyword: res.data.defaultKeyword,
        hotKeywordList: res.data.hotKeywordList,
        historyKeywordList: res.data.historyKeywordList
      })
    })
  },
  inputChange(e) {
    this.setData({
      keyword: e.detail.value
    })
    console.log(e.detail.value);
    console.log(this);

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSearchKeyword();
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