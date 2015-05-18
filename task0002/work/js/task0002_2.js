function countDown() {

	var time = document.getElementById("time").value, //获取输入的日期
		write = document.getElementById("write"),
		date = new Date(time), //将输入的日期转换为日期类型
		year = date.getFullYear(), //获取输入日期的年份
		month = date.getMonth() + 1, //获取输入日期的月份,返回值是0-11之间的一个整数
		day = date.getDate(), //获取输入日期的日期
		nowDate = new Date(), //获取当前日期
		count = date.getTime() - nowDate.getTime(); //计算两个年份之间相差的毫秒数

	d = Math.floor(count / (1000 * 60 * 60 * 24)); //距离的天数
	h = Math.floor((count / (1000 * 60 * 60)) % 24); //距离的月数
	m = Math.floor((count / (1000 * 60)) % 60); //距离的小时数
	s = Math.floor((count / 1000) % 60); //距离的秒数

	var id = setInterval(countDown, 1000); //一秒执行一次函数,实现倒计时

	if ((d || h || m || s) > 0) {
		write.innerHTML = "距离" + year + "年" + month + "月" + day + "日还有" +
			+d + "天" + h + "小时" + m + "分" + s + "秒";
	} else if ((d && h && m && s) == 0) {
		clearInterval(id); //倒计时为0时停止计时
	} else {
		write.innerHTML = "无效日期";
	}
	
}
function clickButton(){

	var timeButton = document.getElementById("timeButton");

	timeButton.onclick = function(){
		countDown();
	};
}
clickButton();

// 尽量把事件写在js里,避免<button onclick=""></button>这种方式触发事件。
