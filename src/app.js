import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

function generateNewCard () {
  document.getElementById('wholeCard').style.width= '300px';
  document.getElementById('wholeCard').style.height= '400px';
  document.getElementById('wholeCard').classList.remove('diamond');
  document.getElementById('wholeCard').classList.remove('heart');
  document.getElementById('wholeCard').classList.remove('spade');
  document.getElementById('wholeCard').classList.remove('club');

  let randomNumberForFigure = Math.floor(Math.random() * 4) + 1;
  console.log(randomNumberForFigure);
  if      (randomNumberForFigure==1) {document.getElementById('upper-figure').innerHTML = '♦'; document.getElementById('lower-figure').innerHTML = '♦'; document.getElementById('wholeCard').classList.add("diamond");}
  else if (randomNumberForFigure==2) {document.getElementById('upper-figure').innerHTML = '♥'; document.getElementById('lower-figure').innerHTML = '♥'; document.getElementById('wholeCard').classList.add("heart");}
  else if (randomNumberForFigure==3) {document.getElementById('upper-figure').innerHTML = '♠'; document.getElementById('lower-figure').innerHTML = '♠'; document.getElementById('wholeCard').classList.add("spade");}
  else if (randomNumberForFigure==4) {document.getElementById('upper-figure').innerHTML = '♣'; document.getElementById('lower-figure').innerHTML = '♣'; document.getElementById('wholeCard').classList.add("club");}
  
  let randomNumberForNumber = Math.floor(Math.random() * 13); 
  console.log(randomNumberForNumber);
  if      (randomNumberForNumber==0)  {document.getElementById('middle-number').innerHTML = 'A';}
  else if (randomNumberForNumber==10) {document.getElementById('middle-number').innerHTML = 'J';}
  else if (randomNumberForNumber==11) {document.getElementById('middle-number').innerHTML = 'Q';}
  else if (randomNumberForNumber==12) {document.getElementById('middle-number').innerHTML = 'K';}
  else                                {document.getElementById('middle-number').innerHTML = randomNumberForNumber+1;}
};

window.onload = generateNewCard();

setInterval(generateNewCard, 10000);

const button = document.getElementById("myButton");
button.addEventListener("click", generateNewCard);


function handleInput (event) {
document.getElementById('wholeCard').style.width = document.getElementById('cardWidth').style.width + "px";
document.getElementById('wholeCard').style.height = document.getElementById('cardHeight').style.height + "px";
}


let cardWidthInput = document.getElementById('cardWidth');
let cardHeightInput = document.getElementById('cardHeight');
let wholeCardOutput = document.getElementById('wholeCard');

cardWidthInput.addEventListener('input', function(event) {
    const currentValue = event.target.value; 
    wholeCardOutput.style.width = currentValue+'px';
});

cardHeightInput.addEventListener('input', function(event) {
    const currentValue = event.target.value; 
    wholeCardOutput.style.height = currentValue+'px';
});

