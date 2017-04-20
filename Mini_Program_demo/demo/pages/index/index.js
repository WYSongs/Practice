//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
      select:"index",
      navIndex:0,
      nav:[{title:"足球现场"},
            {title:"足球生活"},
            {title:"足球美女"}],
      lists:[]
     
  
     
  },
  swiperChange(event){
    //console.log(event.detail.current)
    this.setData({
      navIndex:event.detail.current
    })
  },
  touchChange(event){
    this.setData({
      navIndex:event.target.dataset.index
      
    })
  },
  swiperChange(event){
     this.setData({
      navIndex:event.detail.current
      
    })
  },
  onLoad(){
    var _this=this;
    this.fetchList()
  },
  fetchList(){
    var _this=this;
    wx.request({
      url: app.globalData.globalUrl+'/getList',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
        // success
         _this.setData({
          lists:res.data.data
        });
         wx.setStorage({
           key: 'lists',
           data: res.data.data
         });
         
      },
    
    })
  },
  bindDownLoad(){
    var _this = this;
    if(this.data.scroll){
      this.setData({
        scroll:false
      })
      setTimeout(function(){
        wx.request({
          url: app.globalData.globalUrl + '/getList',
          method:"get",
          success:function(res){
            _this.setData({
              lists: res.data.data,
              scrolltop:100+"px",
              scroll:true
            })
          }
        })
      },30)
    }
  },
  clickbot(){
    wx.showLoading({
      title: '加载中...',
    })
    var _this = this;
    wx.request({
          url: app.globalData.globalUrl + '/getList',
          method:"get",
          success:function(res){
            _this.setData({
              lists:_this.data.lists.concat(res.data.data),
              
            })
            wx.hideLoading()
          }
        })
  }
})

