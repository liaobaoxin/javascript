const utils = require('../../utils/util.js');
const api = require('../../config/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: '',
    searchStatus: false,
    goodsList: [],
    helpKeyword: [],
    historyKeyword: [],
    categoryFilter: false,
    currentSort: 'name',
    currentSortType: 'default',
    currentSortOrder: 'desc',
    filterCategory: [],
    defaultKeyword: {},
    hotKeyword: [],
    page: 1,
    limit: 20,
    categoryId: 0
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
      keyword: e.detail
    })
    if (e.detail) {
      this.getHelpKeyword();
    }
  },

  getHelpKeyword() {
    utils.request(api.SearchHelper, {
      keyword: this.data.keyword
    }).then(res => {
        if (res.errno === 0) {
          if (res.data.length > 0) {
            this.setData({
              helpKeyword: res.data
            });
          }
        }
      }

    )
  },

  onSearch(e) {    
    if (e.detail) {
      this.setData({
        searchStatus:true
      });
      this.getSearchResult(e.detail);
    }
  },

  getSearchResult(keyword) {
    if (keyword === '') {
      keyword = this.data.defaultKeyword.keyword;
    }
    this.setData({
      keyword: keyword,
      page: 1,
      categoryId: 0,
      goodsList: []
    });

    this.getGoodsList();
  },

  getGoodsList: function () {

    utils.request(api.GoodsList, {
      keyword: this.data.keyword,
      page: this.data.page,
      limit: this.data.limit,
      sort: this.data.currentSort,
      order: this.data.currentSortOrder,
      categoryId: this.data.categoryId
    }).then(res=> {
      if (res.errno === 0) {
        this.setData({
          searchStatus: true,
          categoryFilter: false,
          goodsList: res.data.list,
          filterCategory: res.data.filterCategoryList
        });
      }

      //重新获取关键词
      this.getSearchKeyword();
    });
  },


  getGoodsList: function () {
      utils.request(api.GoodsList, {
          keyword: this.data.keyword,
          page: this.data.page,
          limit: this.data.limit,
          sort: this.data.currentSort,
          order: this.data.currentSortOrder,
          categoryId: this.data.categoryId
        }).then( res=> {
            if (res.errno === 0) {
              this.setData({
                searchStatus: true,
                categoryFilter: false,
                goodsList: res.data.list,
                filterCategory: res.data.filterCategoryList
              });
            }

      //重新获取关键词
      this.getSearchKeyword();
    });
  },

  clearKeyword: function() {
    this.setData({
      keyword: null,
      searchStatus: false,
      helpKeyword:[]
    });
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