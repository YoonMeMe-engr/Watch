const WatchTag = document.getElementsByClassName("Watch")[0];
const FooterTag = document.getElementsByClassName("Footer")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];
const stopButtonTag = document.getElementsByClassName("stopButton")[0];

let miliseconds = 0;
    seconds = 0;  
    minutes = 0; 
    hours = 0;

// setInterval(callback, delay); Built-in Function 1000ms = 1s

const startTime = () => {
    miliseconds += 10;
    if (miliseconds === 1000) {
        miliseconds = 0;
        seconds += 1;
    
        if (seconds === 60) {
        seconds = 0;
        minutes += 1;
        }
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
    WatchTag.textContent = hourText + " " + ":" + " " + minuteText + " " + ":" + " " + secondText;
    const milisecondText = miliseconds < 100 ? "0" + miliseconds.toString() : miliseconds;
    FooterTag.textContent = milisecondText;
};

let intervalId;
startButtonTag.addEventListener("click" , () => {
    intervalId = setInterval(startTime, 10); // 0 မဟုတ်တဲ့ ဂဏန်းကို return လုပ်ပေးတယ်
});



pauseButtonTag.addEventListener("click" , () => {
    clearInterval(intervalId); //startinerval ကို stop လုပ်ဖို့ Built-in Function
});

continueButtonTag.addEventListener("click" , () => {
    clearInterval(intervalId); //startinerval ကို stop လုပ်ဖို့ Built-in Function
    intervalId = setInterval(startTime, 10);
});

restartButtonTag.addEventListener("click" , () => {
    clearInterval(intervalId); //startinerval ကို stop လုပ်ဖို့ Built-in Function
    (miliseconds = 0), (seconds = 0), (minutes = 0), (hours = 0);
    WatchTag.innerHTML = "00 : 00 : 00";
    FooterTag.innerHTML = "000";
    intervalId = setInterval(startTime, 10);
});

stopButtonTag.addEventListener("click" , () => {
    clearInterval(intervalId);
    (miliseconds = 0), (seconds = 0), (minutes = 0), (hours = 0);
    WatchTag.innerHTML = "00 : 00 : 00";
    FooterTag.innerHTML = "000";
});
