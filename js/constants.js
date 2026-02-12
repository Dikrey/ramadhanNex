const prayerTimes = {
    jakarta: { imsak: "04:38", subuh: "04:48", dzuhur: "12:05", ashar: "15:17", maghrib: "18:05", isya: "19:15" },
    bandung: { imsak: "04:40", subuh: "04:50", dzuhur: "12:07", ashar: "15:19", maghrib: "18:07", isya: "19:17" },
    surabaya: { imsak: "04:25", subuh: "04:35", dzuhur: "11:52", ashar: "15:04", maghrib: "17:52", isya: "19:02" },
    yogyakarta: { imsak: "04:32", subuh: "04:42", dzuhur: "11:59", ashar: "15:11", maghrib: "17:59", isya: "19:09" },
    medan: { imsak: "05:02", subuh: "05:12", dzuhur: "12:29", ashar: "15:41", maghrib: "18:29", isya: "19:39" }
};

const dailyInsights = [
    { type: 'quote', text: "Barangsiapa yang menghidupkan bulan Ramadan dengan iman dan mengharap pahala, maka diampunilah dosa-dosanya yang telah lalu.", source: "HR. Bukhari & Muslim" },
    { type: 'quote', text: "Puasa itu perisai, maka apabila salah seorang di antara kalian berpuasa, janganlah ia berkata keji dan berteriak-teriak.", source: "HR. Bukhari" },
    { type: 'quote', text: "Sebaik-baik amal perbuatan adalah shalat pada waktunya.", source: "HR. Bukhari & Muslim" },
    { type: 'quote', text: "Sedekah itu dapat menghapus dosa sebagaimana air memadamkan api.", source: "HR. Tirmidzi" },
    { type: 'quote', text: "Barangsiapa memberi makan orang yang berpuasa, maka baginya pahala seperti pahala orang yang berpuasa tanpa dikurangi sedikitpun.", source: "HR. Tirmidzi" },
    { type: 'hadith', text: "Rasulullah SAW bersabda: 'Barangsiapa yang mendirikan Lailatul Qadr karena iman dan mengharap pahala, maka diampunilah dosa-dosanya yang telah lalu.'", source: "HR. Bukhari & Muslim" },
    { type: 'hadith', text: "'Barangsiapa yang shalat malam di bulan Ramadan karena iman dan mengharap pahala, maka diampunilah dosa-dosanya yang telah lalu.'", source: "HR. Bukhari & Muslim" },
    { type: 'hadith', text: "'Barangsiapa yang memberi makan orang yang berpuasa, maka baginya pahala seperti pahala orang yang berpuasa tersebut, tanpa dikurangi sedikitpun dari pahalanya.'", source: "HR. Tirmidzi" },
    { type: 'hadith', text: "'Allah tidak menyia-nyiakan pahala orang yang berbuat kebaikan.'", source: "HR. Bukhari" },
    { type: 'hadith', text: "'Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya.'", source: "HR. Thabrani" },
    { type: 'dua', title: "Doa Buka Puasa", arabic: "اَللّٰهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ", latin: "Allahumma laka shumtu wa bika amantu wa 'ala rizqika afthartu", meaning: "Ya Allah, untuk-Mu aku berpuasa, kepada-Mu aku beriman, dan dengan rezeki-Mu aku berbuka." },
    { type: 'dua', title: "Doa Sahur", arabic: "بِسْمِ اللهِ وَعَلَى بَرَكَةِ اللهِ", latin: "Bismillahi wa 'ala barakatillah", meaning: "Dengan nama Allah dan dengan berkah Allah." },
    { type: 'dua', title: "Doa Setelah Makan", arabic: "اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ", latin: "Alhamdulillahilladhi ath'amana wa saqana wa ja'alana muslimin", meaning: "Segala puji bagi Allah yang telah memberi makan dan minum kepada kami, serta menjadikan kami orang-orang Islam." },
    { type: 'dua', title: "Doa Masuk Masjid", arabic: "اَللّٰهُمَّ افْتَحْ لِيْ أَبْوَابَ رَحْمَتِكَ", latin: "Allahumma iftah li abwaba rahmatik", meaning: "Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu." },
    { type: 'dua', title: "Doa Keluar Masjid", arabic: "اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ مِنْ فَضْلِكَ", latin: "Allahumma inni as'aluka min fadlik", meaning: "Ya Allah, sesungguhnya aku memohon kepada-Mu dari karunia-Mu." }
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
    { no: 12, name: "Al-Khaliq", meaning: "Maha Pencipta" }
];


const achievements = [
    { id: 'first_streak', icon: '🔥', name: 'Api Pertama', desc: 'Streak pertama kali', unlocked: false, progress: { current: 0, target: 1 } },
    { id: 'streak_7', icon: '⚡', name: '7 Hari Berturut', desc: 'Streak 7 hari', unlocked: false, progress: { current: 0, target: 7 } },
    { id: 'streak_30', icon: '👑', name: 'Ramadan Master', desc: 'Streak 30 hari', unlocked: false, progress: { current: 0, target: 30 } },
    { id: 'quran_100', icon: '📖', name: 'Pembaca Setia', desc: 'Baca 100 halaman Quran', unlocked: false, progress: { current: 0, target: 100 } },
    { id: 'quran_khatam', icon: '📚', name: 'Khatam Quran', desc: 'Selesai khatam Quran', unlocked: false, progress: { current: 0, target: 604 } },
    { id: 'dzikir_1000', icon: '📿', name: 'Dzikir 1000x', desc: 'Total dzikir 1000x', unlocked: false, progress: { current: 0, target: 1000 } },
    { id: 'sedekah_10', icon: '💝', name: 'Derawan', desc: 'Sedekah 10 kali', unlocked: false, progress: { current: 0, target: 10 } },
    { id: 'tarawih_100', icon: '🌙', name: 'Tarawih 100 Rakaat', desc: 'Total 100 rakaat tarawih', unlocked: false, progress: { current: 0, target: 100 } }
];

const dzikirList = [
    { title: "Dzikir Pagi", time: "Setelah Subuh", items: ["Subhanallah (33x)", "Alhamdulillah (33x)", "Allahuakbar (33x)", "La ilaha illallah (10x)"] },
    { title: "Dzikir Sore", time: "Setelah Ashar", items: ["Subhanallah (33x)", "Alhamdulillah (33x)", "Allahuakbar (33x)", "La ilaha illallah (10x)"] },
    { title: "Istighfar", time: "Kapan saja", items: ["Astaghfirullah (100x)"] },
    { title: "Shalawat", time: "Kapan saja", items: ["Shalawat Nabi (100x)"] }
];
