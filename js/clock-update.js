// Assuming prayerTimes is available globally from constants.js (from constants.js)

let currentPrayerCity = localStorage.getItem("prayerCity") || "jakarta";

function renderPrayerTimes(city) {
  const prayerGrid = document.getElementById("prayer-grid");
  if (!prayerGrid) return;

  const times = prayerTimes[city];
  if (!times) {
    console.error(`Prayer times not found for city: ${city}`);
    prayerGrid.innerHTML = `<p class="col-span-3 text-center text-red-500">Jadwal sholat untuk kota ${city} tidak ditemukan.</p>`;
    return;
  }

  prayerGrid.innerHTML = ""; // Clear existing times

  // Define prayer order
  const prayerOrder = ["imsak", "subuh", "dzuhur", "ashar", "maghrib", "isya"];

  prayerOrder.forEach(prayer => {
    const card = document.createElement("div");
    card.className = "prayer-card p-4 text-center";
    card.innerHTML = `
      <p class="text-sm font-semibold capitalize prayer-name-text">${prayer}</p>
      <p class="text-lg font-bold prayer-time-text">${times[prayer]}</p>
    `;
    prayerGrid.appendChild(card);
  });

  // Highlight next prayer (this will be handled by updateNextPrayer)
  // For initial render, we can still call updateNextPrayer to set the highlight
  updateNextPrayer(new Date());
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const clockEl = document.getElementById("clock");
  if (clockEl) {
    clockEl.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  

  const greetingEl = document.getElementById("greeting");
  if (greetingEl) {
    let greeting = "SELAMAT PAGI";

    if (hours >= 11 && hours < 15) {
      greeting = "SELAMAT SIANG";
    } else if (hours >= 15 && hours < 18) {
      greeting = "SELAMAT SORE";
    } else if (hours >= 18 || hours < 1) {
      greeting = "SELAMAT MALAM";
    }

    greetingEl.textContent = greeting;
  }

  updateNextPrayer(now);
  updateRamadanProgress(now);
}


function updateRamadanProgress(now) {
  const ramadanStart = new Date(2026, 1, 19); // Feb 19, 2026 (example, from current system date context)
  const ramadanEnd = new Date(2026, 2, 20); // Mar 20, 2026 (approx 30 days later)

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


function updateNextPrayer(now) {
  const prayerGrid = document.getElementById("prayer-grid");
  if (!prayerGrid) return;

  // Remove existing 'next-prayer' class
  const activeCards = prayerGrid.querySelectorAll(".prayer-card.next-prayer");
  activeCards.forEach(card => card.classList.remove("next-prayer"));

  const times = prayerTimes[currentPrayerCity]; // Use currentPrayerCity
  if (!times) {
    console.error(`Prayer times not found for city: ${currentPrayerCity} in updateNextPrayer`);
    return;
  }

  const prayerNames = ["imsak", "subuh", "dzuhur", "ashar", "maghrib", "isya"];
  let nextPrayer = null;
  let minDiff = Infinity;

  for (const prayer of prayerNames) {
    const [hour, minute] = times[prayer].split(":").map(Number);
    let prayerTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0);

    // If prayer time has passed for today, consider it for tomorrow
    if (prayerTime < now) {
      prayerTime.setDate(prayerTime.getDate() + 1);
    }

    const diff = prayerTime.getTime() - now.getTime();

    if (diff > 0 && diff < minDiff) {
      minDiff = diff;
      nextPrayer = prayer;
    }
  }

  if (nextPrayer) {
    const nextPrayerCard = prayerGrid.querySelector(`.prayer-card:nth-child(${prayerNames.indexOf(nextPrayer) + 1})`);
    if (nextPrayerCard) {
      nextPrayerCard.classList.add("next-prayer");
    }

    const countdownEl = document.getElementById("countdown");
    if (countdownEl) {
      const hours = Math.floor(minDiff / (1000 * 60 * 60));
      const minutes = Math.floor((minDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((minDiff % (1000 * 60)) / 1000);
      countdownEl.textContent = `${hours}j ${minutes}m ${seconds}d Menuju ${nextPrayer.toUpperCase()}`;
    }

    // Update Maghrib Countdown
    const maghribTimeStr = times["maghrib"];
    const [maghribHour, maghribMinute] = maghribTimeStr.split(":").map(Number);
    let maghribTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), maghribHour, maghribMinute, 0);

    // If Maghrib has passed for today, consider it for tomorrow
    if (maghribTime < now) {
        maghribTime.setDate(maghribTime.getDate() + 1);
    }

    const maghribDiff = maghribTime.getTime() - now.getTime();
    const maghribCountdownEl = document.getElementById("maghrib-countdown");
    if (maghribCountdownEl) {
        if (maghribDiff > 0) {
            const m_hours = Math.floor(maghribDiff / (1000 * 60 * 60));
            const m_minutes = Math.floor((maghribDiff % (1000 * 60 * 60)) / (1000 * 60));
            const m_seconds = Math.floor((maghribDiff % (1000 * 60)) / 1000);
            maghribCountdownEl.textContent = `${m_hours}j ${m_minutes}m ${m_seconds}d`;
        } else {
            maghribCountdownEl.textContent = "Sudah Waktu Berbuka";
        }
    }

  } else {
    // No next prayer found (should not happen if all prayers are listed)
    const countdownEl = document.getElementById("countdown");
    if (countdownEl) countdownEl.textContent = "Tidak ada jadwal sholat";
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    updateClock(); // This will call updateNextPrayer(now)
    setInterval(updateClock, 1000);

    const citySelect = document.getElementById("city-select");
    if (citySelect) {
      // Set initial value based on localStorage or default
      citySelect.value = currentPrayerCity;
      renderPrayerTimes(currentPrayerCity);

      citySelect.addEventListener("change", () => {
        currentPrayerCity = citySelect.value;
        localStorage.setItem("prayerCity", currentPrayerCity);
        renderPrayerTimes(currentPrayerCity); // Re-render with new city
      });
    }

    // Also update the settings modal dropdown with the saved city
    const settingsLocation = document.getElementById("user-location");
    if(settingsLocation) {
        settingsLocation.value = currentPrayerCity;
        // Add event listener for settings modal too, so it updates if changed there
        settingsLocation.addEventListener("change", () => {
            currentPrayerCity = settingsLocation.value;
            localStorage.setItem("prayerCity", currentPrayerCity);
            renderPrayerTimes(currentPrayerCity);
        });
    }
  });
}
