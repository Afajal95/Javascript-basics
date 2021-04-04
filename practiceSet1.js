//Write a JavaScript program to display the current day and time in the following format. 
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);


//Write a JavaScript program to print the contents of the current window.

function print_current_page()
{
window.print();
}



//Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

var s1 = 5;
var s2 = 6;
var s3 = 7;

var peri = (s1+s2+s3)/2;
var area = Math.sqrt(peri*((peri-s1)*(peri-s2)*(peri-s3)));
 console.log(area);
