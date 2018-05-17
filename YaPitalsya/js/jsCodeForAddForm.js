var tableContent = localStorage.tableContent ? JSON.parse(localStorage.tableContent) : [];

function Bank(bik,name,corrAcc,adress){
  this.BIK = bik;
  this.Name = name;
  this.corrAcc = corrAcc;
  this.adress = adress;
}

function onClickBtnCancel(){
  document.location.href = "index.html";
}
function onClickBtnSave(){debugger;
  var bik = document.getElementById('BIK').value;
  var name = document.getElementById('Name').value;
  var corr = document.getElementById('corrAcc').value;
  var adress = document.getElementById('adress').value;
  var mess = "";
  if(bik == ""){mess += 'Не заполнено поле "БИК"';}
  if(name == ""){mess += 'Не заполнено поле "Наименование"';}
  if(corr == ""){mess += 'Не заполнено поле "Корсчет"';}
  if(adress == ""){adress += 'Не заполнено поле "Адрес"';}
  //else if че то не алешка сегодня
  if(mess == ""){
    var newBank = new Bank(bik,name,corr,adress);
    tableContent.push(newBank);
    localStorage.tableContent = JSON.stringify(tableContent);
    document.location.href = "index.html";
  }else{
    alert(mess);
    return false;
  }
}
