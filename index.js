function toggle() {
  // toggles the menu on small screens
  var dropdownContent = document.getElementById("dropdown-content");
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "flex";
    dropdownContent.style.flexDirection = "column";
  } else {
    dropdownContent.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = document.body.id;
  const navLinks = document.querySelectorAll("#nav-bar a");

  navLinks.forEach((link) => {
    if (link.getAttribute("data-page") === currentPage) {
      link.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  function adjustLayout() {
    var nav = document.getElementById("nav-bar");
    var dropdown = document.getElementById("dropdown-container");
    var button = document.querySelector(".dropbtn");
    if (window.innerWidth >= 750) {
      // nav.style.display = "flex";
      nav.style.transition = "";
      nav.style.transform = "translateY(0)";
      dropdown.style.display = "none";
      button.style.display = "none";
    } else {
      // nav.style.display = "none";
      nav.style.transition = "none";
      nav.style.transform = "translateY(-100%)";
      dropdown.style.display = "flex";
      button.style.display = "block";
    }
  }

  const currentPage = document.body.id;
  const navLinks = document.querySelectorAll("#nav-bar a");

  // Call adjustLayout on page load
  adjustLayout();

  // Call adjustLayout on window resize
  window.addEventListener("resize", adjustLayout);
});

document.addEventListener("DOMContentLoaded", () => {
  const staffCards = document.querySelectorAll("#staff-card");
  const staffFeature = document.getElementById("staff-feature");

  const staffIframeSources = {
    "Prof. Klein": "",
    "Kristen": "https://open.spotify.com/embed/track/2LlOeW5rVcvl3QcPNPcDus?utm_source=generator",
    "Melinda":"https://open.spotify.com/embed/track/5Cc0Pe8p7c2OJxMj07ywvc?utm_source=generator",
    "Skylar":"https://open.spotify.com/embed/track/2KbP76N9Fw4MWKIjYyBlbC?utm_source=generator&theme=0",
    "Catherine":"https://open.spotify.com/embed/track/6UFivO2zqqPFPoQYsEMuCc?utm_source=generator",
    "Ella":"https://open.spotify.com/embed/track/5zcoYCmeIL392as1bwIYce?utm_source=generator",
    "Gunner":"https://open.spotify.com/embed/track/4cBFjnFYjycw2EDWwZqdAP?utm_source=generator",
    "Julie":"https://open.spotify.com/embed/track/2SPbioo65CuUB3H0aW1ID5?utm_source=generator",
    "Michael":"https://open.spotify.com/embed/track/6PCUP3dWmTjcTtXY02oFdT?utm_source=generator",
    "Nathan":"https://open.spotify.com/embed/track/1H5IfYyIIAlgDX8zguUzns?utm_source=generator",
    "Oliver":"https://open.spotify.com/embed/track/7G3lxTsMfSx4yarMkfgnTC?utm_source=generator",
    "Patrick":"https://open.spotify.com/embed/track/5CU1bbfY1wUPm7fU255Dhf?utm_source=generator",
    "Sean":"https://open.spotify.com/embed/track/3gFQOMoUwlR6aUZj81gCzu?utm_source=generator",
    "Stella":"https://open.spotify.com/embed/track/4F7SWwVXyvGlCs9TtXJbUd?utm_source=generator",
    "Taha":"https://open.spotify.com/embed/track/1Ehdm1PDlKrdfyBsjwEvd1?utm_source=generator",
    // Add more staff members and their iframe sources here
  };

  staffCards.forEach((card) => {
    card.addEventListener("click", () => {
      const imgSrc = card.querySelector("img").src;
      const name = card.querySelector("h1").textContent.trim();
      const role = card.querySelector("h3").textContent.trim();
      const info = card.querySelector("h4").textContent.trim();
      const bio = card.querySelector("p")
        ? card.querySelector("p").textContent.trim()
        : "";
      //const song = card.querySelector("iframe");

      songSrc = staffIframeSources[name]
      staffFeature.innerHTML = `
                <img src="${imgSrc}" alt="${name}">
                <h1>${name}</h1>
                <h3>${role}</h3>
                <h4>${info}</h4>
                <p>${bio}</p>
                <iframe src="${songSrc}" border: none;"></iframe>

            `;
    });
  });
});
