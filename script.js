(() => {
  const yearEl = document.getElementById("year");
  yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  navToggle?.addEventListener("click", () => {
    const open = navMenu.getAttribute("data-open") === "true";
    navMenu.setAttribute("data-open", open ? "false" : "true");
    navToggle.setAttribute("aria-expanded", open ? "false" : "true");
  });

  // Close menu when clicking a link (mobile)
  navMenu?.addEventListener("click", (e) => {
    const t = e.target;
    if (t instanceof HTMLAnchorElement) {
      navMenu.setAttribute("data-open", "false");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });

  // Theme toggle with localStorage
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    root.dataset.theme = saved;
  }

  themeToggle?.addEventListener("click", () => {
    const current = root.dataset.theme === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  });

  // Contact form (demo)
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!(form instanceof HTMLFormElement)) return;

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill out all fields.";
      return;
    }

    status.textContent = "Thanks! This demo form doesn't submit anywhere yet.";
    form.reset();
  });
})();
