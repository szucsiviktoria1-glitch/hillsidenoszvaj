
const form = document.getElementById("foglalas-form");
const uzenet = document.getElementById("uzenet");

form.addEventListener("submit", e => {
  e.preventDefault(); 

  const nev = document.getElementById("nev").value.trim();
  const email = document.getElementById("email").value.trim();
  const tel = document.getElementById("tel").value.trim();
  const vendegek = document.getElementById("vendegek").value;
  const erkezes = document.getElementById("erkezes").value;


  if (nev.length < 3) {
    uzenet.textContent = "A név túl rövid!";
    uzenet.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    uzenet.textContent = "Érvénytelen e-mail cím!";
    uzenet.style.color = "red";
    return;
  }

  if (!tel.startsWith("+36")) {
    uzenet.textContent = "A telefonszám formátuma nem megfelelő!";
    uzenet.style.color = "red";
    return;
  }

  if (vendegek < 1 || vendegek > 6) {
    uzenet.textContent = "A vendégek száma 1 és 6 között lehet!";
    uzenet.style.color = "red";
    return;
  }

  if (erkezes === "") {
    uzenet.textContent = "Kérem adja meg az érkezés dátumát!";
    uzenet.style.color = "red";
    return;
  }

  uzenet.textContent = "Foglalási igény sikeresen elküldve!";
  uzenet.style.color = "green";
  form.reset();
});
