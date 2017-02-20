
/*
var box= 'Mr.Lee';//基本类型

alert(box.substring(4));//对象.方法(参数)，这种写法明显是引用类型的写法
                        //索引0开始，从第2个位置开始截取到末尾的字符串输出
                        //基本类型，但又是特殊的引用类型
                        //因为他可以调用系统内置的方法

alert('Mr.Lee'.substring(2));//有效
var box = 'Mr.Lee';
box.name = 'Lee';
box.age = function () {
	return 100;
}	
alert(box);
alert(box.name);//给基本类型加属性 undefined
*///基本包装类型
/*
var box = new String('Mr.Lee');
box.name = 'Lee';
box.age = function () {
	return 100;
}
alert(box);
alert(box.name);
alert(box.age());
*/  //new运算符 创建的时引用类型 可以有属性  

// var box = 100;
// alert(box.MAX_VALUE);
// alert(Number.MAX_VALUE);


// var box = 1000.789;
// alert(typeof box.toString())
// alert(box.toLocaleString());
// alert(box.toFixed(2)); //保留两位小数 并转化成字符串
// alert(box.toPrecision(5)); 
/*
var box = 'Mr. Lee';
alert(box.length);
alert(box.constructor);
*/
/*
var box ='Mr. Lee';
alert(box.charAt(1));//返回指定下表的值
alert(box.charCodeAt(4));//返回的是acssii吗
alert(box[1]);
*/


// var box = 'Mr.Lee';
// alert(box.concat('is','Teacher','!'));
// alert(box.slice(3));
// alert(box.slice(-2)); //7+(-2)=5 第五位开始 ee
// alert(box.substring(-2));//负数返回全部字符串
// alert(box.substr(-2));  //7+(-2)=5 第五位开始 ee

// alert(box.slice(2,-1)); //7-1 = 6  从第二位取到第六位
// alert(box.slice(-2,-1));//7+（-2）=5 ，7+（-1）=6

// alert(box.substring(2,-1)); //参数如果是负 直接是0 （2，0）；如果第二个参数为0 就互换位置
// alert(box.substr(2,-1));//第二个参数为0  直接转0 

// var box = 'Mr. Lee is Lee Mr. Lee is Lee';

/*
alert(box.indexOf('L'));
alert(box.lastIndexOf('L'));
alert(box.indexOf('L',5));//从第五个位置开始 第一次出现L
alert(box.lastIndexOf('L',5));//从第五个位置向前搜索
alert(box.indexOf(','));//找不到就返回-1
*/
// var boxArr = [];
// var pos = box.indexOf('L');
// while(pos>-1){
// 	boxArr.push(pos);
// 	pos = box.indexOf('L',pos+1);
// }
// alert(boxArr);

var box = 'Lee';
// alert(box.toLowerCase());//小写
// alert(box.toUpperCase());//大写
// alert(box.match('L'));//找到l就返回l 没找到就返回null
// alert(box.search('L'));//找到L的位置
// alert(box.replace('L','Q'));//替换
// alert(box.split('L'));//分割成数组
// alert(String.fromCharCode(76));dang

// alert(box.localeCompare('Lee'));//0
// alert(box.localeCompare('Aee'));//1
// alert(box.localeCompare('Zee'));//-1

alert(box.link('http://www.baidu.com'));



