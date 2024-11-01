const countDownDate = new Date("Jan 1, 2025 23:59:59").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();
  
  const distance = countDownDate - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".title").innerText = "We Are Here!";
    document.querySelector(".countdown").style.display = "none";
    document.querySelector(".btn").style.display = "none";
    document.getElementById("contact-form").style.display = "none";
  }
}, 1000);
