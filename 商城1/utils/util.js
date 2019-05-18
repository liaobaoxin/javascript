/**
 * 封封微信的的request
 */
function request(url, data = {}, method = "GET") {
  return new Promise((resolve, reject)=> {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          reject(res.errMsg);
        }

      },
      fail: function(err) {
        reject(err)
      }
    })
  });
}

module.exports={
  request
}