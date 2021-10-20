function add(){ 
    // debugger
    var args=[...arguments] 
    var _adder= function(){ 
        var _args=[...arguments] 
        console.log(_args)
        if(_args.length==0){
             return args.reduce((a,b)=>{ return a+b },0)
         }else{ 
                args=args.concat(_args)
                return _adder
             }
         } 
    // _adder.toString=function(){ 
    //     return _adder() 
    // } 
    return _adder 
}
   
console.log(add(1).toString())
  console.log(add(1)(2)())
  console.log(add(1)(2,3,4)())
// add(1) //1

// add(1)(2) //3

// add(1)(1,2,3) //7