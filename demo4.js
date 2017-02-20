// var box = new Date();
// alert(box);
// alert(Date.parse('4/12/2007')); //返回毫秒数
//  var box = new Date(Date.parse('4/12/2007'));
// alert(box);
// var box = new Date(1176307200000);
// alert(Date.parse());//没有传入日期格式参数 返回NaN


// alert(Date.UTC(2007,10));//必须传入年份和月份，不传就各种错误负值


//UTC 世界协调时间，他会按照他的区域基准来计算
// var box = new Date(Date.UTC(2007,10,15,17,22,45,15));
// alert(box);

// var box = new Date(2007,10,15,17,22,45,15);
// alert(box);

// var box = new Date(2007,10,15,17,22,45,15);
// alert(box);
// alert('toString:'+box.toString());
// alert('toLocaleString:'+box.toLocaleString());
// alert('valueOf:'+box.valueOf());

// alert(box.toDateString());
// alert(box.toTimeString());
// alert(box.toLocaleDateString());
// alert(box.toLocaleTimeString());
// alert(box.toUTCString());


// var box = new Date(2007,10,15,17,22,45,15);
// alert(box.getTime());  //获取日期毫秒数
// alert(box.setTime(100)); //设置日期毫秒数


// var box = new RegExp('Box');
// alert(box);
//反斜杠是正则表达式的字面量表示法

// var box = /Box/ig;//带修饰符的字面量表达
// alert(box);

// var pattern = new RegExp('box','i');//i 为 修饰符 
// var str = 'This is a Box';
// alert(pattern.test(str));


// var pattern = /Box/ig;//开启全局
// var str = 'This is a Box ! This is a Box';
// alert(str.match(pattern)); //匹配到第一个字符串返回数组

// var pattern = /Box/ig;//没开启
// var str = 'This is a Box! That is a Box!';
// alert(str.search(pattern)); //返回第一个匹配对象的位置 匹配不到就返回-1

// var pattern = /Box/ig;
// var str = 'This is a Box! That is a Box!';
// alert(str.replace(pattern,'Tom')); //返回第一个匹配对象的位置 匹配不到就返回-1



// var pattern = /!/ig
// var str = 'This is a Box! That is a Box!';
// alert(str.split(pattern)); //返回第一个匹配对象的位置 匹配不到就返回-1

// var pattern = /google/i;
// var str = 'This is a google!';
// pattern.test(str);//必须执行一下 静态属性才有效
// alert(RegExp.input);//被匹配的字符串
// alert(RegExp.leftContext);//最后一次匹配前的子串
// alert(RegExp.lastMatch);//最后一个匹配字符串
// alert(RegExp.lastParen);//最后一对圆括号内的匹配子串
// alert(RegExp.multiline);//用于指定是否所有的表达式都用于多行的额布尔值
// alert(RegExp.rightContext);//在上次匹配之后的子串



// var pattern= /google/gim;
// alert(pattern.global);//bool值 表示g是否已设置
// alert(pattern.ignoreCase);//bool 表示i是否已设置
// alert(pattern.multiline);//表示m是否已设置 
// alert(pattern.source);//goodle 正则表达式的源字符串
// alert(pattern.lastIndex);//0,下次的匹配位置 


// var pattern = /go?gle/;//.代表任意字符除了换行符之外的   *代表0个或者1个 多个   +表示一个或者多个 ？表示0个一个
// var str = 'gogle';
// alert(pattern.test(str));


// var pattern = /go{2,4}gle/;//{m,n} 表示至少m个 至多n个 {}只能限定为3个 {3，}3个以上
// var str = 'gooooogle';
// alert(pattern.test(str));

// var pattern = /[a-z]oogle/;  //[0-9]表示0-9 [A-Z]表示26个大写字母 [a-z]表示26个小写字母，任意一个都可以匹配
// var str = 'aoogle';//[^0-9]表示非0-9的任意字符  ^在外面表示第一个  \w 表示任意数字 字母和_  \W 表示  非任意数字 字母和_
// alert(pattern.test(str));


// var pattern = /^google$/;//\s 匹配空格 | 表示匹配或选择模式
// var str = 'google';//() 做成分组
// alert(pattern.test(str));

// var pattern = '8(.*)8';
// var str = 'This is a 8google8';
// str.match(pattern);
// alert(RegExp.$1);
// RegExp.$1 表示获取模式中第一个分组对应的匹配字符串

// var pattern = /8(.*)8/;
// var str = 'This is a 8baidu8';
// document.write(str.replace(pattern,'<strong>$1</strong>'));
//$1 表示获取到的字符串匹配

/*
var pattern = /^([a-z]+)\s([0-9]{4})$/;

var str = 'google 2012';

var a = pattern.exec(str);//返回一个包含字符串的数组

alert(a[0]); //返回匹配的整个字符串
alert(a[1]); //返回匹配到的第一个分组的字符串
alert(a[2]); //返回匹配到的第二个分组的字符串
*/

/*
var pattern = /(\d+)([a-z])/;//这个叫做捕获性分组 所有的分组都捕获性返回
var str = '123abc';
alert(pattern.exec(str));
*/

/*
var pattern = /(\d+)(?:[a-z])/;//非捕获性分组，只要在不需要捕获返回的分组加上？:
var str = '123abc';
var a = pattern.exec(str);
alert(a[0]);
alert(a[1]);
*/

/*
var pattern = /(a?(b?(c?)))/;
var str = 'abc';
alert(pattern.exec(str));

第一步a[0] 整个匹配到的abc
第二步a[1] 匹配到(a?(b?(c?)))
*/


/*
var pattern = /goo(?=gle)/;//goo后面必须是gle才能返回goo
var str = 'google';
alert(pattern.exec(str));//返回是goo 而不google 这是前瞻性
*/

//用\符号转义正则的特殊字符 才能匹配

// var pattern = /\d+/g;
// var str = '1.baidu\n2.google\n3.bing';
// alert(str.replace(pattern,'#'));


// var pattern = /^\d+/gm;
// var str = '1.baidu\n2.google\n3.bing';
// alert(str.replace(pattern,'#'));












