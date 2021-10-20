const obj1 = { a: 1,hj:[1,2,3]}
obj1.c = obj1;

//1  https://segmentfault.com/a/1190000021682472
//1、通过闭包维护一个变量，变量中储存已经遍历过的对象
//2、每次递归时判断当前的参数是否已经存在于变量中，如果已经存在，就说明已经递归过该变量，就可以停止这次递归并返回上次递归该变量时的返回值
function cloneDeep(obj){ 
  let map = new WeakMap();
  function baseClone(target){
    if(target == null || typeof target !== 'object'){
      return target
    }

    if(map.get(target)) return map.get(target)
    let result = Array.isArray(target) ? [] : {} 
    map.set(target, result)

    for (let key in target){
      if(typeof target[key]==='object'){
        result[key]=baseClone(target[key])
      }else{
        result[key]=target[key]
      }
    }
    return result
  } 
  return baseClone(obj);
}
  console.log(cloneDeep(obj1));  // {b: {c: {d: 1}}})

 


//2
 function deepCopy(obj) {
  // hash表，记录所有的对象的引用关系
  let map = new WeakMap();
  
  function dp(obj) {
    let result = null;
    let keys = Object.keys(obj);
    let key = null,
      temp = null,
      existobj = null;

    existobj = map.get(obj);
    //如果这个对象已经被记录则直接返回
    if (existobj) {
      return existobj;
    }

    result = {}
    map.set(obj, result);

    for (let i = 0, len = keys.length; i < len; i++) {
      key = keys[i];
      temp = obj[key];
      if (temp && typeof temp === 'object') {
        result[key] = dp(temp);
      } else {
        result[key] = temp;
      }
    }
    return result;
  }


  return dp(obj);
}

//console.log(deepCopy(obj1)) 