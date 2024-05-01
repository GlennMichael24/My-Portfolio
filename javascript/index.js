const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
let count = 0;

const renderTimer = () => {
    count += 1;
    minutes.innerHTML = Math.floor(count / 60).toString().padStart(2, "0");
    seconds.innerHTML = (count % 60).toString().padStart(2, "0");
  }

  const timer = setInterval(renderTimer, 1000)
// The padStart() method pads the current string with another string (repeated, if needed) 
// so that the resulting string reaches the given length.
// The padding is applied from the start (left) of the current string.

