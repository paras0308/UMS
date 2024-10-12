document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Simple validation (for demo purposes)
  if (username === "admin" && password === "password") {
      alert("Login successful!");
      // Redirect to main page (for example purposes)
      window.location.href = 'main.html'; // Update with your main page
  } else {
      errorMessage.textContent = "Invalid username or password.";
  }
});
