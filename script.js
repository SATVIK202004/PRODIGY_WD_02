const timerDisplay = document.querySelector('.timer-display');
const startButton = document.getElementById('start-timer');
const pauseButton = document.getElementById('pause-timer');
const resetButton = document.getElementById('reset-timer');
let startTime;
let elapsedTime = 0;
let timerInterval;
function startTimer() {
  if (!startTime) {
    startTime = Date.now(); 
    timerInterval = setInterval(updateTimer, 10);
  }
}
function pauseTimer() {
  clearInterval(timerInterval);
  startTime = null;
}
function resetTimer() {
  clearInterval(timerInterval);
  startTime = null;
  elapsedTime = 0;
  updateTimer();
  timerDisplay.textContent = '00 : 00 : 00 : 000'; 
}
function updateTimer() {
  const elapsedTimeInMilliseconds = Date.now() - startTime + elapsedTime;
  const formattedTime = formatTime(elapsedTimeInMilliseconds);
  timerDisplay.textContent = formattedTime;
}
function formatTime(milliseconds) {
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  milliseconds %= (1000 * 60 * 60);
  const minutes = Math.floor(milliseconds / (1000 * 60));
  milliseconds %= (1000 * 60);
  const seconds = Math.floor(milliseconds / 1000);
  milliseconds %= 1000;

  return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)} : ${pad(milliseconds, 3)}`;
}
function pad(num, size = 2) {
  let numString = num.toString();
  while (numString.length < size) {
    numString = '0' + numString;
  }
  return numString;
}
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
