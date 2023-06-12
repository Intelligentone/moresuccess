const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (email.value.length <= 6) {
    messages.push('Email must be longer than 6 characters')
  }

  if (email.value.length >= 20) {
    messages.push('Email must be less than 20 characters')
  }

  if (email.value === 'email') {
    messages.push('Must be valid email')
  }
  
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  
    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
