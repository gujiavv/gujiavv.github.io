//下面这句是一个弹窗
// alert('标示符！');

//var box 声明变量
//var box = 100 声明变量并且初始化
// //alert 
// var box = '张大侠';
// box = 'lida';
// alert (typeof box);

// box = '张三'
// alert(box);

// var box = '张三'; var age = 28; alert(box);alert(age);

// var box = '李思怡',
//     age = 28,
//     height = 178,
//     length;
// alert(height);

// alert (length);
/*
var box;
alert(typeof box); //box是Undefined类型，值是undefined，类型返回的字符串是undefined

var box = true;
alert(typeof box); //box是Boolean类型，值是true，类型返回的字符串是boolean

var box = '张三';
alert(typeof box); //box是String类型，值是‘张三’，类型返回的字符串是string

var box = 250;
alert(typeof 250); //box是Number类型，值是250，类型返回的字符串是number

//空的对象，表示这个对象创建了，里面没东西
//空对象，表示没有创建，就是一个null
var box = {};
alert(typeof box);//box 是Object类型，值是[Objext Object],类型返回的字符串是object
//如果是null 类型是Null


var box = new Object();

function box() {

}

alert(typeof box); //box是Function函数，值是function box(){}，类型返回的字符串是function

//声明之后 就必须要赋值
*/

// var box = null; //还未能创建对象 只是初始化的结果
// if (box != null) {
// 	alert('对象已经创建成功!');
// }

// var box = '';//创建一个字符串变量，一开始并不知道初始化什么字符串

// var box = 0;

// var box = false;

// alert(undefined == null); //true

// alert(undefined === null); //false  数据类型不同

// alert(typeof undefined== typeof null);


// 0 NAN 假

// var box = 'Lee'

// if (box) {
// 	alert('真');
// }else {
// 	alert('假');
// }
// var box = 100e100;
// alert(isFinite(box));//是否超过范围
// var box = 0/0;
// alert(box);  返回NaN

//如果对象的toString方法能够返回数值，那么就不是Nan了

// var box = {
// 	toString:function(){
// 		return 'Lee';
// 	}
// }
// alert(isNaN(box));
// parseInt(); //只能转换字符串至数值
// alert(parseInt('456Lee')); //只返回数值部分 




//数据运算
// var box = 100;
// var age = box++;
// alert(age);
// alert(box);

// var box = '89';
// box++;
// alert(typeof box);

//可以隐式转换

// var box = false;
// box++;
// alert(box);

// var box = {
// 	toString:function(){
// 			return 123;
// 	}
// };
// box++;
// alert(box);


// var box = 100 + '100';

// alert(typeof box);

// 这个时候的加号就是字符串连接符，而不是加法运算符，只要其中有一个string就是string

// var box = '您的年龄是：'+10+20;//字符串链接操作

// var box = 10+20+'您的年龄是:';//两个都是数值就按加法计算


var box = '您的年龄是：' + (10+20); //强制优先级
// alert(box);

// var box = 10 + {  //10+{} 10[object Objext]类型是String,字符串
//    toString:function(){
//    	return 20;
//    }
// };
// alert(typeof box);
// alert(box); 

//如果返回的是数值 那么就是数值
// var box = 10 % {
//    toString:function(){
//    	return 3;
//    }
// };
// alert(box);


// var box = '\t引号必须\n成对出现\'\\'
// var lee = "引号必须成对出现"
// alert(box);

// alert('\x41');

// var box = 'Mr.';

// box = box + 'Lee';

// alert(box);

// var box = true;
// alert(typeof box.toString());//是字符串true

// var box = 10;
// alert(box.toString());
// alert(box.toString(2));//'1010'
// alert(box.toString(8));//'12'
// alert(box.toString(10));//'10'
// alert(box.toString(16));  //‘a’


//toString 不可以完成null 或者undefined的转型

// var box = null;

// alert(typeof String(box));

// var box = {}; //对象字面量的创建方法
// alert(box);

// var box = new Objext();
// alert(box);

// var box = new Object(2);
// var age = 100;
// alert(box+age);


























































