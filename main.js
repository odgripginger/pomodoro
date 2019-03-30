const buttons = document.querySelectorAll('button');

    
const sessionLength = document.querySelector("#session-length");
const breakLength = document.querySelector("#break-length");

const timeDisplay = document.querySelector("#main-display p");

let sessionTime = 25;
let breakTime = 5;
let running = false;
let breakrun = true;
let myTime;
let timer = sessionTime * 60;
let secsPassed = 0;
let currTime = sessionTime + ':00';


function displayValues( m , b, s ) {
  timeDisplay.textContent = m ;
  sessionLength.textContent = b + ':00';
  breakLength.textContent = s + ':00';
}

displayValues(currTime, sessionTime, breakTime);

buttons.forEach(button => {
  
  button.addEventListener( 'mousedown', () => {
    
    doAction(button.id);

    if(!running && button.id != "pause") {
    displayValues(sessionTime + ':00', sessionTime, breakTime);
    timer = sessionTime * 60;
    }

  });
});


function doAction(key){
  
  if(!running)
    switch (key) {
    
      case 'up-s': 
        ++sessionTime;
        break;
      
      case 'down-s': 
        (sessionTime > 1)? --sessionTime : null;
        break; 

      case 'up-b': 
        ++breakTime ;
        break;
      
      case 'down-b': 
        (breakTime > 1)? --breakTime : null;
        break; 
  }

  switch (key) {
    
    case "start":
      startClock(sessionTime * 60);   
      break;

    case "reset":
      resetClock();
      break;

    case "stop":
      stopClock();
      break;

    case "pause":
      pauseClock();
      break;
  }
}

 
function countDown( secs = 0, mins = 0) {
  
  secsPassed++;
  secs = timer - secsPassed;
 
  if(secs == 0) {
    secsPassed = 0;
    
    if(breakrun)
      timer = breakTime * 60;
    else
      timer = sessionTime * 60;

    breakrun = !breakrun;
  }

  mins = Math.floor(secs / 60);
  secs = secs % 60; 
  currTime = `${Math.floor(mins/10)}${mins%10}` + ':' + `${Math.floor(secs/10)}${secs%10}`;
  
  displayValues(currTime, sessionTime, breakTime);
}

function startClock() {
  running = true;
  myTime = setInterval( () => countDown() , 1000);
  
}

function resetClock() {
  running = false;
  clearInterval(myTime);
  breakrun = true;
  sessionTime = 25;
  breakTime = 5;
  secsPassed = 0;
  currTime = sessionTime + ':00';
}

function stopClock() {
  running = false;
  clearInterval(myTime);
  secsPassed = 0;
  currTime = sessionTime + ':00';
}

function pauseClock( ) {
  running = false;
  clearInterval(myTime);
}
