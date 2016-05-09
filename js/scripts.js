//
// var random = getRandomInt();
// console.log(random);
//
// window.onload = function() {
//
//   function generateImage() {
//     for (i = 1; i <= 9; i++) {
//       document.getElementById("a" + i).style.backgroundImage = "url('img/" + random + ".jpg')";
//     }
//
//   }
//   setTimeout(generateImage, 1000);
//
// }

var rotate = false;
function setbackground() {
  window.setTimeout( setbackground, 1000);
  var newImage = rotate ? 'url(img/' + 1 +'.jpg)' : 'url(img/' + 2 + '.jpg)';
  rotate = !rotate;
  document.getElementById('a1').style.backgroundImage = newImage;
}

function getRandomInt() {
 return Math.floor(Math.random() * (17) + 1);
}
