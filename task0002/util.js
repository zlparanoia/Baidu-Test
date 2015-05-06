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

// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
   return str.replace(/(^\s*)|(\s*$)/g, "");
}

var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    arr.forEach(fn);
}

var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	return Object.keys(obj).length;
}
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); //3

// 判断是否为邮箱地址
function isEmail(emailStr) {
    var email = /([\.a-zA-Z0-9-]+@([a-zA-Z0-9])+(\.[a-zA-Z0-9]))/;
    if(email.test(emailStr)){
    	alert("格式正确");
    } else {
    	alert("格式不正确");
    }
}
isEmail("65765@qq.com");       // 格式正确


// 判断是否为手机号
function isMobilePhone(phone) {
    var tel = /^1\d{10}$/;
    if (tel.test(phone)) {
    	alert("格式正确");
    } else {
    	alert("格式不正确");
    }
}
isMobilePhone('12322344234');     //格式正确

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    element.classList.add(newClassName);
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    element.classList.remove(oldClassName);
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    //保存节点前一个节点的值
	var prevoisnode = element.previousElementSibling;
    //保存节点后一个节点的值  
	var nextnode = element.nextElementSibling;          
    //循环往前判断有没有匹配的节点
	while (prevoisnode != null) { 
	//取节点的小写名称并匹配             
		if (prevoisnode.nodeName.toLowerCase() == siblingNode) {
			return true;
		} else {
		//不匹配则往前找
			prevoisnode = prevoisnode.previousElementSibling;  
		}
	}
	//循环往后判断有没有匹配的节点
	while (nextnode != null) {                 
		if (nextnode.nodeName.toLowerCase() == siblingNode) {
			return true;
		} else {
			//不匹配则往后找
			nextnode = nextnode.nextElementSibling;
		}
	}
	//若没找到节点返回false
	if (prevoisnode == null && nextnode == null) {     
		return false;
	}
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
	var obj = {
		x: element.clientWidth,
		y: element.clientHeight
	};
	return obj;
}