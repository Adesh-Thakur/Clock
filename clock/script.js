setInterval(setHands,1000)

let h = document.getElementById('hour')
let m = document.getElementById('minute')
let s = document.getElementById('second')

function setHands(){
    let currDate = new Date();
    let second = currDate.getSeconds()/60;
    let minute = (second + currDate.getMinutes())/60;
    let hour = (minute + currDate.getHours())/12;
    rotation(s,second);
    rotation(m,minute);
    rotation(h,hour);

    

}

function rotation(element,time){
    element.style.setProperty('--rotation', time * 360)
}

setHands()

let weather = fetch('https://api.openweathermap.org/data/2.5/weather?q=nagpur&appid=a4eee3d79b26bd7a65a80a428fa47147&units=metric')
.then(Response => Response.json())
.then(data => {
    console.log(data);
    document.getElementById('w').innerHTML=(data.main.temp)+' C';
})

//Fetch API to get time 
/*fetch('https://api.timezonedb.com/v2.1/list-time-zone?key=GFJCYBTCRJKR&format=json&country=in')
.then(Response => Response.json())
.then( data => {
    var timestamp = data.zones[0].timestamp;
    var date = new Date(timestamp *1000);
    var hours = date.getHours();
    var minutes =  date.getMinutes();
    var seconds =  date.getSeconds();
    document.getElementById('d').innerHTML=hours+" : "+minutes+" : "+seconds;
     console.log(hours+" : "+minutes+" : "+seconds);
})*/

function degitalClock(){
    let dTime = new Date();
    let dHour = dTime.getHours();
    let dMinutes = dTime.getMinutes();
    let dSeconds = dTime.getSeconds();

    let session = 'AM';

    if(dHour==0){
        dHour=12;
    }else if(dHour>12){
        dHour-=12;
        session = 'PM';
    }
    dHour = (dHour < 10) ? "0"+dHour : dHour;
    dMinutes = (dMinutes < 10) ? "0"+dMinutes : dMinutes;
    dSeconds = (dSeconds < 10) ? "0"+dSeconds : dSeconds;
    document.getElementById('d').innerHTML=dHour+" : "+dMinutes+" : "+dSeconds+" "+session;
    document.getElementById('clock').classList.toggle("clock_shadow");

}

setInterval(degitalClock,1000);

degitalClock();