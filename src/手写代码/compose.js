
function compose(...funcs) {
    //没有传入函数参数，就返回一个默认函数（直接返回参数）
    if (funcs.length === 0) {
        return (arg) => arg;
    }

    console.log(funcs);
    if (funcs.length === 1) {
        // 单元素数组时调用reduce，会直接返回该元素，不会执行callback;所以这里手动执行
        return funcs[0];
    }
    // 依次拼凑执行函数
    return function(x){
        return funcs.reduceRight((pre, currennt) => {
                return currennt(pre)
        },x);
    }
    
}

let splitIntoSpaces = (str) => str.split(' ');
let count = (array) => {
    return array.length;
};
console.log('count', count);
const counter = compose(count, splitIntoSpaces);
counter('Hello worid');
