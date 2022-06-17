
var dayInput = document.getElementById('days');
var hourInput = document.getElementById('hours');
var minuteInput = document.getElementById('minutes');
var secondInput = document.getElementById('seconds');

var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var interval;
var eventDay = new Date('June 14, 2022 23:00:00 GMT-3:00');

function addSevenDays() {
  eventDay.setDate(eventDay.getDate() + 7);
}

var countDownFn = () => {
  var today = new Date();
  var timeSpan = eventDay - today;
  if (timeSpan <= -today) {
    clearInterval(interval);
  } else if (timeSpan <= 0) {
    addSevenDays();
  } else {
    var days = Math.floor(timeSpan / day);
    var hours = Math.floor((timeSpan % day) / hour);
    var minutes = Math.floor((timeSpan % hour) / minute);
    var seconds = Math.floor((timeSpan % minute) / second);
    dayInput.innerHTML = days;
    hourInput.innerHTML = hours;
    minuteInput.innerHTML = minutes;
    secondInput.innerHTML = seconds;
  }
};
interval = setInterval(countDownFn, second);

var week = document.getElementById('week-time');
function setToMonday(date) {
  var day = date.getDay() || 7;
  if (day !== 1) {
    date.setHours(-24 * (day - 1));
    return date.toDateString();
  }
}
week.innerHTML = 'Week of ' + setToMonday(new Date());
