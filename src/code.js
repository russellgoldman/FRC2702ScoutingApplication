document.addEventListener("DOMContentLoaded", function(){

hideSection("preGame");

});

function getRadioVal(form, name) {
    var val;
    var radios = form.elements[name];
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) {
            val = radios[i].value;
            break;
        }
    }
    return val;
}

function joinText(elements) {
  return elements.join('|');
}

function myFunction() {
  var form = document.getElementById('scoutForm');
  var elements = [];
  elements.push(Date.now());
  elements.push(document.getElementById('matchNumber').value);
  elements.push(document.getElementById("teamNumber").value);
  elements.push(getRadioVal(form, "allianceColour"));
  elements.push(getRadioVal(form, "autoLine"));
  elements.push(document.getElementById("autoSwitch").value);
  elements.push(document.getElementById("autoScale").value);
  elements.push(document.getElementById("autoCubesCollected").value);
  elements.push(document.getElementById("teleopCubesCollected").value);
  elements.push(document.getElementById("teleopSwitch").value);
  elements.push(document.getElementById("teleopScale").value);
  elements.push(document.getElementById("teleopExchange").value);
  elements.push(getRadioVal(form, "climb"));
  elements.push(getRadioVal(form, "support"));
  elements.push(document.getElementById("fouls").value);
  elements.push(document.getElementById("techFouls").value);
  elements.push(getRadioVal(form, "cardReceived"));
  elements.push(document.getElementById("comments").value);

  document.getElementById("qrcode").innerHTML = "";

  var qrcode = new QRCode(document.getElementById("qrcode"), {
  	text: joinText(elements),
  	width: 256,
  	height: 256,
  	colorDark : "#000000",
  	colorLight : "#ffffff",
  	correctLevel : QRCode.CorrectLevel.H
  });
  window.scrollTo(0, 0);
}

function valueChange(input_field,delta) {
  var inputobject = document.getElementById(input_field);
  var newValue = parseInt(inputobject.value) + delta;
  inputobject.value = Math.max(newValue, 0);
  return false;
}

function hideSection(section) {
  var elements = document.getElementsByClassName("sections");
  for(var i=0;i<elements.length;i++){
    elements[i].style.display="none";
  }
  var shownSection =  document.getElementById(section);
  shownSection.style.display="block";
}
