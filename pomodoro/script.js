const counterEl = document.querySelector(".counter")
const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")

/**
 * 
 * Get Element counter and buttons
 * 
 * add event listners to get a click on each button
 * 
 * declare an initial variable for time interval
 * START ELEMENT
 * - Declare an Interval Variable for setInterval with 1000ms
 * 
 * Declare formular for minutes and Seconds
 * 
 * 
 * Declare Update Timer
 * 
 * 
 */

let interval
let timeLeft = 1500

function updateTime(){
    let minute = Math.floor(timeLeft / 60)
    let second = timeLeft % 60

    counterEl.innerHTML = `${minute.toString().padStart(2, '0')} : ${second.toString().padStart(2, '0')}`
}

function startTimer(){
    interval = setInterval(()=>{
        // console.log("Start Clicked")
        timeLeft--
        updateTime()

        if(timeLeft === 0){
            clearInterval(interval)
            alert("Time is Up")
            timeLeft = 1500
            counterEl.innerHTML = "25 : 00"
        }
    }, 1000)
    startEl.disabled = true
    stopEl.disabled = false
}

function stopTimer(){
    // console.log("Stop Clicked");
    clearInterval(interval)

    stopEl.disabled = true
    startEl.disabled = false
}

function resetTimer(){
    // console.log("Reset Clicked")
    clearInterval(interval)
    counterEl.innerHTML = "25 : 00"
    timeLeft = 1500
}

startEl.addEventListener("click", 
    startTimer)
stopEl.addEventListener("click", stopTimer)
resetEl.addEventListener("click", resetTimer)