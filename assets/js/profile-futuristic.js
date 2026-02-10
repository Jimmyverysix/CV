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
    return document.body && document.body.classList.contains("sci-profile-page");
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

  function createFloatingToc(headings) {
    if (!headings.length || document.getElementById("floating-toc")) {
      return;
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

  ready(function () {
    if (!isSciProfilePage()) {
      return;
    }

    var contentRoot = document.querySelector(".page__content");
    if (!contentRoot) {
      return;
    }

    var headings = Array.prototype.slice.call(contentRoot.querySelectorAll("h2"));
    if (!headings.length) {
      return;
    }

    createFloatingToc(headings);
    wrapSections(contentRoot, headings);
    setupRevealAnimation();
  });
})();
