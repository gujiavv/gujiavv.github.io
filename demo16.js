
/*
window.onload = function () {
    // var box = document.getElementById('box');
    // alert(box.nodeName);//获取元素节点的标签名 和tagName等价
    // alert(box.nodeType);//获取元素节点的类型值
    // alert(box.nodeValue);//元素节点本身没有内容 null
    // //node本身本身把节点指针放在<div></div>上，也就是本身没有value值
    // //如果要输出<div>xxx</div>中得文本内容那么用之前的box。innerHTML
    // //node只能获取当前节点的东西
    // alert(box.innerHTML); 如果当做元素节点的文本内容 就是一个整体


    var box = document.getElementById('box');
    // alert(box.childNodes);
    // alert(box.childNodes.length);//3个子节点
    //3个子节点为：测试div<em>倾斜</em>结尾 
    //第一个子节点为：测试div 这个子节点文本节点
    //第二个子节点为：em>倾斜</em> 这个子节点元素节点
    //第三个子节点为：结尾  这个子节点文本节点
    for (var i = 0; i < box.childNodes.length; i++) {
        alert(box.childNodes[i].nodeType);
    }
        alert(box.childNodes[1].innerHTML);
     
    // Objext Text 文本节点对象
} */

/*
window.onload = function () {
    var box = document.getElementById('box');
    for (var i = 0; i < box.childNodes.length; i++) {
        if (box.childNodes[i].nodeType==1) {
            alert('元素节点：'+box.childNodes[i].nodeName);
        }else if(box.childNodes[i].nodeType==3)
        {
            alert('文本节点：'+box.childNodes[i].nodeValue);
        }//nodeType //1 元素节点（标签） 2 属性节点  3 文本节点

    }
}
*/

/*
window.onload = function () {
    var pox = document.getElementById('pox');
    // pox.innerHTML = '测试<strong>pox</strong>';
    // pox.nodeValue = '测试Pox';//没有赋值成功  nodeValue必须在当前节点上操作
    pox.childNodes[0].nodeValue = '测试<strong>pox</strong>';//赋值成功  但跟pox.innerHTM不同 strong不会加粗 而是当成纯文本

}
/*
    window.onload = function () {
       
       var box = document.getElementById('box');
        alert(box.childNodes[0].nodeValue);//获取第一个子节点
        alert(box.firstChild.nodeValue);
        alert(box.lastChild.nodeValue);
        alert(box.ownerDocument);//不是html标签 文档标签
        alert(document);
    }
*/

//  window.onload = function () 
//  {
//      var box = document.getElementById('box');
//      // alert(box.parentNode);//得到上一级节点
//      // alert(box.firstChild.nextSibling.nodeName);//下一个同级节点的标签名
//      // alert(box.lastChild.previousSibling.nodeName);//上一个同级节点的标签名


//      // alert(box.attributes);//NamedNodeMap  几何数组 保存着这个节点的属性列表
//      //alert(box.attributes.length);
//      //alert(box.attributes[0].nodeType);//属性节点的类型值
//      // alert(box.attributes[0].nodeValue);//第一个属性的属性值
//      // alert(box.attributes[0].nodeName);//第一个属性的属性名称 firefox是从后往前的

//      // alert(removeWhiteNode(box.childNodes).length);
   
//     alert(removeWhiteNode(box).firstChild.nodeName);
// }




//忽略空白字符
// function filterWhiteNode(node)  {   
//     var ret = [];
//     for (var i = 0; i < node.length; i++) {
//         if(node[i].nodeType===3 && /^\s+$/.test(node[i].nodeValue)){ //^开始 ^\s,以空格开始  $ 结束\s$ 以什么结束 \s空格 + 一个或者多个
//             continue;
//         }else{
//             ret.push(node[i]);//push() 方法可把它的参数顺序添加到 arrayObject 的尾部
//         }
//     }
//     return ret;
// }

// function removeWhiteNode(node) {
//     for (var i = 0; i < node.length; i++) 
//     {
//         if(node[i].nodeType===3 && /^\s+$/.test(node[i].nodeValue))
//         {
//             node[i].parentNode.removeChild(node[i]);
//         }
//     }
//     return node;
// }

//  function removeWhiteNode(box) {
//     for (var i = 0; i < box.childNodes.length; i++) 
//     {
//         if(box.childNodes[i].nodeType===3 && /^\s+$/.test(box.childNodes[i].nodeValue))
//         {
//             box.childNodes[i].parentNode.removeChild(box.childNodes[i]);
//         }
//     }
//     return box;
// }

// window.onload = function () {
//   // document.write('<p>测试write</p>'); 
//     var box = document.getElementById('box'); 
//     var p = document.createElement('p');//只是创建了一个元素节点
//     box.appendChild(p);//将新节点p添加到id=box的div里的子节点列表的末尾上

//     var text = document.createTextNode('测试Div4');

//     //p.appendChild(text);
//     //box.appendChild(text);
//     document.getElementsByTagName('body')[0].appendChild(p);
// };

// window.onload = function () {
//     var box = document.getElementById('box');
//     var p = document.createElement('p');
//     // box.parentNode.insertBefore(p,box);//在box的父节点添加一个p
//     // box.parentNode.appendChild(p);
//     insertAfter(p,box);
// }

// function insertAfter(newElement,targetElement) {
//     //得到父节点，就是body，但是不能直接使用body 如果层次较多父节点不一定是body
//     var parent = targetElement.parentNode;
//     if (parent.lastChild===targetElement) {
//         parent.appendChild(newElement,targetElement);
//     }else{
//         parent.insertBefore(newElement,targetElement.nextSibling);
//     }
// }


window.onload = function () {

    // var body = document.getElementsByTagName('body')[0];
    // var input = document.createElement('input');
    // input.setAttribute('type','radio');
    // input.setAttribute('name','sex');
    // body.appendChild(input);

    // var span = document.getElementsByTagName('span')[0];

    // var em = document.createElement('em');

    // span.parentNode.replaceChild(em,span);

     var box = document.getElementById('box');
    
    var clone = removeWhiteNode(box).firstChild.cloneNode(true);
    //克隆一个节点，如果是true就是把标签内的文本也克隆，如果是false 只克隆标签
    box.appendChild(clone);

    box.parentNode.removeChild(box);
}



 function removeWhiteNode(box) {
    for (var i = 0; i < box.childNodes.length; i++) 
    {
        if(box.childNodes[i].nodeType===3 && /^\s+$/.test(box.childNodes[i].nodeValue))
        {
            box.childNodes[i].parentNode.removeChild(box.childNodes[i]);
        }
    }
    return box;
}




