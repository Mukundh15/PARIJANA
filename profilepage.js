// Load User Data on Page Load
window.onload = function() {
    const userData = {
      name: localStorage.getItem("userName") || "John Doe",
      email: localStorage.getItem("userEmail") || "user@example.com",
      phone: localStorage.getItem("userPhone") || "123-456-7890"
    };
  
    document.getElementById("name").value = userData.name;
    document.getElementById("email").value = userData.email;
    document.getElementById("phone").value = userData.phone;
  };
  
  // Update Profile Function
  function updateProfile() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPhone", phone);
  
    alert("Profile updated successfully!");
  }
  
  // Change Password Function
  function changePassword() {
    const currentPassword = document.getElementById("current-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    const storedPassword = "password"; 
  
    if (currentPassword !== storedPassword) {
      alert("Current password is incorrect!");
      return;
    }
  
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
  
    localStorage.setItem("userPassword", newPassword);
    alert("Password changed successfully!");
  }
  
  // Logout Function
  function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
  }
  