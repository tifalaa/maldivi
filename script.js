function onButtonClick() {
  alert("clicked");
  console.log("funkcionise");
}

const button = document.querySelector("button");
button.addEventListener("click", onButtonClick);

$("#arrow").click(function() {
  document.getElementById("scrollHere").scrollIntoView( {behavior: "smooth" })
})