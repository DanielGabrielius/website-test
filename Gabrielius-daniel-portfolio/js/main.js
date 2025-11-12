"use strict";
// Wait until everything loads
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  const content = document.querySelector(".content");

  // Fade out preloader
  preloader.style.opacity = 0;
  preloader.style.transition = "opacity 0.5s";

  setTimeout(() => {
    preloader.style.display = "none";
    content.style.display = "block";
    content.classList.add("show"); // smooth fade-in
  }, 500);
});

// THEME SWITCH //

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

console.log();

// Navigation scroll hover

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 10) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-section");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-section");
    }
  });
});

// button idiomas

const toggleBtn = document.getElementById("toggleBtn");
const flagsMenu = document.getElementById("flagsMenu");
const flagButtons = document.querySelectorAll("#flagsMenu button");
const sectionClick = document.querySelector(".buttons-box");
sectionClick.addEventListener("mouseleave", function () {
  flagsMenu.classList.remove("show");
});
const translations = {
  es: {
    webDeveloper: "Desarrollador Web Front-End",
    home: "Inicio",
    about: "Acerca de",
    projects: "Proyectos",
    contact: "Contacto",
    title: "Hola, Bienvenido a mi portafolio  ",
    title2:
      "Diseñando sitios web modernos, rápidos y adaptables con código limpio.",
    title3: "Aquí encontrarás mis proyectos más recientes ",
    subtitle:
      "Desarrollador Front-End apasionado: creatividad y funcionalidad en un solo lugar.",
    subtitle2:
      "Convierto ideas complejas en experiencias digitales simples y atractivas.",
    subtitle3: "Diseño UI/UX moderno y sitios web interactivos",
    aboutMe: "Sobre mi",
    description:
      "¡Hola! Mi nombre es Gabrielius Daniel, soy desarrollador web front-end apasionado por crear sitios web hermosos, responsivos y centrados en el usuario.<br><br>Disfruto del proceso de convertir ideas y diseños en experiencias web totalmente funcionales: código limpio, interacciones fluidas y una adaptabilidad perfecta en todos los dispositivos son lo que busco.<br><br>Ya sea una página de aterrizaje elegante, una aplicación dinámica de una sola página o la optimización del rendimiento de un sitio existente, siempre me entusiasma dar vida a una visión digital. Sobre todo, me importa la usabilidad, la accesibilidad y escribir un código tan mantenible como elegante.",
    tools: "Tecnologías y herramientas",
    description2:
      "Utilizando una combinación de tecnologías de vanguardia y software de código abierto fiable, desarrollo aplicaciones y sitios web orientados al usuario y de alto rendimiento para teléfonos inteligentes, tabletas y ordenadores de sobremesa.",
    projects: "Proyectos",
    description3:
      "Estos son algunos de los proyectos en los que he trabajado: cada uno de ellos ha sido una oportunidad en la que me he centrado en crear un código limpio, un diseño adaptativo y una experiencia de usuario fluida.",
    project1:
      "Mi primer proyecto, desarrollado completamente desde cero, es un sitio responsivo de una sola página que reúne de manera organizada las herramientas y recursos para el desarrollo web. Este proyecto me brindó una experiencia práctica para aprender la estructura de un sitio, los principios de diseño y la implementación de elementos interactivos, sentando una base sólida para proyectos futuros.",
    project2:
      "Este es mi segundo proyecto web, un portfolio que muestra mis propias composiciones de música electrónica ambient profunda. Cada pista, creada y producida por mí. El proyecto está escrito desde cero con HTML, CSS y JavaScript, ofreciendo una experiencia interactiva y fluida que combina mi creatividad musical con mis habilidades en desarrollo web.",
    project3:
      "Este proyecto se encuentra actualmente en desarrollo y se lanzará próximamente. Está diseñado para mostrar mi trabajo más reciente, con ideas frescas, elementos interactivos y funcionalidades creativas. Aunque aún está en progreso, refleja mi dedicación continua al aprendizaje, la experimentación y la creación de experiencias atractivas. ¡Mantente atento a las novedades: pronto se revelarán funciones y contenido emocionante!",
    contact: "Contacto",
    contact2:
      "¿Tienes alguna pregunta o quieres colaborar? Completa el formulario a continuación y me pondré en contacto contigo lo antes posible.",
    formName: "Nombre completo",
    email: "Correo electronico",
    message: "Mensaje",
  },
  en: {
    webDeveloper: "Front-end web developer",
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    title: "Hello, welcome to my portfolio ",
    title2:
      "Building modern, responsive websites with clean code and creative design.",
    title3: "Here you'll find my latest projects",
    subtitle:
      "Passionate Front-End Developer — where creativity meets functionality.",
    subtitle2:
      "Turning complex problems into simple, elegant user experiences.",
    subtitle3: "Modern UI/UX design and interactive websites",
    aboutMe: "About me",
    description:
      "Hi! My name Gabrielius Daniel, a front-end web developer who’s passionate about building beautiful, responsive, and user-focused websites.<br><br>I enjoy the process of turning ideas and designs into fully functional web experiences — clean code, smooth interactions, an seamless responsiveness across all devices are what I aim for.<br><br>Whether it’s a sleek landing page, a dynamic single-page application, or refining the performance of an existing site, I’m always excited to bring a digital vision to life. Above all, I care about usability, accessibility, and writing code that’s as maintainable as it is elegant.",
    tools: "Technologies and tools",
    description2:
      "Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.",
    projects: "Projects",
    description3:
      "Here are some of the projects I've worked on — each one is an opportunity where I focused on clean code, responsive design, and smooth user experiences.",
    project1:
      "   My first project built from scratch — a responsive, single-page site that gathers useful web development tools and resources in one place. It was a hands-on way to learn the basics of layout, styling, and interactivity.",

    project2:
      "This is my second website project, a portfolio showcasing my own deep ambient electronic compositions. Each track, written and produced by me. The project is built entirely from scratch using HTML, CSS, and JavaScript, providing an interactive and smooth experience that combines my musical creativity with my web development skills.",
    project3:
      "This project is currently under development and will be launched soon. It is designed to showcase my latest work, featuring fresh ideas, interactive elements, and creative functionality. Although still in progress, it reflects my ongoing dedication to learning, experimenting, and creating engaging experiences. Stay tuned for updates — exciting features and new content will be revealed soon!",
    contact: "Contact",
    contact2:
      "Have a question or want to collaborate? Fill out the form below, and I’ll get back to you as soon as possible.",
    formName: "Full name",
    email: "Email",
    message: "Message",
  },
  lt: {
    webDeveloper: "Front-end web developer",
    home: "Pradžia",
    about: "Apie mus",
    projects: "Projektai",
    contact: "Kontaktai",
    title: "Sveikas, sveiki atvykę į mano portfolio ",
    title2: "Kuriu modernias, greitas ir pritaikomas svetaines su švariu kodu.",
    title3: "Čia rasite mano naujausius projektus",
    subtitle: "Front-end programuotojas",
    subtitle2:
      "Sudėtingas idėjas paverčiu paprastomis ir patogiomis vartotojui patirtimis.",
    subtitle3: "Šiuolaikinis UI/UX dizainas ir interaktyvios svetainės",
    aboutMe: "Apie mane",
    description:
      "Sveiki! Mano vardas Gabrielius Daniel, esu „front-end“ tinklalapių kūrėjas, siekiantis kurti gražias, reaguojančias ir į vartotoją orientuotas svetaines.<br><br>Mėgstu procesą, kai idėjos ir dizainai virsta pilnai veikiančiomis internetinėmis patirtimis — švarus kodas, sklandžios sąveikos ir nepriekaištingas prisitaikymas prie visų įrenginių yra tai, ko siekiu.<br><br>Nesvarbu, ar tai elegantiškas nukreipimo puslapis, dinaminė vieno puslapio programa, ar esamos svetainės našumo tobulinimas, visuomet džiaugiuosi galėdamas įgyvendinti skaitmeninę viziją. Svarbiausia man — patogumas, prieinamumas ir toks kodo rašymas, kuris būtų tiek išlaikomas, tiek estetiškas.",
    tools: "Technologijos ir įrankiai",
    description2:
      "Naudodamas pažangiausias technologijas ir patikimą atvirojo kodo programinę įrangą, kuriu vartotojams pritaikytas, našias programas ir svetaines, skirtas išmaniesiems telefonams, planšetiniams kompiuteriams ir stalinėms kompiuterinėms sistemoms.",
    projects: "Projektai",
    description3:
      "Štai keli projektai, prie kurių dirbau — kiekvienas iš jų buvo galimybė sutelkti dėmesį į švarų kodą, prisitaikantį dizainą ir sklandžią naudotojo patirtį.",
    project1:
      "Mano pirmasis projektas, sukurtas nuo nulio naudojant html, css ir javascript. Responsyvus vieno puslapio tinklalapis, kuriame patogiai surinkti naudingi įrankiai ir resursai žiniatinklio kūrimui. Šis projektas leido praktiškai išmokti pagrindus apie puslapio struktūrą, dizainą ir interaktyvumą.",
    project2:
      "Tai mano svetainės projektas – portfolio, pristatantis mano pačius sukurtus atmosferinės elektroninės muzikos kūrinius. Projektas sukurtas visiškai nuo nulio naudojant HTML, CSS ir JavaScript, tikslas sukurti interaktyvią ir sklandžią patirtį, kuri jungia mano muzikinę kūrybą su žiniatinklio kūrimo įgūdžiais.",
    project3:
      "Šis projektas šiuo metu kuriamas ir bus paleistas netrukus. Jis sukurtas pristatyti mano naujausius darbus, apimant naujas idėjas, interaktyvius elementus ir kūrybiškas funkcijas. Nors projektas dar kuriamas, jis atspindi mano nuolatinį įsipareigojimą mokytis, eksperimentuoti ir kurti patrauklias patirtis. Sekite naujienas – netrukus bus pristatyti įdomūs funkcionalumai ir naujas turinys!",
    contact: "Kontaktai",
    contact2:
      "Turite klausimų arba norite bendradarbiauti? Užpildykite žemiau esančią formą, ir aš susisieksiu su jumis kaip įmanoma greičiau.",
    formName: "Vardas",
    email: "Elektroninis paštas",
    message: "Žinutė",
  },
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    let key = el.dataset.translate;
    el.innerHTML = translations[lang][key];
  });
}

toggleBtn.addEventListener("click", () => {
  flagsMenu.classList.toggle("show");
});

flagButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let lang = btn.dataset.lang;
    let imgSrc = btn.querySelector("img").src;
    let imgAlt = btn.querySelector("img").alt;

    // Cambiar bandera principal
    toggleBtn.querySelector("img").src = imgSrc;
    toggleBtn.querySelector("img").alt = imgAlt;

    changeLanguage(lang);

    flagButtons.forEach((b) => {
      if (b.dataset.lang === lang) {
        b.style.display = "none";
      } else {
        b.style.display = "block";
      }
    });

    flagsMenu.classList.remove("show");
  });
});

changeLanguage("es");
flagButtons.forEach((b) => {
  if (b.dataset.lang === "es") {
    b.style.display = "none";
  }
});

// img zoom

const thumb = document.getElementById("my-img");
const lightbox = document.getElementById("img-box");

thumb.addEventListener("click", () => {
  lightbox.classList.add("active");
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// project mini gallery

document.querySelectorAll(".gallery-js").forEach((gallery) => {
  let currentIndex = 0;

  const items = gallery.querySelectorAll("img, video");

  function showItem(index) {
    items.forEach((item, i) => {
      item.classList.toggle("active", i === index);

      // Pause videos when hidden, play when active
      if (item.tagName.toLowerCase() === "video") {
        if (i === index) {
          item.play();
        } else {
          item.pause();
          item.currentTime = 0; // reset
        }
      }
    });
  }

  // Initial state
  showItem(currentIndex);

  // Right arrow
  gallery.querySelector(".arrow.right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  });

  // Left arrow
  gallery.querySelector(".arrow.left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
  });
});

// scrolling down effect //

const boxes = document.querySelectorAll(".box");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

boxes.forEach((box) => {
  observer.observe(box);
});

///////////////// PROJECTS MENU /////////////////////////////

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-overlay");
const closeBtns = document.querySelector(".mob-menu-close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

menu.addEventListener("click", (e) => {
  if (e.target === menu) {
    menu.classList.remove("active");
  }
});

closeBtns.addEventListener("click", (e) => {
  menu.classList.remove("active");
});

//////////////// PROJECTS SLIDER //////////////////////////////

const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".slider-arrow.left");
const rightBtn = document.querySelector(".slider-arrow.right");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

// === CREATE DOTS ===
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

// SHOW SLIDE
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    const content = slide.querySelector(".accordion-content");
    if (content) content.classList.remove("open");
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// ARROWS
leftBtn.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
});

rightBtn.addEventListener("click", () => {
  currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  showSlide(currentIndex);
});

// TOUCH SWIPE (mobile)
let startX = 0;
let endX = 0;

document.querySelector(".slider").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector(".slider").addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

document.querySelector(".slider").addEventListener("touchend", () => {
  const diff = startX - endX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      // Swiped left → next slide
      currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    } else {
      // Swiped right → prev slide
      currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    }
    showSlide(currentIndex);
  }
});

// /////////////// PROJECT INFO MODAL WINDOW ///////////////////////
const menuGallery = document.querySelectorAll(".menu-gallery");
const projectInfoOverlay = document.querySelector(
  ".project-modal-window-overlay"
);
const infoModalTitle = document.querySelector(".info-modal-title");
const infoModalDescription = document.querySelector(".info-modal-description");
const infoModalTechStack = document.querySelector(".info-modal-tech-stack");

const projectName = {
  webDevelopmentResources: "Web Development Resources",
  deepAmbientMusic: "Deep Ambient Music",
  comingSoon: "Coming Soon",
};

const projectTechStack = {
  htmlCssJs: "HTML  | CSS  |  JAVASCRIPT",
  deepAmbientMusic: "ambient bybis",
  comingSoon: "comingSoon bybis",
};

// For each gallery item
menuGallery.forEach((galleryItem) => {
  const infoBtn = galleryItem.querySelector(".project-info-btn");

  // Hover effect
  galleryItem.addEventListener("mouseenter", () => {
    if (infoBtn) infoBtn.classList.add("visible");
  });

  galleryItem.addEventListener("mouseleave", () => {
    if (infoBtn) infoBtn.classList.remove("visible");
  });

  if (infoBtn) {
    infoBtn.addEventListener("click", () => {
      projectInfoOverlay.classList.remove("hidden");
      if (infoBtn.classList.contains("web-development-resources")) {
        infoModalTitle.textContent = projectName.webDevelopmentResources;
        infoModalTechStack.textContent = projectTechStack.htmlCssJs;
        infoModalDescription.setAttribute("data-translate", "project1");
      } else if (infoBtn.classList.contains("deep-ambient-music")) {
        infoModalTitle.textContent = projectName.deepAmbientMusic;
        infoModalTechStack.textContent = projectTechStack.htmlCssJs;
        infoModalDescription.setAttribute("data-translate", "project2");
      }
    });
  }
});

projectInfoOverlay.addEventListener("click", () => {
  projectInfoOverlay.classList.add("hidden");
});
/////////////////////  MOBILE NAV MENU //////////////////////////////////

const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");

mobileNavBtn.addEventListener("click", () => {
  mobileNavOverlay.classList.toggle("active");
});

mobileNavOverlay.addEventListener("click", function () {
  mobileNavOverlay.classList.remove("active");
});

////////////////////// MODAL WINDOW ///////////////////////////////////

// modal-window
const infoWindow = document.querySelector(".info-window");
const infoBtns = document.querySelectorAll(".info-btn");
const overlay = document.querySelector(".overlay");
const infoTexts = document.querySelectorAll(".info-text");
const infoTitle = document.querySelectorAll(".info-title");

const text = {
  title: ["JavaScript"],

  javascript: [
    "Visual Studio Code (VS Code) is a free, lightweight, and powerful source code editor developed by Microsoft. It supports multiple programming languages, features intelligent code completion, debugging tools, and a wide range of extensions to enhance development workflows.",
  ],
};

const openWindow = function (e) {
  const clickedBtn = e.currentTarget;

  infoWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");

  //////////// MODAL WINDOW TEXT
  if (clickedBtn.classList.contains("js")) {
    infoTexts.forEach((el) => {
      el.textContent = text.visualStudio[0];
    });
    infoTitle.forEach((el) => {
      el.textContent = text.title[0];
    });
  }
};
