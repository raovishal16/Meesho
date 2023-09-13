function onOtpValidate() {
  var input = document.getElementById("OTP").value;
  var otpValidate = document.getElementById("text");
  var pattern = /^[0-9]+$/;
  var data = "";
  if (!input) {
    data += "Enter 4 digit OTP";
    otpValidate.style.color = "red";
  } else {
    if (input.match(pattern)) {
      data += "Verified Successfully";
      otpValidate.style.color = "green";
    } else {
      data += "Enter Only Digit";
      otpValidate.style.color = "red";
    }
  }

  otpValidate.innerHTML = data;
}
function onResend() {
  var sendOTP;
  var timeOnResend = 60;

  var timer = timeOnResend;
  onCountDown(timer);

  sendOTP = setInterval(function () {
    timer--;
    onCountDown(timer);
    if (timer <= 0) {
      clearInterval(sendOTP);
    }
  }, 1000);
}

function onCountDown(timer) {
  var timeDisplay = document.getElementById("count");
  timeDisplay.innerHTML = `Resend OTP in ${timer} seconds`;
}

var getOtp = JSON.parse(localStorage.getItem("register"));
var getNumber = JSON.parse(localStorage.getItem("number"));
document.getElementById("number").innerHTML = getNumber;
var arr = String(getOtp);
var data = arr.split("");

console.log(data, "one");
setTimeout(() => {
  document.getElementById("OTP1").value = data[0];
  document.getElementById("OTP2").value = data[1];
  document.getElementById("OTP3").value = data[2];
  document.getElementById("OTP4").value = data[3];
}, 5000);
