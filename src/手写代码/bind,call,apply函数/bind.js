Function.prototype.myBind = function (that, ...arg) {
    let self = this;
    return function (...newArg) {
        self.apply(that, [...arg, ...newArg]);
    };
};
function fn1(a, b, c) {
    // console.log('this', this);
    // console.log('2', a, b, c);
}
const fn2 = fn1.myBind({ x: 1 }, 10, 20, 30);
let res = fn2(1, 2, 3);
// console.log('res', res);

//call

Function.prototype.call2 = function (context, ...arg) {
    // 首先要获取调用call的函数，用this可以获取
    context.fn = this;
    let result = context.fn(...arg);
    delete context.fn;
    return result;
};

// 测试一下
var foo = {
    value: 1,
};

function bar(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}

bar.call2(foo, 'hj', 18); // 1
