/* ==========================================
   LOVEBOOK - Main JavaScript
   Uses: config.js, utils.js, auth.js
   ========================================== */

// ==========================================
// DOM ELEMENTS
// ==========================================
const DOM = {
  // Login
  loginPage: document.getElementById("login-page"),
  mainApp: document.getElementById("main-app"),
  usernameInput: document.getElementById("username"),
  passwordInput: document.getElementById("password"),
  loginError: document.getElementById("login-error"),
  loginBtn: document.getElementById("login-btn"),

  // Main
  daysCounter: document.getElementById("days-counter"),

  // Modals
  letterModal: document.getElementById("letter-modal"),
  quizModal: document.getElementById("quiz-modal"),
  wheelModal: document.getElementById("wheel-modal"),
  galleryModal: document.getElementById("gallery-modal"),
  storyModal: document.getElementById("story-modal"),
};

// ==========================================
// DROPDOWN FUNCTIONALITY
// ==========================================
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const isOpen = dropdown.classList.contains("show");

  // Close all dropdowns first
  closeAllDropdowns();

  // Toggle the clicked dropdown
  if (!isOpen) {
    dropdown.classList.add("show");
  }
}

function closeAllDropdowns() {
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    menu.classList.remove("show");
  });
}

// ==========================================
// SIDEBAR DROPDOWN
// ==========================================
function toggleSidebarDropdown(dropdownId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const dropdownContent = document.getElementById(dropdownId);
  if (!dropdownContent) return;

  const parentDropdown = dropdownContent.closest(".sidebar-dropdown");
  if (!parentDropdown) return;

  // Close other sidebar dropdowns
  document.querySelectorAll(".sidebar-dropdown").forEach((dd) => {
    if (dd !== parentDropdown) {
      dd.classList.remove("open");
    }
  });

  // Toggle current dropdown
  parentDropdown.classList.toggle("open");
}

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  // Tutup header dropdowns jika klik di luar header-right
  if (!e.target.closest(".header-right")) {
    closeAllDropdowns();
  }

  // Tutup sidebar dropdowns jika klik di luar sidebar-dropdown
  if (!e.target.closest(".sidebar-dropdown")) {
    document.querySelectorAll(".sidebar-dropdown").forEach((dd) => {
      dd.classList.remove("open");
    });
  }
});

// ==========================================
// PLACEHOLDER FUNCTIONS (Coming Soon)
// ==========================================
// ==========================================
// TRUTH OR DARE - Married Couple Edition 🔥💍
// ==========================================
const truthQuestions = [
  "Bagian tubuh aku mana yang paling bikin kamu gak tahan? 😏",
  "Posisi favorit kamu apa? Dan kenapa? 🔥",
  "Kapan terakhir kamu pengen 'serang' aku tapi gak jadi?",
  "Hal paling wild yang pernah kita lakuin di mana?",
  "Kamu lebih suka aku dominan atau submissive? 😈",
  "Fantasy apa yang belum pernah kita coba tapi kamu pengen banget?",
  "Di ruangan mana selain kamar yang pengen kamu coba? 🏠",
  "Apa yang aku lakuin yang paling bikin kamu turn on?",
  "Pernah gak kamu pengen 'itu' pas lagi di tempat umum?",
  "Ceritain momen paling intense yang kita pernah lakuin 🥵",
  "Kamu lebih suka morning atau night session? Why?",
  "Hal apa yang bikin kamu langsung 'on' kalau aku lakuin?",
  "Outfit aku yang mana yang paling bikin kamu gak fokus?",
  "Sebutkan 3 hal baru yang pengen kita explore bareng 😈",
  "Kalau boleh request malam ini, kamu mau gimana?",
  "Apa yang kamu suka aku bisikkin pas lagi 'itu'?",
  "Pernah fake it? Be honest! 😏",
  "Tempat paling random yang kamu bayangin kita lakuin?",
];

const dareActions = [
  "Cium aku selama 2 menit nonstop, mulai dari sekarang 💋",
  "Buka 1 piece of clothing dari aku... pake gigi 😈",
  "Massage punggung aku selama 5 menit... terus turun pelan-pelan 🔥",
  "Whisper ke telinga aku hal paling nakal yang mau kamu lakuin malam ini",
  "Lap dance sekarang. No music needed 💃",
  "Kiss trail dari leher sampai... terserah kamu mau berhenti di mana 😏",
  "Roleplay: kamu jadi stranger yang pdkt sama aku di bar",
  "Bawa aku ke kamar sekarang dan tunjukin siapa bosnya 😈",
  "Striptease slow... satu piece at a time 🔥",
  "Blindfold aku dan kasih surprise... apa aja boleh 👀",
  "Ice cube play - jalanin di body aku sampai meleleh 🧊",
  "Body shot! Tapi kamu yang pilih mau di mana 🥃",
  "Cium setiap bagian tubuh aku yang kamu suka... take your time 💕",
  "Posisi baru malam ini - kamu yang lead dan decide semuanya",
  "Shower bareng sekarang... tapi gak boleh cuma mandi 🚿",
  "Tulis di body aku pake jari: 'MINE' 😈",
  "Recreate first night kita... tapi versi upgraded 💍",
  "Tie my hands dan do whatever you want for 10 minutes 🔥",
  "Pilih satu ruangan baru di rumah... kita 'resmikan' malam ini 🏠",
  "Full control ke kamu selama 1 jam - aku nurut apa aja 😏",
];

function openTruthOrDare() {
  openModal("tod-modal");
  document.getElementById("tod-result").innerHTML = `
    <div class="tod-intro">
      <p>🔥 <strong>Married Couple Edition</strong> 💍</p>
      <p>Pilih Truth atau Dare untuk mulai!</p>
      <p class="tod-warning">👫 Khusus Suami Istri 👫</p>
    </div>
  `;
}

function getTruth() {
  const randomTruth =
    truthQuestions[Math.floor(Math.random() * truthQuestions.length)];
  const resultEl = document.getElementById("tod-result");

  resultEl.innerHTML = `
    <div class="tod-card truth-card">
      <div class="tod-type">🤫 TRUTH</div>
      <div class="tod-question">${randomTruth}</div>
      <p class="tod-instruction">Jawab jujur ya sayang~ No secrets between us 💕</p>
    </div>
  `;

  resultEl.classList.add("show");
}

function getDare() {
  const randomDare =
    dareActions[Math.floor(Math.random() * dareActions.length)];
  const resultEl = document.getElementById("tod-result");

  resultEl.innerHTML = `
    <div class="tod-card dare-card">
      <div class="tod-type">🔥 DARE</div>
      <div class="tod-question">${randomDare}</div>
      <p class="tod-instruction">Langsung eksekusi ya~ No excuses! 😈</p>
    </div>
  `;

  resultEl.classList.add("show");
}

function closeTruthOrDare() {
  closeModal("tod-modal");
}

function openLoveCalculator() {
  showAlert(
    "Coming Soon! 💕",
    "Fitur Love Calculator akan segera hadir!",
    "💕"
  );
}

function openCountdownModal() {
  showAlert(
    "Anniversary 💑",
    "Bersama sejak 2 Mei 2025. Cinta kita akan terus bertumbuh! 🌹",
    "💑"
  );
}

function openWishlistModal() {
  showAlert("Wishlist 🎁", "Hadiah terbaik adalah kebersamaan kita! 💝", "🎁");
}

function showFriendProfile(friendId) {
  const friendProfiles = {
    salman: {
      name: "Salman Ganteng",
      relation: "💕 Pacar Nabila",
      bio: "Cowok paling ganteng dan paling sayang sama Nabila!",
    },
    lia: {
      name: "Lia Jomblo",
      relation: "👯 Bestie",
      bio: "Teman curhat andalan Nabila!",
    },
    tere: {
      name: "Tere Softspoken",
      relation: "💬 Teman Ngobrol",
      bio: "Si kalem yang selalu bisa bikin suasana tenang.",
    },
    eliza: {
      name: "Eliza Bucin",
      relation: "💑 Si Bucin",
      bio: "Expert dalam urusan bucin-bucin!",
    },
    puspa: {
      name: "Puspa Korpri",
      relation: "📚 Teman Belajar",
      bio: "Rajin dan pintar. Sering jadi tempat tanya PR!",
    },
    septi: {
      name: "Septi Itera Olympic",
      relation: "🏆 Si Juara",
      bio: "Atlet kampus yang berprestasi!",
    },
    rizka: {
      name: "Rizka Aja",
      relation: "🎉 Si Rame",
      bio: "Pembawa suasana! Kalau ada dia pasti seru.",
    },
    abryan: {
      name: "Abryan",
      relation: "🎮 Teman Main",
      bio: "Teman seru yang asik diajak ngobrol!",
    },
    caca: {
      name: "Caca",
      relation: "💖 Sahabat KKN",
      bio: "Teman KKN ITERA yang seru! Partner in crime.",
    },
    bitra: {
      name: "Bitra",
      relation: "🌟 KKN ITERA",
      bio: "Partner KKN ITERA yang selalu semangat!",
    },
    alba: {
      name: "Alba",
      relation: "🌈 KKN UNILA CANTI",
      bio: "Teman KKN UNILA CANTI yang ceria!",
    },
    yudha: {
      name: "Yudha",
      relation: "💪 KKN UNILA CANTI",
      bio: "Partner KKN UNILA CANTI yang solid!",
    },
    dzaky: {
      name: "Dzaky",
      relation: "🔥 KKN CANTI-X",
      bio: "Anggota KKN CANTI-X yang aktif dan kreatif!",
    },
    rendy: {
      name: "Rendy",
      relation: "⚡ KKN CANTI-X",
      bio: "Partner KKN CANTI-X yang energik!",
    },
  };
  const profile = friendProfiles[friendId] || {
    name: friendId,
    relation: "Teman",
    bio: "Teman baik Nabila!",
  };
  showAlert(`${profile.name}`, `${profile.relation}\n\n${profile.bio}`, "👤");
}

function playVideo(videoId) {
  showAlert("Video 🎬", "Fitur video akan segera tersedia!", "🎬");
}

function buyProduct(productName) {
  showAlert(
    "Yeay! 🎉",
    `${productName} berhasil diklaim! Hubungi Salman untuk redeem ya sayang~ 💕`,
    "🎁"
  );
}

function sharePost() {
  showAlert("Share 📤", "Post berhasil dibagikan ke hati Salman! 💕", "📤");
}

// ==========================================
// POST INTERACTIONS
// ==========================================
function toggleLike(button, postId) {
  const countElement = document.getElementById(`like-count-${postId}`);
  const icon = button.querySelector("i");
  let count = parseInt(
    countElement.dataset.count ||
      countElement.textContent.replace(/[^0-9]/g, "")
  );

  if (button.classList.contains("liked")) {
    // Unlike
    button.classList.remove("liked");
    icon.className = "far fa-thumbs-up";
    button.querySelector("span").textContent = "Suka";
    count--;
  } else {
    // Like with animation
    button.classList.add("liked");
    icon.className = "fas fa-heart";
    button.querySelector("span").textContent = "Suka";
    count++;

    // Heart burst animation
    createHeartBurst(button);
  }

  // Update count display
  countElement.dataset.count = count;
  countElement.textContent = formatNumber(count);
}

function createHeartBurst(element) {
  const rect = element.getBoundingClientRect();

  for (let i = 0; i < 6; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top}px;
            font-size: 16px;
            pointer-events: none;
            z-index: 9999;
            animation: heartBurst 0.8s ease-out forwards;
            --angle: ${i * 60 - 150}deg;
        `;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 800);
  }
}

function toggleComments(postId) {
  const commentsSection = document.getElementById(`comments-${postId}`);
  commentsSection.classList.toggle("show");
}

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

// ==========================================
// MODAL FUNCTIONS
// ==========================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }
}

// Close modal on overlay click
function setupModalClose() {
  document.querySelectorAll(".modal-overlay").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
        document.body.style.overflow = "";
      }
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.show").forEach((modal) => {
        modal.classList.remove("show");
      });
      document.body.style.overflow = "";
    }
  });
}

// Modal openers
function openLetterModal() {
  openModal("letter-modal");
  // Reset envelope state
  const envelope = document.getElementById("envelope");
  const letterPaper = document.getElementById("letter-paper");
  if (envelope && letterPaper) {
    envelope.style.display = "flex";
    envelope.classList.remove("opened");
    letterPaper.classList.remove("show");
  }
}

function openEnvelope() {
  const envelope = document.getElementById("envelope");
  const letterPaper = document.getElementById("letter-paper");

  if (envelope && letterPaper) {
    envelope.classList.add("opened");
    setTimeout(() => {
      envelope.style.display = "none";
      letterPaper.classList.add("show");
    }, 500);
  }
}

function closeLetterModal() {
  closeModal("letter-modal");
}

function closeQuizModal() {
  closeModal("quiz-modal");
}

function closeGalleryModal() {
  closeModal("gallery-modal");
}

function closeStoryModal() {
  closeModal("story-modal");
}

function closeFriendModal() {
  closeModal("friend-modal");
}

function closeTruthOrDare() {
  closeModal("tod-modal");
}

function closeLoveCalculator() {
  closeModal("love-calc-modal");
}

function closeCountdownModal() {
  closeModal("countdown-modal");
}

function closeWishlistModal() {
  closeModal("wishlist-modal");
}

function closeVideoModal() {
  closeModal("video-modal");
}

function openQuizModal() {
  openModal("quiz-modal");
  startQuiz();
}

function openWheelModal() {
  openModal("wheel-modal");
}

function openGalleryModal() {
  openModal("gallery-modal");
  currentMemory = 0;
  updateGallery();
}

function openStoryModal(index) {
  openModal("story-modal");
  showStory(index);
}

// ==========================================
// QUIZ GAME
// ==========================================
const quizQuestions = [
  {
    question: "Kapan kita jadian? 💕",
    options: ["1 Mei 2025", "2 Mei 2025", "3 Mei 2025", "4 Mei 2025"],
    correct: 1,
  },
  {
    question: "Warna favorit Nabila adalah? 🎨",
    options: ["Pink", "Biru", "Ungu", "Merah"],
    correct: 1,
  },
  {
    question: "Siapa yang lebih sering ngambek? 😤",
    options: ["Salman", "Nabila", "Dua-duanya", "Gak pernah ngambek"],
    correct: 1,
  },
  {
    question: "Apa target kita tahun depan? 🎓",
    options: [
      "Nikah",
      "Wisuda bareng",
      "Traveling ke luar negeri",
      "Beli rumah",
    ],
    correct: 1,
  },
  {
    question: "Berapa umur Nabila sekarang? 🎂",
    options: ["19 tahun", "20 tahun", "21 tahun", "22 tahun"],
    correct: 2,
  },
];

let currentQuizQuestion = 0;
let quizScore = 0;

function startQuiz() {
  currentQuizQuestion = 0;
  quizScore = 0;
  showQuizQuestion();
}

function showQuizQuestion() {
  const container = document.getElementById("quiz-container");

  if (currentQuizQuestion >= quizQuestions.length) {
    showQuizResult();
    return;
  }

  const q = quizQuestions[currentQuizQuestion];

  // Build progress dots
  let progressHTML = '<div class="quiz-progress">';
  for (let i = 0; i < quizQuestions.length; i++) {
    let dotClass = "dot";
    if (i < currentQuizQuestion) dotClass += " done";
    else if (i === currentQuizQuestion) dotClass += " active";
    progressHTML += `<div class="${dotClass}"></div>`;
  }
  progressHTML += "</div>";

  // Build options
  let optionsHTML = '<div class="quiz-options">';
  q.options.forEach((opt, i) => {
    optionsHTML += `<div class="quiz-option" onclick="selectQuizAnswer(${i})">${opt}</div>`;
  });
  optionsHTML += "</div>";

  container.innerHTML = `
        ${progressHTML}
        <div class="quiz-question">${q.question}</div>
        ${optionsHTML}
    `;
}

function selectQuizAnswer(index) {
  const options = document.querySelectorAll(".quiz-option");
  const correctIndex = quizQuestions[currentQuizQuestion].correct;

  // Disable all options
  options.forEach((opt, i) => {
    opt.style.pointerEvents = "none";
    if (i === correctIndex) {
      opt.classList.add("correct");
    } else if (i === index && i !== correctIndex) {
      opt.classList.add("wrong");
    }
  });

  if (index === correctIndex) {
    quizScore++;
  }

  // Next question after delay
  setTimeout(() => {
    currentQuizQuestion++;
    showQuizQuestion();
  }, 1200);
}

function showQuizResult() {
  const container = document.getElementById("quiz-container");
  let emoji, title, message;

  if (quizScore === quizQuestions.length) {
    emoji = "🏆";
    title = "PERFECT!";
    message = "Kamu hafal banget tentang kita! I love you sayang! 💕";
    createConfetti();
  } else if (quizScore >= 3) {
    emoji = "🌟";
    title = "Hampir Perfect!";
    message = `${quizScore}/${quizQuestions.length} bener! Lumayan kenal kita ya~`;
  } else {
    emoji = "💪";
    title = "Coba Lagi!";
    message = `${quizScore}/${quizQuestions.length}. Harus lebih perhatian ya sayang!`;
  }

  container.innerHTML = `
        <div class="quiz-result">
            <div class="emoji">${emoji}</div>
            <h3>${title}</h3>
            <p>${message}</p>
            <button class="btn" onclick="startQuiz()">
                <i class="fas fa-redo"></i> Main Lagi
            </button>
        </div>
    `;
}

// ==========================================
// SPIN WHEEL GAME
// ==========================================
// ==========================================
// SPIN WHEEL - With Emoji Text
// ==========================================
const wheelPrizes = [
  "🤗 Pelukan 5 Menit",
  "😘 Ciuman di Kening",
  "☕ Quality Time",
  "🍕 Traktir Makan",
  "🎬 Nonton Bareng",
  "🚶 Jalan-jalan",
  "💌 Kata Sayang",
  "💝 JACKPOT! Semua Hadiah!",
];

let isSpinning = false;

function spinWheel() {
  if (isSpinning) return;

  isSpinning = true;
  const wheel = document.getElementById("wheel");
  const spinBtn = document.getElementById("spin-btn");
  const resultEl = document.getElementById("wheel-result");

  // Disable button
  spinBtn.disabled = true;
  spinBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Berputar...';
  resultEl.textContent = "";
  resultEl.style.opacity = "0";

  // Calculate random rotation
  const randomDeg = Math.floor(Math.random() * 360) + 1800; // At least 5 full rotations
  wheel.style.transform = `rotate(${randomDeg}deg)`;

  // Show result after animation
  setTimeout(() => {
    const finalDeg = randomDeg % 360;
    const prizeIndex = Math.floor((360 - finalDeg + 22.5) / 45) % 8;
    const prize = wheelPrizes[prizeIndex];

    resultEl.innerHTML = `🎉 Selamat! Kamu dapat: <strong>${prize}</strong>`;
    resultEl.style.opacity = "1";

    // Re-enable button
    spinBtn.disabled = false;
    spinBtn.innerHTML = '<i class="fas fa-sync-alt"></i> PUTAR LAGI!';
    isSpinning = false;

    // Celebration
    createConfetti();
  }, 4000);
}

// ==========================================
// GALLERY
// ==========================================
const memories = [
  {
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop",
    caption: "Awal mula kisah kita dimulai... 💕",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
    caption: "Date pertama yang gak akan pernah dilupakan 🥰",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400&fit=crop",
    caption: "Jalan-jalan bareng selalu jadi hal yang paling seru! ✨",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
    caption: "Momen-momen yang bikin kangen... 💭",
  },
];

let currentMemory = 0;

function updateGallery() {
  const imageEl = document.getElementById("gallery-main-img");
  const captionEl = document.getElementById("gallery-caption");
  const dotsContainer = document.getElementById("gallery-thumbnails");

  if (!imageEl || !captionEl) return;

  const memory = memories[currentMemory];

  // Fade out
  imageEl.style.opacity = "0";

  setTimeout(() => {
    imageEl.src = memory.image;
    captionEl.textContent = memory.caption;
    imageEl.style.opacity = "1";
  }, 200);

  // Update dots
  dotsContainer.innerHTML = memories
    .map(
      (_, i) => `<div class="dot ${i === currentMemory ? "active" : ""}"></div>`
    )
    .join("");
}

function nextMemory() {
  currentMemory = (currentMemory + 1) % memories.length;
  updateGallery();
}

function prevMemory() {
  currentMemory = (currentMemory - 1 + memories.length) % memories.length;
  updateGallery();
}

// Alias for gallery buttons
function nextImage() {
  nextMemory();
}

function prevImage() {
  prevMemory();
}

// ==========================================
// STORIES
// ==========================================
const stories = [
  {
    emoji: "💙",
    text: "Hai sayang!\n\nIni adalah Lovebook khusus untuk kamu. Tempat dimana semua cerita cinta kita tersimpan dengan indah.\n\nAku sayang kamu!\n\n- Salman",
  },
  {
    emoji: "💕",
    text: "Our Love Story\n\n2 Mei 2025 adalah hari dimana kita resmi jadi sepasang kekasih. Sejak hari itu, hidupku jadi lebih berwarna.\n\nTerima kasih sudah hadir di hidupku, Nabila.",
  },
  {
    emoji: "✨",
    text: "Memories Together\n\nSetiap momen bersamamu adalah kenangan yang berharga. Dari ketawa bareng sampai nangis bareng, semuanya indah karena ada kamu di sisiku.",
  },
];

let currentStory = 0;

function showStory(index) {
  currentStory = index;
  const story = stories[index];
  const contentEl = document.getElementById("story-content");

  // Update progress bars
  const progressHTML = stories
    .map(
      (_, i) =>
        `<div class="bar ${
          i === index ? "active" : i < index ? "done" : ""
        }"></div>`
    )
    .join("");

  contentEl.innerHTML = `
        <div class="story-view">
            <button class="close-btn" onclick="closeModal('story-modal')">
                <i class="fas fa-times"></i>
            </button>
            <div class="story-progress">${progressHTML}</div>
            <div class="story-emoji">${story.emoji}</div>
            <div class="story-text">${story.text}</div>
        </div>
    `;
}

// ==========================================
// FRIENDS DATA (Nomor 5)
// ==========================================
const friendsData = [
  {
    id: "salman",
    name: "Salman Ganteng",
    role: "💕 Pacar Tersayang",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=salman&backgroundColor=b6e3f4",
    bio: "Mahasiswa Teknik Informatika ITERA. Cowok paling ganteng dan paling sayang sama Nabila! 😎",
    message: "Selamat ulang tahun sayang! Aku cinta kamu selamanya! 💕",
  },
  {
    id: "lia",
    name: "Lia Jomblo",
    role: "👯 Bestie",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=lia&backgroundColor=c0aede",
    bio: "Teman curhat andalan. Selalu ada di saat susah maupun senang!",
    message: "Happy birthday Bil! Semoga makin bahagia sama Salman ya! 🎂💕",
  },
  {
    id: "tere",
    name: "Tere Softspoken",
    role: "💬 Teman Ngobrol",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=tere&backgroundColor=ffd5dc",
    bio: "Si kalem yang selalu bisa bikin suasana jadi tenang.",
    message:
      "Selamat ulang tahun kak Nabila! Sehat terus ya, sukses kuliahnya! ✨",
  },
  {
    id: "eliza",
    name: "Eliza Bucin",
    role: "💑 Si Bucin",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=eliza&backgroundColor=ffdfbf",
    bio: "Expert dalam urusan bucin-bucin. Suka kasih tips relationship!",
    message: "HBD Bil! Ciee tambah tua~ Semoga langgeng terus sama Salman! 💘",
  },
  {
    id: "puspa",
    name: "Puspa Korpri",
    role: "📚 Teman Belajar",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=puspa&backgroundColor=b6e3f4",
    bio: "Rajin dan pintar. Sering jadi tempat tanya PR!",
    message: "Selamat ulang tahun Nabila! Sukses skripsinya, semangat! 📖💪",
  },
  {
    id: "septi",
    name: "Septi Itera Olympic",
    role: "🏆 Si Juara",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=septi&backgroundColor=a8edea",
    bio: "Atlet kampus yang berprestasi. Inspirasi buat terus berjuang!",
    message: "Happy bday Nabila! Semoga tahun ini makin banyak prestasi! 🌟",
  },
  {
    id: "rizka",
    name: "Rizka Aja",
    role: "🎉 Si Rame",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=rizka&backgroundColor=fed6e3",
    bio: "Pembawa suasana! Kalau ada dia pasti seru.",
    message: "Bil! Selamat ulang tahun! Kapan party-nya? 🎈🥳",
  },
  {
    id: "abryan",
    name: "Abryan",
    role: "🎮 Teman Main",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=abryan&backgroundColor=c0aede",
    bio: "Teman seru yang asik diajak ngobrol dan main bareng!",
    message: "Happy birthday Nabila! Semoga sehat dan bahagia selalu! 🎂✨",
  },
  {
    id: "caca",
    name: "Caca",
    role: "💖 Sahabat KKN",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=caca&backgroundColor=ffd5dc",
    bio: "Teman KKN ITERA yang seru! Partner in crime di desa.",
    message: "Selamat ulang tahun Bil! Semoga semua mimpimu tercapai! 🌟💕",
  },
  {
    id: "bitra",
    name: "Bitra",
    role: "🌟 Teman KKN ITERA",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=bitra&backgroundColor=b6e3f4",
    bio: "Partner KKN ITERA yang selalu semangat dan bisa diandalkan!",
    message: "HBD Nabila! Sukses terus ya, jangan lupa bahagia! 🎉",
  },
  {
    id: "alba",
    name: "Alba",
    role: "🌈 Teman KKN UNILA",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=alba&backgroundColor=a8edea",
    bio: "Teman KKN UNILA CANTI yang ceria dan penuh semangat!",
    message: "Selamat ulang tahun Nabila! Semoga tahun ini lebih baik! ✨🎂",
  },
  {
    id: "yudha",
    name: "Yudha",
    role: "💪 Teman KKN CANTI",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=yudha&backgroundColor=ffdfbf",
    bio: "Partner KKN UNILA CANTI yang solid dan selalu siap membantu!",
    message: "Happy bday Nabila! Sehat selalu dan sukses! 🎊💪",
  },
  {
    id: "dzaky",
    name: "Dzaky",
    role: "🔥 Teman KKN CANTI-X",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=dzaky&backgroundColor=fed6e3",
    bio: "Anggota KKN CANTI-X UNILA yang aktif dan kreatif!",
    message: "Selamat ulang tahun Nabila! Sukses terus ya! 🌟🎉",
  },
  {
    id: "rendy",
    name: "Rendy",
    role: "⚡ Teman KKN CANTI-X",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=rendy&backgroundColor=c0aede",
    bio: "Partner KKN CANTI-X UNILA yang energik dan bersemangat!",
    message: "HBD Nabila! Semoga makin sukses dan bahagia! 🎂💫",
  },
];

function renderFriends() {
  const container = document.getElementById("friends-list");
  if (!container) return;

  container.innerHTML = friendsData
    .map(
      (friend) => `
    <div class="friend-card">
      <div class="friend-card-cover" style="background: linear-gradient(135deg, ${getRandomGradient()})"></div>
      <div class="friend-card-body">
        <img class="friend-card-avatar" src="${friend.avatar}" alt="${
        friend.name
      }">
        <div class="friend-card-name">${friend.name}</div>
        <div class="friend-card-role">${friend.role}</div>
        <div class="friend-card-bio">${friend.bio}</div>
        <div class="friend-card-message">
          <p>"${friend.message}"</p>
          <small>- Pesan untuk Nabila</small>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

function getRandomGradient() {
  const gradients = [
    "#667eea, #764ba2",
    "#f093fb, #f5576c",
    "#4facfe, #00f2fe",
    "#43e97b, #38f9d7",
    "#fa709a, #fee140",
    "#a8edea, #fed6e3",
    "#ff9a9e, #fecfef",
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
}

// ==========================================
// SECTION NAVIGATION
// ==========================================
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".feed-container").forEach((section) => {
    section.style.display = "none";
  });

  // Show selected section
  const section = document.getElementById(`section-${sectionId}`);
  if (section) {
    section.style.display = "block";
  }

  // Update nav active state
  document.querySelectorAll(".header-nav-item").forEach((item) => {
    item.classList.remove("active");
    if (item.dataset.section === sectionId) {
      item.classList.add("active");
    }
  });

  // Render friends if showing friends section
  if (sectionId === "friends") {
    renderFriends();
  }
}

// ==========================================
// THESIS LAB - Mini Game Racikan Kelulusan
// ==========================================
let labPotionCount = 0;
const labMaxPotions = 4;
let labBubbleInterval = null;

function openThesisLab() {
  // Reset state
  labPotionCount = 0;

  // Reset UI
  const potions = document.querySelectorAll(".lab-potion");
  potions.forEach((p) => {
    p.classList.remove("used");
    p.setAttribute("data-used", "false");
  });

  const liquid = document.getElementById("lab-liquid");
  const progress = document.getElementById("lab-progress");
  const status = document.getElementById("lab-status");
  const flaskBody = document.getElementById("lab-flask-body");
  const flaskNeck = document.getElementById("lab-flask-neck");
  const resultOverlay = document.getElementById("lab-result-overlay");
  const energyCore = document.getElementById("lab-energy-core");

  if (liquid) {
    liquid.style.height = "0%";
    liquid.style.background = "linear-gradient(to top, #3b82f6, #60a5fa)";
    liquid.classList.remove("boiling");
  }
  if (progress) progress.style.width = "0%";
  if (status) {
    status.textContent = "WAITING FOR INGREDIENTS...";
    status.classList.remove("critical");
  }
  if (flaskBody) {
    flaskBody.classList.remove("flask-broken", "critical-aura");
    flaskBody.style.opacity = "1";
  }
  if (flaskNeck) {
    flaskNeck.classList.remove("flask-broken");
    flaskNeck.style.opacity = "1";
  }
  if (resultOverlay) resultOverlay.classList.remove("show");
  if (energyCore) {
    energyCore.style.transform = "translate(-50%, -50%) scale(0)";
    energyCore.style.opacity = "0";
  }

  // Clear explosion container
  const explosion = document.getElementById("lab-explosion");
  if (explosion) explosion.innerHTML = "";

  // Clear bubbles
  const bubbles = document.getElementById("lab-bubbles");
  if (bubbles) bubbles.innerHTML = "";

  // Remove glitch
  document.body.classList.remove("glitch-effect");

  openModal("thesis-lab-modal");
}

function closeThesisLab() {
  if (labBubbleInterval) {
    clearInterval(labBubbleInterval);
    labBubbleInterval = null;
  }
  document.body.classList.remove("glitch-effect");
  closeModal("thesis-lab-modal");
}

function addPotion(el, color, name) {
  if (labPotionCount >= labMaxPotions) return;
  if (el.getAttribute("data-used") === "true") return;

  // Mark as used
  el.setAttribute("data-used", "true");
  el.classList.add("used");

  // Animate potion click
  el.style.transform = "scale(0.9)";
  setTimeout(() => {
    el.style.transform = "";
  }, 150);

  // Fill liquid
  labPotionCount++;
  const liquid = document.getElementById("lab-liquid");
  const progress = document.getElementById("lab-progress");
  const status = document.getElementById("lab-status");

  const pct = (labPotionCount / labMaxPotions) * 100;

  // Set color based on potion
  let bg = "";
  if (color === "blue") bg = "linear-gradient(to top, #3b82f6, #60a5fa)";
  if (color === "pink") bg = "linear-gradient(to top, #ec4899, #f472b6)";
  if (color === "purple") bg = "linear-gradient(to top, #8b5cf6, #a78bfa)";
  if (color === "orange") bg = "linear-gradient(to top, #f97316, #fb923c)";

  if (liquid) {
    liquid.style.height = pct + "%";
    liquid.style.background = bg;
  }
  if (progress) progress.style.width = pct + "%";

  // Update status
  if (status) {
    status.textContent = `ADDING: ${name.toUpperCase()}...`;
    status.classList.add("critical");
    setTimeout(() => {
      if (labPotionCount < labMaxPotions) {
        status.textContent = "NEXT INGREDIENT...";
        status.classList.remove("critical");
      }
    }, 1000);
  }

  // Create bubbles
  createLabBubbles();

  // Check if complete
  if (labPotionCount >= labMaxPotions) {
    setTimeout(startLabReaction, 1000);
  }
}

function createLabBubbles() {
  const container = document.getElementById("lab-bubbles");
  if (!container) return;

  for (let i = 0; i < 6; i++) {
    const b = document.createElement("div");
    b.className = "lab-bubble";
    b.style.left = Math.random() * 80 + 10 + "%";
    b.style.width = Math.random() * 8 + 4 + "px";
    b.style.height = b.style.width;
    container.appendChild(b);

    // Animate up
    let pos = 0;
    const speed = 2 + Math.random() * 2;
    const anim = setInterval(() => {
      pos += speed;
      b.style.bottom = pos + "%";
      b.style.opacity = 1 - pos / 120;
      if (pos > 120) {
        clearInterval(anim);
        b.remove();
      }
    }, 30);
  }
}

function createNeonBubbles() {
  const container = document.getElementById("lab-bubbles");
  const flaskBody = document.getElementById("lab-flask-body");
  if (!container || !flaskBody || flaskBody.classList.contains("flask-broken"))
    return;

  for (let i = 0; i < 3; i++) {
    const b = document.createElement("div");
    b.className = "neon-bubble";
    b.style.left = Math.random() * 80 + 10 + "%";
    const size = Math.random() * 10 + 5 + "px";
    b.style.width = size;
    b.style.height = size;
    container.appendChild(b);

    let pos = 0;
    const speed = 4 + Math.random() * 3;
    const anim = setInterval(() => {
      pos += speed;
      b.style.bottom = pos + "%";
      b.style.opacity = 1 - pos / 100;
      if (pos > 100) {
        clearInterval(anim);
        b.remove();
      }
    }, 20);
  }
}

function startLabReaction() {
  const status = document.getElementById("lab-status");
  const flaskBody = document.getElementById("lab-flask-body");
  const liquid = document.getElementById("lab-liquid");
  const energyCore = document.getElementById("lab-energy-core");

  // Critical status
  if (status) {
    status.textContent = "⚠️ REACTION CRITICAL! SYNTHESIZING SUCCESS... ⚠️";
    status.classList.add("critical");
  }

  // Start effects
  document.body.classList.add("glitch-effect");
  if (liquid) liquid.classList.add("boiling");
  if (flaskBody) flaskBody.classList.add("critical-aura");

  // Change liquid to green
  setTimeout(() => {
    if (liquid)
      liquid.style.background = "linear-gradient(to top, #22c55e, #86efac)";
  }, 500);

  // Neon bubbles
  labBubbleInterval = setInterval(createNeonBubbles, 100);

  // Change to white
  setTimeout(() => {
    if (liquid) {
      liquid.style.background = "#ffffff";
      liquid.style.filter = "drop-shadow(0 0 40px #ffffff)";
    }
  }, 2500);

  // Energy core animation
  if (energyCore) {
    let scale = 0;
    const coreAnim = setInterval(() => {
      scale += 0.5;
      energyCore.style.transform = `translate(-50%, -50%) scale(${scale})`;
      energyCore.style.opacity = Math.min(1, scale / 10);
      if (scale >= 40) {
        clearInterval(coreAnim);
      }
    }, 50);
  }

  // Explosion after 3.5 seconds
  setTimeout(() => {
    if (labBubbleInterval) {
      clearInterval(labBubbleInterval);
      labBubbleInterval = null;
    }

    document.body.classList.remove("glitch-effect");
    if (liquid) liquid.classList.remove("boiling");

    // Hide flask
    if (flaskBody) flaskBody.classList.add("flask-broken");
    const flaskNeck = document.getElementById("lab-flask-neck");
    if (flaskNeck) flaskNeck.classList.add("flask-broken");

    // Create explosion particles
    createLabExplosion();

    // Confetti
    if (typeof createConfetti === "function") createConfetti();

    // Show result after delay
    setTimeout(showLabResult, 800);
  }, 3500);
}

function createLabExplosion() {
  const container = document.getElementById("lab-explosion");
  if (!container) return;

  // Glass shards
  for (let i = 0; i < 30; i++) {
    const shard = document.createElement("div");
    shard.className = "glass-shard";
    shard.style.width = Math.random() * 30 + 10 + "px";
    shard.style.height = Math.random() * 30 + 10 + "px";
    shard.style.left = "50%";
    shard.style.top = "50%";
    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 200;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    container.appendChild(shard);

    // Animate
    let progress = 0;
    const anim = setInterval(() => {
      progress += 0.05;
      shard.style.transform = `translate(${tx * progress}px, ${
        ty * progress
      }px) rotate(${progress * 360}deg)`;
      shard.style.opacity = 1 - progress;
      if (progress >= 1) {
        clearInterval(anim);
        shard.remove();
      }
    }, 20);
  }

  // Liquid droplets
  for (let i = 0; i < 40; i++) {
    const drop = document.createElement("div");
    drop.className = "liquid-droplet";
    const size = Math.random() * 12 + 5 + "px";
    drop.style.width = size;
    drop.style.height = size;
    drop.style.left = "50%";
    drop.style.top = "50%";
    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 150;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance - 50;
    container.appendChild(drop);

    let progress = 0;
    const anim = setInterval(() => {
      progress += 0.04;
      drop.style.transform = `translate(${tx * progress}px, ${
        ty * progress + progress * progress * 100
      }px)`;
      drop.style.opacity = 1 - progress;
      if (progress >= 1) {
        clearInterval(anim);
        drop.remove();
      }
    }, 20);
  }
}

function showLabResult() {
  const overlay = document.getElementById("lab-result-overlay");
  if (overlay) {
    overlay.classList.add("show");
  }

  // More confetti
  if (typeof createConfetti === "function") {
    createConfetti();
    setTimeout(createConfetti, 500);
    setTimeout(createConfetti, 1000);
  }
}

// ==========================================
// INITIALIZATION
// ==========================================
function init() {
  setupLoginKeyboard();
  setupModalClose();

  // Check if already logged in
  checkLoginState();

  // Add CSS for heart burst animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes heartBurst {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(calc(cos(var(--angle)) * 50px), calc(sin(var(--angle)) * 50px - 30px)) scale(0);
                opacity: 0;
            }
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
  document.head.appendChild(style);
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", init);

// Make functions globally accessible
window.attemptLogin = attemptLogin;
window.toggleLike = toggleLike;
window.toggleComments = toggleComments;
window.openLetterModal = openLetterModal;
window.openQuizModal = openQuizModal;
window.openWheelModal = openWheelModal;
window.openGalleryModal = openGalleryModal;
window.openStoryModal = openStoryModal;
window.closeModal = closeModal;
window.startQuiz = startQuiz;
window.selectQuizAnswer = selectQuizAnswer;
window.spinWheel = spinWheel;
window.nextMemory = nextMemory;
window.prevMemory = prevMemory;
window.logout = logout;
window.toggleDropdown = toggleDropdown;
window.closeAllDropdowns = closeAllDropdowns;
window.toggleSidebarDropdown = toggleSidebarDropdown;
window.showAlert = showAlert;
window.closeAlertModal = closeAlertModal;
window.openTruthOrDare = openTruthOrDare;
window.openLoveCalculator = openLoveCalculator;
window.openCountdownModal = openCountdownModal;
window.openWishlistModal = openWishlistModal;
window.showFriendProfile = showFriendProfile;
window.playVideo = playVideo;
window.buyProduct = buyProduct;
window.sharePost = sharePost;
window.showSection = showSection;
window.openEnvelope = openEnvelope;
window.closeLetterModal = closeLetterModal;
window.closeQuizModal = closeQuizModal;
window.closeGalleryModal = closeGalleryModal;
window.closeStoryModal = closeStoryModal;
window.closeFriendModal = closeFriendModal;
window.closeTruthOrDare = closeTruthOrDare;
window.closeLoveCalculator = closeLoveCalculator;
window.closeCountdownModal = closeCountdownModal;
window.closeWishlistModal = closeWishlistModal;
window.closeVideoModal = closeVideoModal;
window.renderFriends = renderFriends;
window.nextImage = nextImage;
window.prevImage = prevImage;
window.getTruth = getTruth;
window.getDare = getDare;
window.openThesisLab = openThesisLab;
window.closeThesisLab = closeThesisLab;
window.addPotion = addPotion;
