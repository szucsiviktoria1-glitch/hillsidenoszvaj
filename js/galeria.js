// Egyszerű képváltó galéria
const kepek = [
  "img/kulsokep (2).jpg",
  "img/jacuzzi_belter.jpg",
  "img/belter.jpg",
  "img/konyha.jpg",
  "img/furdo.jpg"
];

let index = 0;
const foKep = document.getElementById("fo-kep");
const bal = document.getElementById("bal");
const jobb = document.getElementById("jobb");
const kisKepek = document.querySelectorAll(".kis-kepek img");

// fő kép frissítése
function mutat(i) {
  index = (i + kepek.length) % kepek.length;
  foKep.src = kepek[index];
  kisKepek.forEach(k => k.classList.remove("aktiv"));
  kisKepek[index].classList.add("aktiv");
}

bal.addEventListener("click", () => mutat(index - 1));
jobb.addEventListener("click", () => mutat(index + 1));

kisKepek.forEach((k, i) => {
  k.addEventListener("click", () => mutat(i));
});
