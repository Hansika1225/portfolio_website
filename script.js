document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formStatus = document.getElementById("formStatus");
  
    if (name && email && message) {
      formStatus.textContent = "Message sent! I'll get back to you soon.";
      formStatus.style.color = "green";
      this.reset();
    } else {
      formStatus.textContent = "Please fill in all fields.";
      formStatus.style.color = "red";
    }
  });
  