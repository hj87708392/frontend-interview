function _new() {
    let obj = {};
    let Con = [].shift.call(arguments);
    console.log(Con);
    obj.__proto__ = Con.prototype;
    let result = Con.apply(obj, arguments);
    console.log('result', result);
    console.log('obj', obj);
    return result instanceof Object ? result : obj;
}
function Obj() {}

console.log(_new(Obj));
