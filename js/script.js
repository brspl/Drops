    function calculate() {
      let timer;
      const DROPTIME = Number(document.getElementById("droptime").value) * 3600;
      const TIMELEFT = 100 - Number(document.getElementById("timeleft").value);
      let result = Math.floor(DROPTIME * TIMELEFT / 100);

      let HOURS = Math.floor(result / 3600);
      let MINUTES = Math.floor((result % 3600) / 60);
      let SECONDS = result % 60;

      document.getElementById("result").textContent =
        `Pozostało: ${HOURS}h ${MINUTES}m ${SECONDS}s`;

      timer = setInterval(function() {
        result--;
        HOURS = Math.floor(result / 3600);
        MINUTES = Math.floor((result % 3600) / 60);
        SECONDS = result % 60;
        document.title = `Pozostało: ${HOURS}h:${MINUTES}m:${SECONDS}s`;
        document.getElementById("result").textContent =
          `Pozostało: ${HOURS}h ${MINUTES}m ${SECONDS}s`;

        if (result <= 0) {
          clearInterval(timer);
          document.title = "Ile czasu do końca dropa? | Twitch Drops";
          document.getElementById("result").textContent = "Koniec!";
        }
      }, 1000);
    }