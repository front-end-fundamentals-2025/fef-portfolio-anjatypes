const submitButton = document.getElementById("submit-button");
const headerElement = document.querySelector(".form-header");
const formElement = document.querySelector("form");

submitButton.addEventListener("click", function (event) {
  event.preventDefault(); /* found on https://www.w3schools.com/Jsref/event_preventdefault.asp */
  headerElement.innerText = "Thank You!";
  formElement.style.display = "none";

  console.log("submitted");
});
