const stopwatchBtn = (btn) => {
    let stopwatch = parseFloat(stopwatchTxt.textContent);
  
    //Increase and Decrease Stopwatch
    if (btn === "-") {
      stopwatch -= 1;
    } else if (btn === "+") {
      stopwatch += 1;
    } else {
      stopwatch = 0;
    }
    stopwatchTxt.textContent = stopwatch;
  
    //Change Stopwatch Background
    if (stopwatch < 0) {
      stopwatchTxt.style.backgroundColor = "#F05454";
    } else if (stopwatch === 0) {
      stopwatchTxt.style.backgroundColor = "#0000ff";
    } else {
      stopwatchTxt.style.backgroundColor = "#011325";
    }
  };
  