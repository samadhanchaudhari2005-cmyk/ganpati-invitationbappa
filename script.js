// 🎵 Background Music
window.onload = function () {
  const music = document.getElementById("bgmusic");
  if (music) {
    music.volume = 0.5;

    // कई ब्राउज़र ऑटो-प्ले ब्लॉक करते हैं।
    document.body.addEventListener(
      "click",
      function () {
        music.play().catch(() => {});
      },
      { once: true }
    );
  }
};

// ⏳ Countdown Timer
const targetDate = new Date("2026-09-14T11:00:00").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const countdown = document.getElementById("countdown");
  if (!countdown) return;

  if (distance <= 0) {
    countdown.innerHTML = "🙏 श्री गणेश उत्सव प्रारंभ हो चुका है 🙏";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML =
    `${days} दिन ${hours} घंटे ${minutes} मिनट ${seconds} सेकंड`;
}, 1000);

// 🌸 Flower Animation
setInterval(function () {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.innerHTML = "🌸";

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 3 + Math.random() * 4 + "s";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 7000);
}, 300);

// 📤 Share Button
function shareInvite() {
  if (navigator.share) {
    navigator.share({
      title: "🙏 श्री गणेश उत्सव 2026 🙏",
      text:
        "✨ पाटील परिवार की ओर से श्री गणेश उत्सव में आपका हार्दिक स्वागत है।",
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("निमंत्रण लिंक कॉपी हो गया है।");
  }
}
