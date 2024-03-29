var buttons = document.getElementsByClassName("appointment-btn");
for (var i = 0; i < buttons.length; i++) {
  if(buttons[i]) {
    buttons[i].addEventListener("click", function() {
      window.location.href = 'contactschedule.html';
    });
  }
}

// Set the date we're counting down to
var countDownDate1 = new Date("Jun 30, 2023 15:37:25").getTime();
var countDownDate2 = new Date("Jun 30, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance1 = countDownDate1 - now;
  var distance2 = countDownDate2 - now;

  // Time calculations for days, hours, minutes and seconds
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

   // Display the result in the corresponding element
   if(document.getElementById("countdown1")) {
    document.getElementById("countdown1").innerHTML = days1 + "d " + hours1 + "h "
    + minutes1 + "m " + seconds1 + "s ";
  }
  
  if(document.getElementById("countdown2")) {
    document.getElementById("countdown2").innerHTML = days2 + "d " + hours2 + "h "
    + minutes2 + "m " + seconds2 + "s ";
  }
 
   // If the countdown is finished, write some text 
   if (distance1 < 0) {
     clearInterval(x);
     document.getElementById("countdown1").innerHTML = "EXPIRED";
   }
 
   if (distance2 < 0) {
     clearInterval(x);
     document.getElementById("countdown2").innerHTML = "EXPIRED";
   }
 }, 1000);



window.onload = function() {
  var headers = document.getElementsByClassName("collapsible-header");
  for (let i = 0; i < headers.length; i++) {
    if(headers[i]) {
      headers[i].addEventListener("click", function() {
          var content = this.nextElementSibling;

          if (content) {
              if (content.style.height){
                  content.style.height = null;
              } else {
                  content.style.height = content.scrollHeight + "px";
              }
          }
      });
    }
}
}

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}
