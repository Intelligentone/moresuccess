var image = document.getElementById("mainImage");
var myImages = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.b0-MPUh5UxqiP_cvNlnglAHaEK%26pid%3DApi&f=1&ipt=41535af384c0ba5a5e3505e8e52840c67c579f64ff07f28b7f0a51e74fb715de&ipo=images",   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Z8pYcalx3GEvJfz-pSOUdQHaEz%26pid%3DApi&f=1&ipt=420311adf0a8c4c0d9b46c2502f01fb3348b4930aba558a763c47a2f87c90e2d&ipo=images",  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIF.5xPDc2x1JIC8QaEKoiqMWQ%26pid%3DApi&f=1&ipt=63758dd841f6ec0fd648237b2ac25cf9f6adbeb908fb26aa8393a6bf442f89af&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.aNpi1raBYWoSsNL4sXBV1gHaEK%26pid%3DApi&f=1&ipt=514aa7f9ff115a8f3b598654da01d0b83024b09c1cb087ea41156784010c3f5c&ipo=images",   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kEmOGM9auVHdf-EWELPEJQAAAA%26pid%3DApi&f=1&ipt=fef98eb3bd6e6e6392b1c87b2ea5db8a86ba369c6cab288b6011b4864dab838c&ipo=images",   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0TDwgg_cwSFW_JoIyPNgtwHaFj%26pid%3DApi&f=1&ipt=cb3c6224f7bc13305cf437260b07634ccef96229f2bc50fdfe100ada4e81d846&ipo=images",   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Sbh5Wt9ZTK4hiHhvlO4s-QHaJT%26pid%3DApi&f=1&ipt=ec52b3f212cc0d8651cd3ec2a188bc9cecaf12d83da746999fd50e80ecf90734&ipo=images"];
var myCaptions = ["", "", "", "", "", "", ""];
var caption = document.getElementById("caption");

var currentImage = 0;


//fix the image size
image.style.width="675px";


function nextImage(){
  if (currentImage === myImages.length -1)
currentImage = 0;
  else {
  currentImage++; //Increase the position by one
  image.src = myImages[currentImage];
  caption.textContent = myCaptions[currentImage];
  }
}

function previousImage(){
  if (currentImage === 0)
  currentImage = myImages.length -1;
  else {
  currentImage--; //decrease the position by one
 
  image.src = myImages[currentImage]; 
caption.textContent = myCaptions[currentImage];  
  }
}
//find button
var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

//attach the event to the button
nextButton.addEventListener("click",nextImage,false);
previousButton.addEventListener("click",previousImage,false);

function autoRun(){
	if (document.getElementById("auto").checked)
		nextImage();
}


setInterval(autoRun,5000);



