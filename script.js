const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector(".theme-icon");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

// Restore the saved theme; use light mode when there is no saved preference.
let savedTheme = "light";
try {
  savedTheme = localStorage.getItem("portfolio-theme") || "light";
} catch {
  savedTheme = "light";
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", isDark ? "Activar modo claro" : "Activar modo oscuro");

  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {
    // The theme still works for this visit if storage is unavailable.
  }
}

setTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

document.querySelector("#currentYear").textContent = new Date().getFullYear();

// Close the mobile menu after choosing a section.
document.querySelectorAll("#siteNav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector("#siteNav");
    if (menu.classList.contains("show") && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  formStatus.textContent = "";
  formStatus.classList.remove("is-error");

  const accessKey = contactForm.elements.access_key.value.trim();
  if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
    formStatus.textContent = "Agrega tu access key de Web3Forms en el HTML para activar el envío.";
    formStatus.classList.add("is-error");
    return;
  }

  const submitButton = contactForm.querySelector("button[type='submit']");
  submitButton.disabled = true;
  submitButton.setAttribute("aria-busy", "true");
  formStatus.textContent = "Enviando mensaje...";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" },
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "No se pudo enviar el mensaje.");
    }

    contactForm.reset();
    formStatus.textContent = "Gracias por escribirme. Recibí tu mensaje y responderé pronto.";
  } catch {
    formStatus.textContent = "No se pudo enviar. Revisa la configuración o escríbeme directamente por correo.";
    formStatus.classList.add("is-error");
  } finally {
    submitButton.disabled = false;
    submitButton.removeAttribute("aria-busy");
  }
});