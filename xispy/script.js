var Cube = document.getElementById("Cube");
var Ten = document.getElementById("Ten");
var Kay = document.getElementById("Kay");

function foundCube(){
  document.getElementById("Cube").style.textDecoration="line-through";
}

Cube.addEventListener("click", function(){
  foundCube("Cube");
}, false);

function foundTen(){
  document.getElementById("Ten").style.textDecoration="line-through";
}

Ten.addEventListener("click", function(){
  foundTen("Ten");
}, false);

function foundKay(){
  document.getElementById("Kay").style.textDecoration="line-through";
}

Kay.addEventListener("click", function(){
  foundKay("Kay");
}, false);
