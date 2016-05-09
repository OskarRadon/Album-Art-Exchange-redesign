window.onload = function() {

  function getRandomInt() {
    return Math.floor(Math.random() * (18) + 1);
  }

  var random = getRandomInt();
  console.log(random);

  function generateImage() {
    for (i = 1; i <= 9; i++) {
      document.getElementByClassName("album").style.backgroundImage = "url('1.jpg')";
    }

  }
  setTimeout(generateImage, 1000);

}
