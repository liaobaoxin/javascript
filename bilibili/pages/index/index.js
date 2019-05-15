Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    navList: [],
    swiperList: [],
    videosList: []
  },

  //点击事件
  activeNav(e) {
    this.setData({
      currentIndex: e.target.dataset.index
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  getNavList() {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      header: {
        'Content-Type': 'application/json'
      },
      success: res => {
        // function(res) {
        if (res.data.code === 0) {
          this.setData({
            navList: res.data.data.navList
          });
         
          
        }
        // }
      }
    })
  },


  // 轮播图接口  https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList
  getSwiperList() {
    let that = this;
    var reqTask = wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      data: {},
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        if (result.data.code === 0) {
          that.setData({
            swiperList: result.data.data.swiperList
          })
          
        }
       



      },
      fail: () => { },
      complete: () => { }
    });


  },

  /**
   * 
   * 获取视频列表
   * https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList
   */
  getVideosList() {
   var reqTask = wx.request({
     url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
     data: {},
     header: {'content-type':'application/json'},
     method: 'GET',
     dataType: 'json',
     responseType: 'text',
     success: (result)=>{
      if (result.data.code === 0) {
        this.setData({
          videosList:result.data.data.videosList
        });
        
        
       
      }
     },
     fail: ()=>{},
     complete: ()=>{}
   });
  },

  onLoad: function (options) {
    this.getNavList();
    this.getSwiperList();
    this.getVideosList();
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