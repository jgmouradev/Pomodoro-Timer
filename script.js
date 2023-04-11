const timerDisplay = document.querySelector('#timer');
    const startButton = document.querySelector('#start');
    const pauseButton = document.querySelector('#stop')
    const resetButton = document.querySelector('#reset');
    const progressBar = document.querySelector('#circular');
    const descansoCurto = document.getElementById('curto');
    const descansoLongo = document.getElementById('longo');

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

    function stopTimer(){
      clearInterval(timerId)
      isTimerRunning = false;
    }

    function resetTimer() {
      clearInterval(timerId);
      timeLeft = 1500;
      timerDisplay.innerText = '25:00';
      progressBar.style.width = '0%';
      isTimerRunning = false;
    }

    function fiveMinutes(){
      timerDisplay.innerText = '05:00';
      timeLeft = 300;
    }

    function fifteenMinutes(){
      timerDisplay.innerText = '15:00';
      timeLeft = 900;
    }

    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
    descansoCurto.addEventListener('click',fiveMinutes);
    descansoLongo.addEventListener('click',fifteenMinutes)