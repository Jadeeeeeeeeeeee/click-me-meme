let textEnd = document.getElementById("text1");
let button = document.getElementById("button");
button.addEventListener('click', clicks);
text = 0

function getRandomArbitrary(min, max) {
                  return Math.random() * (max - min) + min;
                }
                

button.onmouseover = function ButtonHover() {
   let top = getRandomArbitrary(1,97); 
   let left = getRandomArbitrary(1,97); 
   button.style.top = top + "%"
   button.style.left = left + "%"   
   text++
   if (text == 1) {
          button.textContent = "bozo";  
   }else if (text == 2) {
          button.textContent = "try again ";             
   }else if (text == 3) {
                  button.textContent = "L retard";             
           }else if (text == 4) {
                  button.textContent = "fucking bozo";             
           }else if (text == 5) {
                  button.textContent = "CMON CLICK ME";             
           }else if (text == 6) {
                  button.textContent = "CMON THIS IS EASY";             
           }else if (text == 7) {
                  button.textContent = "BROOOOO";             
           }
}

 function clicks() {
                  console.log("1");
                  textEnd.textContent = "HOW TF DID YOU DO THIS";
}