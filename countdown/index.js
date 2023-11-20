(() => {
  let timeInterval = null;
  let timePassedInSeconds = 0;
  const startBtn = document.querySelector(".start");
  const stopBtn = document.querySelector(".stop");
  const resetBtn = document.querySelector(".reset");
  const timerDisplay = document.querySelector(".timer_display");
  updateDispaly(0, 0, 0, 0);
  function getTime(key, time) {
    switch (key) {
      case "d":
        return Math.floor(time / (60 * 60 * 24));
      case "h":
        return Math.floor((time % (60 * 60 * 24)) / (60 * 60));
      case "m":
        return Math.floor((time % (60 * 60)) / 60);
      case "s":
        return Math.floor(time % 60);

      default:
        break;
    }
  }

  function startTime() {
    if (timeInterval) {
      clearInterval(timeInterval);
    }
    timeInterval = setInterval(() => {
      timePassedInSeconds += 1;

      const days = getTime("d", timePassedInSeconds);
      const hours = getTime("h", timePassedInSeconds);
      const minutes = getTime("m", timePassedInSeconds);
      const seconds = getTime("s", timePassedInSeconds);
      // const milliseconds = timePassedInSeconds % 100;

      updateDispaly(days, hours, minutes, seconds);
    }, 1000);
    startBtn.disabled = true;
    startBtn.classList.add("disabled-cursor");
  }

  function stopTime() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    stopBtn.classList.add("disabled-cursor");
    clearInterval(timeInterval);
  }

  function resetTime() {
    startBtn.disabled = false;
    stopBtn.disabled = false;
    startBtn.classList.remove("disabled-cursor");
    stopBtn.classList.remove("disabled-cursor");

    clearInterval(timeInterval);
    timePassedInSeconds = 0;
    updateDispaly(0, 0, 0, 0);
  }

  function updateDispaly(days, hours, minutes, seconds) {
    timerDisplay.innerHTML = `<span class="timer_hand"> ${days}d : ${hours}h : ${minutes}m : ${seconds}s</span>`;
  }

  startBtn.addEventListener("click", startTime);
  stopBtn.addEventListener("click", stopTime);
  resetBtn.addEventListener("click", resetTime);
})();
