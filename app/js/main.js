// Test
console.log("JS Running...");

// Calls
const start = document.getElementById("btn_start");
const stop = document.getElementById("btn_stop");
const reset = document.getElementById("btn_reset");
const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

// Variables
let full = 24 * 60 * 60;
let secound = 0;
let hour = 0;
let minute = 00;
let isStarted = false;
let isClickable = true;

//Program
start.onclick = function () {
  if (isClickable == true) {
    startTimer();
    isClickable = false;
  }
};

stop.onclick = function () {
  stopTimer();
};

reset.onclick = function () {
  resetTimer();
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startTimer() {
  isStarted = true;

  while (isStarted == true) {
    if (secound < 59) {
      secAdd();
    } else {
      if (minute < 59) {
        minAdd();
      } else {
        if (hour < 24) {
          hrAdd();
        } else {
          resetTimer();
        }
      }
    }
    await sleep(1000);
  }
}

function stopTimer() {
  isStarted = false;
  isClickable = true;
}

function resetTimer() {
  stopTimer();
  secound = 0;
  minute = 0;
  hour = 0;

  sec.innerHTML = "0" + secound;
  min.innerHTML = "0" + minute;
  hr.innerHTML = "0" + hour;
}

function secAdd() {
  secound++;

  if (secound < 10) {
    sec.innerHTML = "0" + secound;
  } else {
    sec.innerHTML = secound;
  }
}

function minAdd() {
  secound = 0;
  sec.innerHTML = "0" + secound;

  minute++;

  if (minute < 10) {
    min.innerHTML = "0" + minute;
  } else {
    min.innerHTML = minute;
  }
}

function hrAdd() {
  secound = 0;
  sec.innerHTML = "0" + secound;
  minute = 0;
  min.innerHTML = "0" + minute;

  hour++;

  if (hour < 10) {
    hr.innerHTML = "0" + hour;
  } else {
    Headers.innerHTML = hour;
  }
}
