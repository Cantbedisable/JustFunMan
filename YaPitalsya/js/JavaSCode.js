var find = localStorage.getItem('find') ? localStorage.getItem('find') : "all";
var tableContent;
if(find == "all"){
  tableContent = localStorage.tableContent ? JSON.parse(localStorage.tableContent) : [];
}else{
  tableContent = localStorage.tableContentFind ? JSON.parse(localStorage.tableContentFind) : [];
}
var bikForFind = "";
function contentTableOnReady(){
  if(tableContent.length > 0){
    var table = document.getElementById('bankTable');
    var html = table.innerHTML.replace("<tbody>","").replace("</tbody>","");//небольшой костыль, по рукам сильно не бейте)
    for(var i = 0; i < tableContent.length; i++){
      var bank = tableContent[i];
      var bik = bank.BIK;
      var name = bank.Name;
      var corr = bank.corrAcc;
      var adr = bank.adress;
      var newTeg = "<tr onclick='select_row(this)'>" + "<td>" + bik + "</td>"
                          + "<td>" + name + "</td>"
                          + "<td>" + corr + "</td>"
                          + "<td>" + adr + "</td>"
                  +"</tr>"
      html += newTeg;
    }
    var newHtml = "<tbody>" + html + "</tbody>";
    table.innerHTML = newHtml;
  }
  //заполним поля после поиска
  document.getElementById('BIK').value = localStorage.getItem('BIKafterFind');
  document.getElementById('Name').value = localStorage.getItem('Name');
}

var selected_row = null;

function select_row(row){
  if(selected_row != null) selected_row.className = '';
  selected_row = row;
  var chooseBIK = row.cells[0].innerText;
  bikForFind = chooseBIK;
  localStorage.setItem('BIK', chooseBIK);
  if(selected_row != null) selected_row.className = 'selected';
}

function onClickBtnAdd(){
  localStorage.setItem('mode', 'add');
  document.location.href = "addForm.html";
}

function onCLickBtnView(){
  if(bikForFind != ""){
    document.location.href = "viewForm.html";
  }
}

function onCLickBtnEdit(){
  if(bikForFind != ""){
    localStorage.setItem('mode', 'edit');
    document.location.href = "addForm.html";
  }
}

function onCLickBtnDelete(){
  if(bikForFind != ""){
    for(var i = 0; i < tableContent.length; i++){
      var bank = tableContent[i];
      var bikIn = bank.BIK;
      if(bikIn == bikForFind){
        tableContent.splice(i, 1);
      }
    }
    localStorage.tableContent = JSON.stringify(tableContent);
    document.location.href = "index.html";
  }
}

function findBank(){
  var bik = document.getElementById('BIK').value;
  var name = document.getElementById('Name').value;
  if(bik == "" && name == ""){
    localStorage.setItem('find', 'all');
    //очистим поля после поиска
    localStorage.setItem('BIKafterFind', '');
    localStorage.setItem('Name', '');
    document.location.href = "index.html";
  }else{
    findBankByParam(bik,name);
  }
}


function findBankByParam(bik,name){
  var tableContentFind = [];
  if(bik != "" && name != ""){
    for(var i = 0; i < tableContent.length; i++){
      var bank = tableContent[i]
      if(bank.BIK == bik && bank.Name == name){
        tableContentFind.push(bank);
      }
    }
  }
  if(bik != "" && name == ""){
    for(var i = 0; i < tableContent.length; i++){
      var bank = tableContent[i]
      if(bank.BIK == bik){
        tableContentFind.push(bank);
      }
    }
  }
  if(bik == "" && name != ""){
    for(var i = 0; i < tableContent.length; i++){
      var bank = tableContent[i]
      if(bank.Name == name){
        tableContentFind.push(bank);
      }
    }
  }
  localStorage.setItem('find', 'reFind');
  localStorage.tableContentFind = JSON.stringify(tableContentFind);
  //сохраним поля после поиска
  localStorage.setItem('BIKafterFind', bik);
  localStorage.setItem('Name', name);
  document.location.href = "index.html";
}
