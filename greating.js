var today = new Date();
var todayHour = today.getHours();
var greeting;
if (todayHour>18){
    greeting = 'Good evening!';
}
else if (todayHour>12){
    greeting='Good afternoon!';
}
else if (todayHour>10){
    greeting='Good Morning!';
} else {
    greeting='Welcome!'
}

document.write('<h1>'+greeting+'</h1>');