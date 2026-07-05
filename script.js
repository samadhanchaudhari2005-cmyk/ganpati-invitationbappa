// 🎵 Background Music
window.onload = function () {
  const music = document.getElementById("bgmusic");
  if (music) {
    music.volume = 0.5;
    music.play().catch(() => {});
  }
};

// ⏳ Countdown Timer
const targetDate = new Date("September 14, 2026 11:00:00").getTime();

setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML =
      "🙏 गणपति बाप्पा मोरया 🙏";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days} Days ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// 🌸 Flower Animation
setInterval(() => {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.innerHTML = "🌸";

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 6000);

}, 250);

// 📤 Share Button
function shareInvite() {
  if (navigator.share) {
    navigator.share({
      title: "श्री गणेश उत्सव 2026",
      text: "🙏 श्री गणेश उत्सव 2026 में आपका हार्दिक स्वागत है।",
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("Invitation Link Copied");
  }
}
// Welcome Popup
setTimeout(() => {
  alert("🙏 श्री गणेश उत्सव 2026 🙏\n\n✨ पाटील परिवार आपका हार्दिक स्वागत करता है ✨");
}, 1200);
