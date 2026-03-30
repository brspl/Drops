let timer = null;

function pad(n) {
  return n.toString().padStart(2, "0");
}

function updateUI(seconds) {
  let HOURS = Math.floor(seconds / 3600);
  let MINUTES = Math.floor((seconds % 3600) / 60);
  let SECONDS = seconds % 60;

  const text = `Pozostało: ${pad(HOURS)}:${pad(MINUTES)}:${pad(SECONDS)}`;

  document.title = text;
  document.getElementById("result").textContent = text;
}

function openModal() {
  document.getElementById("modal").classList.add("active");
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
}

function calculate() {
  if (timer !== null) {
    clearInterval(timer);
  }

  const droptimeInput = Number(document.getElementById("droptime").value);
  const percent = Number(document.getElementById("timeleft").value);

  if (!isFinite(droptimeInput) || droptimeInput <= 0) {
    alert("Podaj poprawny czas!");
    return;
  }

  if (!isFinite(percent) || percent < 0 || percent > 100) {
    alert("Podaj poprawną wartość procenta!");
    return;
  }

  const DROPTIME = droptimeInput * 3600;
  let result = Math.floor((DROPTIME * (100 - percent)) / 100);

  updateUI(result);

  timer = setInterval(() => {
    result = Math.max(0, result - 1);
    updateUI(result);

    if (result === 0) {
      clearInterval(timer);
      timer = null;

      document.title = "Ile do końca dropa? | Twitch Drops 🎁";
      document.getElementById("result").textContent = "Koniec! 🎁";
    }
  }, 1000);
}
