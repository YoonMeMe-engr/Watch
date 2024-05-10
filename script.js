const WatchTag = document.getElementsByClassName("Watch")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];

let seconds = 0;  
    minutes = 0; 
    hours = 0;

// setInterval(callback, delay); Built-in Function 1000ms = 1s

const startTime = () => {
    seconds += 1;
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;

        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        } 
    }

    /* ternary operator
    if (condition) {
        
    } else {

    } 
    condition ? code : code; */
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hourText = hours < 10 ? "0" + hours.toString() : hours;
    WatchTag.textContent = hourText + ":" + minuteText + ":" + secondText;
};

let intervalId;
startButtonTag.addEventListener("click" , () => {
    intervalId = setInterval(startTime, 1000); // 0 မဟုတ်တဲ့ ဂဏန်းကို return လုပ်ပေးတယ်
});



pauseButtonTag.addEventListener("click" , () => {
    clearInterval(intervalId); //startinerval ကို stop လုပ်ဖို့ Built-in Function
});

continueButtonTag.addEventListener("click" , () => {
    clearInterval(intervalId); //startinerval ကို stop လုပ်ဖို့ Built-in Function
    intervalId = setInterval(startTime, 1000);
});

restartButtonTag.addEventListener("click" , () => {
    clearInterval(intervalId); //startinerval ကို stop လုပ်ဖို့ Built-in Function
    (seconds = 0), (minutes = 0), (hours = 0); 
    intervalId = setInterval(startTime, 1000);
});
