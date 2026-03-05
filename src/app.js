import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateNewCard () {
  let randomNumberForFigure = Math.floor(Math.random() * 4) + 1;
  console.log(randomNumberForFigure);
  if      (randomNumberForFigure==1) {document.getElementById('upper-figure').innerHTML = '♦'; document.getElementById('lower-figure').innerHTML = '♦'; document.getElementById('wholeCard').style.color= "red";}
  else if (randomNumberForFigure==2) {document.getElementById('upper-figure').innerHTML = '♥'; document.getElementById('lower-figure').innerHTML = '♥'; document.getElementById('wholeCard').style.color= "red";}
  else if (randomNumberForFigure==3) {document.getElementById('upper-figure').innerHTML = '♠'; document.getElementById('lower-figure').innerHTML = '♠'; document.getElementById('wholeCard').style.color= "black";}
  else if (randomNumberForFigure==4) {document.getElementById('upper-figure').innerHTML = '♣'; document.getElementById('lower-figure').innerHTML = '♣'; document.getElementById('wholeCard').style.color= "black";}
  
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


document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Select the elements
    const widthInput = document.getElementById('cardWidth');
    const heightInput = document.getElementById('cardHeight');
    const resizableDiv = document.getElementById('wholeCard');

    // 2. Define the function to resize the div
    function resizeDiv() {
        const newWidth = widthInput.value + 'px';
        const newHeight = heightInput.value + 'px';

        // Set the style properties dynamically
        resizableDiv.style.width = newWidth;
        resizableDiv.style.height = newHeight;
    }

    // 3. Add event listeners to the input fields
    // The 'input' event fires whenever the value changes (e.g., as the user types or uses the spinner)
    widthInput.addEventListener('input', resizeDiv);
    heightInput.addEventListener('input', resizeDiv);

    // Optional: Call once on page load to set the initial size based on input values
    resizeDiv();
});



