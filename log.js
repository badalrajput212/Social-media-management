document.querySelector(".login").onclick = () => {
  const Username = document.getElementById("Username");
  const password = document.getElementById("password");
 
  if (Username.value === "admin" && password.value === "808080") {
    window.location.href = "website.html"; // Redirect if valid
  } else {
    Username.style.border = "2px solid red";

    password.style.border = "2px solid red"; // Red border if invalid
  }
};
