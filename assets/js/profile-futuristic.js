(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function isSciProfilePage() {
    if (!document.body) {
      return false;
    }

    if (document.body.classList.contains("sci-profile-page")) {
      return true;
    }

    if (document.querySelector(".sci-profile-page")) {
      return true;
    }

    // Front matter `classes` may not be rendered by some layouts.
    // Fall back to explicit route matching for the two profile pages.
    var path = (window.location && window.location.pathname) || "";
    return (
      path === "/" ||
      path === "/cv/" ||
      path === "/CV/" ||
      path === "/CV/cv/" ||
      path === "/CV" ||
      path === "/CV/cv"
    );
  }

  function ensureId(heading, index) {
    if (heading.id) {
      return heading.id;
    }

    var innerSpan = heading.querySelector("span[id]");
    if (innerSpan && innerSpan.id) {
      return innerSpan.id;
    }

    var generatedId = "sci-section-" + index;
    heading.id = generatedId;
    return generatedId;
  }

  function getContentRoot() {
    return document.querySelector(".page__content") || document.querySelector(".archive");
  }

  function createFloatingToc(headings) {
    if (!headings.length) {
      return null;
    }

    var existing = document.getElementById("floating-toc");
    if (existing) {
      if (existing.parentNode !== document.body) {
        document.body.appendChild(existing);
      }
      return existing;
    }

    var toc = document.createElement("div");
    toc.id = "floating-toc";
    toc.className = "floating-toc";

    var header = document.createElement("div");
    header.className = "toc-header";
    header.innerHTML = '<i class="fas fa-list"></i> Contents';
    toc.appendChild(header);

    var list = document.createElement("ul");
    list.className = "toc-list";

    headings.forEach(function (heading, index) {
      var id = ensureId(heading, index + 1);
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + id;
      a.textContent = heading.textContent.trim();
      li.appendChild(a);
      list.appendChild(li);
    });

    toc.appendChild(list);
    document.body.appendChild(toc);
    return toc;
  }

  function setupTocDocking(toc) {
    if (!toc || toc.dataset.dockReady === "1") {
      return;
    }

    var header = toc.querySelector(".toc-header");
    if (!header) {
      return;
    }

    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "toc-toggle";
    toggle.setAttribute("aria-label", "Toggle table of contents");
    toggle.innerHTML = '<i class="fas fa-angle-double-right"></i>';
    header.appendChild(toggle);

    function applyResponsiveState() {
      if (window.innerWidth < 1440) {
        toc.classList.add("is-collapsed");
      } else {
        toc.classList.remove("is-collapsed");
      }
    }

    toggle.addEventListener("click", function () {
      toc.classList.toggle("is-collapsed");
    });

    window.addEventListener("resize", applyResponsiveState);
    applyResponsiveState();
    toc.dataset.dockReady = "1";
  }

  function wrapSections(contentRoot, headings) {
    headings.forEach(function (heading) {
      var wrapper = document.createElement("div");
      wrapper.className = "sci-section-card";

      var cursor = heading.nextSibling;
      while (cursor && !(cursor.nodeType === 1 && cursor.tagName === "H2")) {
        var nextNode = cursor.nextSibling;
        wrapper.appendChild(cursor);
        cursor = nextNode;
      }

      if (wrapper.childNodes.length > 0) {
        heading.parentNode.insertBefore(wrapper, heading.nextSibling);
      }
    });
  }

  function setupRevealAnimation() {
    var cards = document.querySelectorAll(".sci-section-card");
    if (!cards.length) {
      return;
    }

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );
      cards.forEach(function (card) {
        observer.observe(card);
      });
      return;
    }

    cards.forEach(function (card) {
      card.classList.add("is-visible");
    });
  }

  function setupAmbientFx() {
    if (!document.querySelector(".sci-progress")) {
      var progress = document.createElement("div");
      progress.className = "sci-progress";
      progress.innerHTML = "<span></span>";
      document.body.appendChild(progress);
    }

    if (!document.querySelector(".sci-bg-orb")) {
      var orb1 = document.createElement("div");
      orb1.className = "sci-bg-orb sci-bg-orb--1";
      var orb2 = document.createElement("div");
      orb2.className = "sci-bg-orb sci-bg-orb--2";
      var orb3 = document.createElement("div");
      orb3.className = "sci-bg-orb sci-bg-orb--3";
      document.body.appendChild(orb1);
      document.body.appendChild(orb2);
      document.body.appendChild(orb3);
    }

    function updateProgress() {
      var progressInner = document.querySelector(".sci-progress span");
      if (!progressInner) {
        return;
      }

      var height = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = height > 0 ? (window.scrollY / height) * 100 : 0;
      progressInner.style.width = Math.min(Math.max(ratio, 0), 100) + "%";
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
  }

  ready(function () {
    if (!isSciProfilePage()) {
      return;
    }

    document.body.classList.add("sci-profile-active");

    var contentRoot = getContentRoot();
    if (!contentRoot) {
      return;
    }

    var headings = Array.prototype.slice.call(contentRoot.querySelectorAll("h2"));
    if (!headings.length) {
      return;
    }

    var toc = createFloatingToc(headings);
    setupTocDocking(toc);
    wrapSections(contentRoot, headings);
    setupRevealAnimation();
    setupAmbientFx();

    if (typeof window.initFloatingToc === "function") {
      window.initFloatingToc();
    }
  });
})();
