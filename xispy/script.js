var box = document.getElementById("box");
var ten = document.getElementById("ten");
var k = document.getElementById("kay");

function foundBox(){
  document.getElementById("item1").style.textDecoration="line-through";
}

Box.addEventListener("click", function(){
  foundBox("box");
}, false);

function foundTen(){
  document.getElementById("item2").style.textDecoration="line-through";
}

Ten.addEventListener("click", function(){
  foundTen("ten");
}, false);

function foundKay(){
  document.getElementById("item3").style.textDecoration="line-through";
}

Kay.addEventListener("click", function(){
  foundTree("Kay");
}, false);
