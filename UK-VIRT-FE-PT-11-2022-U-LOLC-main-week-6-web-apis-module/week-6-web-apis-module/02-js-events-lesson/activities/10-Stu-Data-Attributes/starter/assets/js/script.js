var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function

  if (element.matches(".box")) {
    // Get the current value of the image's data-state attribute
    
    var state = element.textContent = element.getAttribute("data-state");

    if (state === "hidden") {
      element.dataset.state = "visible";
      element.setAttribute("data-state", "visible");
    }
  }

});
