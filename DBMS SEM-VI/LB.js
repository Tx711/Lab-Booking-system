
// JavaScript code for processing Login and Password details:

const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const username = document.getElementById("NetID").value;
  const password = document.getElementById("password").value;
  
  // Replace these values with your own username and password
  const validUsername = "tp3449";
  const validPassword = "tp3449";
  
  if (username === validUsername && password === validPassword) {
    // Successful login, redirect to home page
    window.location.href = "home.html";
  } else {
    // Invalid login, display error message
    errorMessage.style.display = "block";
  }
});
