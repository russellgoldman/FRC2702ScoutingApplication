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

function myFunction() {
  var form = document.getElementById('scoutForm');
  var elements = []

  elements.push(document.getElementById("teamNumberId").value)
  elements.push(getRadioVal(form, "allianceColour"));
  elements.push(getRadioVal(form, "autoline"));
  //new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
  document.getElementById("qrcode").innerHTML = "";

  var qrcode = new QRCode(document.getElementById("qrcode"), {
  	text: joinText(elements),
  	width: 256,
  	height: 256,
  	colorDark : "#000000",
  	colorLight : "#ffffff",
  	correctLevel : QRCode.CorrectLevel.H
  });

  alert(elements);
}
