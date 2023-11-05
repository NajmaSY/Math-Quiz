console.log("Hello World");

function handleStartButtonClick(event) {
  event.preventDefault();
  const nameInput = document.getElementById("username");
  const username = nameInput.value;

  //save name to local storage
  localStorage.setItem("username", username);

  //when the button is clicked go to game page
  window.location.href = event.target.form.action;
}

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", handleStartButtonClick);

// function saveName() {
//   const username = document.getElementById("username").value;
//   localStorage.setItem("username", username); // Save username to local storage
//   window.location.href = "game.html"; // Redirect to game.html
// }
