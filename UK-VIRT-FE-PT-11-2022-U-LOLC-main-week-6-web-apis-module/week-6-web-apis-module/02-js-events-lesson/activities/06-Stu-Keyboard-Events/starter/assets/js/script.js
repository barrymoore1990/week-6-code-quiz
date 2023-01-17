function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  console.log(event);
}

function keyupAction(event) {
  document.querySelector("#status").innerHTML = "KEYUP Event";
  console.log(event);

}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

