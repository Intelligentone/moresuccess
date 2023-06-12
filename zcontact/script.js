const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (email.value.length <= 0) {
    messages.push('Password must be longer than 0 characters')
  }

  if (email.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (email.value === 'password') {
    messages.push('Password cannot be password')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
