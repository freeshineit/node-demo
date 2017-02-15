//爬虫


let http = require('http');
let cheerio = require('cheerio');
const url = 'http://www.imooc.com/learn/348';

function filterChapters(html){
    let $ = cheerio.load(html);
    let chapters = $('.chapter');
    // [{
    //     chapterTitle:'';
    //     videos:[{
    //         id:'',
    //         title:''
    //     }]
    // }]
    let courseData = [];
    chapters.each(function(item){
        let chapter= $(this);
        let chapterTitle = chapter.find('strong').text();
        let videos = chapter.find('.video').children('li');
        var chapterData =  {
            chapterTitle:chapterTitle,
            videos:[]
        };

        videos.each(function(item){
            let video = $(this).find('a');
            let title = video.text();
            let id = video.attr('href').split('video/')[1];
            chapterData.videos.push({
                'title':title,
                'id':id
            })
        })

        courseData.push(chapterData);
    });
    return courseData;
}

function printCourse(courseData){

    courseData.forEach(function(item){
        let chapterTitle = item.chapterTitle;
        console.log(chapterTitle);

        item.videos.forEach(function(item){
            console.log('['+ item.id +']'+ item.title +'')
        })
    })

}

http.get(url,function(res){
    let html ='';

    res.on('data',function  (res) {
        html += res;
    })

    res.on('end',function(){
        let courseData = filterChapters(html);
        printCourse(courseData);
    })

}).on('error',function(){
    console.log('爬取内容失败');
})

