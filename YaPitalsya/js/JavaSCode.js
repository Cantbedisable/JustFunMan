var tableContent = localStorage.getItem('tableContent');
if(tableContent == null || tableContent == ""){
  tableContent = [];
}
/*
var VTB = new Bank(2132,"VTB",84564,"sosat");
var ALFA = new Bank(2184,"ALFA",985,"hui");
var SBER = new Bank(784,"SBER",369,"chlen");
tableContent.push(VTB);
tableContent.push(ALFA);
tableContent.push(SBER);*/
function contentTableOnReady(){
  if(tableContent.length > 0){
    var table = document.getElementById('bankTable');
    var html = table.innerHTML.replace("<tbody>","").replace("</tbody>","");//небольшой костыль, по рукам сильно не бейте ток
    for(var i = 0; i < tableContent.length; i++){
      var bank = tableContent[i];
      var bik = bank.BIK;
      var name = bank.Name;
      var corr = bank.corrAcc;
      var adr = bank.adress;
      var newTeg = "<tr>" + "<td>" + bik + "</td>"
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

function onClickButtonAdd(){
  document.location.href = "addForm.html";
}
