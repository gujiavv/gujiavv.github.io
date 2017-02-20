// var box = new Array();
// alert(typeof box);

// var box = new Array('黄河街',12,178);

// alert(box);
// alert(box[2]);

// var box = new Array(10);
// box[3]='张短发';
// box[5]='盐城';
// alert(box);

// var box = [];
// alert(typeof box);

// var box = [];
// box['name']='张三';
// box['age']=12;
// alert(box);

// var box =['张三',12,134];
// box.length = 12;
// alert(box);

// var box = ['李艳辉',28,盐城];
// box[3]='江苏';
// alert(box);

// var box = [
//    {
//    	 name:'李鸿章',
//    	 age:28
//    },
//    [3,4,6,'江苏',new Object(),50,new Array(1,2,3)]
// ];

// alert(box);
// alert(bo[0].name);

// var box = ['张三',12,178];
// alert(box.join('|'));

// var box = ['是',13,'盐城'];
// alert(box.push('计算机编程'));//添加元素放在最后一个
// alert(box);
// alert(box.pop());//移除最后的元素
// alert(box);
// alert(box.shift());//移除开头的元素
// alert(box.unshift('江苏')); //添加元素放在第一个
// alert(box);

// var box = [1,2,3,5,4];
// alert(box.reverse()); //返回逆向排序
// alert(box);//原数组也被逆向排序

// var box =[3,4,6,7,2];
// alert(box.sort()); //从小到大排序
// alert(box);


// var box =[0,1,5,10,15];
// alert(box.sort());

//这样子有错误 因为会比较字符串  所以需要写一个函数

//正确的做法

// function compare(value1,value2) {
// 	if (value1<value2) {
// 		return -1;
// 	}else if (value2<value1) {
// 		return 1;
// 	}else
// 	{
// 		return 0;
// 	}
// }

// var box =[0,1,5,10,15];

// alert(box.sort(compare));
// alert(box.reverse());


//基于当前是数组获取一个新的数组
// var box =['李艳辉',12,'盐城'];
// var box2 = box.concat('计算机编程');
// alert(box2);

// var box =['李艳辉',28,'盐城'];
// var box2 = box.slice(1,3);//slice 不是从第一个位置取3个 而是从第一个位置取到第三个位置
// alert(box2);


// var box =['李艳辉',28,'盐城'];
// var box2 = box.splice(0,2); //这里表示从第0个位置 取两个
// alert(box2);

// var box =['李艳辉',28,'盐城'];
// var box2 = box.splice(0,2); //这里表示从第0个位置 取两个
// alert(box);  //splice还有删除功能  


//插入元素
var box =['李艳辉',28,'盐城'];
var box2 = box.splice(1,0,'江苏'); //这里表示从第0个位置 取两个
alert(box2);
alert(box);








