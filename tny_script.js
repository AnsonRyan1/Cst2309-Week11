
"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Anson Ryan
   Date: 11/23/2026
*/

runClock();
setInterval(runClock, 1000);

function runClock() {

    /* Store the current date and time */
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    /* Display the current date and time */
    document.getElementById("dateNow").innerHTML =
        dateStr + "<br />" + timeStr;

    /* Calculate the time until New Year's Day */
    var newYear = new Date(currentDay.getFullYear() + 1, 0, 1);

    var daysLeft =
        (newYear - currentDay) / (1000 * 60 * 60 * 24);

    var hrsLeft =
        (daysLeft - Math.floor(daysLeft)) * 24;

    var minsLeft =
        (hrsLeft - Math.floor(hrsLeft)) * 60;

    var secsLeft =
        (minsLeft - Math.floor(minsLeft)) * 60;

    /* Display the countdown */
    document.getElementById("days").textContent =
        Math.floor(daysLeft);

    document.getElementById("hrs").textContent =
        Math.floor(hrsLeft);

    document.getElementById("mins").textContent =
        Math.floor(minsLeft);

    document.getElementById("secs").textContent =
        Math.floor(secsLeft);
}
