

/*
   内联模型，onclick是事件处理函数
   <input type="button" value="按钮" onclick=“alert('Lee');”/>

   function box() { //如果放在一个匿名函数里面，就看不到了
	alert('张三');
}

var input = document.getElementsByTagName('input')[0];
   //对象。事件 处理函数 = 函数名或者匿名函数
   input.onclick = function () {
   	  alert('哈哈哈');
   };

   PS:让事件处理函数执行一个函数的时候，通过赋值方式，那么直接将函数名赋值给事件处理
   PS:也就是说input.onclick = box;如果加上括号就自动执行了，没有完成赋值 input.onclick = box()
*/

window.onload = function () {
   
   var input = document.getElementsByTagName('input')[0];
   // input.ondblclick = function () { //双击
   // 	 alert('Lee');
   // };
   // input.onmousedown = function () {  //按下去就执行
   // 	alert('婚是');
   // }
   //onmouseout //离开鼠标执行
   // input.onmouseover = function () { //移上去就执行
   // 	alert('一上去就执行');
   // }
   // window.onkeydown = function () { //按下键盘按钮触发
   // 	alert('Lee');
   // };


   // onkeypress = function() {//按下字符键盘
   // 	alert('哈哈哈');
   // }

   // onkeyup = function () { //按下松开后执行 
   // 	alert('是是是');
   // }
   // onload 加载时执行
   // onunload 卸载时执行
   /*
   select:当用户选择文本框（input或textarea）中一个或多个字符触发
   change:当文本框（input或textarea）内容改变且失去焦点后触发
   input.onchange = function(){
	  alert('Lee');
   };
   focus:当页面或者元素获得焦点时在window及相关元素上面触发。
   input.onfocus = function(){
	alert('Lee');
   };

   blur:当页面或元素失去焦点时在window及元素上触发
   */

   // input.onfocus = function () {
   // 	alert('事实上');
   // }

   input.onblur = function () {
   	alert('Lss');
   }
   

};

// function box() {
// 	alert('湖南');
// }


