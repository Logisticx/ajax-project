/* eslint-disable no-unused-vars */

var dayInput = document.getElementById('days');
var hourInput = document.getElementById('hours');
var minuteInput = document.getElementById('minutes');
var secondInput = document.getElementById('seconds');
var previousDayHeader = document.getElementById('previous-week-head');
var week = document.getElementById('week-time');

function previousDay(date) {
  var newTime = date;
  newTime.setDate(newTime.getDate() - 1);
  return newTime.toDateString();
}
week.innerHTML = new Date().toDateString();
previousDayHeader.innerHTML = previousDay(new Date());

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
