var WxApiRoot="http://localhost:8080/wx/";


module.exports={
    GoodsCount: WxApiRoot + 'goods/count', //统计商品总数
    IndexUrl: WxApiRoot + 'home/index', //首页数据接口
    SearchIndex: WxApiRoot + 'search/index', //搜索关键字
    SearchHelper: WxApiRoot + 'search/helper',////搜索帮助
    GoodsList: WxApiRoot + 'goods/list' //获得商品列表
}