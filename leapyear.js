var year = 24109;
var LeapYear = year % 4 ;

if (LeapYear==0 && year%400==0) {
    console.log("This is Leap Year");
} else {
    console.log("This is not leap year");
}