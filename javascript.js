var inputOneIsOn = false;
var inputTwoIsOn = false;
var img1 = "https://2013110993.github.io/FoC/images/on.png";
var img2 = "https://2013110993.github.io/FoC/images/off.png";

function toggleImage() {
  var imgElement = document.getElementById("toggleImage");
  imgElement.src = imgElement.src === img1 ? img2 : img1;
}

function toggleImage2() {
  var imgElement = document.getElementById("toggleImage2");
  console.log(imgElement.src);
  imgElement.src = imgElement.src === img1 ? img2 : img1;
}

function toggleInputOne() {
  inputOneIsOn = !inputOneIsOn;
}

function toggleInputTwo() {
  inputTwoIsOn = !inputTwoIsOn;
}

function and() {
  var a = inputOneIsOn;
  var b = inputTwoIsOn;

  console.log("Input one is on: ", inputOneIsOn);

  console.log("Input two is on: ", inputTwoIsOn);

  if (inputOneIsOn && inputTwoIsOn)
    document.getElementById("andGate").src = "images/and2on.png";
  else if (!inputOneIsOn && inputTwoIsOn)
    document.getElementById("andGate").src = "images/andoffon.png";
  else if (inputOneIsOn && !inputTwoIsOn)
    document.getElementById("andGate").src = "images/andonoff.png";
  else if (!inputOneIsOn && !inputTwoIsOn)
    document.getElementById("andGate").src = "images/and2off.png";
}
