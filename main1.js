var colorButton = document.getElementById("colorButton");
var myParagraph = document.getElementById("myParagraph");

colorButton.addEventListener("click", function() {
  if (myParagraph.classList.contains("orange-text")) {
    myParagraph.classList.remove("orange-text");
    myParagraph.classList.add("purple-text");
  } else {
    myParagraph.classList.remove("purple-text");
    myParagraph.classList.add("orange-text");
  }
});

// Cambiar el color a naranja una vez que se cargue la página
myParagraph.classList.remove("orange-text");
myParagraph.classList.add("purple-text");
