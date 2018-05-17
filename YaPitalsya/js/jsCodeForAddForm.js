var tableContent = localStorage.tableContent ? JSON.parse(localStorage.tableContent) : [];
var bikForFind = localStorage.getItem('BIK');

function contentForm(){
  var mode = localStorage.getItem('mode');
  if(mode == "edit"){
    document.getElementById('formCaption').innerHTML = "Справочник банков. Изменение";
    //заполняем поля
    for(var i = 0; i < tableContent.length; i++){
      var bank = tableContent[i];
      var bik = bank.BIK;
      if(bik == bikForFind){
        var name = bank.Name;
        var corr = bank.corrAcc;
        var adr = bank.adress;
        document.getElementById('BIK').value = bik;
        document.getElementById('Name').value = name;
        document.getElementById('corrAcc').value = corr;
        document.getElementById('adress').value = adr;
      }
    }
  }else{
    document.getElementById('formCaption').innerHTML = "Справочник банков. Добавление";
  }
}

function Bank(bik,name,corrAcc,adress){
  this.BIK = bik;
  this.Name = name;
  this.corrAcc = corrAcc;
  this.adress = adress;
}

function onClickBtnCancel(){
  document.location.href = "index.html";
}
function onClickBtnSave(){
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
