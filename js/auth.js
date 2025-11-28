/* ==========================================
   AUTH - Login & Logout Functions
   ========================================== */

// ==========================================
// LOGIN
// ==========================================
function attemptLogin() {
  const loginError = document.getElementById("login-error");

  // Get values from both header inputs and form inputs
  const usernameHeader = document.getElementById("username");
  const passwordHeader = document.getElementById("password");
  const usernameMobile = document.getElementById("username-mobile");
  const passwordMobile = document.getElementById("password-mobile");

  // Use whichever has value
  let username = "";
  let password = "";

  if (usernameHeader && usernameHeader.value.trim()) {
    username = usernameHeader.value.toLowerCase().trim();
  } else if (usernameMobile && usernameMobile.value.trim()) {
    username = usernameMobile.value.toLowerCase().trim();
  }

  if (passwordHeader && passwordHeader.value.trim()) {
    password = passwordHeader.value.trim();
  } else if (passwordMobile && passwordMobile.value.trim()) {
    password = passwordMobile.value.trim();
  }

  if (
    username === CONFIG.credentials.username &&
    password === CONFIG.credentials.password
  ) {
    // Success - Add logged-in class to body
    if (loginError) loginError.classList.remove("show");
    document.body.classList.add("logged-in");

    // Celebration effects
    if (typeof createConfetti === "function") createConfetti();
    if (typeof calculateDays === "function") calculateDays();

    // Render friends
    if (typeof renderFriends === "function") {
      renderFriends();
    }

    // Save login state to localStorage (persists after refresh)
    localStorage.setItem("lovebook_logged_in", "true");
  } else {
    // Error
    if (loginError) loginError.classList.add("show");
  }
}

// ==========================================
// LOGOUT
// ==========================================
function logout() {
  // Close any open dropdowns
  if (typeof closeAllDropdowns === "function") {
    closeAllDropdowns();
  }

  // Clear login state
  localStorage.removeItem("lovebook_logged_in");

  // Remove logged-in class from body
  document.body.classList.remove("logged-in");

  // Clear input fields
  const inputs = document.querySelectorAll("#login-page input");
  inputs.forEach((input) => (input.value = ""));

  const loginError = document.getElementById("login-error");
  if (loginError) loginError.classList.remove("show");
}

// ==========================================
// KEYBOARD SHORTCUTS
// ==========================================
function setupLoginKeyboard() {
  // Header inputs
  const usernameHeader = document.getElementById("username");
  const passwordHeader = document.getElementById("password");

  if (usernameHeader) {
    usernameHeader.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && passwordHeader) {
        passwordHeader.focus();
      }
    });
  }

  if (passwordHeader) {
    passwordHeader.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        attemptLogin();
      }
    });
  }

  // Mobile/Form inputs
  const usernameMobile = document.getElementById("username-mobile");
  const passwordMobile = document.getElementById("password-mobile");

  if (usernameMobile) {
    usernameMobile.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && passwordMobile) {
        passwordMobile.focus();
      }
    });
  }

  if (passwordMobile) {
    passwordMobile.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        attemptLogin();
      }
    });
  }
}

// ==========================================
// CHECK LOGIN STATE
// ==========================================
function checkLoginState() {
  const isLoggedIn = localStorage.getItem("lovebook_logged_in") === "true";
  console.log("Checking login state:", isLoggedIn);

  if (isLoggedIn) {
    // Add logged-in class to body
    document.body.classList.add("logged-in");
    console.log("Added logged-in class to body");
    console.log("Body classes:", document.body.className);

    if (typeof calculateDays === "function") calculateDays();
    if (typeof renderFriends === "function") {
      renderFriends();
    }
  }
}

// Initialize keyboard shortcuts when DOM is ready
document.addEventListener("DOMContentLoaded", setupLoginKeyboard);

// Export functions
window.attemptLogin = attemptLogin;
window.logout = logout;
window.setupLoginKeyboard = setupLoginKeyboard;
window.checkLoginState = checkLoginState;
