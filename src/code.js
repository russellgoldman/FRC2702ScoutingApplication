// Sliders text.
document.addEventListener("DOMContentLoaded", function(){
var sliders = ["ownershipScaleId","ownershipSwitchId","teleScaleId","teleSwitchId"];
/*
for (var i = 0; i < sliders.length; i++) {
  // get slider HTML object by id
  var slider = document.getElementById(sliders[i]);
  // get span HTML object by id
  var output = document.getElementById(sliders[i] + 'Value');
  // displaying slider value to browser
  output.innerHTML = slider.value;
  // slider.oninput is run whenever the slider value is changed
  slider.oninput = function() {
    var output = document.getElementById(this.id + 'Value');
    output.innerHTML = this.value;
  }
}
*/
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

function joinText(elements){
  return elements.join('|');
}

function addRowToTable(tableName) {
  console.log(tableName)
    var table = document.getElementById(tableName);
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = '<input type="text" class="' + tableName + '" value=""/>';
    cell2.innerHTML = '<input type="text" class="' + tableName + '" value=""/>';
}

function myFunction() {
  var form = document.getElementById('scoutForm');
  var elements = []
  elements.push(Date.now())
  elements.push(document.getElementById("teamNumberId").value)
  elements.push(getRadioVal(form, "allianceColour"));
  elements.push(getRadioVal(form, "autoline"));
  elements.push(document.getElementById("ownershipScaleId").value)
  elements.push(document.getElementById("ownershipSwitchId").value)
  elements.push(document.getElementById("teleScaleId").value)
  elements.push(document.getElementById("teleSwitchId").value)
  elements.push(getRadioVal(form, "levitate"));
  elements.push(getRadioVal(form, "force"));
  elements.push(getRadioVal(form, "boost"));
  elements.push(getRadioVal(form, "levitateActivated"));
  elements.push(getRadioVal(form, "forceActivated"));
  elements.push(getRadioVal(form, "boostActivated"));
  elements.push(getRadioVal(form, "parkAchieved"));
  elements.push(getRadioVal(form, "climbAchieved"));
  elements.push(document.getElementById("foulId").value)
  elements.push(document.getElementById("techFoulId").value)

  elements.push(getRadioVal(form, "yellowCardReceived"));
  elements.push(getRadioVal(form, "redCardReceived"));
  elements.push(getRadioVal(form, "disabled"));
  elements.push(getRadioVal(form, "disqualified"));
  elements.push(getRadioVal(form, "winTieLoss"));
  elements.push(document.getElementById("finalScoreId").value)
  elements.push(document.getElementById("commentId").value)

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
  alert(elements);
}
