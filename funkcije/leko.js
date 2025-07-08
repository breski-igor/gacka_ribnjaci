const FACTS = [
  "Jedina riba uzgajana u vodama Parka prirode",
  "Tradicija od 1954.",
  "U srcu prirode",
  "Samo 50 km od Nacionalnog Parka Plitvice."
];

const PICTURES = [
  "Ribogojiliste Gacka Fotografije/2. Dron/Dron (17).jpg",
  "Ribogojiliste Gacka Fotografije/1. Fotic/Fotografija (8).jpg",
  "Ribogojiliste Gacka Fotografije/2. Dron/Dron (18).jpg"
];

const factDiv = document.getElementById("fact");
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");

let currentFactIndex = 0;
let currentPicIndex = 0;

window.addEventListener('DOMContentLoaded', () => {
  initFacts();
  initSlideshow();
});

function initFacts() {
  factDiv.innerHTML = FACTS[currentFactIndex];
  currentFactIndex = (currentFactIndex + 1) % FACTS.length;
  setInterval(changeFact, 7000);
}

function changeFact() {
  factDiv.classList.remove("fade-in");
  factDiv.classList.add("fade-out");

  setTimeout(() => {
    factDiv.innerHTML = FACTS[currentFactIndex];
    factDiv.classList.remove("fade-out");
    factDiv.classList.add("fade-in");
    currentFactIndex = (currentFactIndex + 1) % FACTS.length;
  }, 1000);
}

function initSlideshow() {
  pic1.src = PICTURES[currentPicIndex];
  pic1.classList.add("active");

  setInterval(changeSlide, 7000);
}

function changeSlide() {
  const nextIndex = (currentPicIndex + 1) % PICTURES.length;

  if (pic1.classList.contains("active")) {
    pic2.src = PICTURES[nextIndex];
    pic2.classList.add("active");
    pic1.classList.remove("active");
  } else {
    pic1.src = PICTURES[nextIndex];
    pic1.classList.add("active");
    pic2.classList.remove("active");
  }

  currentPicIndex = nextIndex;
}

function toggleMenu() {
  const navContainer = document.querySelector('.nav-container');
  navContainer.classList.toggle('active');
  
  if (navContainer.classList.contains('active')) {
    document.querySelectorAll('.nav-container nav ul li a').forEach(link => {
      link.addEventListener('click', () => {
        navContainer.classList.remove('active');
      });
    });
  }
}