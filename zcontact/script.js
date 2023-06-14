  
  var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
   
  document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];
 
  var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
   document.getElementById("displayDateTime").innerHTML = dateTime + " " + daylist[day];
 



const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }
  
  if (email.value === '' || email.value == null) {
    messages.push('Please enter a valid email')
  }

  if (email.value.length >= 20) {
    messages.push('Email must be less than 20 characters')
  }

  if (email.value === 'email') {
    messages.push('Email cannot be the word email')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
  
})
