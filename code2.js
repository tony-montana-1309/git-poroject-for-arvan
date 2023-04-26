var MyTimer = setInterval(ShowTime, 1000);

function ShowTime(){
 var date_time = new Date();
 var Time = date_time.toLocaleTimeString();
 document.getElementById("time").innerHTML = Time;
}