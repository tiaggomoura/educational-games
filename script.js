(() => {
  const year = document.querySelector("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#main-nav");
  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
      menu.classList.toggle("is-open", !isOpen);
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
        menu.classList.remove("is-open");
      });
    });
  }

  const carousels = document.querySelectorAll("[data-carousel]");
  carousels.forEach((carousel) => {
    const track = carousel.querySelector("[data-track]");
    if (!track) return;

    const section = carousel.closest("section") || carousel.parentElement;
    const previous = section.querySelector("[data-prev]");
    const next = section.querySelector("[data-next]");
    const count = section.querySelector("[data-slide-count]");
    const slides = Array.from(track.children);
    const gap = () => Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    const step = () => (slides[0]?.getBoundingClientRect().width || track.clientWidth * 0.85) + gap();
    const maxScroll = () => Math.max(0, track.scrollWidth - track.clientWidth);

    const update = () => {
      const scrollable = maxScroll() > 2;
      if (previous) previous.disabled = !scrollable;
      if (next) next.disabled = !scrollable;
      if (count) {
        const current = slides.length ? Math.min(slides.length, Math.round(track.scrollLeft / step()) + 1) : 0;
        count.textContent = `${current} / ${slides.length}`;
      }
    };

    const move = (direction) => {
      const max = maxScroll();
      if (max <= 2) return;
      const atStart = track.scrollLeft <= 2;
      const atEnd = track.scrollLeft >= max - 2;
      if (direction > 0 && atEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else if (direction < 0 && atStart) {
        track.scrollTo({ left: max, behavior: "smooth" });
      } else {
        track.scrollBy({ left: step() * direction, behavior: "smooth" });
      }
    };

    previous?.addEventListener("click", () => move(-1));
    next?.addEventListener("click", () => move(1));
    track.addEventListener("scroll", () => {
      window.clearTimeout(track._scrollTimer);
      track._scrollTimer = window.setTimeout(update, 100);
    }, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    update();
    if (carousel.dataset.autoplay === "true" && slides.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      let timer = window.setInterval(() => move(1), 5200);
      const pause = () => { window.clearInterval(timer); };
      const resume = () => {
        window.clearInterval(timer);
        timer = window.setInterval(() => move(1), 5200);
      };
      carousel.addEventListener("pointerenter", pause);
      carousel.addEventListener("pointerleave", resume);
      carousel.addEventListener("focusin", pause);
      carousel.addEventListener("focusout", resume);
    }
  });
})();
