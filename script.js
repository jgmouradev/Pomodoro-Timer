const timerDisplay = document.querySelector('#timer');
    const startButton = document.querySelector('#start_stop');
    const resetButton = document.querySelector('#reset');
    const progressBar = document.querySelector('#progress-bar-fill');
    let timeLeft = 1500; // 25 minutes in seconds
    let timerId;
    let isTimerRunning = false;

    function formatTimeLeft(time) {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function updateTimer() {
      timeLeft--;
      timerDisplay.innerText = formatTimeLeft(timeLeft);
      progressBar.style.width = `${((1500 - timeLeft) / 1500) * 100}%`;
      if (timeLeft <= 0) {
        clearInterval(timerId);
        timerDisplay.innerText = '25:00';
        isTimerRunning = false;
      }
    }

    function startTimer() {
      if (!isTimerRunning) {
        timerId = setInterval(updateTimer, 1000);
        isTimerRunning = true;
      } 
    }

    function resetTimer() {
      clearInterval(timerId);
      timeLeft = 1500;
      timerDisplay.innerText = '25:00';
      progressBar.style.width = '0%';
      isTimerRunning = false;
    }

    startButton.addEventListener('click', startTimer);
    resetButton.addEventListener('click', resetTimer);