$(".marquee").marquee({
  duration: 10000,
  gap: 0,
  delayBeforeStart: 0,
  direction: "left",
  duplicated: true,
});
$(".marquee-reverse").marquee({
  duration: 11000,
  gap: 0,
  delayBeforeStart: 0,
  direction: "right",
  duplicated: true,
});
 
$(document).ready(function () {
  $(".individual-faq").click(function () {
    $(".individual-faq").removeClass("full-faq");
    // $(".tab").addClass("active"); // instead of this do the below
    $(this).addClass("full-faq");
  });
});
let thisFunc=(e)=>{
  console.log(e);
}
function myFunction() {
  var val = document.getElementById("slider").value; //gets the oninput value
  document.getElementById("output").innerHTML = "$"+val; //displays this value to the html page
}
function myFunction2() {
  var val = document.getElementById("slider2").value; //gets the oninput value
  document.getElementById("output2").innerHTML = val; //displays this value to the html page
}

let sendit = () => {
  const fname = document.getElementById("form-field-name");
  const lname = document.getElementById("form-field-field_37b26c2");
  const phoneNum = document.getElementById("phoneNum");
  const EmailAdress = document.getElementById("form-field-email");
  const businessName = document.getElementById("businessName");
  const businessAddress = document.getElementById("businessAddress");
  const businessType = document.getElementById("businessType");
  const businessState = document.getElementById("businessState");
  const Country = document.getElementById("Country");
  const locNum = document.getElementById("locNum");
  const businessZip = document.getElementById("businessZip");
  const submit = document.getElementById("submit");

  let ebody = `
  <span>First Name: </span> ${fname.value}
  <br>
  <span>Last Name: </span> ${lname.value}
  <br>
  <span>Email Address: </span> ${EmailAdress.value}
  <br>
  <span>phone Number: </span> ${phoneNum.value}
  <br>
  <span>business Name: </span> ${businessName.value}
  <br>
  <span>business Address: </span> ${businessAddress.value}
  <br>
  <span>business Type: </span> ${businessType.value}
  <br>
  <span>business State: </span> ${businessState.value}
  <br>
  <span>Country: </span> ${Country.value}
  <br>
  <span>location Number: </span> ${locNum.value}
  <br>
  <span>business Zip: </span> ${businessZip.value}
  `;

  Email.send({
    SecureToken: "750609cb-037c-4496-815c-936265d4ff8c",
    To: "support@startsizzle.com",
    From: "support@startsizzle.com",
    Subject: "Sizzle email",
    Body: ebody,
  }).then((message) => {
    if (message === "OK") {
      let btnSub = document.getElementById("btnSub");
      alert(
        "Thank you for contacting us, we have received your email and will contact you soon"
      );
      window.location.reload();
    } else {
      alert(message);
    }
  });
};
