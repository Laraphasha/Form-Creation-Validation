document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM loaded ")
  let form = document.getElementById("registration-form")
  let feedbackDiv = document.getElementById("form-feedback")

  form.addEventListener("submit", function(e) {
    event.preventDefault()
    console.log(document.getElementById("username").value().trim())

    let username = document.getElementById("username").value().trim()
    let email = document.getElementById("email").value().trim()
    let password = document.getElementById("password").value().trim()

    isValid = true
    messages = []

    if (username.length < 3) {
      isValid = false
      messages.join("Username is too short")
    }

    if ((email.includes("@")) && (email.includes("."))) {
      isValid = false
      messages.join("Invalid email address")
    }

    if (password.length < 8) {
      isValid = false
      messages.join("Password is too short")
    }

    if (isValid) {
      feedbackDiv.innerHTML = "Registration successful!"
      feedbackDiv.style.color = "#28a745"
    } else {
      feedbackDiv.innerHTML = messages.join("<br>")
      feedbackDiv.style.color = "#dc3545"
    }
  })
})