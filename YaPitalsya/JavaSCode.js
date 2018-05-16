var mass = new Array();
function man (name,age){
  this.name = name;
  this.age = age;
  mass.push(this);
}
var Kir = new man("Кирилл",23);
var Sanya = new man("Саша",42);
for(var i = 0; i < mass.length; i++){
  var name = mass[i].name;
  var age = mass[i].age + "";
  document.writeln("<i>" + name.fontcolor("blue") + "</i>" + " имеет возраст " + "<b>" + age.fontcolor("red") + "</b>" + "<br>");
}


function valid(form){debugger;
  var mess = "";
  var name = form.name.value;
  var password = form.password.value;
  var RePassword = form.RePassword.value;
  var state = form.state.value;
  if(name == "" || name == " " || name == "  ")
    mess = mess + "Вы не ввели свое имя" + "\n";
  if(password == "")
    mess = mess + "Вы не ввели пароль"  + "\n";
  if((RePassword != "") && (password != RePassword))
    mess = mess + "Пароли не совпадают"  + "\n";
  if(state == "")
    mess = mess + "Укажите пол"  + "\n";

  if(mess != ""){
    alert(mess);
  }else{
    window.location = "index.html";
    //window.reload  перезагрузка
  }
}
