var tableContent = localStorage.tableContent ? JSON.parse(localStorage.tableContent) : [];
var bikForFind = localStorage.getItem('BIK');
var mode = localStorage.getItem('mode');

function contentForm(){
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
    if(mode == "edit"){
      for(var i = 0; i < tableContent.length; i++){
        var bank = tableContent[i];
        var bikIn = bank.BIK;
        if(bikIn == bikForFind){
          bank.BIK = bik;
          bank.Name = name;
          bank.corrAcc = corr;
          bank.adress = adress;
        }
      }
      localStorage.tableContent = JSON.stringify(tableContent);
      localStorage.setItem('BIK',"");
      localStorage.setItem('mode',"");
      document.location.href = "index.html";
    }else{
      var newBank = new Bank(bik,name,corr,adress);
      tableContent.push(newBank);
      localStorage.tableContent = JSON.stringify(tableContent);
      document.location.href = "index.html";
    }
  }else{
    alert(mess);
    return false;
  }
}


//попробуем регулярочку для паттерна БИК
var inputBIK = document.getElementById('BIK');
var BIKvalue = inputBIK.value;
inputBIK.addEventListener('input', onInput);

function onInput(e){
  var newValue = e.target.value;
  if( newValue.match(/[A-Za-zА-Яа-яЁё\s\D]/g)) {
     inputBIK.value = BIKvalue;
     return;
  }
  BIKvalue = newValue;
}

//попробуем регулярочку для паттерна Коррсчета
var inputCorr = document.getElementById('corrAcc');
var Corrvalue = inputCorr.value;
inputCorr.addEventListener('input', onInput2);

function onInput2(e){
  var newValue = e.target.value;
  if( newValue.match(/[A-Za-zА-Яа-яЁё\s\D]/g)) {
     inputCorr.value = Corrvalue;
     return;
  }
  Corrvalue = newValue;
}

//попробуем регулярочку для паттерна Наименования
var inputName = document.getElementById('Name');
var Namevalue = inputName.value;
inputName.addEventListener('input', onInput2);

function onInput2(e){
  var newValue = e.target.value;
  if( newValue.match(/[/=.+?&^№@!*;%_/g]/)) {
     inputName.value = Namevalue;
     return;
  }
  Namevalue = newValue;
}
