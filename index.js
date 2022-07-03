// 计算是否含有小数
let hasDecimal = score % 1 !==0
// 计算是否含有整数
let integer =  Math.floor(score)

var _toString = Object.prototype.toString; // 原型上的toString方法

// 如何判断是一个纯粹的Object对象
function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]' 
}

// 如何判断是一个正则对象
function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]' 
}