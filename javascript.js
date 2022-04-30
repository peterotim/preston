var fullDateYear = document.getElementById("date");
var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var monthName=months[d.getMonth()];

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var nameDay = new Date();
var dayName = days[nameDay.getDay()];

var nameDate = d.getDate()
var nameYear = d.getFullYear()

var nameday = dayName
var nameMonth = monthName.toLocaleString('en-us', { day: 'long' })

var fullYear = (dayName + " " + nameMonth + " " + nameDate + " " + nameYear);

fullDateYear.innerHTML = fullYear