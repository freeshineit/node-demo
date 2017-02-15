let EventEmitter = require('events').EventEmitter;

let life = new EventEmitter();

    //node设置最大为10个 自己可以设置
    life.setMaxListeners(15);
    //也可以使用addEventListener
    life.on('act',function(str){
        console.log(str);
    })
    life.on('act',function(str){
        console.log(str);
    })
    life.on('act',function(str){
        console.log(str);
    })
    life.on('act',function(str){
        console.log(str);
    })
    life.on('act',function(str){
        console.log(str);
    })
    life.on('act',function(str){
        console.log(str);
    })
    life.on('act',function(str){
        console.log(str);
    })
    life.on('act',function(str){
        console.log(str);
    })
    life.on('act',function(str){
        console.log(str);
    }) 
    life.on('act',function(str){
        console.log(str);
    })
    life.on('act',function(str){
        console.log(str);
    }) 
    life.on('act',function(str){
        console.log(str);
    })
    life.on('act',function(str){
        console.log(str);
    })

    function water(str){
        console.log(str+'要喝水')
    }
    life.on('act',water);


    life.on('sayHello',function(who){
        console.log(who + ' say hello');
    })

    //移除事件  可以指定那一个(不可以是匿名函数)
    
    //这种做法是不对的
    life.removeListener('act',function(str){
        console.log(str);
    })

    life.removeListener('act',water); //这种事可行的

    //移除所有的listener
    // life.removeAllListeners();  //这样会移除 life上所有的事件

    life.removeAllListeners('act');



life.emit('act','shineshao');
life.emit('sayHello','shineshao');




