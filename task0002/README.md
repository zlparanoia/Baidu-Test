### task0002: js编程题
### 5-4:
    深度克隆：
值类型：数值，布尔值，null，undefined，String。值类型的变量直接保存变量值。一般是固定的字节大小。
引用类型：对象，数组，函数。保存引用，通过引用可找到存储内容的内存区域。往往存储数组，对象，函数这些很难知道占据内存大小的量。

值类型变量的交换等于分配了一块新的内存空间。改变新变量不影响旧变量。
引用类型变量的交换等于把地址复制的一遍，共用一个内存地址，因此改变变量的值会相互影响。

浅克隆：基本类型为值传递，引用类型为引用传递。
深度克隆：所有元素或属性完全克隆，修改新对象时不会影响到旧对象。

因为函数的克隆会在内存独立开辟一块空间，互不影响，因此函数的克隆通过浅克隆即可实现。

返回数据类型：Object.prototype.toString.call(o).slice(8，-1)。
### 5-5:
    Object.keys(obj):返回一个由给定对象的所有可枚举自身属性的属性名和方法的数组。
### 5-10:
    正则表达式：exec返回匹配的数组；通过()创建子匹配。?:表示不捕获自匹配。
### 5-11:
    判断浏览器是否为ie最简单方法：if(!+[1,]){}; 获取浏览器版本号的正则匹配/msie ([\d.]+)/。
### 5-15:
     itemsHtml += "<input type = 'checkbox'><label>" + arr[i] + "</label><br/>";
     con.innerHTML = itemsHtml;//innerHTML会替换所有子节点，所以先累加到变量再赋值

### 5-20:
task0002-4练习：
bug1:js获取不了css属性
solution:js不能直接用style获取,获取函数：
function getDefaultStyle(obj, attribute) {
	return obj.currentStyle ? +obj.currentStyle[attribute].slice(0, -2) :
		+document.defaultView.getComputedStyle(obj, false)[attribute].slice(0, -2);
}
slice(0, -2):把px前的数值截取。

bug2:在css上设置position属性导致重叠
solution:在使用left、top属性之前用js动态添加position属性。
!(dragging.style.position) && (dragging.style.position = 'absolute');
dragging.style.position为null时设置为absolute。

bug3:赋值错误。
solution:dragging.style.left = right.offsetLeft + "px";左边为值+"px",右边也得同样
         添加"px",保持一致性。
