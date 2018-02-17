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
