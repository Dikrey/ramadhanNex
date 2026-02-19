/* ============================================================
   NEW FEATURES — Ramadan Elite v3.0
   - Iftar Countdown Timer
   - Quran Verse of the Day (flip animation)
   - Mini Murottal Player (visualizer)
   ============================================================ */

/* ============================================================
   ⏱️ 1. IFTAR / MAGHRIB COUNTDOWN TIMER
   ============================================================ */
(function initIftarCountdown() {
  // Fallback times — MUST match servers.js prayerTimes exactly
  const MAGHRIB_FALLBACK = {
    medan: "18:42",
    jakarta: "18:05",
    surabaya: "17:48",
    bandung: "18:07",
    yogyakarta: "17:50",
    makassar: "18:00",
    palembang: "18:08",
    semarang: "17:51",
    denpasar: "18:10",
    aceh: "18:30",
    pekanbaru: "18:18",
    padang: "18:25",
  };

  function getMaghribTime() {
    const city = (localStorage.getItem("prayerCity") || "medan").toLowerCase();
    // Priority 1: use global prayerTimes from servers.js (always in sync)
    if (
      typeof prayerTimes !== "undefined" &&
      prayerTimes[city] &&
      prayerTimes[city].maghrib
    ) {
      return prayerTimes[city].maghrib;
    }
    // Priority 2: fallback table
    return MAGHRIB_FALLBACK[city] || MAGHRIB_FALLBACK["medan"];
  }

  function updateIftarCountdown() {
    const maghribStr = getMaghribTime();
    const [mHour, mMin] = maghribStr.split(":").map(Number);

    const now = new Date();
    const maghribToday = new Date();
    maghribToday.setHours(mHour, mMin, 0, 0);

    // Fajr (Imsak estimate) for full-day range
    const fajrToday = new Date();
    fajrToday.setHours(4, 30, 0, 0); // rough estimate

    let diffMs = maghribToday - now;
    const totalDayMs = maghribToday - fajrToday;

    const hoursEl = document.getElementById("iftar-hours");
    const minutesEl = document.getElementById("iftar-minutes");
    const secondsEl = document.getElementById("iftar-seconds");
    const progressFill = document.getElementById("iftar-progress-fill");
    const progressGlow = document.getElementById("iftar-progress-glow");
    const statusBadge = document.getElementById("iftar-badge-text");
    const maghribTimeEl = document.getElementById("iftar-maghrib-time");

    if (maghribTimeEl) maghribTimeEl.textContent = maghribStr;

    if (diffMs <= 0) {
      // Iftar time has passed!
      if (hoursEl) hoursEl.textContent = "00";
      if (minutesEl) minutesEl.textContent = "00";
      if (secondsEl) secondsEl.textContent = "00";
      if (progressFill) progressFill.style.width = "100%";
      if (progressGlow) progressGlow.style.left = "calc(100% - 8px)";
      if (statusBadge) statusBadge.textContent = "🎉 Sudah Berbuka!";

      // Add celebration class
      const row = document.getElementById("iftar-countdown-row");
      if (row) row.classList.add("iftar-celebrate");
      return;
    }

    const totalSec = Math.floor(diffMs / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;

    const pad = (n) => String(n).padStart(2, "0");

    if (hoursEl) hoursEl.textContent = pad(h);
    if (minutesEl) minutesEl.textContent = pad(m);
    if (secondsEl) secondsEl.textContent = pad(s);

    // Progress = time elapsed / total day
    const elapsed = totalDayMs - diffMs;
    const pct = Math.min(100, Math.max(0, (elapsed / totalDayMs) * 100));
    if (progressFill) progressFill.style.width = pct + "%";
    if (progressGlow) progressGlow.style.left = `calc(${pct}% - 8px)`;

    // Status label
    if (statusBadge) {
      if (h === 0 && m < 30) {
        statusBadge.textContent = "🔥 Sebentar Lagi!";
      } else if (h === 0) {
        statusBadge.textContent = "⏳ Hampir Tiba";
      } else {
        statusBadge.textContent = "🌙 Bersabar Yuk";
      }
    }
  }

  // Animate digit flip on change
  let prevH, prevM, prevS;
  function animateDigit(el, newVal) {
    if (!el || el.textContent === newVal) return;
    el.classList.add("iftar-digit-flip");
    el.textContent = newVal;
    setTimeout(() => el.classList.remove("iftar-digit-flip"), 400);
  }

  function tickWithAnimation() {
    const now = new Date();
    const maghribStr = getMaghribTime();
    const [mHour, mMin] = maghribStr.split(":").map(Number);
    const maghrib = new Date();
    maghrib.setHours(mHour, mMin, 0, 0);
    const diff = Math.max(0, Math.floor((maghrib - now) / 1000));
    const h = Math.floor(diff / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;
    const pad = (n) => String(n).padStart(2, "0");

    animateDigit(document.getElementById("iftar-hours"), pad(h));
    animateDigit(document.getElementById("iftar-minutes"), pad(m));
    animateDigit(document.getElementById("iftar-seconds"), pad(s));

    updateIftarCountdown();
  }

  // Run immediately and every second
  document.addEventListener("DOMContentLoaded", () => {
    updateIftarCountdown();
    setInterval(tickWithAnimation, 1000);
  });
})();

/* ============================================================
   📖 2. QURAN VERSE OF THE DAY
   ============================================================ */
(function initQuranVerse() {
  const VERSES = [
    {
      arabic:
        "شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ",
      translation:
        "Bulan Ramadan adalah bulan diturunkannya Al-Quran sebagai petunjuk bagi manusia...",
      source: "QS. Al-Baqarah (2:185)",
    },
    {
      arabic: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ",
      translation:
        "Sesungguhnya Kami telah menurunkannya (Al-Quran) pada malam kemuliaan.",
      source: "QS. Al-Qadr (97:1)",
    },
    {
      arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
      translation:
        "Dan apabila hamba-hamba-Ku bertanya kepadamu tentang Aku, maka sesungguhnya Aku dekat.",
      source: "QS. Al-Baqarah (2:186)",
    },
    {
      arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
      translation: "Sesungguhnya Allah bersama orang-orang yang sabar.",
      source: "QS. Al-Baqarah (2:153)",
    },
    {
      arabic: "وَبَشِّرِ الصَّابِرِينَ",
      translation:
        "Dan sampaikanlah kabar gembira kepada orang-orang yang sabar.",
      source: "QS. Al-Baqarah (2:155)",
    },
    {
      arabic:
        "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
      translation:
        "Ya Tuhan kami, berikanlah kami kebaikan di dunia dan kebaikan di akhirat.",
      source: "QS. Al-Baqarah (2:201)",
    },
    {
      arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
      translation:
        "Ingatlah Aku, niscaya Aku akan mengingat kalian. Bersyukurlah kepada-Ku dan janganlah kufur.",
      source: "QS. Al-Baqarah (2:152)",
    },
    {
      arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      translation: "Sesungguhnya sesudah kesulitan itu ada kemudahan.",
      source: "QS. Al-Insyirah (94:6)",
    },
  ];

  let currentVerseIdx = 0;
  let isFlipping = false;

  // Pick today's verse based on day of year
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000,
  );
  currentVerseIdx = dayOfYear % VERSES.length;

  function renderVerse(idx, animate = false) {
    const verse = VERSES[idx];
    if (!verse) return;

    const arabicEl = document.getElementById("quran-arabic");
    const translEl = document.getElementById("quran-translation");
    const sourceEl = document.getElementById("quran-source");
    const dots = document.querySelectorAll(".quran-dot");
    const flipInner = document.getElementById("quran-flip-inner");

    if (animate && flipInner) {
      flipInner.classList.add("quran-flipping");
      setTimeout(() => {
        if (arabicEl) arabicEl.textContent = verse.arabic;
        if (translEl) translEl.textContent = `"${verse.translation}"`;
        if (sourceEl) sourceEl.textContent = verse.source;
        flipInner.classList.remove("quran-flipping");
        flipInner.classList.add("quran-flip-in");
        setTimeout(() => flipInner.classList.remove("quran-flip-in"), 500);
      }, 300);
    } else {
      if (arabicEl) arabicEl.textContent = verse.arabic;
      if (translEl) translEl.textContent = `"${verse.translation}"`;
      if (sourceEl) sourceEl.textContent = verse.source;
    }

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === idx % dots.length);
    });
  }

  window.refreshQuranVerse = function () {
    if (isFlipping) return;
    isFlipping = true;

    const icon = document.getElementById("quran-refresh-icon");
    if (icon) icon.style.animation = "spin 0.6s linear";

    currentVerseIdx = (currentVerseIdx + 1) % VERSES.length;
    renderVerse(currentVerseIdx, true);

    setTimeout(() => {
      if (icon) icon.style.animation = "";
      isFlipping = false;
    }, 700);
  };

  // Auto-rotate every 30 seconds
  let autoRotate = setInterval(() => {
    currentVerseIdx = (currentVerseIdx + 1) % VERSES.length;
    renderVerse(currentVerseIdx, true);
  }, 30000);

  document.addEventListener("DOMContentLoaded", () => {
    renderVerse(currentVerseIdx, false);
  });
})();

/* ============================================================
   🎵 3. MINI MUROTTAL PLAYER
   ============================================================ */
(function initMurottalPlayer() {
  const TRACKS = [
    {
      title: "Al-Fatihah — Mishary Rashid",
      src: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3",
      surah: "Al-Fatihah",
    },
    {
      title: "Al-Kahfi 1-10 — Mishary Rashid",
      src: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/018.mp3",
      surah: "Al-Kahfi",
    },
    {
      title: "Ar-Rahman — Mishary Rashid",
      src: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/055.mp3",
      surah: "Ar-Rahman",
    },
    {
      title: "Al-Mulk — Mishary Rashid",
      src: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/067.mp3",
      surah: "Al-Mulk",
    },
    {
      title: "Yasin — Mishary Rashid",
      src: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/036.mp3",
      surah: "Yasin",
    },
  ];

  let currentTrack = 0;
  let isPlaying = false;
  let audioEl = null;

  function getAudio() {
    if (!audioEl) audioEl = document.getElementById("murottal-audio");
    return audioEl;
  }

  function setTrack(idx, autoplay = false) {
    currentTrack = ((idx % TRACKS.length) + TRACKS.length) % TRACKS.length;
    const track = TRACKS[currentTrack];
    const audio = getAudio();
    if (!audio) return;

    audio.src = track.src;
    audio.load();

    // Update title
    const titleEl = document.getElementById("murottal-title");
    if (titleEl) {
      titleEl.classList.add("murottal-title-swap");
      setTimeout(() => {
        titleEl.textContent = track.title;
        titleEl.classList.remove("murottal-title-swap");
      }, 200);
    }

    // Update track btn highlight
    document.querySelectorAll(".murottal-track-btn").forEach((btn) => {
      btn.classList.toggle(
        "active",
        parseInt(btn.dataset.idx) === currentTrack,
      );
    });

    if (autoplay) {
      audio
        .play()
        .then(() => setPlayState(true))
        .catch(() => setPlayState(false));
    } else {
      setPlayState(false);
    }
  }

  function setPlayState(playing) {
    isPlaying = playing;
    const icon = document.getElementById("murottal-play-icon");
    const btn = document.getElementById("murottal-play-btn");
    const viz = document.getElementById("murottal-visualizer");

    if (icon) icon.className = playing ? "fas fa-pause" : "fas fa-play";
    if (btn) btn.classList.toggle("playing", playing);
    if (viz) viz.classList.toggle("active", playing);
  }

  window.toggleMurottal = function () {
    const audio = getAudio();
    if (!audio) return;

    if (!audio.src || audio.src === window.location.href) {
      setTrack(currentTrack, true);
      return;
    }

    if (isPlaying) {
      audio.pause();
      setPlayState(false);
    } else {
      audio
        .play()
        .then(() => setPlayState(true))
        .catch((err) => {
          console.warn("Murottal play error:", err);
          if (typeof showToast === "function")
            showToast("Gagal memutar, cek koneksi internet", "error");
        });
    }
  };

  window.selectMurottal = function (idx) {
    setTrack(idx, isPlaying);
  };

  window.nextMurottal = function () {
    setTrack(currentTrack + 1, isPlaying);
  };

  window.prevMurottal = function () {
    setTrack(currentTrack - 1, isPlaying);
  };

  window.setMurottalVolume = function (val) {
    const audio = getAudio();
    if (audio) audio.volume = val / 100;
  };

  // Auto-advance to next track
  document.addEventListener("DOMContentLoaded", () => {
    const audio = getAudio();
    if (audio) {
      audio.addEventListener("ended", () => {
        setTrack(currentTrack + 1, true);
      });
      audio.addEventListener("error", () => {
        setPlayState(false);
        if (typeof showToast === "function")
          showToast("Gagal memuat audio murottal", "error");
      });
    }
  });
})();

/* ============================================================
   🌟 4. GLOBAL UI ENHANCEMENTS
   ============================================================ */
(function globalUIEnhancements() {
  // Animated scroll reveal for all cards
  function initScrollReveal() {
    const cards = document.querySelectorAll(
      ".glass-card, .luxury-clock-card, .iftar-countdown-card, .quran-verse-card, .murottal-card",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    cards.forEach((card) => observer.observe(card));
  }

  // Floating star particles in header
  function createStarParticle() {
    const container = document.getElementById("particles");
    if (!container) return;

    const star = document.createElement("div");
    star.className = "star-particle";
    star.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      animation-duration: ${Math.random() * 4 + 3}s;
      animation-delay: ${Math.random() * 3}s;
    `;
    container.appendChild(star);
    setTimeout(() => star.remove(), 8000);
  }

  // Add smooth page-in animation on load — apply to scroll-wrapper NOT body
  // (transform on body would break position:fixed for nav and FAB!)
  function pageLoadAnimation() {
    const wrapper = document.getElementById("scroll-wrapper") || document.body;
    wrapper.style.opacity = "0";
    requestAnimationFrame(() => {
      wrapper.style.transition = "opacity 0.7s ease";
      wrapper.style.opacity = "1";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    pageLoadAnimation();
    initScrollReveal();
    setInterval(createStarParticle, 600);
  });
})();

/* ============================================================
   🧭 5. ELITE BOTTOM NAV — Sliding Pill Indicator
   ============================================================ */
function eliteNavInit() {
  const nav = document.getElementById("bottom-nav");
  if (!nav) return;

  const pill = document.getElementById("elite-nav-pill");
  const items = nav.querySelectorAll(".elite-nav-item");

  function movePill(activeItem) {
    if (!pill || !activeItem) return;
    const navRect = nav.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();
    const left = itemRect.left - navRect.left;
    const width = itemRect.width;
    pill.style.left = left + "px";
    pill.style.width = width + "px";
  }

  function triggerIconJump(item) {
    if (!item) return;
    // Remove class, force reflow, re-add to retrigger animation
    item.classList.remove("icon-jump");
    void item.offsetWidth;
    item.classList.add("icon-jump");
    setTimeout(() => item.classList.remove("icon-jump"), 600);
  }

  // Initial pill position — wait for layout
  const initPill = () => {
    const activeOnLoad = nav.querySelector(".elite-nav-item.active");
    if (activeOnLoad) movePill(activeOnLoad);
  };
  requestAnimationFrame(() => requestAnimationFrame(initPill));
  // Also try after fonts/images loaded
  window.addEventListener("load", initPill, { once: true });

  // On click: move pill + trigger icon jump
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const prev = nav.querySelector(".elite-nav-item.active");
      if (prev === item) return; // already active
      items.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      movePill(item);
      triggerIconJump(item);
    });
  });

  // Recalculate on resize / orientation change
  window.addEventListener("resize", () => {
    const active = nav.querySelector(".elite-nav-item.active");
    if (active) movePill(active);
  });

  // EXPOSED: called from showTab() in servers.js
  window.eliteNavMovePill = function (tabId) {
    const target = document.getElementById("nav-" + tabId);
    if (!target) return;
    items.forEach((i) => i.classList.remove("active"));
    target.classList.add("active");
    movePill(target);
    triggerIconJump(target);
  };
}

// Also hook into existing showTab if it exists
if (typeof window !== "undefined") {
  const _origShowTab = window.showTab;
  window.showTab = function (tabId) {
    if (typeof _origShowTab === "function") _origShowTab(tabId);
    if (typeof window.eliteNavMovePill === "function")
      window.eliteNavMovePill(tabId);
  };
}
