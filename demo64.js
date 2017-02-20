

window.onload = function() {
 //     var input = document.getElementsByTagName('input')[0];
	// input.onclick = function () {
	// 		alert('Lee');
	// };
	// document.onclick = function () {
	// 	alert(this);//代表的是document
	// }

	// document.onclick = function (evt) {
	// 	var e = evt || window.event;
	// 	alert(e.clientX + document.documentElement.scrollTop + ',' + e.clientY);
 //        //documentElement 换成body chrome  e.screenY 离屏幕的左右
	// };

	document.onclick = function (evt) {
		var e = evt || window.event;
		alert(e.shiftKey);
	}

};

// function box() {
// 	alert('Lee');
// 

// function box(a,b) {
// 	alert(argument.length);//获取参数的数量
// };

// box(1,2);