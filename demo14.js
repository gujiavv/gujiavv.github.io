
/*navigator对象是window对象下的*/

//alert(navigator.appName);//浏览器的名称  不能精确取到

// alert(navigator.userAgent);//用户代理字符串，表示浏览器信息的东西

// alert(navigator.platform);//平台
// var bd = BrowserDetect();
// var bdins = bd.getInstance();
// alert(bdins.getBrowser());//浏览器的名称

// alert(bdins.getVersion());//浏览器的版本号

// if (BrowserDetect.browser=='Internet Explorer' && BrowserDetect.version<7) {
// 	alert('需要做低版本兼容');
// }

//插件检测
// alert(navigator.plugins.length);


//检测非IE浏览器插件是否存在

// for (var i = 0; i < navigator.plugins.length; i++) {
		
// 		alert(navigator.plugins[i].name);
// 	}

// function hasPlugin(name) {
// 	var name = name.toLowerCase();
// 	for (var i = 0; i < navigator.plugins.length; i++) {
// 		if(navigator.plugins[i].name.toLowerCase().indexOf(name)>-1){
// 			return true ;
// 		}
// 	}
// 	return false;
// }


// alert(hasPlugin('Flash'));
// alert(hasPlugin('java'));

/*
   能力检测
*/
/*
var width = window.innerWidth;//浏览器的宽度 IE没有这个属性

alert(typeof width != 'number')
{
	if (document.compatMode=='CSS1Compat') {
		width = document.documentElement.clientWidth;
	}else{
		width = document.body.clientWidth;//非标准模式使用body
	}
}
*/


//上面其实有两块地方使用了能力检测 

//用户代理字符串

document.write(navigator.userAgent);

var client = function () {

    //引擎
	var engine = {
		ie:false, //这个属性用于确定是否是ie引擎
		gecko:false,
		webkit:false,
		khtml:false,
		opera:false,
		//引擎的版本
		ver:0,
		//时间
		time:0
	};

	//浏览器
	var browser = {
		ie:false,
		firefox:false,
		chrome:false,
		safari:false,
		opera:false,
		//浏览器的版本号
		ver:0,
		name:''
	}

    var ua = navigator.userAgent;
    var p = navigator.platform;
    //系统
    var system = {
    	win : false,
    	mac : false,
    	x11 : false,

        sysname:'',

    }

    if (p.indexOf('Win')==0) {
    	system.win = true;
    	system.sysname = 'Windows';
    }else if (p.indexOf('Mac')==0) {
    	system.mac = true;
    	system.sysname = 'Mac';
    }


    alert(p);

    if (window.opera) {
    	engine.opera = true;
    	engine.ver = window.opera.version();
    }else if(/AppleWebKit\/(\S+)/.test(ua)){
    	engine.webkit = true;
    	engine.ver = RegExp['$1'];
    }else if(/rv:([^\)]+)\) Gecko\/(\d{8})/.test(ua)){  //\匹配特俗字符
    	engine.gecko = true;
    	engine.ver = RegExp['$1'];
    	if (/Firefox\/(\S+)/.test(ua)) {
    		 browser.firefox = true;
    		 browser.ver = RegExp['$1'];
    		 browser.name = 'Firefox';
    	}
    }

    
	return {   //返回一个对象 引擎 浏览器和系统的
		engine:engine ,  //前一个engine 是属性 后一个engine 是对象值
		browser:browser,
	    system:system

	};
}();//自我执行并赋值


     

// if (client.engine.opera) {
// 	alert("目前使用的是Opera浏览器，版本为:" +client.engine.ver
// 		);
// }

// if (client.engine.webkit) {
// 	alert('WebKit引擎的版本为：'+client.engine.ver);
// }

// if (client.engine.gecko) {   
// 	alert('gecko引擎的版本为：'+client.engine.ver);
// 	alert('gecko引擎的时间为：'+client.engine.time);
// }   

alert(client.system.sysname);









































