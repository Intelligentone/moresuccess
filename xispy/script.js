var Cube = document.getElementById("Cube");
var Ten = document.getElementById("Ten");
var Kay = document.getElementById("Kay");

function foundCube(){
  document.getElementById("item1").style.textDecoration="line-through";
}

Cube.addEventListener("click", function(){
  foundCube("Cube");
}, false);

function foundTen(){
  document.getElementById("item2").style.textDecoration="line-through";
}

Ten.addEventListener("click", function(){
  foundTen("Ten");
}, false);

function foundKay(){
  document.getElementById("item3").style.textDecoration="line-through";
}

Kay.addEventListener("click", function(){
  foundKay("Kay");
}, false);
