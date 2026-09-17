/* =========================================================
   TacHair Project Website
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     1. Navigation Links
     ======================================================= */

  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("main section[id]");


  /* =======================================================
     2. Smooth Scrolling
     ======================================================= */

  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      // Ignore placeholder links such as href="#"
      if (!targetId || targetId === "#") {
        return;
      }

      const targetElement = document.querySelector(targetId);

      if (!targetElement) {
        return;
      }

      event.preventDefault();

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* =======================================================
     3. Active Navigation State
     ======================================================= */

  function updateActiveNavigation() {

    let currentSection = "home";

    const scrollPosition = window.scrollY + 130;

    sections.forEach((section) => {

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.id;
      }

    });


    navLinks.forEach((link) => {

      link.classList.remove("active");

      const href = link.getAttribute("href");

      if (href === `#${currentSection}`) {
        link.classList.add("active");
      }

    });

  }


  window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
  );

  updateActiveNavigation();


  /* =======================================================
     4. Navbar Shadow on Scroll
     ======================================================= */

  const siteHeader = document.querySelector(".site-header");

  function updateHeaderState() {

    if (!siteHeader) {
      return;
    }

    if (window.scrollY > 10) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }

  }


  window.addEventListener(
    "scroll",
    updateHeaderState,
    { passive: true }
  );

  updateHeaderState();


  /* =======================================================
     5. Hero Video
     ======================================================= */

  const heroVideo = document.querySelector(".hero-video");

  if (heroVideo) {

    // Ensure inline muted playback where supported
    heroVideo.muted = true;
    heroVideo.playsInline = true;

    // Try autoplaying the demo video
    const playPromise = heroVideo.play();

    if (playPromise !== undefined) {

      playPromise.catch(() => {
        /*
          Some browsers may block autoplay.
          This does not affect the rest of the page.
        */
      });

    }

  }


  /* =======================================================
     6. External Links
     ======================================================= */

  const externalLinks = document.querySelectorAll(
    'a[target="_blank"]'
  );

  externalLinks.forEach((link) => {

    // Security for links opened in a new tab
    link.setAttribute(
      "rel",
      "noopener noreferrer"
    );

  });


  /* =======================================================
     7. Current Year
     Optional:
     <span id="current-year"></span>
     ======================================================= */

  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
   /* Navbar shadow after scrolling */

.site-header.scrolled {
  box-shadow:
    0 2px 12px
    rgba(0, 0, 0, 0.06);
}

});
