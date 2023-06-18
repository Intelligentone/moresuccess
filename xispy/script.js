var box = document.getElementById("box");
var ten = document.getElementById("ten");
var kay = document.getElementById("kay");

function foundBox(){
  document.getElementById("item1").style.textDecoration="line-through";
}

Box.addEventListener("click", function(){
  foundBox("Box");
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
  foundTree("Kay");
}, false);
