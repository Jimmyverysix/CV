(function () {
  "use strict";

  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
    } else {
      callback();
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      // Theme switching still works when storage is unavailable.
    }
  }

  function initThemeToggle() {
    var root = document.documentElement;
    var button = document.getElementById("theme-toggle");
    var themeMeta = document.querySelector('meta[name="theme-color"]');

    if (!button) {
      return;
    }

    function updateThemeUi() {
      var isDark = root.getAttribute("data-theme") === "dark";
      button.setAttribute("aria-pressed", isDark ? "true" : "false");
      button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
      if (themeMeta) {
        themeMeta.setAttribute("content", isDark ? "#171817" : "#f2efe7");
      }
    }

    button.addEventListener("click", function () {
      var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      if (nextTheme === "dark") {
        root.setAttribute("data-theme", "dark");
      } else {
        root.removeAttribute("data-theme");
      }
      setStoredTheme(nextTheme);
      updateThemeUi();
    });

    updateThemeUi();
  }

  function initSectionNavigation() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".profile-nav__section[data-section]"));
    var sections = links
      .map(function (link) {
        var section = document.getElementById(link.getAttribute("data-section"));
        return section ? { link: link, section: section } : null;
      })
      .filter(Boolean);

    if (!sections.length) {
      return;
    }

    var scheduled = false;

    function updateActiveSection() {
      scheduled = false;
      var masthead = document.querySelector(".masthead--profile");
      var threshold = (masthead ? masthead.offsetHeight : 86) + 72;
      var active = sections[0];

      sections.forEach(function (item) {
        if (item.section.getBoundingClientRect().top <= threshold) {
          active = item;
        }
      });

      sections.forEach(function (item) {
        var isActive = item === active;
        item.link.classList.toggle("active", isActive);
        if (isActive) {
          item.link.setAttribute("aria-current", "location");
        } else {
          item.link.removeAttribute("aria-current");
        }
      });
    }

    function scheduleUpdate() {
      if (!scheduled) {
        scheduled = true;
        window.requestAnimationFrame(updateActiveSection);
      }
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    updateActiveSection();
  }

  function initAuthorLinks() {
    var button = document.querySelector(".author__urls-wrapper > button");
    var links = document.getElementById("author-links");

    if (!button || !links) {
      return;
    }

    button.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      button.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  function initSpotlights() {
    if (!window.matchMedia || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    document.querySelectorAll(".profile-spotlight").forEach(function (surface) {
      var scheduled = false;
      var pointerX = 0;
      var pointerY = 0;

      surface.addEventListener(
        "pointermove",
        function (event) {
          pointerX = event.clientX;
          pointerY = event.clientY;
          if (scheduled) {
            return;
          }
          scheduled = true;
          window.requestAnimationFrame(function () {
            var rect = surface.getBoundingClientRect();
            surface.style.setProperty("--mouse-x", pointerX - rect.left + "px");
            surface.style.setProperty("--mouse-y", pointerY - rect.top + "px");
            scheduled = false;
          });
        },
        { passive: true }
      );
    });
  }

  onReady(function () {
    initThemeToggle();
    initSectionNavigation();
    initAuthorLinks();
    initSpotlights();
  });
})();
