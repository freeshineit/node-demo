//爬虫

// let http = require('https');
// const url = 'https://www.taobao.com';

// let http = require('http');
// const url = 'http://www.imooc.com/video/7965';

// http.get(url,function(res){
//     let html ='';

//     res.on('data',function  (res) {
//         html += res;
//     })

//     res.on('end',function(){
//         console.log(html);
//     })

// }).on('error',function(){
//     console.log('爬取内容失败');
// })


let http = require('http');
let cheerio = require('cheerio');
const url = 'http://www.imooc.com/video/7965';

http.get(url,function(res){
    let html ='';

    res.on('data',function  (res) {
        html += res;
    })

    res.on('end',function(){
        console.log(html);
    })

}).on('error',function(){
    console.log('爬取内容失败');
})