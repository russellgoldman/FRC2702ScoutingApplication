document.addEventListener("DOMContentLoaded", function(){

var tables = ["autoScale","autoSwitch","teleopScale","teleopSwitch"];

for (var j of tables) {
  var elements = document.getElementsByClassName(j);
  for (let i = 0; i < elements.length; i++) {
    var obj = elements[i];
    obj.onchange = function() {
      var output = document.getElementById(this.className + 'Value');
      output.innerHTML = GetValuesOfClass(this.className);
    }
  }
}

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

function addRowToTable(tableName) {
    var table = document.getElementById(tableName);
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var input1 = document.createElement("input");
    input1.type = "text";
    input1.className = tableName;
    var input2 = document.createElement("input");
    input2.type = "text";
    input2.className = tableName;
    cell1.appendChild(input1);
    cell2.appendChild(input2);
    input1.onchange = function() {
      var output = document.getElementById(this.className + 'Value');
      output.innerHTML = GetValuesOfClass(this.className);
    }
    input2.onchange = function() {
      var output = document.getElementById(this.className + 'Value');
      output.innerHTML = GetValuesOfClass(this.className);
    }
}

function GetValuesOfClass(className) {
    var elements = document.getElementsByClassName(className);
    let total = 0;
    let temp_total = 0;
    for (let i = 0; i < elements.length; i++) {
      let obj = elements[i];
      if (obj.value != '') {
        if(i % 2 == 0) {
          temp_total = obj.value;
        } else {
          total += (temp_total - obj.value);
          temp_total = 0;
        }
      }
    }
    return total;
}

function myFunction() {
  var form = document.getElementById('scoutForm');
  var elements = [];
  elements.push(Date.now());
  elements.push(document.getElementById("teamNumberId").value);
  elements.push(getRadioVal(form, "allianceColour"));
  elements.push(getRadioVal(form, "autoline"));

  elements.push(GetValuesOfClass('autoScale'));
  elements.push(GetValuesOfClass('autoSwitch'));
  elements.push(GetValuesOfClass('teleopScale'));
  elements.push(GetValuesOfClass('teleopSwitch'));

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
  elements.push(document.getElementById("finalScoreId").value);
  elements.push(document.getElementById("commentId").value);

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
