/* ==========================================
   UTILS - Utility Functions
   ========================================== */

// ==========================================
// DAYS COUNTER
// ==========================================
function calculateDays() {
  const startDate = new Date(CONFIG.anniversaryDate);
  const today = new Date();
  const diffTime = Math.abs(today - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const daysCounter = document.getElementById("days-counter");
  if (daysCounter) {
    const countEl = daysCounter.querySelector(".count");
    if (countEl) {
      animateCounter(countEl, diffDays);
    }
  }
}

function animateCounter(element, target) {
  let current = 0;
  const duration = 1500;
  const step = target / (duration / 16);

  const animate = () => {
    current += step;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(animate);
    } else {
      element.textContent = target;
    }
  };

  animate();
}

// ==========================================
// CONFETTI EFFECT
// ==========================================
function createConfetti() {
  const colors = [
    "#ff6b9d",
    "#1877f2",
    "#ffd700",
    "#42b72a",
    "#667eea",
    "#f093fb",
    "#00c6ff",
  ];
  const shapes = ["circle", "square", "triangle"];

  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";

      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 10 + 5;
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const left = Math.random() * 100;
      const duration = Math.random() * 2 + 2;
      const rotation = Math.random() * 360;

      confetti.style.left = left + "vw";
      confetti.style.width = size + "px";
      confetti.style.height = size + "px";
      confetti.style.background = color;
      confetti.style.animation = `confettiFall ${duration}s linear forwards`;
      confetti.style.transform = `rotate(${rotation}deg)`;

      if (shape === "circle") {
        confetti.style.borderRadius = "50%";
      } else if (shape === "triangle") {
        confetti.style.width = "0";
        confetti.style.height = "0";
        confetti.style.background = "transparent";
        confetti.style.borderLeft = `${size}px solid transparent`;
        confetti.style.borderRight = `${size}px solid transparent`;
        confetti.style.borderBottom = `${size * 1.5}px solid ${color}`;
      }

      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, duration * 1000);
    }, i * 50);
  }
}

// ==========================================
// ALERT MODAL
// ==========================================
function showAlert(title, message, icon = "💕") {
  const alertModal = document.getElementById("alert-modal");
  if (!alertModal) {
    console.log("Alert modal not found");
    return;
  }

  const alertIcon =
    document.getElementById("alert-icon") ||
    alertModal.querySelector(".alert-icon");
  const alertTitle =
    document.getElementById("alert-title") || alertModal.querySelector("h3");
  const alertMessage =
    document.getElementById("alert-message") || alertModal.querySelector("p");

  if (alertIcon) alertIcon.textContent = icon;
  if (alertTitle) alertTitle.textContent = title;
  if (alertMessage) alertMessage.textContent = message;

  alertModal.classList.add("show");
}

function closeAlertModal() {
  const alertModal = document.getElementById("alert-modal");
  if (alertModal) {
    alertModal.classList.remove("show");
  }
}

// Export functions
window.calculateDays = calculateDays;
window.animateCounter = animateCounter;
window.createConfetti = createConfetti;
window.showAlert = showAlert;
window.closeAlertModal = closeAlertModal;
