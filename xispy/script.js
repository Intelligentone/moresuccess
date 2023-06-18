var Cube = document.getElementById("Cube");
var Ten = document.getElementById("Ten");
var K = document.getElementById("K");

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

function foundK(){
  document.getElementById("item3").style.textDecoration="line-through";
}

K.addEventListener("click", function(){
  foundKay("K");
}, false);
