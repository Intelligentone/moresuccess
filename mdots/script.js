// JavaScript Document
var currentColor = "purple";

//1. Find the object for the event
var myDrawingArea = document.getElementById("drawingArea");

//2. Create function: We will use an anonymous function for this example

//3. Add the event and function to the object

myDrawingArea.addEventListener("click",function(event){
var dot = document.createElement("div");
 dot.className ="dot";
 dot.style.left = (event.pageX-4) + "px";
 dot.style.top = (event.pageY-4) + "px";
 dot.style.background = currentColor;
 document.body.appendChild(dot);
},false);

//Remove dots from drawing area
//1. Find the object to add event: Button Clear Area
var myButton = document.querySelector("button");

//2. Create the function for the event: Use an anonymous function
myButton.addEventListener("click",function (event){
//find all the classes = dot
 var element = document.getElementsByClassName("dot");
 for(i=element.length-1; i>=0;i--){
 element[i].parentNode.removeChild(element[i]);
 }
 
},false);

//Add palette functionality
var palette = document.getElementsByClassName("palette");
//Attach the event to every single element on my palette collection


for (i=0;i< palette.length; i++){
palette[i].addEventListener("click", function(event){
 //the current object on the collection, is being referenced by the keyword this
currentColor = this.id;
},false);
}


