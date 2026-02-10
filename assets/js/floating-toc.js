(function () {
  "use strict";

  function getSectionFromLink(link) {
    var href = link.getAttribute("href") || "";
    if (!href || href.charAt(0) !== "#") {
      return null;
    }
    var targetId = href.slice(1);
    if (!targetId) {
      return null;
    }
    return document.getElementById(targetId);
  }

  function bindFloatingToc(toc) {
    if (!toc || toc.dataset.tocBound === "1") {
      return;
    }

    var tocLinks = toc.querySelectorAll(".toc-list a");
    if (!tocLinks.length) {
      return;
    }

    var sections = [];
    tocLinks.forEach(function (link) {
      var section = getSectionFromLink(link);
      if (section) {
        sections.push({ element: section, link: link });
      }
    });

    tocLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        var target = getSectionFromLink(this);
        if (!target) {
          return;
        }
        e.preventDefault();
        var offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 96;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      });
    });

    function updateActiveSection() {
      if (!sections.length) {
        return;
      }
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var active = null;

      sections.forEach(function (item) {
        var rect = item.element.getBoundingClientRect();
        var sectionTop = rect.top + scrollTop;
        var sectionBottom = sectionTop + Math.max(rect.height, 1);
        if (scrollTop + 140 >= sectionTop && scrollTop + 140 < sectionBottom) {
          active = item;
        }
      });

      sections.forEach(function (item) {
        item.link.classList.remove("active");
      });
      if (active) {
        active.link.classList.add("active");
      }
    }

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    toc.dataset.tocBound = "1";
  }

  function initFloatingToc() {
    bindFloatingToc(document.getElementById("floating-toc"));
  }

  window.initFloatingToc = initFloatingToc;
  document.addEventListener("DOMContentLoaded", initFloatingToc);
})();
