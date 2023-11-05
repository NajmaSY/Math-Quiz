console.log("Game page works");

// const username = localStorage.setItem("username")
// const inputName = document.getElementById("username")

// function setName() {
//   inputName.innerText = localStorage.getElementById("username");
// }

document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("username");
  const usernameDisplay = document.getElementById("usernameDisplay");

  if (username) {
    usernameDisplay.innerText = "Hello, " + username + "!";
  } else {
    usernameDisplay.innerText = "Hello, Guest!";
  }
});
