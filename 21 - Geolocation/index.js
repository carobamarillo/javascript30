const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed');

navigator.geolocation.watchPosition(
  data => {
    speed.textContent = Math.floor(data.coords.speed);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  err => {
    alert('Wow dude!');
  }
);
