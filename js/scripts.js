function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function() {

  function generateImage() {
    var div = getRandomInt(1, 9);
    var img = getRandomInt(1, 17);

    var divBackground = document.getElementById("a" + div).style.backgroundImage;
    var imgChosen = "url('img/" + img + ".jpg')";

    if ( divBackground != imgChosen) {
      divBackground = imgChosen;
    } else {
      divBackground = "url('img/" + img + 1 + ".jpg')"
    }
  }

  setInterval(generateImage, 3000);

}

//
