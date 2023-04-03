// Your code here
const dodger = document.getElementById('dodger')
dodger.style.backgroundColor = "#ff69b4"
dodger.style.bottom = "0px"
dodger.style.left = "40px"

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft()
    }
    else if (event.key === "ArrowRight") {
        moveDodgerRight()
    }
})
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 100) {
      dodger.style.left = `${left + 1}px`;
    }

}

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}