function copyToClipboard(text) {
  var sampleTextarea = document.createElement("textarea");
  document.body.appendChild(sampleTextarea);
  sampleTextarea.value = text; //save main text in it
  sampleTextarea.select(); //select textarea contenrs
  document.execCommand("copy");
  document.body.removeChild(sampleTextarea);
}

function myFunction() {
  var copyText = document.querySelectorAll(".email")[0];
  copyToClipboard(copyText.textContent);
  console.log(copyText.textContent);
  document.querySelector(".tooltipTop").style.opacity = "1";
  setTimeout(function () {
    document.querySelector(".tooltipTop").style.opacity = "0";
  }, 2000);
}

function myFunction2() {
  var copyText = document.querySelectorAll(".email")[1];
  copyToClipboard(copyText.textContent);
  console.log(copyText.textContent);
  document.querySelector(".tooltipBot").style.opacity = "1";
  setTimeout(function () {
    document.querySelector(".tooltipBot").style.opacity = "0";
  }, 2000);
}
