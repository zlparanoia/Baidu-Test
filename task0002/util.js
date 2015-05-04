//判断arr是否为一个数组，返回一个bool值
function isArray(arr){
	return arr instanceof Array;
}

//判断fn是否为一个函数，返回一个bool值
function isFunction(fn){
	return fn instanceof Function;
}

//// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function isType(o){
	if(o === null){
		return "Null";
	} else if(o === undefined) {
		return "Undefined";
	} else {
		return Object.prototype.toString.call(o).slice(8,-1);
	}
}

function deepClone(obj){
	var result;
	var objType = isType(obj);

	if(objType === "Object") {
		result = {};
	} else if(objType === "Array") {
		result = [];
	} else {
		return obj;
	}
	for(var key in obj) {
		var copy = obj[key];
		if(isType(copy) == "Object") {
			result[key] = arguments.callee(copy);   //调用自身
		} else if (isType(copy) == "Array") {
			result[key] = arguments.callee(copy);
		} else {
			result[key] = obj[key];
		}
	}
	return result;
}

var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = deepClone(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);        // 2
console.log(abObj.b.b1[0]);    // "Hello"

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var str = [];   // 新数组
    var obj = {};   // 创建一个空对象

    //for循环时，每次取出一个元素与对象进行对比，如果这个元素不重复，则把它存放到结果数组中，同时把这个元素的内容作为对象的一个属性，并赋值为1，存入到第2步建立的对象中。每次从原数组中取出一个元素，然后到对象中去访问这个属性，如果能访问到值，则说明重复。
    for(var i = 0, len = arr.length; i < len; i++) {     
    	var key = arr[i];
    	if(!obj[key]) {
    		obj[key] = 1;
    		str.push(arr[i]);
    	}
    }
    return str;
}

var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]

// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
   return str.replace(/(^\s*)|(\s*$)/g, "");
}