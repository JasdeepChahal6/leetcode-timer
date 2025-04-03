document.addEventListener("DOMContentLoaded", () => {
    const easyBtn = document.getElementById("easy-btn");
    const mediumBtn = document.getElementById("medium-btn");
    const hardBtn = document.getElementById("hard-btn");
    const timerSection = document.getElementById("timer-section");
    const timeInput = document.getElementById("time-input");
    const startBtn = document.getElementById("start-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const resetBtn = document.getElementById("reset-btn");
    const timerDisplay = document.getElementById("timer-display");

    let countdown;
    let timeLeft;
    
    function showTimer(minutes) {
        timeInput.value = minutes; 
        timerDisplay.textContent = `${minutes}:00`; 
        timerSection.style.display = "block"; 
        clearInterval(countdown);
    }

    easyBtn.addEventListener("click", () => showTimer(15));
    mediumBtn.addEventListener("click", () => showTimer(30));
    hardBtn.addEventListener("click", () => showTimer(45));

    function startTimer() {
        clearInterval(countdown);
        timeLeft = parseInt(timeInput.value) * 60;
        updateDisplay();
        
        countdown = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                document.getElementById("alarm-sound").play(); 
            } else {
                timeLeft--;
                updateDisplay();
            }
        }, 1000);
    }

    function updateDisplay() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function pauseTimer() {
        clearInterval(countdown);
    }

    function resetTimer() {
        clearInterval(countdown);
        showTimer(parseInt(timeInput.value));
    }

    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resetBtn.addEventListener("click", resetTimer);
});
