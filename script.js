/**
 * ============================================================================
 * PORTFOLIO CLIENT SCRIPT — SYED AQDAS
 * Valentius Kryptix Web App Internship — Task WA-1
 * Pure Vanilla JavaScript (ES6+) — No External Libraries
 * ============================================================================
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------------------------------
  // 1. DOM Elements & State
  // --------------------------------------------------------------------------
  const header = document.getElementById("header");
  const navToggle = document.getElementById("nav-toggle");
  const primaryNav = document.getElementById("primary-nav");
  const navOverlay = document.getElementById("nav-overlay");
  const navLinks = document.querySelectorAll(".nav-link, .footer-nav-link");
  const sections = document.querySelectorAll("section[id]");
  const themeToggle = document.getElementById("theme-toggle");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const contactForm = document.getElementById("contact-form");
  const currentYearSpan = document.getElementById("current-year");
  const backToTopBtn = document.getElementById("back-to-top");

  // --------------------------------------------------------------------------
  // 2. Dynamic Copyright Year
  // --------------------------------------------------------------------------
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 3. Mobile Navigation Menu Toggle & Accessibility
  // --------------------------------------------------------------------------
  const openMobileMenu = () => {
    primaryNav.classList.add("open");
    navToggle.classList.add("active");
    navOverlay.classList.add("active");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeMobileMenu = () => {
    primaryNav.classList.remove("open");
    navToggle.classList.remove("active");
    navOverlay.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close when clicking backdrop overlay
    if (navOverlay) {
      navOverlay.addEventListener("click", closeMobileMenu);
    }

    // Close when pressing the 'Escape' key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && primaryNav.classList.contains("open")) {
        closeMobileMenu();
        navToggle.focus();
      }
    });

    // Close when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (primaryNav.classList.contains("open")) {
          closeMobileMenu();
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. Smooth Scrolling for Internal Navigation Links
  // --------------------------------------------------------------------------
  const internalAnchors = document.querySelectorAll('a[href^="#"]');

  internalAnchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();

        // Calculate header offset
        const headerHeight = header ? header.offsetHeight : 0;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 16;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Set focus to the section for keyboard accessibility
        targetElement.setAttribute("tabindex", "-1");
        targetElement.focus({ preventScroll: true });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 5. Active Navigation Link Highlighting on Scroll
  // --------------------------------------------------------------------------
  const highlightActiveNavLink = () => {
    const scrollPosition = window.scrollY + 160;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", highlightActiveNavLink, { passive: true });

  // --------------------------------------------------------------------------
  // 6. Project Category Filter
  // --------------------------------------------------------------------------
  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedFilter = button.getAttribute("data-filter");

        // Update active button state and ARIA pressed
        filterButtons.forEach((btn) => {
          btn.classList.remove("active");
          btn.setAttribute("aria-pressed", "false");
        });
        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        // Filter project cards
        projectCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category");

          if (selectedFilter === "all" || cardCategory === selectedFilter) {
            card.classList.remove("is-hidden");
            // Optional micro-fade effect
            card.style.opacity = "0";
            card.style.transform = "translateY(10px)";
            requestAnimationFrame(() => {
              card.style.transition = "all 0.28s ease";
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            });
          } else {
            card.classList.add("is-hidden");
          }
        });
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. Light / Dark Theme Toggle
  // --------------------------------------------------------------------------
  const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem("portfolio-theme");
    if (storedTheme) return storedTheme;
    // Default is dark theme per specification
    return "dark";
  };

  const applyTheme = (theme) => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      if (themeToggle) themeToggle.setAttribute("aria-label", "Switch to dark theme");
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeToggle) themeToggle.setAttribute("aria-label", "Switch to light theme");
    }
    localStorage.setItem("portfolio-theme", theme);
  };

  // Initialize theme
  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      applyTheme(isLight ? "dark" : "light");
    });
  }

  // --------------------------------------------------------------------------
  // 8. Contact Form Validation & Interactive Feedback
  // --------------------------------------------------------------------------
  if (contactForm) {
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");
    const feedbackBox = document.getElementById("form-feedback");

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email.trim());
    };

    const validateField = (input, condition) => {
      const parent = input.closest(".form-group");
      if (!condition) {
        parent.classList.add("has-error");
        return false;
      } else {
        parent.classList.remove("has-error");
        return true;
      }
    };

    // Live validation on blur
    nameInput.addEventListener("blur", () => validateField(nameInput, nameInput.value.trim().length > 0));
    emailInput.addEventListener("blur", () => validateField(emailInput, validateEmail(emailInput.value)));
    subjectInput.addEventListener("blur", () => validateField(subjectInput, subjectInput.value.trim().length > 0));
    messageInput.addEventListener("blur", () => validateField(messageInput, messageInput.value.trim().length > 0));

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const isNameValid = validateField(nameInput, nameInput.value.trim().length > 0);
      const isEmailValid = validateField(emailInput, validateEmail(emailInput.value));
      const isSubjectValid = validateField(subjectInput, subjectInput.value.trim().length > 0);
      const isMessageValid = validateField(messageInput, messageInput.value.trim().length > 0);

      if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
        feedbackBox.className = "form-feedback error";
        feedbackBox.textContent = "Please fill in all required fields with valid details.";
        return;
      }

      // Generate a mailto fallback link with the user's submitted content
      const recipient = "aqdasssm@gmail.com";
      const subject = encodeURIComponent(`${subjectInput.value.trim()} — from ${nameInput.value.trim()}`);
      const body = encodeURIComponent(
        `Hi Syed,\n\n${messageInput.value.trim()}\n\nBest regards,\n${nameInput.value.trim()}\n(${emailInput.value.trim()})`
      );
      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

      // Display friendly feedback
      feedbackBox.className = "form-feedback success";
      feedbackBox.innerHTML = `
        <strong>Thank you, ${nameInput.value.trim()}!</strong><br>
        Your message details are valid. As noted, direct browser submissions require a backend service. 
        <br><br>
        <a href="${mailtoUrl}" class="btn btn-primary btn-sm" style="margin-top: 0.5rem; display: inline-flex;">
          Click here to send message via your Email App
        </a>
      `;

      // Reset form fields after confirmation
      contactForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 9. Back to Top Button
  // --------------------------------------------------------------------------
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
