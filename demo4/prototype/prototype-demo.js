window.onload = function(){
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
    

}