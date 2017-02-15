##JS中继承的实现

#####prototype (js原型（prototype）实现继承)
+   全局的Function对象没有自己的属性和方法, 但是, 因为它本身也是函数，所以它也会通过原型链从Function.prototype上继承部分属性和方法。
+   

```
    function Person(name,age){  
        this.name=name;  
        this.age=age; 
    }  
    Person.prototype.info=function(){  
        document.write("使用原型得到Name："+this.name+'  年龄：'+this.age +'<br/>');  
    }  
    let per=new Person("shineshao",25);  
    per.info(); //输出：使用原型得到Name: shineshao  年龄：25
      
    function Student(){}  
    Student.prototype=new Person("xiaoshao",21);  
    let stu=new Student();  
    Student.prototype.grade= 'Hello!'; //继承属性 grade 
    Student.prototype.sayHello=function(){  
       document.write(this.grade+'<br/>');  
    }  
    stu.info();
    stu.sayHello();//输出：使用原型得到Name:xiaoshao  
```

#####call
+    在下面的例子中，当调用 greet 方法的时候，该方法的 this 值会绑定到 i 对象。
+    
```
    function greet() {
      let reply = [this.person, 'Is An Awesome', this.role].join(' ');
      console.log(reply);
    }

    var i = {
      person: 'Douglas Crockford', role: 'Javascript Developer'
    };

    greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer

```
+   在下例中的for循环体内，我们创建了一个匿名函数，然后通过调用该函数的call方法，将每个数组元素作为指定的this值执行了那个匿名函数。这个匿名函数的主要目的是给每个数组元素对象添加一个print方法，这个print方法可以打印出各元素在数组中的正确索引号。当然，这里不是必须得让数组元素作为this值传入那个匿名函数（普通参数就可以），目的是为了演示call的用法
+   
```
    let animals = [
      {species: 'Lion', name: 'King'},
      {species: 'Whale', name: 'Fail'}
    ];

    for (var i = 0; i < animals.length; i++) {
        
      (function (i) { 
        this.print = function () { 
          console.log('#' + i  + ' ' + this.species + ': ' + this.name); 
        } 
        this.print();
      }).call(animals[i],i); //匿名函数继承了 animals对象和i
    }
```

[mozilla call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

#####apply
+   fun.apply(thisArg[, argsArray])
+   thisArg
在 fun 函数运行时指定的 this 值。需要注意的是，指定的 this 值并不一定是该函数执行时真正的 this 值，如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动指向全局对象（浏览器中就是window对象），同时值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的自动包装对象。
argsArray
一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 fun 函数。如果该参数的值为null 或 undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。浏览器兼容性请参阅本文底部内容。

```
    function minOfArray(arr) {
        let min = Infinity;
        const QUANTUM = 32768;

        for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
            let submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
            min = Math.min(submin, min);
        }

        return min;
    }

    let min = minOfArray([5, 6, 2, 3, 7]);

    console.log(min);
```

[mozilla apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)



apply()函数的语法与call()函数的语法几乎完全相同，唯一分区别在于，call()方法接受的是一个参数列表，而apply()方法接受的是一个包含多个参数的数组（或类数组对象）
