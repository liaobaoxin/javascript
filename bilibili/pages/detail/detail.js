// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo:null,
    othersList:null,
    commentData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {    
    let id = options.id;
    console.log(id);
    this.getCurrentVideo(id);
    this.getOtherList(id);
    this.getCommentsList(id);

  },
  getCurrentVideo(videoId){
    var reqTask = wx.request({
      url: 'https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/videoDetail?id='+videoId,
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        if(result.data.code===0){
          this.setData({
            videoInfo:result.data.data.videoInfo
          });
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });

  },
  getOtherList(videoId){
    var reqTask = wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id='+videoId,
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        if(result.data.code===0){
          this.setData({
            othersList:result.data.data.othersList
          });
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  getCommentsList(videoId){
    var reqTask = wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id='+videoId,
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result);
        if(result.data.code===0){
         
          
          this.setData({
            commentData:result.data.data.commentData
          })
        }

          
      },
      fail: ()=>{},
      complete: ()=>{}
    });
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