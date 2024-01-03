//==== horizontal scroll ====/
const scrollContainer = document.querySelector("#scroll-h");
const itemScroll = document.querySelector("#scroll-h ul").cloneNode(true);

scrollContainer.appendChild(itemScroll);

//==== tab berita ====//
const tabBerita = document.querySelectorAll("#berita ul#tab li");
const fotoBerita = document.querySelectorAll("ul#article li #foto");
const videoBerita = document.querySelectorAll("ul#article li #video");

tabBerita.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // remove active
    tabBerita.forEach((item) => {
      item.classList.remove("active");
    });

    // active foto & video
    tab.classList.add("active");
    fotoBerita.forEach((foto) => {
      videoBerita.forEach((video) => {
        if (index == 1) {
          foto.classList.remove("d-none");
          video.classList.add("d-none");
        } else if (index == 2) {
          foto.classList.add("d-none");
          video.classList.remove("d-none");
        } else {
          foto.classList.add("d-none");
          video.classList.add("d-none");
        }
      });
    });
  });
});

//==== gallery ====//
const carousel = document.querySelectorAll(".carousel-item");
const gallery = document.querySelectorAll("#second-gallery li");
let activegallery;

const getActiveCarousel = (ref) => {
  carousel.forEach((item, index) => {
    if (item.classList.contains("active")) {
      ref == "prev" ? (activegallery = index - 1) : (activegallery = index + 1);

      if (activegallery == 4) activegallery = 0;
      if (activegallery == -1) activegallery = 3;

      console.log(activegallery);

      // add active state to gallery that show on carousel
      gallery.forEach((li, i) => {
        li.classList.remove("active");
        if (i == activegallery) li.classList.add("active");
      });
    }
  });
};

document
  .querySelector('[data-bs-slide="prev"]')
  .addEventListener("click", () => getActiveCarousel("prev"));

document
  .querySelector('[data-bs-slide="next"]')
  .addEventListener("click", () => getActiveCarousel("next"));

// click spesific gallery
gallery.forEach((gal, galIndex) => {
  gal.addEventListener("click", () => {
    gallery.forEach((li, liIndex) => {
      // remove active gallery
      li.classList.remove("active");

      // add active gallery same to clicked element
      if (liIndex == galIndex) li.classList.add("active");
    });

    // add active to clicked element
    carousel.forEach((item, cIndex) => {
      item.classList.remove("active");
      if (galIndex == cIndex) item.classList.add("active");
    });
  });
});

//==== navbar behavior for mobile ====//
const navbar = document.querySelector("nav.navbar");

document
  .querySelector('[data-bs-toggle="collapse"]')
  .addEventListener("click", () => {
    if (navbar.classList.contains("rounded-pill")) {
      navbar.classList.remove("rounded-pill");
      navbar.classList.add("rounded-4");
    } else {
      setTimeout(() => {
        navbar.classList.remove("rounded-4");
        navbar.classList.add("rounded-pill");
      }, 400);
    }
  });
