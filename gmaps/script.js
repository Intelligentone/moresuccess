
function validateForm(){
  var FirstName = document.getElementById("FirstName").value;
  var LastName = document.getElementById("LastName").value;
  var Email = document.getElementById("Email").value;

  var errorMessages1 =true;
  var errorMessages2 =true;
  var errorMessages3 =true;


  if (FirstName == "" || FirstName==="null") {
    document.getElementById("errorMessages1").innerHTML = "Enter your first name please.";
  } 
  else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(FirstName) === false || FirstName.length > 20 ){
      document.getElementById("errorMessages1").innerHTML = "Enter a valid first name please. Maximum of 20 alphabetic characters allowed.";
    } 
    else {
      document.getElementById("errorMessages1").innerHTML = "";
      errorMessages1 = false;
    }
  }
  
  if (LastName == "" || LastName==="null") {
    document.getElementById("errorMessages2").innerHTML = "Enter your last name please.";
  } 
  else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(LastName) === false || LastName.length > 50) {
      document.getElementById("errorMessages2").innerHTML = "Enter a valid last name please. 50 alphabetic characters allowed. ";
    } 
    else {
      document.getElementById("errorMessages2").innerHTML = "";
      errorMessages2 = false;
    }
  }
  
  if (Email == "" || Email==="null") {
    document.getElementById("errorMessages3").innerHTML = "Enter your Email please.";
  } 
  else {
    var atpos = Email.indexOf("@");
    var dotpos = Email.lastIndexOf(".");             
    if(atpos< 1 || dotpos<atpos+2 || dotpos+2>=Email.length) {
      document.getElementById("errorMessages3").innerHTML = "Enter a valid Email please.";
    } 
    else {
      document.getElementById("errorMessages3").innerHTML = "";
      errorMessages3 = false;
    }
  }

  
  if(errorMessages1  == true) {
    return false;
  }
  
  if(errorMessages2 == true) {
    return false;
  }
  
  if(errorMessages3 == true) {
    return false;
  } 
  


