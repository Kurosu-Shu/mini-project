//digital clock

function timeCounter() {

    let date = new Date();

    let hr;
    let min;
    let sec;
    //12 hours formats
    if (date.getHours() > 12) {
        realHr = date.getHours() - 12;
        hr = "0" + realHr;
    } else if (date.getHours() === 0) {
        hr = 12;
    } else {
        realHr = date.getHours();
        hr = realHr >= 10 ? realHr : "0" + realHr;
    }

    //0 placeholder in minutes
    let realMin = date.getMinutes();
    min = date.getMinutes() >= 10 ? realMin : "0" + realMin;

    //0 placeholder in seconds
    let realSec = date.getSeconds();
    sec = date.getSeconds() >= 10 ? realSec : "0" + realSec;

    // am or pm 
    let time = hr < 12 ? "AM" : "PM";

    //render time
    let timeDiv = document.querySelector('.hms');
    timeDiv.innerHTML = `<p>${hr}:${min}:${sec} 
   <span>
   ${time}
   </span>
</p>`;

    //mm/dd/yy
    let day = date.getDate();
    let year = date.getFullYear();
    let monthName = ['Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'];

    let dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    //render date
    let dateDiv = document.querySelector('.dmy');
    dateDiv.innerHTML = `<p><span>Date:</span>
 ${monthName[date.getMonth()]}-${day}-${year} ${dayName[date.getDay()]}
 </p>`;
}

setInterval(timeCounter, 1000);
