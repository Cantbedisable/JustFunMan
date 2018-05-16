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
