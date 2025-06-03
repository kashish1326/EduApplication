function validateForm() {
    const username = document.getElementById("username").value;
    const phone = document.getElementById("Phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (!username || !phone || !email || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    alert(`Welcome, ${username}! You have successfully enrolled.`);
    
    // Redirect to payment.html
    window.location.href = "payment.html";
  }
  
  // Get the course name from the URL
const queryParams = new URLSearchParams(window.location.search);
const courseName = queryParams.get("course");

// Display the course name on the enroll page
if (courseName) {
  const header = document.querySelector("h1");
  header.textContent = `Enroll Now for ${courseName}`;
}
