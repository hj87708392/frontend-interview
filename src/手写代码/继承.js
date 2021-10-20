//1原型继承



//2构造函数继承




//组合继承
function Person(value){
    this.value=value
}
Person.prototype.say=function(){
    console.log(this.val)
}

function Child(value){
    Person.call(this,value)
}

Child.prototype=new Person(); //组合继承
Child.prototype=Object.create(Person.prototype,{//寄生组合继承
    constructor:{
        value:Child
    }
})

const xiaoming=new Child(1)
