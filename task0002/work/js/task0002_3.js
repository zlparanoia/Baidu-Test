window.onload = function() {

	var focuse = document.getElementById("focuse");
		pic = document.getElementById("pic").getElementsByTagName("img");
		list = document.getElementById("list").getElementsByTagName("li");
		index = 0;
		timer = null;

		//每2秒循环执行一次autoPlay函数,实现自动轮翻图片
		timer = setInterval(autoPlay, 2000);

		//当鼠标放在图片上时停止滚动
		focuse.onmouseover = function() {
			clearInterval(timer);
		};

		//当鼠标离开图片时继续滚动
		focuse.onmouseout = function() {
			timer = setInterval(autoPlay, 2000);
		};

		//给每个圆点绑定id,当鼠标放在圆点时显示对应的图片
		for(var i = 0, len = list.length; i < len; i++) {
			list[i].id = i;
			list[i].onclick = function() {
				changeImg(this.id);
			};
		}


		function changeImg(curindex) {
			for(var i = 0, len = list.length; i < len; i++) {
				list[i].className = "";         //清空圆点样式
				pic[i].style.display = "none";  //隐藏图片
			}
			list[curindex].className = "active";   //给当前圆点添加样式
			pic[curindex].style.display = "block"; //显示当前图片
			index = curindex;     //把当前圆点id赋给全局索引变量index,
		}                         //当任意圆点被点击并鼠标离开后保证index为下一个

		function autoPlay() {
			index++;

			if(index >= list.length) {   //若index不小于圆点长度时,重新轮翻
				index = 0;
			}
			changeImg(index);    //每一个索引值显示对应的图片
		} 
};