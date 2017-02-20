

// window.onload = function (){

   // alert(Node);

   // if (xxx.nodeType===1) {}//判断元素节点
   // if (xxx.nodeType===3) {}//判断文本节点
   // alert(Node.ELEMENT_NODE);
   // alert(Node.TEXT_NODE);


// };

// if (typeof Node=='undefined') {
// 	//创建一个全局Node
// 	window.Node = {
//        ELEMENT_NODE:1,
//        TEXT_NODE:3,
// 	};
// }
/*
window.onload = function () {
	// alert(document);//HTMLDocument
	// // alert(document.nodeType);//9
	// alert(document.childNodes[1].nodeType);
	// alert(document.childNodes[1].nodeName);

	// alert(document.documentElement);
    // alert(document.body.nodeName);//获取body
    // alert(document.doctype);//DocumentType IE会显示null
    //document.title = '张三';
    // alert(document.title);
    //alert(document.URL);
    //alert(document.domain);
    // document.getElementById('box').scrollIntoView();//将指定的节点滚动到可见范围内
    // var text1= document.childNodes.length;
    // var text1 = document.createTextNode('Mr.');
    // var text2 = document.createTextNode('Lee');
    // box.appendChild(text1);
    // box.appendChild(text2);
    // box.normalize();
    // alert(box.childNodes.length);
    // box.childNodes[0].splitText(3);//把前三个字符串分离出来
    // box.childNodes[0].deleteData(0,3);
    // box.childNodes[0].insertData(0,'Hello ');
    // box.childNodes[0].replaceData(0,2,'Miss');



    // alert(box.childNodes[0].nodeValue);
    // alert(box.childNodes[0].nodeName);

    // alert(document.compatMode);
    // alert(box.children.length);//获取节点  忽略空白节点
    // alert(box.children[0]);//获取节点  忽略空白节点

    var box = document.getElementById('box');
    // alert(box.firstChild.nodeValue);
    // var p = box.firstChild;
    // alert(box.contains(p));
    alert(box.innerHTML);
    alert(getInnerText(box));//获取文本并过滤掉HTML
    box.innerText = '<b>123</b>';

    alert(box.textContent);
}

function getInnerText(element) {
	if (typeof element.textContent == 'string') {
		return element.textContent;
	}else{
		return element.innerText;
	}
}

function setInnerText(element,text) {
	if (typeof element.textContent == 'string') {
		 element.textContent = text;
	}else{
		 element.innerText = text;
	}
}

*/

window.onload = function () 
{
    var box = document.getElementById('box');
    alert(box.outerText);
    box.outerText = '<b>123</b>';//抹去div
    alert(document.getElementById('box'));//null 
    
};










