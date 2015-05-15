function showHobby() {
	var str = document.getElementById("input-hobby").value,
		con = document.getElementById("content");
		arr = str.split(","),
		obj = {},
		newArr = [];
	for (var i = 0, len = arr.length; i < len; i++) {
		var key = arr[i];
		if (!obj[key] && arr[i].length != 0) {
			obj[key] = 1;
			newArr.push(arr[i]);
		}
	}
	con.innerHTML = newArr;
}

function listHobby() {
	var str = document.getElementById("text-hobby").value;
	  	con = document.getElementById("cont");
	  	arr = str.split(/[\s,，、；;]+/);
	  	obj = {},
		newArr = [];
	for (var i = 0, len = arr.length; i < len; i++) {
		var key = arr[i];
		if (!obj[key] && arr[i].length != 0) {
			obj[key] = 1;
			newArr.push(arr[i]);
		}
	}
	con.innerHTML = newArr;
}
	var inp = document.getElementById("hobby");
		inp.onkeyup = function() {
			var str = document.getElementById("hobby").value,
				worn = document.getElementById("worn"),
				arr = str.split(/[\s,，、；;]+/);
			console.log(arr.length);
			if (arr.length > 10) {
				worn.innerHTML = "长度不能超过10";
				worn.style.color = "red";
				return;
			} else {
				worn.innerHTML = "";
			}
		};
function checkHobby() {
	var str = document.getElementById("hobby").value;
	  	con = document.getElementById("check");
	  	arr = str.split(/[\s,，、；;]+/);
	  	obj = {},
		newArr = [],
		itemsHtml = "";
	if(str.length == 0) {
		worn.innerHTML = "请输入爱好";
		worn.style.color = "red";
	}
	for (var i = 0, len = arr.length; i < len; i++) {
		var key = arr[i];
		if (!obj[key] && arr[i].length != 0) {
			obj[key] = 1;
			// newArr.push(arr[i]);
			
			itemsHtml += "<input type = 'checkbox'><label>" + arr[i] + "</label><br/>";
			con.innerHTML = itemsHtml;
		}
	}	
}