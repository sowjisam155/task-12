const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputE1 = document.querySelector('#output');
function calculatesumofsquares(a,b){
  const sumofsquers = a*a + b*b;
  return sumofsquers;
}

function calculatehypotenuse(){
  const sumofsquers = calculatesumofsquares(sides[0].value,sides[1].value);
  const lengthofHypotenuse = Math.sqrt(sumofsquers);
 outputE1.innerText = "the length of hypotenuse is "+ lengthofHypotenuse
}

hypotenuseBtn.addEventListener("click",calculatehypotenuse);