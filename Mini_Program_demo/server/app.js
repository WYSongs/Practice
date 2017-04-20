var express=require("express");
var app=express();

app.get("/getList",(req,res)=>{
	res.json({code:0,data:[{img:"../../img/index/3.jpg",title:"sunny晴天",people:"11452"},
        {img:"../../img/index/1.jpg",title:"Lady@",people:"6531"},
        {img:"../../img/index/7.jpg",title:"金鱼妹妹",people:"6642"},
        {img:"../../img/index/5.jpg",title:"魅惑、美嘉",people:"882"},
        {img:"../../img/index/2.jpg",title:"一匹小野马",people:"1452"},
        {img:"../../img/index/8.jpg",title:"小仙女",people:"452"},
        {img:"../../img/index/6.jpg",title:"魅惑、安莲",people:"152"},
        {img:"../../img/index/4.jpg",title:"夜色女王",people:"24"}]})
})

app.listen("9090",() => {
	console.log("启动成功")
})