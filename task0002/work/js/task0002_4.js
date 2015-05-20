function dragBox() {
	var EventUtil = {
		addHandler: function(element, type, handler) {
			if (element.removeEventListener) {
				element.addEventListener(type, handler, false);
			} else if (element.attachEvent) {
				element.attachEvent("on" + type, handler);
			} else {
				element["on" + type] = handler;
			}
		},
		removeHandler: function(element, type, handler) {
			if (element.removeEventListener) {
				element.removeEventListener(type, handler, false);
			} else if (element.detachEvent) {
				element.detachEvent("on" + type, handler);
			} else {
				element["on" + type] = null;
			}
		},
		getEvent: function(event) {
			return event ? event : window.event;
		},
		getTarget: function(event) {
			return event.target || event.srcElement;
		}
	};

	var DragDrop = function() {

		var dragging = null,
			diffx = 0,
			diffy = 0,
			left = document.getElementById("drag_left"),
			right = document.getElementById("drag_right");

		// 返回最终样式函数，兼容IE和DOM，设置参数：元素对象、样式特性
		function getDefaultStyle(obj, attribute) {
			return obj.currentStyle ? +obj.currentStyle[attribute].slice(0, -2) :
				+document.defaultView.getComputedStyle(obj, false)[attribute].slice(0, -2);
		}

		function handleEvent(event) {
			event = EventUtil.getEvent(event);
			var target = EventUtil.getTarget(event);

			switch (event.type) {
				case "mousedown":
					if (target.className.indexOf("draggable") > -1) {
						dragging = target;

						diffx = event.clientX - target.offsetLeft;
						diffy = event.clientY - target.offsetTop;
					}
					break;
				case "mousemove":
					if (dragging !== null) {
						!(dragging.style.position) && (dragging.style.position = 'absolute');
						dragging.style.left = (event.clientX - diffx) + "px";
						dragging.style.top = (event.clientY - diffy) + "px";
						dragging.style.opacity = 0.5;
					}
					break;
				case "mouseup":
					if (dragging.parentNode == left) {
						if ((dragging.offsetLeft + getDefaultStyle(dragging, "width")) 
							>= right.offsetLeft && (dragging.offsetLeft + 
							getDefaultStyle(dragging, "width")) <= 
							(right.offsetLeft + getDefaultStyle(right, "width"))) {
							dragging.style.left = (right.offsetLeft) + "px";
							dragging.style.top = (event.clientY - diffy) + "px";
							dragging.style.opacity = 1;
							dragging = null;
						} else {
							dragging.style.left = left.offsetLeft + "px";
							dragging.style.top = (event.clientY - diffy) + "px";
							dragging.style.opacity = 1;
							dragging = null;
						}
					}
					if (dragging.parentNode == right) {
						if ((dragging.offsetLeft + getDefaultStyle(dragging, "width")) >= 
							left.offsetLeft && dragging.offsetLeft <= (left.offsetLeft + 
						 	getDefaultStyle(left, "width"))) {
							dragging.style.left = (left.offsetLeft) + "px";
							dragging.style.top = (event.clientY - diffy) + "px";
							dragging.style.opacity = 1;
							dragging = null;

						} else {
							dragging.style.left = right.offsetLeft + "px";
							dragging.style.top = (event.clientY - diffy) + "px";
							dragging.style.opacity = 1;
							dragging = null;
						}
					}
					break;
			}
		};
		return {
			enable: function() {
				EventUtil.addHandler(document, "mousedown", handleEvent);
				EventUtil.addHandler(document, "mousemove", handleEvent);
				EventUtil.addHandler(document, "mouseup", handleEvent);
			},
			disable: function() {
				EventUtil.removeHandler(document, "mousedown", handleEvent);
				EventUtil.removeHandler(document, "mousemove", handleEvent);
				EventUtil.removeHandler(document, "mouseup", handleEvent);
			}
		}
	}();
	DragDrop.enable();
}

dragBox();

/*
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
*/