var tableContent = localStorage.tableContent ? JSON.parse(localStorage.tableContent) : [];
var bikForFind = localStorage.getItem('BIK');
function contentForm(){
  for(var i = 0; i < tableContent.length; i++){
    var bank = tableContent[i];
    var bik = bank.BIK;
    if(bik == bikForFind){
      var name = bank.Name;
      var corr = bank.corrAcc;
      var adr = bank.adress;
      document.getElementById('lbBIK').innerHTML = bik;
      document.getElementById('lbName').innerHTML = name;
      document.getElementById('lbCorrAcc').innerHTML = corr;
      document.getElementById('lbAdress').innerHTML = adr;
    }
  }
}

function onClickBtnClose(){
  localStorage.setItem('BIK',"");
  document.location.href = "index.html";
}
