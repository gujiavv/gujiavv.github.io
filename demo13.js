/*
  1.window对象是最顶层的对象
  2.window对象有六大属性，这六大属性本身也是对象
  3.window对象旗下的document属性也是对象，并且document有5大对象

  如果是某个浏览器独有的属性或者方法，那么在其他浏览器可能会不识别，当作普通变量或者

  closed = '123' //如果浏览器不认识 就当做变量
  window.closed
*/


// alert('Lee');
// window.alert('Lee');//所有浏览器都认识  可省略window.

//confirm('请。。。'); //这里有确定跟取消 返回bool值  

// if (confirm('请选择！')) {
// 	alert('确定');
// }else{
// 	alert('取消');
// }
/*
var box = prompt('请输入一个数字',0);//第一个参数是说明 第二个参数是默认值 返回输入值
if (box != null) {
	alert(box);
}

find();
//旧版本的火狐有状态栏，但是现在无效了
defaultStatue = 'Lee';

open('http://www.baidu.com');参数
      1.第一个参数  你要导航的url
      2. 窗口的名称或者窗口的目标，命名可以给新窗口设置一个名称 
      目标：_blank,_parent
      _blank 新建一个窗口
	  _parent 表示在本窗口加载
	  3.特定的字符串，表示各种窗口配置
	  // open('http://www.baidu.com','_parent');

	   var box =  open('http://www.baidu.com','baidu','width=400,height=400,top=100,left=100');
        
      box.alert('Lee');//这里的alert时window的alert

*/
	//open('opener.html','opener','width=400,height=400,top=100,left=100');

/*
alert(window.screenLeft);
alert(window.screenTop);
//这两个属性，火狐不认识，就会当作没有声明初始化的变量，会报错 alert(window.screenX);

//跨浏览器操作 
var leftX = typeof window.screenLeft=='number'?window.screenLeft:window.screenX;
alert(leftX);
*/
/*
alert(window.innerWidth);//窗口页面的大小 IE不支持
alert(window.innerHeight);
*/

/*
    alert(window.outerWidth);//页面宽度+边框  IE不支持
	alert(window.outerHeight);//页面长度+边框

	//适配IE
	alert(document.documentElement.clientWidth);
	alert(document.documentElement.clientHeight);
	moveTo(100,100);
	//调整大小，和上面一样
	resizeTo(300,300);


	
*/
/*
//setTimeout第一个参数可以是代码块
    //setTimeout("alert('Lee')",2000);//2s后执行
function box() {
	alert('Lee');
}

setTimeout(box,2000); //第一个参数，直接存放一个函数

//推荐  扩展性好，封装性好
setTimeout(function () {
	alert('Lee');
},2000); 


var box = setTimeout(function () {
	alert('Lee');
},2000); 

clearTimeout(box);
//重复执行

var box = setInterval(function () {
	alert('Lee');
},1000);
     
clearInterval(box);

*/

//定时器
/*
var num = 0;
var max = 5;

setInterval(function () {
	num++;
	document.getElementById('a').innerHTML += num;
	if (num==max) {
		clearInterval(this);
		alert('5秒到了！');
	}
},1000);
*/

// var num = 0;
// var max = 5;
// var id = null;

// function box() {//this不能代表id
// 	num++;
//     document.getElementById('a').innerHTML += num;
// 	if (num==max) {
// 		clearInterval(id);
// 		alert('5秒到了!');
// 	}
// }

// id = setInterval(box,1000);
/*
    alert(window.location);
	location.hash;
	location.port;
*/

// alert(locationsearch.);

// location.search = '?id=5';

// location.href='http://www.baidu.com';

// function getArgs() {
// 	return location.search;
// }

// alert(getArgs());
/*
function getArgs() {
	var args = [];
	var qs = location.search.length>0?location.search.substring(1):'';
	var items = qs.split('&');
	var item = null,name = null,value = null;

	for (var i = 0; i < items.length; i++) {
		item = items[i].split('=');
		name = item[0];
		value = item[1];
		args[name] = value;
    }
    return args;
}

var args = getArgs();
alert(args['id']);
alert(args['search']);
*/
// location.assign('http://www.baidu.com');


// function a() {
// 	location.href('http://www.baidu.com');	//跳转	
// }

// function a() {
// 	location.replace('http://www.baidu.com');	//不产生任何历史痕迹的跳转
// }


// location.reload();      //加载
// location.reload(true);  //强制加载

/*
function a() {
	// location.href = 'http://www.baidu.com';	//跳转
	location.replace('http://www.baidu.com');	//不产生任何痕迹的跳转
}
*/

// alert(history.length);

function back() {
	history.back();
}

function forword() {
	history.forword();
}
















