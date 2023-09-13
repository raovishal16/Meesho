function onValidate() {
  var tel = document.getElementById("tel").value;
  var regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  var validText = document.getElementById("text_valid");

  var data = "";
  var numberOTP = localStorage.setItem("number", JSON.stringify(tel));
  console.log(numberOTP);
  if (tel.match(regex)) {
    // console.log("demo");
    data += "Verified Successfully";

    validText.style.color = "green";

    var otpRquest = (document.getElementById("tel").innerHTML = Math.floor(
      Math.random() * 9999 + 1000
    ));
    console.log(otpRquest);
    setTimeout(() => {
      window.location.href = "/OTP/otp.html";
    }, 4000);

    var demoOTP = localStorage.setItem("register", JSON.stringify(otpRquest));
    console.log(demoOTP);
  } else {
    // return;
    console.log("else");
    data += "Enter a valid phone number";
    validText.style.color = "red";
  }

  validText.innerHTML = data;
}
var getOtp = JSON.parse(localStorage.getItem("register"));
var getNumber = JSON.parse(localStorage.getItem("number"));
function launch_toast() {
  var x = document.getElementById("toast");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
