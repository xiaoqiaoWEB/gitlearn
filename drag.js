function drag (id){
	var id = document.getElementById(id);
	var disX = 0;
	var disY = 0;
	obj.onmousedown = function (ev) {
		disX = ev.pageX - obj.offsetLeft;
		disY = ev.pageY - obj.offsetTop;
		
<<<<<<< HEAD
		document.onmousemove=function (ev) {
			obj.style.left = ev.pageX - disX;
			obj.style.top = ev.pageY - disY;
		}
	}
}