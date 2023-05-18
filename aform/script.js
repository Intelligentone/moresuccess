
function validateForm(){
  var FirstName = document.getElementById("FirstName").value;
  var LastName = document.getElementById("LastName").value;
  var Email = document.getElementById("Email").value;
  var PhoneNumber = document.getElementById("PhoneNumber").value;  
  var UserName = document.getElementById("UserName").value;
  var Password = document.getElementById("Password").value;
  var Address = document.getElementById("Address").value;
  var City = document.getElementById("City").value;
  var State = document.getElementById("State").value;
  var Country = document.getElementById("Country").value;
  var ZipCode = document.getElementById("ZipCode").value;  
  var errorMessages1 =true;
  var errorMessages2 =true;
  var errorMessages3 =true;
  var errorMessages4 =true;
  var errorMessages5 =true;
  var errorMessages6 =true;
  var errorMessages7 =true;
  var errorMessages8 =true;
  var errorMessages9 =true;
  var errorMessages10 =true;
  var errorMessages11 =true;

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

  if (PhoneNumber == "" || PhoneNumber==="null") {
    document.getElementById("errorMessages4").innerHTML = "Enter your phone number please.";
  } 
  else {
    var numbers=/^[0-9]+$/;               
    if(numbers.test(PhoneNumber) === false || PhoneNumber.length > 15) {
      document.getElementById("errorMessages4").innerHTML = "Enter a valid phone number please. Maximum 15 digits allowed. ";
    } 
    else {
      document.getElementById("errorMessages4").innerHTML = "";
      errorMessages4 = false;
    }
  }

  if (UserName == "" || UserName==="null") {
    document.getElementById("errorMessages5").innerHTML = "Enter your username please.";
  } 
  else {             
    if(UserName.length > 12) {
      document.getElementById("errorMessages5").innerHTML = "The username cannot be more than 12 characters.";
    }
    else {
      document.getElementById("errorMessages5").innerHTML = "";
      errorMessages5 = false;
    }
  }

  if (Password == "" || Password==="null") {
    document.getElementById("errorMessages6").innerHTML = "Enter your password please.";
  } 
  else {             
    if(Password.length > 7) {
      document.getElementById("errorMessages6").innerHTML = "The password cannot be more than 7 characters.";
    } 
    else {
      document.getElementById("errorMessages6").innerHTML = "";
      errorMessages6 = false;
    }
  }

  if (Address == "" || Address==="null") {
    document.getElementById("errorMessages7").innerHTML = "Enter your address please.";
  } 
  else {             
    document.getElementById("errorMessages7").innerHTML = "";
    errorMessages7 = false;
  }

  if (City == "" || City==="null") {
    document.getElementById("errorMessages8").innerHTML = "Enter your city please.";
  }
  else {             
    document.getElementById("errorMessages8").innerHTML = "";
    errorMessages8 = false;
  }

  if (State==="000") {
    document.getElementById("errorMessages9").innerHTML = "Enter your state please.";
  } 
  else {             
    document.getElementById("errorMessages9").innerHTML = "";
    errorMessages9 = false;
  }
  
  if (Country==="000") {
    document.getElementById("errorMessages10").innerHTML = "Enter your country please.";
  } 
  else {             
    document.getElementById("errorMessages10").innerHTML = "";
    errorMessages10 = false;
  }
  
  var numbers=/^[0-9]+$/; 
  if (ZipCode === "" || ZipCode==="null" || ZipCode.length > 5 ||!ZipCode.match(numbers)) {
    document.getElementById("errorMessages11").innerHTML = "Enter your zip code please. The zip code cannot be more than 5 digits.";
  }
  else {  
    document.getElementById("errorMessages11").innerHTML = "";
    errorMessages11 = false;
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
  
  if(errorMessages4 == true) {
    return false;
  } 
  
  if(errorMessages5 == true) {
    return false;
  } 
  
  if(errorMessages6 == true) {
    return false;
  }
  
  if(errorMessages7 == true) {
    return false;
  } 
  if(errorMessages8 == true) {
    return false;
  } 
  
  if(errorMessages9 == true) {
    return false;
  } 
  
  if(errorMessages10 == true) {
    return false;
  } 
  
  if(errorMessages11 == true) {
    return false;
  } 
}

