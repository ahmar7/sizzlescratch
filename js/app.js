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
let thisFunc = (e) => {
  console.log(e);
};
function myFunction() {
  var price = document.getElementById("slider").value;
  var day = document.getElementById("slider2").value;
  var finalprice = document.getElementById("finalprice");

  let newVal = price * day * 365;
  document.getElementById("output").innerHTML = "$" + price;
  let finalVal = Math.sign(newVal) * (Math.abs(newVal) / 1000);
  let nowFinal = Math.round(finalVal);
  console.log(nowFinal);
  finalprice.innerHTML = "$" + nowFinal + "K";
}
function myFunction2() {
  var day = document.getElementById("slider2").value;
 
  var price = document.getElementById("slider").value;
  var finalprice = document.getElementById("finalprice");
  let newVal = price * day * 365;
  document.getElementById("output2").innerHTML = day;
  let finalVal = Math.sign(newVal) * (Math.abs(newVal) / 1000);
  let nowFinal = Math.round(finalVal);
  console.log(nowFinal);
  finalprice.innerHTML = "$" + nowFinal + "K";
}
// 
var videoPlayButton,

videoWrapper = document.getElementsByClassName('video-wrapper')[0],

video = document.getElementsByTagName('video')[0],

videoMethods = {

renderVideoPlayButton: function() {

if (videoWrapper.contains(video)) {

this.formatVideoPlayButton()

video.classList.add('has-media-controls-hidden')

videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]

videoPlayButton.addEventListener('click', this.hideVideoPlayButton)

}
this.hideVideoPlayButton()
},

 

hideVideoPlayButton: function() {

video.play()

videoPlayButton.classList.add('is-hidden')

video.classList.remove('has-media-controls-hidden')
 

}

}

videoMethods.renderVideoPlayButton()
// 
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
