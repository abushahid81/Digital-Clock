

let hours = document.getElementById('hours');
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(function(){

    var currentTime = new Date();

     hours.innerHTML = currentTime.getHours("hours");
     minutes.innerHTML = currentTime.getMinutes("minutes");
     seconds.innerHTML = currentTime.getSeconds("seconds");
     
},1000);

