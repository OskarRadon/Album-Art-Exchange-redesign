function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function() {

  function generateImage() {
    var div = getRandomInt(1, 9);
    var img = getRandomInt(1, 17);
    document.getElementById("a" + div).style.backgroundImage = "url('img/" + img + ".jpg')";
  }

  setInterval(generateImage, 3000);

}
