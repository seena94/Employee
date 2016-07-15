var employee = [{
  "Employee": "Ann",
  "salary": 27000
}, {
  "Employee": "Ajith",
  "salary": 30000

}, {

  "Employee": "Sourabh",
  "salary": 27000
}, {
  "Employee": "Reshma",
  "salary": 27000
}, {
  "Employee": "Leka",
  "salary": 30000
}];

function showTable() {
  CreateTable('display');
}

function CreateTable(filter) {
  var searchText = document.getElementById("tftextinput").value;
  searchText = searchText.toLowerCase();
  var col = [];
  for (var i = 0; i < employee.length; i++) {
    for (var key in employee[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);

      }
    }
  }
  var table = document.createElement("table");
  table.setAttribute("id", "demo");
  var tr = table.insertRow(-1);
  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
  }
  var sum = 0;
  if (filter == "sort") {
    var sortData = document.getElementById( "demo");
    var tableArr = [];
    for ( var i = 1; i < sortData.rows.length-1; i++ ) {
    tableArr.push({
        Employee: sortData.rows[i].cells[0].innerHTML,
        salary: sortData.rows[i].cells[1].innerHTML
      });
    }
    tableArr.sort(function(a, b) {
      var nameA = a.Employee.toLowerCase();
      var nameB = b.Employee.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
     });
    for(var i=0;i<tableArr.length; i++) {
      var aname = tableArr[i].Employee;
      aname = aname.toLowerCase();
      tr = sortData.insertRow(-1);
      for(var k=0; k<col.length;k++) {
        var taCell= tr.insertCell(-1);
        taCell.innerHTML = tableArr[i][col[k]];
      }
    }
  }
  else{tableArr= employee;
  }
  for (var i = 0; i < tableArr.length; i++) {
    var ename = tableArr[i].Employee;
    ename = ename.toLowerCase();
    if ((filter == "enter" && ename.search(searchText) > -1) || filter == "display" || filter == "sort") {
      tr = table.insertRow(-1);
      sum = sum + parseFloat(tableArr[i].salary);
      for (j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = tableArr[i][col[j]];
      }
    }
  }
  var divContainer = document.getElementById("showData");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
  tr = table.insertRow(-1);
  var tabCell = tr.insertCell(-1);
  tabCell.innerHTML = "Total";
  var tCell = tr.insertCell(-1);
  tCell.innerHTML = sum;
  document.querySelector('th').addEventListener('click',function(event) {
    CreateTable('sort')
  });                   
}