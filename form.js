const txtName = document.getElementById("name");
const txtPhnNum = document.getElementById("phnNum");
const txtAge = document.getElementById("age");
const btnSubmit = document.getElementById("sub");
const btnFakeSub = document.getElementById("fakeSub");
const btnAgeAdd = document.getElementById("ageAdd");
const btnAgeSub = document.getElementById("ageSub");
const divValid = document.getElementById("valid");
const slider = document.getElementById("slider");
const txtMsg = document.getElementById("msg");

let noBlindingColors = true;

txtMsg.addEventListener("focusout", showSubmitBtn, false);

btnAgeAdd.addEventListener("click", () => {
  txtAge.value = parseInt(txtAge.value) + 1;
});

btnAgeSub.addEventListener("click", () => {
  txtAge.value = parseInt(txtAge.value) - 1;
});

slider.addEventListener("change", () => {
  txtPhnNum.value = slider.value;
});

btnFakeSub.addEventListener("mouseover", randomMove, false);

txtName.addEventListener("keyup", reset, false);

function randomMove() {
  btnFakeSub.style.marginLeft = Math.random() * 200 + "px";
  btnFakeSub.style.marginTop = Math.random() * 200 + "px";
}

function showColorFlash() {
  if (noBlindingColors) {
    alert("I hear people hate pop-ups!!");
    alert("Also they don't like bright colors flashing?");
    alert("But you chose a wrong fav color, and this form is from HELL!");
    changeBkgroundCol();
    noBlindingColors = false;
  }
}

function showSubmitBtn() {
  if (
    txtMsg.value.trim() ==
    "Let me submit! I will give you a good grade for this assignment!"
  ) {
    btnSubmit.style.display = "block";
  }
}

function reset() {
  this.setSelectionRange(0, 0);
}

function validate() {
  divValid.innerHTML = "";
  const valid =
    validateAge() &&
    validatePhn() &&
    validateRadio() &&
    validateName() &&
    validateEmail();
  if (valid) {
    alert(
      "Congrats, you survived (submitted) the form! Please pardon my audacity displayed in this form. :P"
    );
  }
}

function validateRadio() {
  if (noBlindingColors) {
    divValid.innerHTML += "Colors are supposed to be pleasant! :P<br>";
  }
  return !noBlindingColors;
}

function validatePhn() {
  if (txtPhnNum.value.length != 10) {
    divValid.innerHTML += "Even POTUS has a 10 digit phone number!<br>";
    return false;
  }
  return true;
}

function validateName() {
  if (txtName.value.length != 0) {
    divValid.innerHTML += "No name??<br>";
    return false;
  }
  return true;
}

function validateEmail() {
  if (txtName.value.length != 0) {
    divValid.innerHTML += "Email required??<br>";
    return false;
  }
  return true;
}

function validateAge() {
  if (txtAge.value < 1) {
    divValid.innerHTML += "Seriously?? You ain't born yet??<br>";
    return false;
  } else if (txtAge.value < 18) {
    divValid.innerHTML += "Please don't kid yourself!<br>";
    return false;
  } else if (txtAge.value < 31) {
    divValid.innerHTML += "Oh you wish you were that young!<br>";
    return false;
  }
  return true;
}

function changeBkgroundCol() {
  const colors = [
    "red",
    "blue",
    "green",
    "pink",
    "gray",
    "#673ab7",
    "#76ff03",
    "#ffff00",
    "#ff3d00"
  ];
  const rand = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[rand];
  setTimeout("changeBkgroundCol()", 300);
}
