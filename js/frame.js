// =================================Campaign=======================================

document.addEventListener("DOMContentLoaded", function () {
  const openButtons = document.querySelectorAll(".open-iframe");
  const closeButton = document.getElementById("close-button");
  const overlay = document.getElementById("Campaign");

  openButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      overlay.style.display = "block";
    });
  });

  closeButton.addEventListener("click", function () {
    overlay.style.display = "none";
  });
});
// ==================================Lookbook========================================

document.addEventListener("DOMContentLoaded", function () {
  const openButtons = document.querySelectorAll(".open-iframe2");
  const closeButton = document.getElementById("close-button2");
  const overlay = document.getElementById("Lookbook");

  openButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      overlay.style.display = "block";
    });
  });

  closeButton.addEventListener("click", function () {
    overlay.style.display = "none";
  });
});

// ===============================Set Design=======================================
document.addEventListener("DOMContentLoaded", function () {
  const openButtons = document.querySelectorAll(".open-iframe3");
  const closeButton = document.getElementById("close-button3");
  const overlay = document.getElementById("SetDesign");

  openButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      overlay.style.display = "block";
    });
  });

  closeButton.addEventListener("click", function () {
    overlay.style.display = "none";
  });
});

// ===================================Ecommerce=======================================
document.addEventListener("DOMContentLoaded", function () {
  const openButtons = document.querySelectorAll(".open-iframe4");
  const closeButton = document.getElementById("close-button4");
  const overlay = document.getElementById("Ecommerce");

  openButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      overlay.style.display = "block";
    });
  });

  closeButton.addEventListener("click", function () {
    overlay.style.display = "none";
  });
});
// ====================================LOGO REVEAL===========================================
document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector('.logo1');
    const content = document.querySelector('.content');
    const logoOverlay = document.querySelector('.logo-overlay');
    
    logo.classList.add('animate');

    // Wait for the animation to complete (duration + delay)
    setTimeout(() => {
        logoOverlay.style.display = 'none';
        content.classList.add('show');
    }, 2000); // Adjust this time to match the animation duration
});

