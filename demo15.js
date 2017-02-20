/*
  节点分为三类
  1元素节点：其实就是标签，<div></div>
  2文本节点：其实就是标签内的纯文本 测试Div
  3属性节点：其实就是标签的属性，id="box"
  查找元素：
  getElementById();参数传递一个元素的id值，这样就可以获取到该元素节点
  为什么查找不到元素
  DOM操作必须等HTML文档加载完毕，才可以获取
  怎么获取？
  1 把<script>移后

  2 用将来会学到的onload事件，来加载HTML
	window.onload = function () 
	//这里存放当网页全部加载完毕然后再执行

	一个页面只能允许一个id 表示唯一性
	getElementById 建议区分大小写
*/ 
// window.onload = function () {
// 	if (document.getElementById) {}
// 	var box = document.getElementById('box');
	//alert(box.tagName); //获取元素节点的标签
//	alert(box.innerHTML);//获取这个元素节点的文本
	//alert(box.id);//获取这个元素节点id属性的值，注意不是属性节点
	//alert(box.title);
	//alert(box.style);//style对象
	//alert(box.style.color);//style对象属性的值
	//alert(box.className);//class属性的值
	//alert(box.bbb);//自定义属性 要做好兼容性
// };

/*
window.onload = function (){
	// var box = document.getElementById('box');
	// box.innerHTML = '玩转<strong>innerHTML</strong>';
	var li = document.getElementsByTagName('li');
	// alert(li.length);
	// alert(li.item(0).tagName);
	alert(li.item(0).innerHTML);
}

*/

window.onload = function () {
	// var body = document.getElementsByTagName('body')[0];
	// alert(body);  //获取body节点
	// var all = document.getElementsByTagName('*');
	// alert(all.length); //firebug打开后 会自动创建一个div 所以多算一个 ie多一个节点 是把文档声明也算进去
 

 	// var input = document.getElementsByName('checknow')[0];
 	// alert(input.value);
 	// alert(input.checked);//input有合法的name属性

    /*
    var box = document.getElementById('box');
	alert(box.getAttribute('id'));
    if (box.getAttribute('className')==null) 
    {
		alert(box.getAttribute('class'));//非IE可以 ie不行
    }else
    {
		alert(box.getAttribute('className'));//IE 可以 非ie不行
    }
    */
	
	/*
	 var box = document.getElementById('box');

    alert(box.onclick);//均返回函数式

    alert(box.getAttribute('onclick'));//返回函数式
	*/


		 var box = document.getElementById('box');

         box.setAttribute('title','标题');

         box.setAttribute('align','center');

         box.setAttribute('bbb','ccc');

         box.removeAttribute('class');

   
 
}








