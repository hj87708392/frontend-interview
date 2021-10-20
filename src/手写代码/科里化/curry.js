//理解： 指的是将一个接受多个参数的函数 变为 接受一个参数返回一个函数的固定形式，这样便于再次调用，例如f(1)(2)
function add(a,b){
    //console.log(arguments)
    return a+b
}

// 变为
function curry(fn){
    var firstArgs=Array.prototype.slice.call(arguments,1)  //这里，arguments的第一个参数是fn,所以从1开始 
    //console.log(firstArgs)
    var _cur=function(){
        var nextArgs=[...arguments]
       // console.log(nextArgs)
        var allArgs=firstArgs.concat(nextArgs)
       // console.log(allArgs)
		return fn.apply(this,allArgs)
	}
	
	return _cur

 }


 let test=curry(add,10)
 test(10) //20
 //console.log(test(30))
//  add.apply(this,[30,40]);


