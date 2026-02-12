// ============================================
// CLOCK & GREETING UPDATE
// ============================================
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Update clock display
  const clockEl = document.getElementById("clock");
  if (clockEl) {
    clockEl.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  // Update greeting based on time
  const greetingEl = document.getElementById("greeting");
  if (greetingEl) {
    let greeting = "SELAMAT PAGI"; // 01:00 - 10:59

    if (hours >= 11 && hours < 15) {
      greeting = "SELAMAT SIANG"; // 11:00 - 14:59
    } else if (hours >= 15 && hours < 18) {
      greeting = "SELAMAT SORE"; // 15:00 - 17:59
    } else if (hours >= 18 || hours < 1) {
      greeting = "SELAMAT MALAM"; // 18:00 - 00:59
    }

    greetingEl.textContent = greeting;
  }

  // Update next prayer
  updateNextPrayer(now);

  // Update Ramadan progress
  updateRamadanProgress(now);
}

function updateRamadanProgress(now) {
  const ramadanStart = new Date(2026, 1, 28); // Feb 28, 2026 (example)
  const ramadanEnd = new Date(2026, 2, 29); // Mar 29, 2026

  const totalDays = 30;
  const daysPassed =
    Math.floor((now - ramadanStart) / (1000 * 60 * 60 * 24)) + 1;
  const currentDay = Math.max(1, Math.min(daysPassed, totalDays));
  const progress = (currentDay / totalDays) * 100;

  const dayEl = document.getElementById("ramadan-day");
  const barEl = document.getElementById("ramadan-bar");
  const percentEl = document.getElementById("ramadan-percentage");

  if (dayEl) dayEl.textContent = `Hari ${currentDay}/30`;
  if (barEl) barEl.style.width = `${progress}%`;
  if (percentEl) percentEl.textContent = `${Math.round(progress)}%`;
}

// Initialize clock on page load
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    updateClock();
    setInterval(updateClock, 1000);
  });
}
