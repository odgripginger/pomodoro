const buttons = document.querySelectorAll('button');

    
const sessionLength = document.querySelector("#session-length");
const breakLength = document.querySelector("#break-length");
/*
const sessionUp = document.querySelector("#up-s");
const sessionDown = document.querySelector("#down-s");

const breakUp = document.querySelector("#up-b");
const breakDown = document.querySelector("#down-b");
*/
const timeDisplay = document.querySelector("#main-display p");

let sessionNum = 25;
let breakNum = 5;
let running = false;
let breakrun = false;

let timer = 25;

sessionLength.textContent = sessionNum + ':00';
breakLength.textContent = breakNum + ':00';


buttons.forEach(button => {
  button.addEventListener( 'click', (e) => {
    doAction(e.target.id);
    console.log(e);

    sessionLength.textContent = sessionNum + ':00';
    breakLength.textContent = breakNum + ':00';
  });
});

function doAction(key){
  switch (key) {
    
    case 'up-s': 
      sessionNum++;
      break;

    case 'down-s': 
      sessionNum--;
      break; 

    
  }
}
/*
sessionUp.addEventListener('click', () => {
  sessionNum++;
  sessionLength.textContent = sessionNum + ':00';

  if(!running){
    timeDisplay.textContent = sessionNum + ':00';
    timer = sessionNum;
  }
});

sessionDown.addEventListener('click', () => {
  
  sessionNum--;

  sessionLength.textContent = sessionNum + ':00';

  if(!running){
    timeDisplay.textContent = sessionNum + ':00';
    timer = sessionNum;
  }
});

breakUp.addEventListener('click', () => {
  breakNum++;
  breakLength.textContent = breakNum + ':00';
});

breakDown.addEventListener('click', () => {
  if(breakNum > 0)
  breakNum--;

  breakLength.textContent = breakNum + ':00';
});

*/
