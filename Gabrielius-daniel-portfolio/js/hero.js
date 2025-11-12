document.addEventListener("DOMContentLoaded", () => {
  // 1) Define tus slides por CLAVE de traducción
  const slides = [
    { titleKey: "title", subtitleKey: "subtitle" },
    { titleKey: "title2", subtitleKey: "subtitle2" },
    { titleKey: "title3", subtitleKey: "subtitle3" },
  ];

  // 2) Obtén los elementos del hero
  const titleEl = document.querySelector("header .slider-text");
  const subtitleEl = document.querySelector("header p[data-translate]");

  if (!titleEl || !subtitleEl) {
    console.error(
      "Slider: no se encontró <h2.slider-text> o <p[data-translate]> dentro de <header>."
    );
    return;
  }

  // 3) Estado
  let index = 0;
  let currentLang = window.currentLang || "es"; // usa la global si ya la manejas

  // 4) Función de traducción segura (usa tu changeLanguage si existe; si no, usa translations)
  const applyTranslation = (lang) => {
    if (typeof changeLanguage === "function") {
      changeLanguage(lang); // tu función original
    } else if (typeof translations !== "undefined") {
      // Respaldo: traduce solo lo que tenga data-translate
      document.querySelectorAll("[data-translate]").forEach((el) => {
        const key = el.dataset.translate;
        const val = translations?.[lang]?.[key];
        if (val != null) el.innerHTML = val;
      });
    } else {
      console.warn("No se encontró changeLanguage ni translations.");
    }
  };

  // 5) Render de un slide según idioma actual
  const render = () => {
    const slide = slides[index];
    titleEl.setAttribute("data-translate", slide.titleKey);
    subtitleEl.setAttribute("data-translate", slide.subtitleKey);
    applyTranslation(currentLang);
  };

  // 6) Inicializa
  render();

  // 7) Intervalo del slider (fade)
  const DURATION = 5200; // ms entre slides
  const FADE = 700; // ms de transición

  setInterval(() => {
    titleEl.style.opacity = 0;
    subtitleEl.style.opacity = 0;

    setTimeout(() => {
      index = (index + 1) % slides.length;
      render();
      titleEl.style.opacity = 1;
      subtitleEl.style.opacity = 1;
    }, FADE);
  }, DURATION);

  // 8) Integración opcional con tus botones de idioma (si existen)
  const flagButtons = document.querySelectorAll("#flagsMenu button[data-lang]");
  flagButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang; // ¡clave! actualizar estado
      render(); // re-traducir el slide ACTUAL
    });
  });
});
