var tableContent = localStorage.tableContent ? JSON.parse(localStorage.tableContent) : [];
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
