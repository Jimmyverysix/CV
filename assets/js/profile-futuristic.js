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
    toc.className = "floating-toc floating-toc--dots";
    toc.setAttribute("aria-label", "Section navigation");

    var list = document.createElement("ul");
    list.className = "toc-list";

    headings.forEach(function (heading, index) {
      var id = ensureId(heading, index + 1);
      var li = document.createElement("li");
      var a = document.createElement("a");
      var label = heading.textContent.trim();
      a.href = "#" + id;
      a.setAttribute("aria-label", label);
      a.setAttribute("title", label);
      a.setAttribute("data-label", label);
      a.textContent = label;
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

    if (!document.querySelector(".sci-star-layer")) {
      var starsBack = document.createElement("div");
      starsBack.className = "sci-star-layer sci-star-layer--back";
      var starsFront = document.createElement("div");
      starsFront.className = "sci-star-layer sci-star-layer--front";
      document.body.appendChild(starsBack);
      document.body.appendChild(starsFront);
    }

    function updateProgress() {
      var progressInner = document.querySelector(".sci-progress span");
      if (!progressInner) {
        return;
      }

      var height = document.documentElement.scrollHeight - window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset || 0;
      var ratio = height > 0 ? (scrollY / height) * 100 : 0;
      progressInner.style.width = Math.min(Math.max(ratio, 0), 100) + "%";

      var factor = height > 0 ? scrollY / height : 0;
      var orbs = document.querySelectorAll(".sci-bg-orb");
      orbs.forEach(function (orb, index) {
        var depth = 4 + index * 4;
        var translateY = -(factor * depth * 14);
        orb.style.transform =
          "translate3d(0," + translateY.toFixed(1) + "px,0) scale(1)";
      });

      var back = document.querySelector(".sci-star-layer--back");
      var front = document.querySelector(".sci-star-layer--front");
      if (back) {
        back.style.transform =
          "translate3d(0," + -(factor * 12).toFixed(1) + "px,0)";
      }
      if (front) {
        front.style.transform =
          "translate3d(0," + -(factor * 24).toFixed(1) + "px,0)";
      }
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
  }

  function setupCursorGlow() {
    var prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      return;
    }

    if (document.querySelector(".sci-cursor-glow")) {
      return;
    }

    var glow = document.createElement("div");
    glow.className = "sci-cursor-glow";
    document.body.appendChild(glow);

    var ticking = false;
    var lastX = 0;
    var lastY = 0;

    function update() {
      ticking = false;
      glow.style.transform = "translate3d(" + lastX + "px," + lastY + "px,0)";
    }

    document.addEventListener(
      "pointermove",
      function (e) {
        lastX = e.clientX;
        lastY = e.clientY;
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
  }

  function spawnSectionParticles(element) {
    var prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !element) {
      return;
    }

    var container = document.createElement("div");
    container.className = "sci-section-particles";
    element.appendChild(container);

    for (var i = 0; i < 10; i++) {
      var dot = document.createElement("span");
      dot.className = "sci-particle";
      container.appendChild(dot);
    }

    window.setTimeout(function () {
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }, 900);
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
    setupCursorGlow();

    headings.forEach(function (h2) {
      h2.addEventListener("click", function () {
        spawnSectionParticles(h2.parentElement || h2);
      });
    });

    if (typeof window.initFloatingToc === "function") {
      window.initFloatingToc();
    }
  });
})();
