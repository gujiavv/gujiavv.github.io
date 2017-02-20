
/*
   thead 标签在一个表格里只能有一个
   tfoot 标签在一个表格里只能有一个
   tbody 标签在一个表格里只能有N个
   caption 标签在一个表格里只能有一个
   tr 标签在一个表格里只能有N个
   td和th 标签在一个表格里只能有N个


  */
/*
  window.onload = function () {
  	// var table = document.createElement('table');
  	// table.border = 1;
  	// table.setAttribute('width',300);

  	// var caption = document.createElement('caption');
  	// table.appendChild(caption);
   //  var captionText = document.createTextNode('人员表');
   //  caption.appendChild(captionText);

   //  var thead = document.createElement('thead');
   //  table.appendChild(thead);

   //  var tr = document.createElement('tr');
   //  thead.appendChild(tr);

    
   //  var th = document.createElement('th');
   //  tr.appendChild(th);
   //  th.appendChild(document.createTextNode('数据1'));

   //  var th2 = document.createElement('th');
   //  tr.appendChild(th2);
   //  th2.appendChild(document.createTextNode('数据2'));
  	// document.body.appendChild(table);

    var table = document.getElementsByTagName('table')[0];

    // table.innerHTML = '人员表';
    // alert(table.innerHTML);
    // alert(table.children[2].children[1].children[1].innerHTML);
    
    // var tbody = table.getElementsByTagName('tbody')[1];
    // var tr = tbody.getElementsByTagName('tr')[1];
    // var td = tr.getElementsByTagName('td')[1];
    // alert(td.innerHTML);

    // table.caption.innerHTML = '闪闪闪';
    // alert(table.rows.length);
    // alert(table.tBodies[0]);

    // alert(table.tBodies[0].rows.length);
    // alert(table.tBodies[0].rows[0]);
    // alert(table.tBodies[1].rows[0].cells[1].innerHTML);
	// table.deleteCaption();
	// table.deleteTHead();
	// table.tBodies[0].deleteRow(0);
	// table.tBodies.rows[0];
  }*/
  


 window.onload = function () {
    
   var table = document.createElement('table');
   table.width = 300;
   table.border = 1;
   table.createCaption().innerHTML = '人员表';
   var thead = table.createTHead();
   var tr = thead.insertRow(0);
   tr.insertCell(0).innerHTML = '数据1';
   tr.insertCell(1).innerHTML = '数据2';
   tr.insertCell(2).innerHTML = '数据3';
   document.body.appendChild(table);
}












