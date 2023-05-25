var image = document.getElementById("mainImage");
var myImages = ["","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Falfalfastudio.s3.amazonaws.com%2Fwp-content%2Fuploads%2F2020%2F06%2F02205049%2FSeattle_Sounders_Logo_Evolution-1.jpg&f=1&nofb=1&ipt=fc02e65c477a191a7678c477bb494abc7257f967a63cdb3709b72dba7c895f4a&ipo=images",  "https://logos-world.net/wp-content/uploads/2020/05/Seattle-Seahawks-Logo-History.jpg",  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zZoOUjfW8dTr2vylVBZy1QHaD9%26pid%3DApi&f=1&ipt=70075e557b1d97c33e8bff87968e3a67f1a08389448337bce5d665fe4a2b320d&ipo=images", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bDyNIA80s_FgRitxhIbElgHaEK%26pid%3DApi&f=1&ipt=a72f991306697cdcc6d2aa2e49361f5920154b781c8871cf7e71fc16b47bb466&ipo=images",   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DVzrwp8qdBmPAnZ7Qz_gHAHaEs%26pid%3DApi&f=1&ipt=1e10a63fd310d7a8dae5a9cd0adda848d5cc6ed6bffce9a68f856efbc28fcf9f&ipo=images",   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.t-X-pwk216QO1vu6ZCmgEAHaEK%26pid%3DApi&f=1&ipt=9256f44abfbf352e3373df7e0e6178ae1177edfae7c982a0d27e85274231757b&ipo=images"];
var myCaptions = ["","SEATTLE SOUNDERS", "SEATTLE SEAHAWKS", "SEATTLE SUPERSONICS", "SEATTLE STORM", "SEATTLE MARINERS", "SEATTLE KRAKEN"];
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



