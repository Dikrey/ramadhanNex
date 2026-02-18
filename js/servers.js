// ============================================
// DATA CONFIGURATION
// ============================================
const prayerTimes = {
  medan: {
    imsak: "05:12",
    subuh: "05:22",
    dzuhur: "12:43",
    ashar: "16:00",
    maghrib: "18:42",
    isya: "19:51",
  },
  jakarta: {
    imsak: "04:38",
    subuh: "04:48",
    dzuhur: "12:05",
    ashar: "15:17",
    maghrib: "18:05",
    isya: "19:15",
  },
  bandung: {
    imsak: "04:40",
    subuh: "04:50",
    dzuhur: "12:07",
    ashar: "15:19",
    maghrib: "18:07",
    isya: "19:17",
  },
  surabaya: {
    imsak: "04:25",
    subuh: "04:35",
    dzuhur: "11:52",
    ashar: "15:04",
    maghrib: "17:52",
    isya: "19:02",
  },
  yogyakarta: {
    imsak: "04:32",
    subuh: "04:42",
    dzuhur: "11:59",
    ashar: "15:11",
    maghrib: "17:59",
    isya: "19:09",
  },
  
};

const dailyQuotes = [
  {
    text: "Barangsiapa yang menghidupkan bulan Ramadan dengan iman dan mengharap pahala, maka diampunilah dosa-dosanya yang telah lalu.",
    source: "HR. Bukhari & Muslim",
  },
  {
    text: "Puasa itu perisai, maka apabila salah seorang di antara kalian berpuasa, janganlah ia berkata keji dan berteriak-teriak.",
    source: "HR. Bukhari",
  },
  {
    text: "Sebaik-baik amal perbuatan adalah shalat pada waktunya.",
    source: "HR. Bukhari & Muslim",
  },
  {
    text: "Sedekah itu dapat menghapus dosa sebagaimana air memadamkan api.",
    source: "HR. Tirmidzi",
  },
  {
    text: "Barangsiapa memberi makan orang yang berpuasa, maka baginya pahala seperti pahala orang yang berpuasa tanpa dikurangi sedikitpun.",
    source: "HR. Tirmidzi",
  },
];

const duas = [
  {
    title: "Doa Buka Puasa",
    arabic:
      "اَللّٰهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
    latin: "Allahumma laka shumtu wa bika amantu wa 'ala rizqika afthartu",
    meaning:
      "Ya Allah, untuk-Mu aku berpuasa, kepada-Mu aku beriman, dan dengan rezeki-Mu aku berbuka.",
  },
  {
    title: "Doa Sahur",
    arabic: "بِسْمِ اللهِ وَعَلَى بَرَكَةِ اللهِ",
    latin: "Bismillahi wa 'ala barakatillah",
    meaning: "Dengan nama Allah dan dengan berkah Allah.",
  },
  {
    title: "Doa Setelah Makan",
    arabic:
      "اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ",
    latin: "Alhamdulillahilladhi ath'amana wa saqana wa ja'alana muslimin",
    meaning:
      "Segala puji bagi Allah yang telah memberi makan dan minum kepada kami, serta menjadikan kami orang-orang Islam.",
  },
  {
    title: "Doa Masuk Masjid",
    arabic: "اَللّٰهُمَّ افْتَحْ لِيْ أَبْوَابَ رَحْمَتِكَ",
    latin: "Allahumma iftah li abwaba rahmatik",
    meaning: "Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.",
  },
  {
    title: "Doa Keluar Masjid",
    arabic: "اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ مِنْ فَضْلِكَ",
    latin: "Allahumma inni as'aluka min fadlik",
    meaning: "Ya Allah, sesungguhnya aku memohon kepada-Mu dari karunia-Mu.",
  },
];

const hadiths = [
  {
    text: "Rasulullah SAW bersabda: 'Barangsiapa yang mendirikan Lailatul Qadr karena iman dan mengharap pahala, maka diampunilah dosa-dosanya yang telah lalu.'",
    source: "HR. Bukhari & Muslim",
  },
  {
    text: "'Barangsiapa yang shalat malam di bulan Ramadan karena iman dan mengharap pahala, maka diampunilah dosa-dosanya yang telah lalu.'",
    source: "HR. Bukhari & Muslim",
  },
  {
    text: "'Barangsiapa yang memberi makan orang yang berpuasa, maka baginya pahala seperti pahala orang yang berpuasa tersebut, tanpa dikurangi sedikitpun dari pahalanya.'",
    source: "HR. Tirmidzi",
  },
  {
    text: "'Allah tidak menyia-nyiakan pahala orang yang berbuat kebaikan.'",
    source: "HR. Bukhari",
  },
  {
    text: "'Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya.'",
    source: "HR. Thabrani",
  },
];

const asmaulHusna = [
  { no: 1, name: "Allah", meaning: "Allah" },
  { no: 2, name: "Ar-Rahman", meaning: "Maha Pengasih" },
  { no: 3, name: "Ar-Rahim", meaning: "Maha Penyayang" },
  { no: 4, name: "Al-Malik", meaning: "Maha Raja" },
  { no: 5, name: "Al-Quddus", meaning: "Maha Suci" },
  { no: 6, name: "As-Salam", meaning: "Maha Memberi Kesejahteraan" },
  { no: 7, name: "Al-Mu'min", meaning: "Maha Memberi Keamanan" },
  { no: 8, name: "Al-Muhaimin", meaning: "Maha Pengawas" },
  { no: 9, name: "Al-Aziz", meaning: "Maha Perkasa" },
  { no: 10, name: "Al-Jabbar", meaning: "Maha Kuasa" },
  { no: 11, name: "Al-Mutakabbir", meaning: "Maha Megah" },
  { no: 12, name: "Al-Khaliq", meaning: "Maha Pencipta" },
];

const articles = [
  {
    title: "Keutamaan Bulan Ramadan",
    summary:
      "Ramadan adalah bulan penuh berkah dimana Al-Quran diturunkan. Bulan ini adalah kesempatan emas untuk meningkatkan ibadah dan mendekatkan diri kepada Allah SWT.",
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&h=250&fit=crop",
  },
  {
    title: "Amalan Sunnah di Ramadan",
    summary:
      "Selain puasa wajib, ada banyak amalan sunnah yang bisa kita lakukan seperti tadarus, tarawih, dan memperbanyak sedekah untuk meraih pahala berlipat ganda.",
    image:
      "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400&h=250&fit=crop",
  },
  {
    title: "Mencari Lailatul Qadr",
    summary:
      "Lailatul Qadr adalah malam yang lebih baik dari seribu bulan. Carilah di 10 malam terakhir Ramadan, terutama pada malam-malam ganjil.",
    image:
      "https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=400&h=250&fit=crop",
  },
  {
    title: "Adab Berbuka Puasa",
    summary:
      "Berbuka puasa memiliki adab tersendiri. Segerakan berbuka saat waktu maghrib tiba, mulai dengan yang manis seperti kurma, dan jangan berlebihan.",
    image:
      "https://images.unsplash.com/photo-1610465299996-e4558eecfb8b?w=400&h=250&fit=crop",
  },
  {
    title: "Zakat Fitrah dan Zakat Mal",
    summary:
      "Zakat fitrah wajib dikeluarkan sebelum sholat Idul Fitri, sedangkan zakat mal dikeluarkan jika harta telah mencapai nisab dan haul.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop",
  },
];

const achievements = [
  {
    id: "first_streak",
    icon: "🔥",
    name: "Api Pertama",
    desc: "Streak pertama kali",
    unlocked: false,
  },
  {
    id: "streak_7",
    icon: "⚡",
    name: "7 Hari Berturut",
    desc: "Streak 7 hari",
    unlocked: false,
  },
  {
    id: "streak_30",
    icon: "👑",
    name: "Ramadan Master",
    desc: "Streak 30 hari",
    unlocked: false,
  },
  {
    id: "quran_100",
    icon: "📖",
    name: "Pembaca Setia",
    desc: "Baca 100 halaman Quran",
    unlocked: false,
  },
  {
    id: "quran_khatam",
    icon: "📚",
    name: "Khatam Quran",
    desc: "Selesai khatam Quran",
    unlocked: false,
  },
  {
    id: "dzikir_1000",
    icon: "📿",
    name: "Dzikir 1000x",
    desc: "Total dzikir 1000x",
    unlocked: false,
  },
  {
    id: "sedekah_10",
    icon: "💝",
    name: "Derawan",
    desc: "Sedekah 10 kali",
    unlocked: false,
  },
  {
    id: "tarawih_100",
    icon: "🌙",
    name: "Tarawih 100 Rakaat",
    desc: "Total 100 rakaat tarawih",
    unlocked: false,
  },
];

const dzikirList = [
  {
    title: "Dzikir Pagi",
    time: "Setelah Subuh",
    items: [
      "Subhanallah (33x)",
      "Alhamdulillah (33x)",
      "Allahuakbar (33x)",
      "La ilaha illallah (10x)",
    ],
  },
  {
    title: "Dzikir Sore",
    time: "Setelah Ashar",
    items: [
      "Subhanallah (33x)",
      "Alhamdulillah (33x)",
      "Allahuakbar (33x)",
      "La ilaha illallah (10x)",
    ],
  },
  { title: "Istighfar", time: "Kapan saja", items: ["Astaghfirullah (100x)"] },
  { title: "Shalawat", time: "Kapan saja", items: ["Shalawat Nabi (100x)"] },
];

// ============================================
// STATE MANAGEMENT
// ============================================
let state = {
  streak: 0,
  lastAbsen: null,
  tasbih: 0,
  tasbihTotal: 0,
  tasbihRounds: 0,
  dzikirType: "subhanallah",
  targets: {},
  targetHistory: {},
  isDead: false,
  history: [],
  mood: null,
  journals: [],
  quranPages: 0,
  quranBookmarks: [],
  waterGlasses: 0,
  sedekahTotal: 0,
  tarawihTotal: 0,
  tarawihDays: 0,
  achievements: achievements,
  xp: 0,
  level: 1,
  settings: {
    name: "Pengguna",
    location: "jakarta",
    prayerNotification: true,
    sahurReminder: true,
    darkMode: false,
  },
  fastingDays: [],
  sleepData: [],
  dzikirStreak: 0,
  lastDzikirDate: null,
  moodHistory: [],
  notificationsShown: {}, // Track which prayer notifications have been shown
};

let charts = {};
let particlesInitialized = false;

// ============================================
// DARK MODE FUNCTIONS
// ============================================
function applyDarkMode() {
  if (state.settings.darkMode) {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }
}

// ============================================
// PRAYER NOTIFICATION
// ============================================
function showPrayerNotification(message, icon = "fa-bell", playSound = false) {
  const container = document.getElementById("prayer-notification-container");
  const iconEl = document.getElementById("prayer-notification-icon");
  const textEl = document.getElementById("prayer-notification-text");

  if (container && iconEl && textEl) {
    iconEl.className = `fas ${icon}`;
    textEl.textContent = message;
    container.classList.add("show");

    if (playSound && navigator.vibrate) {
      navigator.vibrate([200, 100, 200]);
    }

    setTimeout(() => {
      container.classList.remove("show");
    }, 5000);
  }
}

function closePrayerNotification() {
  const container = document.getElementById("prayer-notification-container");
  if (container) {
    container.classList.remove("show");
  }
}

// ============================================
// INITIALIZATION
// ============================================
window.onload = () => {
  loadState();
  applyDarkMode(); // Apply dark mode on load
  initializeParticles();
  renderAll();
  checkStreakStatus();
  updateClock();
  setInterval(updateClock, 1000);
  initCharts();
};

function loadState() {
  const saved = localStorage.getItem("ramadan_nexus_state");
  if (saved) {
    const parsed = JSON.parse(saved);
    state = { ...state, ...parsed };
  }
}

function saveState() {
  localStorage.setItem("ramadan_nexus_state", JSON.stringify(state));
}

function initializeParticles() {
  if (particlesInitialized) return;
  const container = document.getElementById("particles");
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 8 + "s";
    particle.style.animationDuration = 8 + Math.random() * 4 + "s";
    container.appendChild(particle);
  }
  particlesInitialized = true;
}

// ============================================
// RENDER FUNCTIONS
// ============================================
function renderAll() {
  renderPrayerTimes();
  renderTargets();
  renderWaterDrops();
  renderAchievements();
  renderDuaList();
  renderHadithList();
  renderAsmaulHusna();
  renderLast10Nights();
  renderDzikirList();
  renderJournalEntries();
  renderQuranBookmarks();
  renderFastingCalendar();
  renderArticles();
  renderDailyPlan();
  updateUI();
}

function renderPrayerTimes() {
  const grid = document.getElementById("prayer-grid");
  const location = state.settings.location;
  const times = prayerTimes[location];

  grid.innerHTML = Object.entries(times)
    .map(([name, time]) => {
      let iconClass = "";
      let bgColorClass = "";
      switch (name) {
        case "imsak":
          iconClass = "fa-moon";
          bgColorClass = "bg-blue-100 text-blue-600";
          break;
        case "subuh":
          iconClass = "fa-cloud-sun";
          bgColorClass = "bg-indigo-100 text-indigo-600";
          break;
        case "dzuhur":
          iconClass = "fa-sun";
          bgColorClass = "bg-yellow-100 text-yellow-600";
          break;
        case "ashar":
          iconClass = "fa-cloud";
          bgColorClass = "bg-orange-100 text-orange-600";
          break;
        case "maghrib":
          iconClass = "fa-cloud-moon";
          bgColorClass = "bg-rose-100 text-rose-600";
          break;
        case "isya":
          iconClass = "fa-star";
          bgColorClass = "bg-purple-100 text-purple-600";
          break;
        default:
          iconClass = "fa-mosque";
          bgColorClass = "bg-gray-100 text-gray-600";
      }

      return `
                    <div class="prayer-card p-4 rounded-2xl flex flex-col items-center justify-center relative hover:scale-105 transition-transform duration-300 cursor-pointer" id="prayer-${name}" onclick="showPrayerDetails(this, '${name}', '${time}')">
                        <div class="w-10 h-10 rounded-full ${bgColorClass} flex items-center justify-center text-xl mb-2">
                            <i class="fas ${iconClass}"></i>
                        </div>
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">${name}</span>
                        <span class="text-lg font-bold mt-1 block">${time}</span>
                    </div>
                `;
    })
    .join("");
}

function renderTargets() {
  const list = document.getElementById("target-list");
  const today = new Date().toDateString();
  const todayTargets = state.targetHistory[today] || {
    sholat: { done: false, time: null },
    quran: { done: false, pages: 0, time: null },
    sedekah: { done: false, amount: 0, time: null },
    tarawih: { done: false, rakaat: 0, time: null },
    dzikir: { done: false, count: 0, time: null },
    sahur: { done: false, time: null },
    buka: { done: false, time: null },
    tadarus: { done: false, time: null },
  };

  const targetItems = [
    {
      id: "sholat",
      label: "Sholat 5 Waktu",
      icon: "fa-mosque",
      color: "emerald",
    },
    {
      id: "quran",
      label: "Baca Al-Quran",
      icon: "fa-book-quran",
      color: "amber",
    },
    { id: "sedekah", label: "Sedekah", icon: "fa-heart", color: "rose" },
    {
      id: "tarawih",
      label: "Sholat Tarawih",
      icon: "fa-moon",
      color: "indigo",
    },
    {
      id: "dzikir",
      label: "Dzikir Pagang & Sore",
      icon: "fa-hands-praying",
      color: "purple",
    },
    { id: "sahur", label: "Sahur", icon: "fa-utensils", color: "orange" },
    {
      id: "buka",
      label: "Buka Puasa Tepat Waktu",
      icon: "fa-calendar-check",
      color: "teal",
    },
    {
      id: "tadarus",
      label: "Tadarus Masjid",
      icon: "fa-book-open",
      color: "cyan",
    },
  ];

  list.innerHTML = targetItems
    .map((item) => {
      const isDone = todayTargets[item.id]?.done || false;
      const timeInfo = todayTargets[item.id]?.time
        ? `<span class="text-[10px] text-slate-400">${todayTargets[item.id].time}</span>`
        : "";
      return `
                    <div class="flex items-center justify-between p-4 glass-card rounded-2xl cursor-pointer hover:scale-[1.01] transition-transform" onclick="toggleTarget('${item.id}')">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-${item.color}-100 flex items-center justify-center">
                                <i class="fas ${item.icon} text-${item.color}-500"></i>
                            </div>
                            <div>
                                <span class="font-semibold text-sm">${item.label}</span>
                                ${timeInfo}
                            </div>
                        </div>
                        <div class="target-checkbox ${isDone ? "checked" : ""}" id="target-check-${item.id}"></div>
                    </div>
                `;
    })
    .join("");

  updateDailyProgress();
}

function renderWaterDrops() {
  const container = document.getElementById("water-drops");
  let html = "";
  for (let i = 0; i < 8; i++) {
    const filled = i < state.waterGlasses;
    html += `<div class="water-drop ${filled ? "filled" : ""}" onclick="toggleWater(${i})"></div>`;
  }
  container.innerHTML = html;

  document.getElementById("water-ml").textContent =
    state.waterGlasses * 250 + " ml";
  document.getElementById("water-count").textContent =
    state.waterGlasses + "/8";
}

function renderAchievements() {
  const grid = document.getElementById("achievements-grid");
  grid.innerHTML = state.achievements
    .map(
      (a) => `
                <div class="achievement-badge ${a.unlocked ? "unlocked" : "locked"}" title="${a.name}: ${a.desc}">
                    ${a.icon}
                </div>
            `,
    )
    .join("");
}

function renderDuaList() {
  const container = document.getElementById("dua-list");
  container.innerHTML = duas
    .map(
      (d) => `
                <div class="glass-card p-4 rounded-2xl">
                    <h4 class="font-bold text-amber-600 mb-2">${d.title}</h4>
                    <p class="text-lg text-right leading-loose mb-2" style="font-family: 'Amiri', serif;">${d.arabic}</p>
                    <p class="text-sm text-slate-500 italic mb-1">${d.latin}</p>
                    <p class="text-sm text-slate-600">${d.meaning}</p>
                </div>
            `,
    )
    .join("");
}

function renderHadithList() {
  const container = document.getElementById("hadith-list");
  container.innerHTML = hadiths
    .map(
      (h) => `
                <div class="glass-card p-4 rounded-2xl">
                    <p class="text-slate-700 italic mb-2">"${h.text}"</p>
                    <p class="text-sm font-semibold text-amber-600">${h.source}</p>
                </div>
            `,
    )
    .join("");
}

function renderAsmaulHusna() {
  const grid = document.getElementById("asmaul-husna-grid");
  grid.innerHTML = asmaulHusna
    .map(
      (a) => `
                <div class="glass-card p-3 text-center rounded-2xl">
                    <span class="text-xs text-slate-400">${a.no}</span>
                    <p class="font-bold text-amber-600 text-sm">${a.name}</p>
                    <p class="text-[10px] text-slate-500">${a.meaning}</p>
                </div>
            `,
    )
    .join("");
}

function renderLast10Nights() {
  const container = document.getElementById("last10-nights");
  const nights = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  container.innerHTML = nights
    .map((n) => {
      const isOdd = n % 2 !== 0;
      return `
                    <div class="flex items-center justify-between p-4 glass-card rounded-2xl ${isOdd ? "border-l-4 border-amber-400" : ""}">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl ${isOdd ? "bg-amber-100" : "bg-slate-100"} flex items-center justify-center font-bold ${isOdd ? "text-amber-600" : "text-slate-600"}">${n}</div>
                            <div>
                                <p class="font-semibold">Malam ke-${n}</p>
                                <p class="text-xs text-slate-500">${isOdd ? "Malam ganjil - Kemungkinan Lailatul Qadr" : "Malam genap"}</p>
                            </div>
                        </div>
                        <input type="checkbox" class="w-5 h-5 accent-amber-500" ${state.fastingDays.includes(n) ? "checked" : ""} onchange="toggleLast10Night(${n})">
                    </div>
                `;
    })
    .join("");
}

function renderDzikirList() {
  const container = document.getElementById("dzikir-list");
  container.innerHTML = dzikirList
    .map(
      (d) => `
                <div class="glass-card p-4 rounded-2xl">
                    <div class="flex justify-between items-center mb-2">
                        <h4 class="font-bold text-slate-700">${d.title}</h4>
                        <span class="text-xs text-slate-500">${d.time}</span>
                    </div>
                    <ul class="text-sm text-slate-600 space-y-1">
                        ${d.items.map((i) => `<li class="flex items-center gap-2"><i class="fas fa-check text-emerald-500 text-xs"></i>${i}</li>`).join("")}
                    </ul>
                </div>
            `,
    )
    .join("");
}

function renderJournalEntries() {
  const container = document.getElementById("journal-entries");
  if (state.journals.length === 0) {
    container.innerHTML =
      '<p class="text-center text-slate-400 py-8">Belum ada journal. Mulai menulis!</p>';
    return;
  }
  container.innerHTML = state.journals
    .slice()
    .reverse()
    .map(
      (j) => `
                <div class="journal-entry">
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-xs text-slate-500">${j.date}</span>
                        <span class="text-lg">${j.mood || ""}</span>
                    </div>
                    <p class="text-slate-700">${j.text}</p>
                </div>
            `,
    )
    .join("");
}

function renderQuranBookmarks() {
  const container = document.getElementById("quran-bookmarks");
  if (state.quranBookmarks.length === 0) {
    container.innerHTML =
      '<p class="text-center text-slate-400 py-4">Belum ada bookmark</p>';
    return;
  }
  container.innerHTML = state.quranBookmarks
    .map(
      (b) => `
                <div class="flex items-center justify-between p-3 glass-card rounded-xl">
                    <div>
                        <p class="font-semibold">${b.surah}</p>
                        <p class="text-xs text-slate-500">Ayat ${b.ayah}</p>
                    </div>
                    <button onclick="removeBookmark('${b.id}')" class="text-rose-500 hover:text-rose-600">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `,
    )
    .join("");
}

function renderFastingCalendar() {
  const container = document.getElementById("fasting-calendar");
  const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  let html = days
    .map(
      (d) =>
        `<div class="text-center text-xs font-bold text-slate-400 py-2">${d}</div>`,
    )
    .join("");

  for (let i = 1; i <= 30; i++) {
    const isFasting = state.fastingDays.includes(i);
    const today = new Date().getDate();
    const isToday = i === today;
    html += `<div class="calendar-day ${isFasting ? "fasting" : ""} ${isToday ? "today" : ""}" onclick="toggleFastingDay(${i})">${i}</div>`;
  }
  container.innerHTML = html;
}

function renderArticles() {
  const container = document.getElementById("article-list");
  if (container) {
    container.innerHTML = articles
      .map(
        (article) => `
                    <div class="article-card">
                        <img src="${article.image}" alt="${article.title}" class="article-image"/>
                        <div class="article-content">
                            <h4>${article.title}</h4>
                            <p>${article.summary}</p>
                        </div>
                    </div>
                `,
      )
      .join("");
  }
}

function renderDailyPlan() {
  const container = document.getElementById("daily-plan-list");
  const times = prayerTimes[state.settings.location];
  const plan = [
    {
      time: times.subuh,
      title: "Sholat Subuh & Dzikir Pagi",
      icon: "fa-cloud-sun",
    },
    { time: "06:00", title: "Tadarus Al-Quran", icon: "fa-book-quran" },
    { time: times.dzuhur, title: "Sholat Dzuhur", icon: "fa-sun" },
    {
      time: times.ashar,
      title: "Sholat Ashar & Dzikir Sore",
      icon: "fa-cloud",
    },
    {
      time: times.maghrib,
      title: "Buka Puasa & Sholat Maghrib",
      icon: "fa-cloud-moon",
    },
    { time: times.isya, title: "Sholat Isya & Tarawih", icon: "fa-star" },
  ];

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  if (container) {
    container.innerHTML = plan
      .map((item) => {
        const [h, m] = item.time.split(":").map(Number);
        const itemMinutes = h * 60 + m;
        const isCompleted = currentMinutes > itemMinutes;
        return `
                        <div class="daily-plan-item ${isCompleted ? "completed" : ""}">
                            <span class="daily-plan-time">${item.time}</span>
                            <div class="daily-plan-icon"><i class="fas ${item.icon}"></i></div>
                            <span class="daily-plan-title">${item.title}</span>
                        </div>
                    `;
      })
      .join("");
  }
}

// ============================================
// CLOCK & TIME FUNCTIONS
// ============================================
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.getElementById("clock").textContent =
    `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  // Greeting
  let greeting = "SELAMAT PAGI";
  if (hours >= 11 && hours < 15) greeting = "SELAMAT SIANG";
  else if (hours >= 15 && hours < 18) greeting = "SELAMAT SORE";
  else if (hours >= 18 || hours < 4) greeting = "SELAMAT MALAM";
  document.getElementById("greeting").textContent = greeting;

  // Next prayer
  updateNextPrayer(now);

  // Ramadan progress
  updateRamadanProgress(now);
}

function updateNextPrayer(now) {
  const location = state.settings.location;
  const times = prayerTimes[location];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const todayStr = now.toDateString();

  let nextPrayer = null;
  let nextTime = null;
  let minDiff = Infinity;

  const prayerOrder = ["imsak", "subuh", "dzuhur", "ashar", "maghrib", "isya"];

  for (const prayer of prayerOrder) {
    const [h, m] = times[prayer].split(":").map(Number);
    const prayerMinutes = h * 60 + m;
    const diff = prayerMinutes - currentMinutes;

    if (diff > 0 && diff < minDiff) {
      minDiff = diff;
      nextPrayer = prayer;
      nextTime = times[prayer];
    }

    // --- Notification Logic ---
    const notifKey = `${todayStr}-${prayer}`;
    if (
      state.settings.prayerNotification &&
      !state.notificationsShown[notifKey]
    ) {
      if (diff > 0 && diff <= 10) {
        // 10 minutes before
        const message = `Waktu ${prayer} akan tiba dalam ${diff} menit.`;
        showPrayerNotification(message, "fa-clock");
        addNotification(
          `Menuju ${prayer.charAt(0).toUpperCase() + prayer.slice(1)}`,
          message,
          "prayer",
        );
        state.notificationsShown[notifKey] = "upcoming";
      } else if (diff === 0) {
        // On time
        const message = `Waktu ${prayer} telah masuk.`;
        showPrayerNotification(message, "fa-bell", true);
        addNotification(
          `Waktu ${prayer.charAt(0).toUpperCase() + prayer.slice(1)}`,
          message,
          "prayer",
        );
        state.notificationsShown[notifKey] = "now";
      }
    }
  }

  if (!nextPrayer) {
    nextPrayer = "imsak";
    nextTime = times.imsak;
  }

  document.getElementById("countdown").textContent =
    `Menuju ${nextPrayer.charAt(0).toUpperCase() + nextPrayer.slice(1)} (${nextTime})`;

  // Update prayer cards
  document.querySelectorAll(".prayer-card").forEach((card) => {
    card.classList.remove("next-prayer");
  });
  const nextCard = document.getElementById(`prayer-${nextPrayer}`);
  if (nextCard) nextCard.classList.add("next-prayer");

  // Maghrib countdown
  const maghribTimeStr = times.maghrib;
  const [maghribH, maghribM] = maghribTimeStr.split(":").map(Number);
  let maghribDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    maghribH,
    maghribM,
    0,
  );

  // If Maghrib has passed today, calculate for tomorrow
  if (now > maghribDate) {
    maghribDate.setDate(maghribDate.getDate() + 1);
  }

  const diffMaghrib = maghribDate - now;
  const maghribCountdownEl = document.getElementById("maghrib-countdown");

  if (diffMaghrib > 0) {
    const hours = Math.floor(diffMaghrib / (1000 * 60 * 60));
    const minutes = Math.floor((diffMaghrib % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMaghrib % (1000 * 60)) / 1000);
    maghribCountdownEl.textContent = `Menuju Maghrib: ${String(hours).padStart(2, "0")}j ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}d`;
  } else {
    maghribCountdownEl.textContent = `Waktu Maghrib telah tiba!`;
  }
}

function updateRamadanProgress(now) {
  const ramadanStart = new Date(now.getFullYear(), 2, 1); // Approximate
  const day = Math.min(
    30,
    Math.max(1, Math.floor((now - ramadanStart) / (1000 * 60 * 60 * 24)) + 1),
  );
  const progress = (day / 30) * 100;

  document.getElementById("ramadan-day").textContent = `Hari ${day}/30`;
  document.getElementById("ramadan-bar").style.width = progress + "%";
}

// ============================================
// STREAK SYSTEM
// ============================================
function checkStreakStatus() {
  if (!state.lastAbsen) return;
  const now = new Date();
  const last = new Date(state.lastAbsen);
  const diffHours = (now - last) / (1000 * 60 * 60);

  if (diffHours > 48) {
    state.isDead = true;
    state.streak = 0;
    saveState();
  }

  updateStreakUI();
}

function updateStreakUI() {
  const icon = document.getElementById("streak-icon");
  const count = document.getElementById("streak-count");

  count.textContent = state.streak;

  if (state.streak > 0 && !state.isDead) {
    icon.classList.add("streak-fire");
  } else {
    icon.classList.remove("streak-fire");
  }
}

async function openStreakModal() {
  if (state.isDead) {
    const res = await Swal.fire({
      title: "Streak Mati!",
      text: "Kamu tidak absen lebih dari 2 hari. Hidupkan kembali?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Rebirth!",
      confirmButtonColor: "#d4a574",
      cancelButtonColor: "#8a8a9a",
    });
    if (res.isConfirmed) {
      state.isDead = false;
      state.streak = 1;
      state.lastAbsen = new Date().toISOString();
      saveState();
      updateUI();
      showToast("Streak dihidupkan kembali!", "success");
    }
    return;
  }

  const today = new Date().toDateString();
  if (state.lastAbsen && new Date(state.lastAbsen).toDateString() === today) {
    Swal.fire({
      title: "Sudah Absen",
      text: "Kamu sudah melakukan streak hari ini!",
      icon: "info",
      confirmButtonColor: "#d4a574",
    });
    return;
  }

  const { value: mood } = await Swal.fire({
    title: "Bagaimana perasaanmu hari ini?",
    html: `
                    <div class="flex justify-around text-4xl py-6">
                        <button type="button" onclick="document.getElementById('mood-val').value='😊'; document.querySelectorAll('.mood-emoji-btn').forEach(btn => btn.classList.remove('ring-2', 'ring-amber-400')); this.classList.add('ring-2', 'ring-amber-400');" class="mood-emoji-btn hover:scale-125 transition-transform p-4">😊</button>
                        <button type="button" onclick="document.getElementById('mood-val').value='🙂'; document.querySelectorAll('.mood-emoji-btn').forEach(btn => btn.classList.remove('ring-2', 'ring-amber-400')); this.classList.add('ring-2', 'ring-amber-400');" class="mood-emoji-btn hover:scale-125 transition-transform p-4">🙂</button>
                        <button type="button" onclick="document.getElementById('mood-val').value='😐'; document.querySelectorAll('.mood-emoji-btn').forEach(btn => btn.classList.remove('ring-2', 'ring-amber-400')); this.classList.add('ring-2', 'ring-amber-400');" class="mood-emoji-btn hover:scale-125 transition-transform p-4">😐</button>
                        <button type="button" onclick="document.getElementById('mood-val').value='😔'; document.querySelectorAll('.mood-emoji-btn').forEach(btn => btn.classList.remove('ring-2', 'ring-amber-400')); this.classList.add('ring-2', 'ring-amber-400');" class="mood-emoji-btn hover:scale-125 transition-transform p-4">😔</button>
                    </div>
                    <input type="hidden" id="mood-val" value="">
                `,
    showCancelButton: true,
    cancelButtonText: "Batal",
    confirmButtonText: "Simpan Absen",
    confirmButtonColor: "#d4a574",
    preConfirm: () => {
      const selectedMood = document.getElementById("mood-val").value;
      if (!selectedMood) {
        Swal.showValidationMessage("Pilih salah satu emoji!");
        return false;
      }
      return selectedMood;
    },
  });

  if (mood) {
    state.streak++;
    state.lastAbsen = new Date().toISOString();
    state.history.push({
      date: new Date().toISOString(),
      mood: mood,
    });
    state.fastingDays.push(new Date().getDate());

    addXP(50);
    checkAchievements();
    saveState();
    updateUI();

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });

    showToast(`Streak ${state.streak} hari!`, "success");
  }
}

// ============================================
// STREAK SYSTEM WITH MOOD & FIRE ANIMATION
// ============================================
let selectedMood = null;
let notifications = [];

function selectMoodAndAbsen(emoji, moodType) {
  selectedMood = { emoji, type: moodType };

  // Update UI
  document.querySelectorAll(".mood-selector-btn").forEach((btn) => {
    btn.classList.remove("selected");
  });
  event.target.closest(".mood-selector-btn").classList.add("selected");

  // Auto open streak modal after mood selection
  setTimeout(() => openStreakModal(), 300);
}

async function openStreakModal() {
  if (state.isDead) {
    const res = await Swal.fire({
      title: "💔 Streak Mati!",
      html: `
                        <div class="text-center">
                            <p class="text-slate-600 mb-4">Kamu tidak absen lebih dari 2 hari.</p>
                            <p class="text-lg font-bold text-gradient-gold">Hidupkan kembali semangatmu?</p>
                        </div>
                    `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "🔥 Ya, Rebirth!",
      cancelButtonText: "Batal",
      confirmButtonColor: "#d4a574",
      cancelButtonColor: "#8a8a9a",
      customClass: {
        popup: "glass-card",
      },
    });
    if (res.isConfirmed) {
      state.isDead = false;
      state.streak = 1;
      state.lastAbsen = new Date().toISOString();
      saveState();
      updateStreakUI();
      showToast("🔥 Streak dihidupkan kembali!", "success");
      addNotification(
        "Streak Rebirth",
        "Semangatmu kembali menyala! Jangan sampai mati lagi ya!",
        "success",
      );
    }
    return;
  }

  const today = new Date().toDateString();
  if (state.lastAbsen && new Date(state.lastAbsen).toDateString() === today) {
    Swal.fire({
      title: "✅ Sudah Absen",
      text: "Kamu sudah melakukan streak hari ini!",
      icon: "info",
      confirmButtonColor: "#d4a574",
      customClass: {
        popup: "glass-card",
      },
    });
    return;
  }

  if (!selectedMood) {
    showToast("Pilih mood terlebih dahulu!", "error");
    return;
  }

  // Confirm absen
  const { value: confirm } = await Swal.fire({
    title: `${selectedMood.emoji} Absen Hari Ini?`,
    html: `
                    <div class="text-center">
                        <p class="text-lg mb-2">Mood: <span class="font-bold">${selectedMood.type}</span></p>
                        <p class="text-sm text-slate-500">Streak saat ini: <span class="font-bold text-gradient-gold">${state.streak} hari</span></p>
                    </div>
                `,
    showCancelButton: true,
    confirmButtonText: "✓ Ya, Absen!",
    cancelButtonText: "Batal",
    confirmButtonColor: "#2d8a6e",
    cancelButtonColor: "#8a8a9a",
    customClass: {
      popup: "glass-card",
    },
  });

  if (confirm) {
    state.streak++;
    state.lastAbsen = new Date().toISOString();
    state.history.push({
      date: new Date().toISOString(),
      mood: selectedMood.emoji,
      type: selectedMood.type,
    });
    state.fastingDays.push(new Date().getDate());
    state.moodHistory.push({
      date: new Date().toDateString(),
      mood: selectedMood.emoji,
    });

    addXP(50);
    checkAchievements();
    saveState();
    updateStreakUI();

    // Confetti celebration
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff6b35", "#f7931e", "#ffd700"],
    });

    showToast(`🔥 Streak ${state.streak} hari!`, "success");
    addNotification(
      "Streak Bertambah!",
      `Selamat! Streak kamu sekarang ${state.streak} hari berturut-turut! ${selectedMood.emoji}`,
      "success",
    );

    // Reset mood selection
    selectedMood = null;
    document.querySelectorAll(".mood-selector-btn").forEach((btn) => {
      btn.classList.remove("selected");
    });
  }
}

function updateStreakUI() {
  const streakNumber = document.getElementById("streak-number");
  const streakCircle = document.getElementById("streak-progress-circle");
  const streakBtn = document.querySelector(".streak-absen-btn");
  const streakBtnText = document.getElementById("streak-btn-text");
  const streakStatus = document.getElementById("streak-status");
  const streakCount = document.getElementById("streak-count");
  const streakIcon = document.getElementById("streak-icon");

  // Update number
  if (streakNumber) {
    streakNumber.textContent = state.streak;

    // Add fire animation if streak > 0
    if (state.streak > 0 && !state.isDead) {
      streakNumber.classList.add("fire-active");
      createFireParticles();
    } else {
      streakNumber.classList.remove("fire-active");
    }
  }

  // Update circle progress
  if (streakCircle) {
    const maxStreak = 30;
    const progress = Math.min(state.streak / maxStreak, 1);
    const offset = 471.24 - progress * 471.24;
    streakCircle.style.strokeDashoffset = offset;
  }

  // Update button state
  const today = new Date().toDateString();
  const hasAbsenToday =
    state.lastAbsen && new Date(state.lastAbsen).toDateString() === today;

  if (streakBtn && streakBtnText) {
    if (hasAbsenToday) {
      streakBtn.classList.add("completed");
      streakBtnText.textContent = "Sudah Absen Hari Ini";
    } else {
      streakBtn.classList.remove("completed");
      streakBtnText.textContent = "Absen Hari Ini";
    }
  }

  // Update status text
  if (streakStatus) {
    if (hasAbsenToday) {
      streakStatus.innerHTML = `<span class="text-emerald-500">✓ Absen hari ini sudah tercatat</span>`;
    } else {
      streakStatus.innerHTML = `<span class="text-amber-500">⚠ Jangan lupa absen hari ini!</span>`;
    }
  }

  // Update header streak
  if (streakCount) streakCount.textContent = state.streak;
  if (streakIcon && state.streak > 0 && !state.isDead) {
    streakIcon.classList.add("streak-fire");
  } else if (streakIcon) {
    streakIcon.classList.remove("streak-fire");
  }
}

function createFireParticles() {
  const container = document.querySelector(".streak-circle-container");
  if (!container || state.streak === 0) return;

  // Remove old particles
  container.querySelectorAll(".fire-particle").forEach((p) => p.remove());

  // Create new particles
  for (let i = 0; i < 6; i++) {
    const particle = document.createElement("div");
    particle.className = "fire-particle";
    particle.style.left = `${50 + (Math.random() - 0.5) * 40}%`;
    particle.style.bottom = "20%";
    particle.style.animationDelay = `${Math.random() * 2}s`;
    container.appendChild(particle);
  }
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function addNotification(title, message, type = "info") {
  const notification = {
    id: Date.now(),
    title,
    message,
    type,
    time: new Date().toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    unread: true,
  };

  notifications.unshift(notification);
  if (notifications.length > 20) notifications.pop(); // Keep max 20

  renderNotifications();

  // Show toast for important notifications
  if (type === "prayer" || type === "success") {
    showPrayerNotification(message, "fa-bell", true);
  }
}

function renderNotifications() {
  const container = document.getElementById("notification-list");
  if (!container) return;

  if (notifications.length === 0) {
    container.innerHTML = `
                    <div class="text-center text-slate-400 py-8">
                        <i class="fas fa-bell-slash text-4xl mb-2 opacity-50"></i>
                        <p class="text-sm">Belum ada notifikasi</p>
                    </div>
                `;
    return;
  }

  container.innerHTML = notifications
    .map((notif) => {
      let iconClass = "fa-bell";
      let iconBg = "bg-amber-100 text-amber-600";

      switch (notif.type) {
        case "prayer":
          iconClass = "fa-mosque";
          iconBg = "bg-emerald-100 text-emerald-600";
          break;
        case "success":
          iconClass = "fa-check-circle";
          iconBg = "bg-emerald-100 text-emerald-600";
          break;
        case "warning":
          iconClass = "fa-exclamation-triangle";
          iconBg = "bg-amber-100 text-amber-600";
          break;
        case "error":
          iconClass = "fa-times-circle";
          iconBg = "bg-rose-100 text-rose-600";
          break;
      }

      return `
                    <div class="notification-item ${notif.unread ? "unread" : ""}" onclick="markNotificationRead(${notif.id})">
                        <div class="notification-icon ${iconBg}">
                            <i class="fas ${iconClass}"></i>
                        </div>
                        <div class="notification-content">
                            <div class="notification-title">${notif.title}</div>
                            <div class="notification-message">${notif.message}</div>
                            <div class="notification-time">${notif.time}</div>
                        </div>
                        <button class="notification-close" onclick="event.stopPropagation(); removeNotification(${notif.id})">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
    })
    .join("");
}

function markNotificationRead(id) {
  const notif = notifications.find((n) => n.id === id);
  if (notif) {
    notif.unread = false;
    renderNotifications();
  }
}

function removeNotification(id) {
  notifications = notifications.filter((n) => n.id !== id);
  renderNotifications();
}

function clearAllNotifications() {
  if (notifications.length === 0) return;

  Swal.fire({
    title: "Hapus Semua Notifikasi?",
    text: "Semua notifikasi akan dihapus permanen",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, Hapus",
    cancelButtonText: "Batal",
    confirmButtonColor: "#c97b84",
    customClass: {
      popup: "glass-card",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      notifications = [];
      renderNotifications();
      showToast("Semua notifikasi dihapus", "success");
    }
  });
}

// ============================================
// TASBIH FUNCTIONS
// ============================================
function actionTasbih() {
  state.tasbih++;
  state.tasbihTotal++;

  const target = 33;
  if (state.tasbih >= target) {
    state.tasbih = 0;
    state.tasbihRounds++;
    showToast(`Ronde ${state.tasbihRounds} selesai!`, "success");

    if (navigator.vibrate) navigator.vibrate([50, 30, 50]);
  }

  saveState();
  updateTasbihUI();
  checkAchievements();
}

function resetTasbih() {
  state.tasbih = 0;
  saveState();
  updateTasbihUI();
}

function updateTasbihUI() {
  const val = document.getElementById("tasbih-val");
  const circle = document.getElementById("tasbih-circle");
  const round = document.getElementById("tasbih-round");

  val.textContent = state.tasbih;
  round.textContent = `Ronde ${state.tasbihRounds + 1}`;

  const progress = state.tasbih / 33;
  const offset = 515.22 - progress * 515.22;
  circle.style.strokeDashoffset = offset;

  // Animate count
  val.classList.add("counter-animate");
  setTimeout(() => val.classList.remove("counter-animate"), 400);

  document.getElementById("dzikir-total").textContent = state.tasbihTotal;
  document.getElementById("dzikir-rounds").textContent = state.tasbihRounds;
  document.getElementById("dzikir-streak").textContent = state.dzikirStreak;
}

function setDzikirType(type) {
  state.dzikirType = type;
  document
    .querySelectorAll(".tab-pill")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById(`dzikir-${type}`).classList.add("active");
  resetTasbih();
}

function setTasbihTarget() {
  Swal.fire({
    title: "Target Dzikir",
    input: "number",
    inputLabel: "Jumlah target",
    inputValue: 33,
    showCancelButton: true,
    confirmButtonColor: "#2d8a6e",
  });
}

// ============================================
// TARGET FUNCTIONS
// ============================================
function toggleTarget(id) {
  const today = new Date().toDateString();
  if (!state.targetHistory[today]) {
    state.targetHistory[today] = {
      sholat: { done: false, time: null },
      quran: { done: false, pages: 0, time: null },
      sedekah: { done: false, amount: 0, time: null },
      tarawih: { done: false, rakaat: 0, time: null },
      dzikir: { done: false, count: 0, time: null },
      sahur: { done: false, time: null },
      buka: { done: false, time: null },
      tadarus: { done: false, time: null },
    };
  }

  state.targetHistory[today][id].done = !state.targetHistory[today][id].done;
  if (state.targetHistory[today][id].done) {
    state.targetHistory[today][id].time = new Date().toLocaleTimeString(
      "id-ID",
      { hour: "2-digit", minute: "2-digit" },
    );
    addXP(10);
  } else {
    state.targetHistory[today][id].time = null;
  }

  saveState();
  renderTargets();
  updateCharts();
  checkAchievements();
}

function saveTargets() {
  saveState();
  showToast("Progress disimpan!", "success");
}

function updateDailyProgress() {
  const today = new Date().toDateString();
  const todayTargets = state.targetHistory[today] || {};
  const targetKeys = [
    "sholat",
    "quran",
    "sedekah",
    "tarawih",
    "dzikir",
    "sahur",
    "buka",
    "tadarus",
  ];

  let done = 0;
  targetKeys.forEach((key) => {
    if (todayTargets[key]?.done) done++;
  });

  const percent = Math.round((done / targetKeys.length) * 100);

  document.getElementById("daily-progress-percent").textContent = percent + "%";
  document.getElementById("daily-progress-bar").style.width = percent + "%";
  document.getElementById("daily-progress-text").textContent =
    `${done} dari ${targetKeys.length} target selesai`;
}

// ============================================
// WATER TRACKER
// ============================================
function toggleWater(index) {
  state.waterGlasses = index + 1;
  if (state.waterGlasses === 8) {
    showToast("Target minum tercapai!", "success");
    addXP(20);
  }
  saveState();
  renderWaterDrops();
}

// ============================================
// QURAN FUNCTIONS
// ============================================
function addQuranPages() {
  const input = document.getElementById("quran-pages-input");
  const pages = parseInt(input.value) || 0;

  if (pages > 0) {
    state.quranPages += pages;
    input.value = "";

    const today = new Date().toDateString();
    if (!state.targetHistory[today]) state.targetHistory[today] = {};
    state.targetHistory[today].quran = {
      done: true,
      pages: pages,
      time: new Date().toLocaleTimeString("id-ID"),
    };

    addXP(pages * 2);
    checkAchievements();
    saveState();
    updateQuranUI();
    updateCharts();
    showToast(`+${pages} halaman Quran!`, "success");
  }
}

function updateQuranUI() {
  const totalPages = 604;
  const juz = Math.floor(state.quranPages / 20);
  const percent = Math.min(
    100,
    Math.round((state.quranPages / totalPages) * 100),
  );

  document.getElementById("quran-juz").textContent = juz;
  document.getElementById("quran-total-pages").textContent = state.quranPages;
  document.getElementById("quran-khatam-percent").textContent = percent + "%";

  const offset = 276.46 - (percent / 100) * 276.46;
  document.getElementById("quran-ring").style.strokeDashoffset = offset;
}

function addQuranBookmark() {
  Swal.fire({
    title: "Tambah Bookmark",
    html: `
                    <input type="text" id="surah-name" class="swal2-input" placeholder="Nama Surat">
                    <input type="number" id="ayah-num" class="swal2-input" placeholder="Nomor Ayat">
                `,
    showCancelButton: true,
    confirmButtonColor: "#2d8a6e",
  }).then((result) => {
    if (result.isConfirmed) {
      const surah = document.getElementById("surah-name").value;
      const ayah = document.getElementById("ayah-num").value;
      if (surah && ayah) {
        state.quranBookmarks.push({
          id: Date.now(),
          surah: surah,
          ayah: ayah,
        });
        saveState();
        renderQuranBookmarks();
        showToast("Bookmark ditambahkan!", "success");
      }
    }
  });
}

// ============================================
// TARAWIH FUNCTIONS
// ============================================
function addTarawih(amount) {
  state.tarawihTotal = Math.max(0, state.tarawihTotal + amount);
  if (amount > 0) {
    state.tarawihDays++;
    addXP(amount);
    checkAchievements();
  }
  saveState();
  updateTarawihUI();
}

function updateTarawihUI() {
  document.getElementById("tarawih-rakaat").textContent = state.tarawihTotal;
  document.getElementById("tarawih-total").textContent = state.tarawihTotal;
  document.getElementById("tarawih-days").textContent = state.tarawihDays;

  const target = 600; // 20 rakaat x 30 hari
  const percent = Math.min(100, (state.tarawihTotal / target) * 100);
  const offset = 326.73 - (percent / 100) * 326.73;
  document.getElementById("tarawih-ring").style.strokeDashoffset = offset;
}

// ============================================
// ZAKAT CALCULATOR
// ============================================
document.getElementById("zakat-input").addEventListener("input", function () {
  const val = parseFloat(this.value) || 0;
  if (val > 0) {
    const zakat = val * 0.025;
    document.getElementById("zakat-result").classList.remove("hidden");
    document.getElementById("zakat-amount").textContent =
      "Rp " + zakat.toLocaleString("id-ID");
  } else {
    document.getElementById("zakat-result").classList.add("hidden");
  }
});

// ============================================
// SEDEKAH TRACKER
// ============================================
function addSedekah() {
  const input = document.getElementById("sedekah-amount");
  const amount = parseInt(input.value) || 0;

  if (amount > 0) {
    state.sedekahTotal += amount;
    input.value = "";

    const today = new Date().toDateString();
    if (!state.targetHistory[today]) state.targetHistory[today] = {};
    state.targetHistory[today].sedekah = {
      done: true,
      amount: amount,
      time: new Date().toLocaleTimeString("id-ID"),
    };

    addXP(15);
    checkAchievements();
    saveState();
    updateSedekahUI();
    renderTargets();
    showToast("Sedekah tercatat!", "success");
  }
}

function updateSedekahUI() {
  document.getElementById("total-sedekah").textContent =
    "Rp " + state.sedekahTotal.toLocaleString("id-ID");
}

// ============================================
// SLEEP TRACKER
// ============================================
function calculateSleep() {
  const start = document.getElementById("sleep-start").value;
  const end = document.getElementById("sleep-end").value;

  if (start && end) {
    const [startH, startM] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);

    let duration = endH * 60 + endM - (startH * 60 + startM);
    if (duration < 0) duration += 24 * 60;

    const hours = (duration / 60).toFixed(1);

    document.getElementById("sleep-result").classList.remove("hidden");
    document.getElementById("sleep-hours").textContent = hours;

    state.sleepData.push({
      date: new Date().toDateString(),
      hours: parseFloat(hours),
    });
    saveState();
  }
}

// ============================================
// JOURNAL FUNCTIONS
// ============================================
function openJournalModal() {
  document.getElementById("journal-modal").classList.add("active");
}

function closeJournalModal() {
  document.getElementById("journal-modal").classList.remove("active");
  document.getElementById("journal-text").value = "";
}

function saveJournal() {
  const text = document.getElementById("journal-text").value;
  if (text.trim()) {
    state.journals.push({
      id: Date.now(),
      date: new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      text: text,
      mood: state.mood,
    });
    saveState();
    renderJournalEntries();
    closeJournalModal();
    showToast("Journal disimpan!", "success");
    addXP(25);
  }
}

function setMood(mood) {
  state.mood = mood;
  state.moodHistory.push({
    date: new Date().toDateString(),
    mood: mood,
  });
  document.querySelectorAll(".mood-btn").forEach((btn) => {
    btn.classList.remove("bg-amber-50", "ring-2", "ring-amber-400");
    if (btn.dataset.mood === mood) {
      btn.classList.add("bg-amber-50", "ring-2", "ring-amber-400");
    }
  });
  saveState();
}

function saveReflection() {
  const note = document.getElementById("reflection-note").value;
  if (note.trim()) {
    state.journals.push({
      id: Date.now(),
      date: new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      text: note,
      mood: state.mood,
      type: "reflection",
    });
    document.getElementById("reflection-note").value = "";
    saveState();
    renderJournalEntries();
    showToast("Refleksi disimpan!", "success");
  }
}

// ============================================
// ACHIEVEMENTS & XP
// ============================================
function addXP(amount) {
  state.xp += amount;

  // Level up check
  const xpPerLevel = 100 + state.level * 50;
  while (state.xp >= xpPerLevel) {
    state.xp -= xpPerLevel;
    state.level++;
    showToast(`Level Up! Sekarang level ${state.level}`, "success");
  }

  updateLevelUI();
}

function updateLevelUI() {
  document.getElementById("user-level").textContent = state.level;
  document.getElementById("level-num").textContent = state.level;
  document.getElementById("current-xp").textContent = state.xp;

  const xpPerLevel = 100 + state.level * 50;
  document.getElementById("next-xp").textContent = xpPerLevel;

  const percent = (state.xp / xpPerLevel) * 100;
  document.getElementById("xp-bar").style.width = percent + "%";
}

function checkAchievements() {
  let changed = false;

  state.achievements.forEach((a) => {
    if (a.unlocked) return;

    switch (a.id) {
      case "first_streak":
        if (state.streak >= 1) a.unlocked = true;
        break;
      case "streak_7":
        if (state.streak >= 7) a.unlocked = true;
        break;
      case "streak_30":
        if (state.streak >= 30) a.unlocked = true;
        break;
      case "quran_100":
        if (state.quranPages >= 100) a.unlocked = true;
        break;
      case "quran_khatam":
        if (state.quranPages >= 604) a.unlocked = true;
        break;
      case "dzikir_1000":
        if (state.tasbihTotal >= 1000) a.unlocked = true;
        break;
      case "sedekah_10":
        if (state.sedekahTotal > 0) a.unlocked = true;
        break;
      case "tarawih_100":
        if (state.tarawihTotal >= 100) a.unlocked = true;
        break;
    }
  });

  saveState();
  renderAchievements();
}

// ============================================
// FASTING CALENDAR
// ============================================
function toggleFastingDay(day) {
  const index = state.fastingDays.indexOf(day);
  if (index > -1) {
    state.fastingDays.splice(index, 1);
  } else {
    state.fastingDays.push(day);
  }
  saveState();
  renderFastingCalendar();
}

function toggleLast10Night(night) {
  toggleFastingDay(night);
}

// ============================================
// CHARTS
// ============================================
function initCharts() {
  // Target Chart
  const targetCtx = document.getElementById("target-chart");
  if (targetCtx) {
    const { labels, data } = getDailyTargetCompletionData();
    charts.target = new Chart(targetCtx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Target Selesai",
            data: data,
            backgroundColor: "rgba(212, 165, 116, 0.8)",
            borderRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, max: 8 },
        },
      },
    });
  }

  // Home Weekly Chart
  const homeWeeklyCtx = document.getElementById("home-weekly-chart");
  if (homeWeeklyCtx) {
    const { labels, data } = getDailyTargetCompletionData();
    charts.homeWeekly = new Chart(homeWeeklyCtx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Aktivitas",
            data: data,
            borderColor: "var(--accent-emerald)",
            backgroundColor: "rgba(45, 138, 110, 0.1)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, max: 8 } },
      },
    });
  }

  // Main Stats Chart (Streak)
  const statsCtx = document.getElementById("main-stats-chart");
  if (statsCtx) {
    const { labels, data } = getStreakChartData();
    charts.stats = new Chart(statsCtx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Streak",
            data: data,
            borderColor: "#d4a574",
            backgroundColor: "rgba(212, 165, 116, 0.1)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            beginAtZero: true,
            max: Math.max(...data, 1),
            ticks: { stepSize: 1 },
          },
        },
      },
    });
  }

  // Mood Chart
  const moodCtx = document.getElementById("mood-chart");
  if (moodCtx) {
    const { labels, data } = getMoodDistributionData();
    charts.mood = new Chart(moodCtx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: ["#2d8a6e", "#d4a574", "#c97b84", "#4a6fa5"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }

  // Weekly Chart
  const weeklyCtx = document.getElementById("weekly-chart");
  if (weeklyCtx) {
    const { labels, data } = getWeeklyActivityData();
    charts.weekly = new Chart(weeklyCtx, {
      type: "radar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Minggu Ini",
            data: data,
            backgroundColor: "rgba(212, 165, 116, 0.2)",
            borderColor: "#d4a574",
            pointBackgroundColor: "#d4a574",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: { beginAtZero: true, max: 100 },
        },
      },
    });
  }
}

function updateCharts() {
  // Update target chart with real data
  if (charts.target) {
    const { labels, data } = getDailyTargetCompletionData();
    charts.target.data.labels = labels;
    charts.target.data.datasets[0].data = data;
    charts.target.update();
  }

  // Update home weekly chart
  if (charts.homeWeekly) {
    const { labels, data } = getDailyTargetCompletionData();
    charts.homeWeekly.data.labels = labels;
    charts.homeWeekly.data.datasets[0].data = data;
    charts.homeWeekly.update();
  }

  // Update main stats chart (Streak)
  if (charts.stats) {
    const { labels, data } = getStreakChartData();
    charts.stats.data.labels = labels;
    charts.stats.data.datasets[0].data = data;
    charts.stats.options.scales.y.max = Math.max(...data, 1);
    charts.stats.update();
  }

  // Update mood chart
  if (charts.mood) {
    const { labels, data } = getMoodDistributionData();
    charts.mood.data.labels = labels;
    charts.mood.data.datasets[0].data = data;
    charts.mood.update();
  }

  // Update weekly chart
  if (charts.weekly) {
    const { labels, data } = getWeeklyActivityData();
    charts.weekly.data.labels = labels;
    charts.weekly.data.datasets[0].data = data;
    charts.weekly.update();
  }
}

function setStatsPeriod(period) {
  document
    .querySelectorAll(".tab-pill")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById(`stats-${period}`).classList.add("active");
  updateCharts();
}

// ============================================
// NAVIGATION
// ============================================
function showTab(tab) {
  // Hide all sections
  document.querySelectorAll("main > section").forEach((section) => {
    section.classList.add("hidden-section");
  });

  // Show selected section
  const section = document.getElementById(`section-${tab}`);
  if (section) {
    section.classList.remove("hidden-section");
    section.classList.add("fade-in");
  }

  // Update nav
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Activate the correct nav item, including the new 'articles' one
  let navItem = document.getElementById(`nav-${tab}`);
  if (tab === "articles") {
    navItem = document.getElementById("nav-articles");
  }
  if (navItem) {
    navItem.classList.add("active");
  }

  // Update charts if stats tab
  if (tab === "stats") {
    setTimeout(updateCharts, 100);
    showToast("Menampilkan Statistik", "info");
  } else if (tab === "qibla") {
    // Ensure Qibla direction is calculated when the Qibla tab is shown
    getQiblaDirection();
    showToast("Menampilkan Arah Kiblat", "info");
  } else if (tab === "tracker") {
    showToast("Menampilkan Target", "info");
  } else if (tab === "articles") {
    showToast("Menampilkan Artikel", "info");
  }
}

// ============================================
// MODALS
// ============================================
function openSettings() {
  document.getElementById("settings-modal").classList.add("active");
  document.getElementById("user-name").value = state.settings.name;
  document.getElementById("user-location").value = state.settings.location;
  document.getElementById("prayer-notification").checked =
    state.settings.prayerNotification;
  document.getElementById("sahur-reminder").checked =
    state.settings.sahurReminder;
  document.getElementById("dark-mode-toggle").checked = state.settings.darkMode;
}

function closeSettings() {
  document.getElementById("settings-modal").classList.remove("active");
}

function saveSettings() {
  state.settings.name =
    document.getElementById("user-name").value || "Pengguna";
  state.settings.location = document.getElementById("user-location").value;
  state.settings.prayerNotification = document.getElementById(
    "prayer-notification",
  ).checked;
  state.settings.sahurReminder =
    document.getElementById("sahur-reminder").checked;
  state.settings.darkMode = document.getElementById("dark-mode-toggle").checked;

  saveState();
  applyDarkMode(); // Apply dark mode immediately after saving settings
  renderPrayerTimes();
  closeSettings();
  showToast("Pengaturan disimpan!", "success");
}

function showQuickActions() {
  document.getElementById("quick-modal").classList.add("active");
}

function closeQuickModal() {
  document.getElementById("quick-modal").classList.remove("active");
}

function quickAction(action) {
  closeQuickModal();
  switch (action) {
    case "quran-page":
      showTab("quran");
      break;
    case "sedekah":
      showTab("tools");
      setTimeout(() => document.getElementById("sedekah-amount").focus(), 300);
      break;
    case "dzikir":
      showTab("dzikir");
      break;
    case "water":
      state.waterGlasses = Math.min(8, state.waterGlasses + 1);
      saveState();
      renderWaterDrops();
      showToast("Air ditambahkan!", "success");
      break;
    case "tarawih":
      showTab("tarawih");
      break;
    case "journal":
      openJournalModal();
      break;
  }
}

function showPrayerDetails(element, name, time) {
  const now = new Date();
  const [prayerH, prayerM] = time.split(":").map(Number);
  let prayerDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    prayerH,
    prayerM,
    0,
  );

  // If prayer has passed today, set for tomorrow
  if (now > prayerDate) {
    prayerDate.setDate(prayerDate.getDate() + 1);
  }

  let diff = prayerDate - now;

  const updateCountdown = () => {
    if (diff <= 0) {
      clearInterval(countdownInterval);
      Swal.update({
        html: `<p class="text-xl font-bold text-gradient-gold">Sekarang Waktu ${name.charAt(0).toUpperCase() + name.slice(1)}!</p>`,
      });
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const countdownText = `Sisa waktu: <span class="font-bold text-gradient-gold">${String(hours).padStart(2, "0")} jam ${String(minutes).padStart(2, "0")} menit ${String(seconds).padStart(2, "0")} detik</span>`;

    Swal.update({
      html: `<p class="text-slate-700 text-sm mb-2">Pukul ${time}</p>
                           <p class="text-lg font-medium">${countdownText}</p>`,
    });
    diff -= 1000;
  };

  Swal.fire({
    title: `Waktu ${name.charAt(0).toUpperCase() + name.slice(1)}`,
    icon: "info",
    showConfirmButton: false,
    showCloseButton: true,
    onOpen: () => {
      countdownInterval = setInterval(updateCountdown, 1000);
    },
    onClose: () => {
      clearInterval(countdownInterval);
    },
    customClass: {
      container: "sweet-alert-container",
      popup: "sweet-alert-popup glass-card", // Use glass-card style for SweetAlert
      title: "sweet-alert-title text-gradient-gold",
      htmlContainer: "sweet-alert-html",
    },
    didOpen: () => updateCountdown(), // Initial display
  });

  let countdownInterval;
}

// ============================================
// DATA MANAGEMENT
// ============================================
function exportData() {
  const data = JSON.stringify(state, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ramadan-nexus-backup.json";
  a.click();
  showToast("Data diekspor!", "success");
}

function importData() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        state = { ...state, ...data };
        saveState();
        renderAll();
        showToast("Data diimpor!", "success");
      } catch (err) {
        showToast("File tidak valid!", "error");
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

function resetAllData() {
  Swal.fire({
    title: "Reset Semua Data?",
    text: "Semua progress akan dihapus permanen!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#c97b84",
    confirmButtonText: "Ya, Reset!",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("ramadan_nexus_state");
      location.reload();
    }
  });
}

function saveMenu() {
  showToast("Menu disimpan!", "success");
}

// ============================================
// QIBLA FUNCTIONS
// ============================================
let qiblaAngle = 0;
let deviceHeading = 0;

function getQiblaDirection() {
  const textEl = document.getElementById("qibla-direction-text");
  const degreeEl = document.getElementById("qibla-degree");

  if (navigator.geolocation) {
    textEl.textContent = "Mengkalibrasi lokasi...";
    degreeEl.textContent = "";
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        qiblaAngle = calculateQiblaAngle(latitude, longitude);
        textEl.textContent = "Arahkan perangkat Anda";
        degreeEl.textContent = `Akurasi: ${qiblaAngle.toFixed(1)}° dari Utara`;
        checkQiblaSupport();
      },
      (error) => {
        textEl.textContent = "Gagal Mendapatkan Lokasi";
        degreeEl.textContent = "Aktifkan izin lokasi & GPS.";
        showToast("Gagal mendapatkan lokasi untuk Kiblat.", "error");
      },
    );
  } else {
    textEl.textContent = "Geolocation Tidak Didukung";
    showToast("Browser Anda tidak mendukung Geolocation.", "error");
  }
}

function calculateQiblaAngle(lat, lon) {
  const kaabaLat = (21.4225 * Math.PI) / 180;
  const kaabaLon = (39.8262 * Math.PI) / 180;
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;
  const deltaLon = kaabaLon - lonRad;
  const y = Math.sin(deltaLon);
  const x =
    Math.cos(latRad) * Math.tan(kaabaLat) -
    Math.sin(latRad) * Math.cos(deltaLon);
  let angle = (Math.atan2(y, x) * 180) / Math.PI;
  return (angle + 360) % 360;
}

function updateCompass(heading) {
  deviceHeading = heading;
  const dial = document.querySelector(".compass-dial");
  const indicator = document.getElementById("qibla-indicator");

  if (dial && indicator) {
    dial.style.transform = `rotate(${-heading}deg)`;
    indicator.style.transform = `translateX(-50%) rotate(${qiblaAngle}deg)`;

    const relativeAngle = Math.abs(qiblaAngle - heading) % 360;
    const normalizedAngle = Math.min(relativeAngle, 360 - relativeAngle);

    if (normalizedAngle < 5) {
      indicator.classList.add("aligned");
    } else {
      indicator.classList.remove("aligned");
    }
  }
}

function checkQiblaSupport() {
  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    DeviceOrientationEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") {
          window.addEventListener("deviceorientation", handleOrientation);
        } else {
          document.getElementById("qibla-degree").textContent =
            "Izin orientasi perangkat ditolak.";
        }
      })
      .catch(console.error);
  } else {
    window.addEventListener("deviceorientation", handleOrientation);
  }
}

function handleOrientation(event) {
  const heading = event.webkitCompassHeading || event.alpha;
  if (heading !== null) {
    updateCompass(heading);
  }
}

// Call getQiblaDirection when the Qibla section is first shown
const qiblaNavItem = document.getElementById("nav-qibla");
if (qiblaNavItem) {
  qiblaNavItem.addEventListener("click", () => {
    if (!qiblaAngle) {
      // Only fetch if not already calculated
      getQiblaDirection();
    }
  });
}

// ============================================
// UI UPDATES
// ============================================
function updateUI() {
  updateStreakUI();
  updateTasbihUI();
  updateQuranUI();
  updateSedekahUI();
  updateTarawihUI();
  updateLevelUI();
  updateDailyProgress();

  // Random quote
  const quoteIndex = Math.floor(Math.random() * dailyQuotes.length);
  document.getElementById("daily-quote").textContent =
    '"' + dailyQuotes[quoteIndex].text + '"';
  document.getElementById("quote-source").textContent =
    "- " + dailyQuotes[quoteIndex].source;

  // Stats
  const today = new Date().toDateString();
  const todayData = state.targetHistory[today] || {};
  let prayers = 0;
  Object.keys(todayData).forEach((key) => {
    if (todayData[key]?.done) prayers++;
  });

  document.getElementById("stat-prayers").textContent = prayers;
  document.getElementById("stat-quran").textContent = state.quranPages;
  document.getElementById("stat-streak").textContent = state.streak;
}

// ============================================
// CHART DATA HELPERS
// ============================================

function getChartLabelsForLast7Days() {
  const labels = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    labels.push(d.toLocaleDateString("id-ID", { weekday: "short" }));
  }
  return labels;
}

function getDailyTargetCompletionData() {
  const labels = getChartLabelsForLast7Days();
  const data = Array(7).fill(0);
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateString = d.toDateString();

    if (state.targetHistory[dateString]) {
      const targets = state.targetHistory[dateString];
      const completed = Object.values(targets).filter((t) => t.done).length;
      data[6 - i] = completed; // Populate data from oldest to newest
    }
  }
  return { labels, data };
}

function getStreakChartData() {
  const labels = getChartLabelsForLast7Days();
  const data = Array(7).fill(0);
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateString = d.toDateString();

    // Assuming history entries store mood for each day a streak was recorded
    const dayHistory = state.history.find(
      (h) => new Date(h.date).toDateString() === dateString,
    );
    if (dayHistory) {
      // This is a simplified representation. For actual streak, you'd track consecutive days.
      // For chart display, let's just show if an entry existed for the day.
      data[6 - i] = 1; // Mark as 1 if there was an entry, meaning streak continued for that day.
    }
  }
  // Transform into cumulative streak for better visualization if needed,
  // but for now, just indicating presence.
  return { labels, data };
}

function getMoodDistributionData() {
  const moodCounts = { "😊": 0, "🙂": 0, "😐": 0, "😔": 0 };
  state.moodHistory.forEach((entry) => {
    if (moodCounts[entry.mood] !== undefined) {
      moodCounts[entry.mood]++;
    }
  });

  return {
    labels: ["Sangat Baik", "Baik", "Biasa", "Kurang"],
    data: [
      moodCounts["😊"],
      moodCounts["🙂"],
      moodCounts["😐"],
      moodCounts["😔"],
    ],
  };
}

function getWeeklyActivityData() {
  // This is a simplified aggregated view. More detailed tracking would be needed for precise scores.
  const totalQuranPages = state.quranPages;
  const totalDzikir = state.tasbihTotal;
  const totalSedekah = state.sedekahTotal > 0 ? 1 : 0; // Simple binary for now
  const totalTarawih = state.tarawihTotal;
  const totalJournalEntries = state.journals.length;
  const totalPrayers = Object.values(state.targetHistory).reduce(
    (acc, dailyTargets) => {
      return (
        acc +
        Object.values(dailyTargets).filter(
          (t) => t.done && ["sholat", "sahur", "buka"].includes(t.id),
        ).length
      );
    },
    0,
  );

  // Normalize values for radar chart (0-100 scale)
  const maxQuran = 604; // Total Quran pages
  const maxDzikir = 1000; // Example target
  const maxTarawih = 600; // 20 rakaat * 30 days
  const maxJournal = 30; // 1 entry per day for a month
  const maxPrayers = 5 * 7; // 5 daily prayers * 7 days (very rough)

  return {
    labels: ["Sholat", "Quran", "Dzikir", "Sedekah", "Tarawih", "Journal"],
    data: [
      Math.min(100, (totalPrayers / maxPrayers) * 100),
      Math.min(100, (totalQuranPages / maxQuran) * 100),
      Math.min(100, (totalDzikir / maxDzikir) * 100),
      Math.min(100, totalSedekah * 100), // binary for now
      Math.min(100, (totalTarawih / maxTarawih) * 100),
      Math.min(100, (totalJournalEntries / maxJournal) * 100),
    ],
  };
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const icon = document.getElementById("toast-icon");
  const msg = document.getElementById("toast-message");

  msg.textContent = message;

  if (type === "success") {
    icon.className = "fas fa-check-circle text-emerald-500 text-lg";
  } else if (type === "error") {
    icon.className = "fas fa-times-circle text-rose-500 text-lg";
  } else {
    icon.className = "fas fa-info-circle text-blue-500 text-lg";
  }

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ============================================
// AUDIO ADZAN PLAYER
// ============================================
let adzanAudio = null;
let adzanInterval = null;

function initAdzanPlayer() {
  adzanAudio = document.getElementById("adzan-audio");
  if (!adzanAudio) return;

  adzanAudio.addEventListener("loadedmetadata", () => {
    const duration = formatTime(adzanAudio.duration);
    const durationEl = document.getElementById("adzan-duration");
    if (durationEl) durationEl.textContent = duration;
  });

  adzanAudio.addEventListener("timeupdate", () => {
    if (!adzanAudio) return;
    const progress = (adzanAudio.currentTime / adzanAudio.duration) * 100;
    const progressEl = document.getElementById("adzan-progress");
    const currentTimeEl = document.getElementById("adzan-current-time");
    if (progressEl) progressEl.style.width = progress + "%";
    if (currentTimeEl)
      currentTimeEl.textContent = formatTime(adzanAudio.currentTime);
  });

  adzanAudio.addEventListener("ended", () => {
    stopAdzan();
  });
}

function playAdzanForPrayer(prayerName) {
  const modal = document.getElementById("adzan-player-modal");
  const nameEl = document.getElementById("adzan-prayer-name");

  if (nameEl) {
    nameEl.textContent =
      prayerName.charAt(0).toUpperCase() + prayerName.slice(1);
  }

  if (modal) {
    modal.classList.add("active");
  }

  addNotification(
    "Waktu Sholat",
    `Waktu ${prayerName} telah tiba. Ayo sholat!`,
    "prayer",
  );

  // Auto play adzan
  setTimeout(() => toggleAdzanPlay(), 800);
}

function toggleAdzanPlay() {
  if (!adzanAudio) {
    initAdzanPlayer();
    setTimeout(() => toggleAdzanPlay(), 100);
    return;
  }

  const playBtn = document.getElementById("adzan-play-btn");
  const statusEl = document.getElementById("adzan-status");

  if (adzanAudio.paused) {
    adzanAudio
      .play()
      .then(() => {
        if (playBtn) playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        if (statusEl) statusEl.textContent = "Sedang diputar...";
      })
      .catch((err) => {
        console.error("Error playing adzan:", err);
        showToast("Gagal memutar adzan", "error");
      });
  } else {
    adzanAudio.pause();
    if (playBtn) playBtn.innerHTML = '<i class="fas fa-play"></i>';
    if (statusEl) statusEl.textContent = "Dijeda";
  }
}

function stopAdzan() {
  if (!adzanAudio) return;

  adzanAudio.pause();
  adzanAudio.currentTime = 0;

  const playBtn = document.getElementById("adzan-play-btn");
  const statusEl = document.getElementById("adzan-status");
  const progressEl = document.getElementById("adzan-progress");
  const currentTimeEl = document.getElementById("adzan-current-time");

  if (playBtn) playBtn.innerHTML = '<i class="fas fa-play"></i>';
  if (statusEl) statusEl.textContent = "Siap diputar";
  if (progressEl) progressEl.style.width = "0%";
  if (currentTimeEl) currentTimeEl.textContent = "0:00";
}

function closeAdzanPlayer() {
  const modal = document.getElementById("adzan-player-modal");
  if (modal) {
    modal.classList.remove("active");
  }
  stopAdzan();
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

// Initialize adzan player on load
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    initAdzanPlayer();
  });
}

// ============================================
// MONEY TRACKING SYSTEM
// ============================================

// Money state
let moneyState = {
  balance: 0,
  transactions: [],
  balanceVisible: true,
  currentEditId: null,
  currentType: "income",
};

// Load money state
function loadMoneyState() {
  const saved = localStorage.getItem("ramadhan_money");
  if (saved) {
    try {
      moneyState = { ...moneyState, ...JSON.parse(saved) };
    } catch (e) {
      console.error("Error loading money state:", e);
    }
  }
}

// Save money state
function saveMoneyState() {
  localStorage.setItem("ramadhan_money", JSON.stringify(moneyState));
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Toggle balance visibility
function toggleBalanceVisibility() {
  moneyState.balanceVisible = !moneyState.balanceVisible;
  updateMoneyUI();

  const eyeIcon = document.getElementById("balance-eye-icon");
  if (eyeIcon) {
    eyeIcon.className = moneyState.balanceVisible
      ? "fas fa-eye"
      : "fas fa-eye-slash";
  }
}

// Open add money modal
function openAddMoneyModal(type) {
  console.log("Opening money modal, type:", type); // Debug

  moneyState.currentType = type;
  moneyState.currentEditId = null;

  const modal = document.getElementById("money-modal");
  const title = document.getElementById("money-modal-title");
  const saveBtn = document.getElementById("money-save-btn");

  if (!modal) {
    console.error("Money modal not found!");
    alert(
      "Modal belum ditambahkan ke HTML. Silakan tambahkan money-modal.html ke index.html",
    );
    return;
  }

  modal.classList.add("active");
  if (title)
    title.textContent =
      type === "income" ? "Tambah Pemasukan" : "Tambah Pengeluaran";
  if (saveBtn) saveBtn.innerHTML = '<i class="fas fa-save mr-2"></i>Simpan';

  // Set default date
  const dateInput = document.getElementById("money-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.value = today;
  }

  // Reset form
  const amountInput = document.getElementById("money-amount");
  const categoryInput = document.getElementById("money-category");
  const descInput = document.getElementById("money-description");

  if (amountInput) amountInput.value = "";
  if (categoryInput) categoryInput.value = "";
  if (descInput) descInput.value = "";

  // Show relevant categories
  updateCategoryOptions(type);
}

// Update category options
function updateCategoryOptions(type) {
  const incomeGroup = document.getElementById("income-categories");
  const expenseGroup = document.getElementById("expense-categories");

  if (type === "income") {
    if (incomeGroup) incomeGroup.style.display = "";
    if (expenseGroup) expenseGroup.style.display = "none";
  } else {
    if (incomeGroup) incomeGroup.style.display = "none";
    if (expenseGroup) expenseGroup.style.display = "";
  }
}

// Close money modal
function closeMoneyModal() {
  const modal = document.getElementById("money-modal");
  if (modal) modal.classList.remove("active");
}

// Save money transaction
function saveMoneyTransaction() {
  const amount = parseFloat(document.getElementById("money-amount").value);
  const category = document.getElementById("money-category").value;
  const description = document.getElementById("money-description").value;
  const date = document.getElementById("money-date").value;

  if (!amount || amount <= 0) {
    showToast("Masukkan jumlah yang valid", "error");
    return;
  }

  if (!category) {
    showToast("Pilih kategori", "error");
    return;
  }

  if (!date) {
    showToast("Pilih tanggal", "error");
    return;
  }

  const transaction = {
    id: moneyState.currentEditId || Date.now(),
    type: moneyState.currentType,
    amount: amount,
    category: category,
    description: description || "-",
    date: date,
    timestamp: new Date().toISOString(),
  };

  if (moneyState.currentEditId) {
    const index = moneyState.transactions.findIndex(
      (t) => t.id === moneyState.currentEditId,
    );
    if (index !== -1) {
      moneyState.transactions[index] = transaction;
    }
  } else {
    moneyState.transactions.unshift(transaction);
  }

  calculateBalance();
  saveMoneyState();
  updateMoneyUI();
  closeMoneyModal();

  showToast(
    moneyState.currentEditId ? "Transaksi diupdate" : "Transaksi ditambahkan",
    "success",
  );

  if (typeof addNotification === "function") {
    const icon = moneyState.currentType === "income" ? "💰" : "💸";
    addNotification(
      `${icon} ${moneyState.currentType === "income" ? "Pemasukan" : "Pengeluaran"}`,
      `${formatCurrency(amount)} - ${getCategoryName(category)}`,
      "success",
    );
  }
}

// Calculate balance
function calculateBalance() {
  let income = 0;
  let expense = 0;

  moneyState.transactions.forEach((t) => {
    if (t.type === "income") {
      income += t.amount;
    } else {
      expense += t.amount;
    }
  });

  moneyState.balance = income - expense;
}

// Get category name
function getCategoryName(value) {
  const categories = {
    gaji: "Gaji",
    bonus: "Bonus",
    hadiah: "Hadiah",
    "lainnya-income": "Lainnya",
    makanan: "Makanan & Minuman",
    transport: "Transportasi",
    sedekah: "Sedekah",
    zakat: "Zakat",
    belanja: "Belanja",
    tagihan: "Tagihan",
    kesehatan: "Kesehatan",
    pendidikan: "Pendidikan",
    hiburan: "Hiburan",
    "lainnya-expense": "Lainnya",
  };
  return categories[value] || value;
}

// Get category icon
function getCategoryIcon(value) {
  const icons = {
    gaji: "💰",
    bonus: "🎁",
    hadiah: "🎉",
    "lainnya-income": "💵",
    makanan: "🍔",
    transport: "🚗",
    sedekah: "💝",
    zakat: "🕌",
    belanja: "🛒",
    tagihan: "📱",
    kesehatan: "⚕️",
    pendidikan: "📚",
    hiburan: "🎮",
    "lainnya-expense": "💸",
  };
  return icons[value] || "💰";
}

// Update money UI
function updateMoneyUI() {
  calculateBalance();

  const balanceEl = document.getElementById("money-balance");
  const incomeEl = document.getElementById("money-income");
  const expenseEl = document.getElementById("money-expense");

  let totalIncome = 0;
  let totalExpense = 0;

  moneyState.transactions.forEach((t) => {
    if (t.type === "income") {
      totalIncome += t.amount;
    } else {
      totalExpense += t.amount;
    }
  });

  if (balanceEl) {
    balanceEl.textContent = moneyState.balanceVisible
      ? formatCurrency(moneyState.balance)
      : "Rp ••••••";
  }
  if (incomeEl) {
    incomeEl.textContent = moneyState.balanceVisible
      ? formatCurrency(totalIncome)
      : "Rp ••••";
  }
  if (expenseEl) {
    expenseEl.textContent = moneyState.balanceVisible
      ? formatCurrency(totalExpense)
      : "Rp ••••";
  }

  renderTransactions();
  updateMoneyCharts();
}

// Render transactions
function renderTransactions() {
  const container = document.getElementById("money-transactions");
  if (!container) return;

  if (moneyState.transactions.length === 0) {
    container.innerHTML = `
            <div class="text-center text-slate-400 py-8">
                <i class="fas fa-wallet text-4xl mb-2 opacity-50"></i>
                <p class="text-sm">Belum ada transaksi</p>
            </div>
        `;
    return;
  }

  container.innerHTML = moneyState.transactions
    .map((t) => {
      const isIncome = t.type === "income";
      const color = isIncome ? "emerald" : "rose";
      const icon = getCategoryIcon(t.category);
      const dateObj = new Date(t.date);
      const dateStr = dateObj.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      return `
            <div class="glass-card p-4 hover:scale-[1.02] transition-transform">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3 flex-1">
                        <div class="w-12 h-12 rounded-full bg-${color}-100 flex items-center justify-center text-2xl">
                            ${icon}
                        </div>
                        <div class="flex-1">
                            <p class="font-bold text-slate-700">${getCategoryName(t.category)}</p>
                            <p class="text-xs text-slate-500">${t.description}</p>
                            <p class="text-xs text-slate-400 mt-1"><i class="far fa-calendar mr-1"></i>${dateStr}</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="font-black text-lg text-${color}-600">${isIncome ? "+" : "-"}${formatCurrency(t.amount)}</p>
                        <div class="flex gap-2 mt-2">
                            <button onclick="editMoneyTransaction(${t.id})" class="text-xs text-blue-500 hover:text-blue-600">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button onclick="deleteMoneyTransaction(${t.id})" class="text-xs text-rose-500 hover:text-rose-600">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
}

// Edit transaction
function editMoneyTransaction(id) {
  const transaction = moneyState.transactions.find((t) => t.id === id);
  if (!transaction) return;

  moneyState.currentEditId = id;
  moneyState.currentType = transaction.type;

  const modal = document.getElementById("money-modal");
  const title = document.getElementById("money-modal-title");
  const saveBtn = document.getElementById("money-save-btn");

  if (modal) modal.classList.add("active");
  if (title)
    title.textContent =
      transaction.type === "income" ? "Edit Pemasukan" : "Edit Pengeluaran";
  if (saveBtn) saveBtn.innerHTML = '<i class="fas fa-save mr-2"></i>Update';

  document.getElementById("money-amount").value = transaction.amount;
  document.getElementById("money-category").value = transaction.category;
  document.getElementById("money-description").value =
    transaction.description === "-" ? "" : transaction.description;
  document.getElementById("money-date").value = transaction.date;

  updateCategoryOptions(transaction.type);
}

// Delete transaction
function deleteMoneyTransaction(id) {
  Swal.fire({
    title: "Hapus Transaksi?",
    text: "Transaksi akan dihapus permanen",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, Hapus",
    cancelButtonText: "Batal",
    confirmButtonColor: "#ef4444",
    customClass: { popup: "glass-card" },
  }).then((result) => {
    if (result.isConfirmed) {
      moneyState.transactions = moneyState.transactions.filter(
        (t) => t.id !== id,
      );
      saveMoneyState();
      updateMoneyUI();
      showToast("Transaksi dihapus", "success");
    }
  });
}

// Clear all transactions
function clearAllTransactions() {
  if (moneyState.transactions.length === 0) return;

  Swal.fire({
    title: "Hapus Semua Transaksi?",
    text: "Semua transaksi akan dihapus permanen",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, Hapus Semua",
    cancelButtonText: "Batal",
    confirmButtonColor: "#ef4444",
    customClass: { popup: "glass-card" },
  }).then((result) => {
    if (result.isConfirmed) {
      moneyState.transactions = [];
      moneyState.balance = 0;
      saveMoneyState();
      updateMoneyUI();
      showToast("Semua transaksi dihapus", "success");
    }
  });
}

// Update charts (simplified - will work even without Chart.js)
function updateMoneyCharts() {
  if (typeof Chart === "undefined") {
    console.log("Chart.js not loaded, skipping charts");
    return;
  }

  // Category chart
  const categoryCanvas = document.getElementById("money-category-chart");
  if (categoryCanvas) {
    const ctx = categoryCanvas.getContext("2d");
    const categoryTotals = {};

    moneyState.transactions.forEach((t) => {
      if (t.type === "expense") {
        if (!categoryTotals[t.category]) categoryTotals[t.category] = 0;
        categoryTotals[t.category] += t.amount;
      }
    });

    const labels = Object.keys(categoryTotals).map((k) => getCategoryName(k));
    const data = Object.values(categoryTotals);

    if (window.moneyCategoryChart) window.moneyCategoryChart.destroy();

    if (data.length > 0) {
      window.moneyCategoryChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                "#10b981",
                "#3b82f6",
                "#f59e0b",
                "#ef4444",
                "#8b5cf6",
                "#ec4899",
                "#14b8a6",
                "#f97316",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: { legend: { display: false } },
        },
      });
    }
  }

  // Trend chart
  const trendCanvas = document.getElementById("money-trend-chart");
  if (trendCanvas) {
    const ctx = trendCanvas.getContext("2d");
    const last7Days = [];
    const incomeData = [];
    const expenseData = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split("T")[0];
      last7Days.push(
        date.toLocaleDateString("id-ID", { day: "numeric", month: "short" }),
      );

      let dayIncome = 0;
      let dayExpense = 0;

      moneyState.transactions.forEach((t) => {
        if (t.date === dateStr) {
          if (t.type === "income") dayIncome += t.amount;
          else dayExpense += t.amount;
        }
      });

      incomeData.push(dayIncome);
      expenseData.push(dayExpense);
    }

    if (window.moneyTrendChart) window.moneyTrendChart.destroy();

    window.moneyTrendChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: last7Days,
        datasets: [
          {
            label: "Pemasukan",
            data: incomeData,
            borderColor: "#10b981",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            tension: 0.4,
          },
          {
            label: "Pengeluaran",
            data: expenseData,
            borderColor: "#ef4444",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return "Rp " + value / 1000 + "k";
              },
            },
          },
        },
      },
    });
  }
}

// Initialize money tracking on load
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    loadMoneyState();
    updateMoneyUI();
  });
}
