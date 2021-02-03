// 练习
// 实现一个函数，使得其能完成如下功能

// add(1) //1
// add(1)(2) //3
// add(1)(1,2,3) //7

function add(){
    var args=[...arguments]
    //console.log(args)
	
	var _adder= function(){
        var _args=[...arguments]
		if(_args.length==0){
			return args.reduce((a,b)=>{
				return a+b
			},0)
		}else{
            args= args.concat(_args)
			return _adder
		}
	}
	_adder.toString=function(){
		return _adder()
	}
	return _adder
}

console.log(add(1)())
console.log(add(1,2)())
console.log(add(1)(2)())
console.log(add(1)(1,2,3)())

// function add1 () {
//     var args = [...arguments];
  
//     var fn = function () {
//         let arg_fn = [...arguments];
//          //console.log(arg_fn)
//         return add1.apply(this, args.concat(arg_fn));
//     }

//     fn.toString = function () {
//         return args.reduce(function(a, b) {
//             return a + b;
//         })
//     }
//     return fn;
// }
// console.log(add1(1,2).toString()) // 3
// console.log(add1(1)(2).toString()) // 3
// console.log(add(1)(2)(3).toString()) 

// console.log(add(1,2) 
//  console.log(add(1, 2)(3)) // 3
//  console.log(add(1)(2)(3)) // 3




// function add1 (a) {
//     function sum(b) { // 使用闭包
//         a = a + b; // 累加
//         return sum;
//     }
//     sum.toString = function() { // 重写toSting() 方法
//         return a;
//     }
//     return sum; // 返回一个函数
// }
 
// console.log(add1(1)(3)) // 4
// console.log(add1(1)(3)(5))