// COLOR

function setTheme() {
  var themes = [
    ["#9BEFE2", "invert(11%) sepia(87%) saturate(7340%) hue-rotate(261deg) brightness(81%) contrast(129%)"], // aqua blue, gobalt blue
    ["#3C00E4", "invert(86%) sepia(39%) saturate(317%) hue-rotate(110deg) brightness(99%) contrast(89%)"], // gobalt blue, aqua blue
    ["#C0AFD0", "invert(11%) sepia(87%) saturate(7340%) hue-rotate(261deg) brightness(81%) contrast(129%)"], // laughin lilac
    ["#CFF469", "invert(19%) sepia(28%) saturate(930%) hue-rotate(241deg) brightness(95%) contrast(83%)"], // lime green, midnight purple
    ["#22306D", "invert(94%) sepia(26%) saturate(563%) hue-rotate(59deg) brightness(99%) contrast(87%)"], // marine blue, minty green
    ["#503658", "invert(78%) sepia(27%) saturate(673%) hue-rotate(327deg) brightness(93%) contrast(92%)"], // midnight purple, salmon orange
    ["#ABEDBB", "invert(15%) sepia(38%) saturate(2706%) hue-rotate(212deg) brightness(98%) contrast(94%)"], // minty green, marine blue
    ["#F36EBD", "invert(15%) sepia(38%) saturate(2706%) hue-rotate(212deg) brightness(98%) contrast(94%)"], // pretty pink, marine blue
    ["#E5AB8A", "invert(20%) sepia(16%) saturate(1513%) hue-rotate(241deg) brightness(95%) contrast(86%)"], // salmon orange, midnight purple
    ["#E91229", "invert(88%) sepia(6%) saturate(855%) hue-rotate(306deg) brightness(97%) contrast(101%)"], // screamin red, soft pink
    ["#F8D4D7", "invert(29%) sepia(79%) saturate(7430%) hue-rotate(345deg) brightness(90%) contrast(103%)"] // soft pink, screamin red
  ];

  var theme = themes[Math.floor(Math.random() * themes.length)];
  let foreground = theme[1];
  let background = theme[0];

  document.body.style.backgroundColor = background;
  document.documentElement.style.setProperty('--foreground', foreground);
}

var letterCount = 0;

// SPACING
function countLetters() {
  letterCount = document.getElementsByClassName("letter").length;

  // document.documentElement.style.setProperty('--spacing', (letterCount + "rem"));

  return letterCount;
}


// INPUT - ALPHABET
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

window.addEventListener("keydown", event => {
  for (let i = 0; i < alphabet.length; i++) {
    let letterKeycode = i + 65;
    if (letterKeycode == event.keyCode) {
      var letterLoop = alphabet[i];
      var newLetter = document.createElement("div");
      newLetter.classList.add('letter');
      newLetter.style.backgroundImage = "url('chars/" + letterLoop + ".svg')";

      document.getElementById("wrapper").appendChild(newLetter);
    }
  }
});

// INPUT - NUMBERS
const numbers = "0123456789".split("");

window.addEventListener("keydown", event => {
  for (let i = 0; i < numbers.length; i++) {
    let letterKeycode = i + 48;
    if (letterKeycode == event.keyCode) {
      var letterLoop = numbers[i];
      var newLetter = document.createElement("div");
      newLetter.classList.add('letter');
      newLetter.style.backgroundImage = "url('chars/" + letterLoop + ".svg')";

      document.getElementById("wrapper").appendChild(newLetter);
    }
  }
});

// INPUT - SYMBOLS


// INPUT - DELETE
window.addEventListener('keydown', function(e) {
  if (e.keyCode == 8) {
    var select = document.getElementById("wrapper");
    select.removeChild(select.lastChild);
    letterCount - 1;
  }
});

// INPUT - SPACE
window.addEventListener('keydown', function(e) {
  if (e.keyCode == 32) {
    var newSpace = document.createElement("div");
    newSpace.classList.add('letter');
    newSpace.style.backgroundImage = "url('chars/space.svg')";

    document.getElementById("wrapper").appendChild(newSpace);
  }
});


// INPUT - ENTER
window.addEventListener('keydown', function(e) {
  if (e.keyCode == 13) {
    document.getElementById("wrapper").innerHTML = "";
    setTheme();
  }
});