
let audio = new Audio('alarm-voice.mp3');
// audio.play()


document.getElementById('closeBtn').style.display = 'none';

let setBtn = document.getElementById('setBtn');
setBtn.addEventListener('click', setAlarm);
let nowTime = new Date();
let regEx = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/;  // validation for YYYY-MM-DD HH:MM:SS

function setAlarm(){
     const alarmTime = document.getElementById('alarmTime');
     let alarmDate = new Date(alarmTime.value);
     if(regEx.test(alarmTime.value)){
          console.log(`Setting Alarm for ${alarmDate}`);
          let timeToAlarm = alarmDate - nowTime;
          console.log(timeToAlarm);
          if(timeToAlarm >= 0){
               setTimeout(() => {
                    audio.play();
                    document.getElementById('closeBtn').style.display = 'block';
               }, timeToAlarm);
          }
     }else{
          document.getElementById('error').innerText = 'Please enter according to format';
          setInterval(() => {
               document.getElementById('error').innerText = '';
          }, 3000);
     } 
}

function closeAlarm() {
     audio.pause();
}