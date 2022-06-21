/* eslint-disable no-unused-vars */

var dayInput = document.getElementById('days');
var hourInput = document.getElementById('hours');
var minuteInput = document.getElementById('minutes');
var secondInput = document.getElementById('seconds');
var previousWeekHeader = document.querySelector('.previous-week-head');
var week = document.getElementById('week-time');
function setToMonday(date) {
  var day = date.getDay() || 7;
  if (day !== 1) {
    date.setHours(-24 * (day - 1));
    subtractSevenDays(date);
    return date.toDateString();
  } else {
    subtractSevenDays(date);
    return date.toDateString();
  }
  // create function to pass date.toDateString as an argument and subtract 7 days from that
}
week.innerHTML = 'Week of ' + setToMonday(new Date());
function subtractSevenDays(time) {
  var newTime = time;
  newTime.setDate(newTime.getDate() - 5);
  previousWeekHeader.innerHTML = newTime.toDateString();
}

var endDate = new Date('June 27, 2022 23:00:00 GMT-3:00').getTime();
var countDownTimer = setInterval(() => {
  var now = new Date().getTime();
  var remainingTime = endDate - now;
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var daysLeft = Math.floor(remainingTime / day);
  var hoursLeft = Math.floor((remainingTime % day) / hour);
  var minutesLeft = Math.floor((remainingTime % hour) / minute);
  var secondsLeft = Math.floor((remainingTime % minute) / second);
  dayInput.innerHTML = daysLeft;
  hourInput.innerHTML = hoursLeft;
  minuteInput.innerHTML = minutesLeft;
  secondInput.innerHTML = secondsLeft;

  // if (remainingTime <= 0) {
  //   endDate.setDate(endDate.getTime() + 7);
  // } currently not working, have to set date manually at the moment.
}, 1000);
