// Check Triangle
const formTriangle = document.getElementById(`formCheckTriangle`);
const first = document.getElementById(`first`);
const second = document.getElementById(`second`);
const third = document.getElementById(`third`);
const triangleResult = document.querySelector(`.triangle_result`);
const checkTriangleButton = document.getElementById(`formCheckTriangleResult`)
// To Check the sum of triangle
formTriangle.addEventListener(`submit`, (e) => {
     e.preventDefault();
     checkTriangle(first, second, third);
});
// To Check the sum of triangle
checkTriangle = (firstangle, secondangle, thirdangle) => {
     let x = Number(firstangle.value);
     let y = Number(secondangle.value);
     let z = Number(thirdangle.value);
     let sum = x + y + z;
     if (sum === 180) {
          checkTriangleButton.style.display = "none";
          triangleResult.style.display = "block";
          triangleResult.innerHTML = `<h3>Yaaaaaay! <br/> You have understood angles in triangle</h3>`;
     }
     else {
          checkTriangleButton.style.display = "none";
          triangleResult.style.display = "block";
          triangleResult.innerHTML = `<h3> Oh no, it isn't a Triangle! <br/> Your sum is ${sum}.</h3>`
     }
}
//--------------------------------------------------------------------------------------------------------------------------
// Find Hypotenuse
const formHypotenuse = document.getElementById(`formFindHypotenuse`);
const base = document.querySelector(`.base`);
const perpendicular = document.querySelector(`.perpendicular`);
const hypotenuseResultButton = document.getElementById(`formFindHypotenuseResult`);
const hypotenuseResult = document.querySelector(`.hypotenuse_result`);

// Find Hypotenuse
formHypotenuse.addEventListener(`submit`, (e) => {
     e.preventDefault();
     findHypotenuse(base, perpendicular);
})

// Find Hypotenuse
findHypotenuse = (baseAngle, perpendicularAngle) => {
     let b = Number(baseAngle.value);
     let bsquare = Number(Math.pow(b, 2));
     let p = Number(perpendicularAngle.value);
     let psquare = Number(Math.pow(p, 2));
     let h = (Math.sqrt(psquare + bsquare)).toFixed(2);

     // hypotenuseResultButton.style.display = "none";
     hypotenuseResult.style.display = "block"
     hypotenuseResult.innerHTML = `<h3>Your Hypotenuse is ${h}</h3>`
}
//--------------------------------------------------------------------------------------------------------------------------
//  Area of triangle
const formArea = document.getElementById(`formFindArea`);
const baseArea = document.querySelector(`.baseArea`);
const heightArea = document.querySelector(`.heightArea`);
const areaResultButton = document.getElementById(`formFindAreaResult`);
const areaResult = document.querySelector(`.area_result`);

// Find Area
formArea.addEventListener(`submit`, (e) => {
     e.preventDefault();
     findArea(baseArea, heightArea);
})

// Find Area
findArea = (base, height) => {
     let b = Number(base.value);
     let h = Number(height.value);
     let area = Number(((b * h) / 2).toFixed(2));

     areaResultButton.style.display = "none";
     areaResult.style.display = "block";
     areaResult.innerHTML = `<h3>Area is: ${area}</h3>`;
}
//--------------------------------------------------------------------------------------------------------------------------

// Guess Third Angle
const firstAngle = document.getElementById(`firstAngle`);
const secondAngle = document.getElementById(`secondAngle`);
const thirdAngle = document.getElementById(`thirdAngle`);

const guessButton = document.getElementById(`guessResultButton`);
const guessResult = document.querySelector(`.third_angle_result`);

const formGuess = document.getElementById(`guessThirdAngle`);
const generateAngles = document.querySelector(`.generateangles`);

//  Guess Right Angle
formGuess.addEventListener(`submit`, (e) => {
     e.preventDefault();
     guessAngle();
})
// Generate Angles
function generateAngle() {
     let x = Math.floor(Math.random() * (180 - 0) + 0);
     let y = Math.floor(Math.random() * (180 - 0) + 0);
     while (1) {
          if (x + y >= 180) {
               if (x > y) {
                    x = Math.floor(Math.random() * (180 - 0) + 0);
               }
               else {
                    y = Math.floor(Math.random() * (180 - 0) + 0);
               }
          } else {
               break;
          }
     }
     firstAngle.innerText = x;
     secondAngle.innerText = y;
}
//  Guess Angle
function guessAngle() {
     let x = Number(firstAngle.innerText);
     let y = Number(secondAngle.innerText);
     let z = Number(thirdAngle.value);
     if ((x + y + z) === 180) {

          guessButton.style.display = "none";
          guessResult.style.display = "block";
          generateAngles.style.display = "none";
          guessResult.innerHTML = `Yes, It is right Answer`;
     } else {
          guessButton.style.display = "none";
          guessResult.style.display = "block";
          generateAngles.style.display = "none";
          guessResult.innerHTML = `Sorry, It is wrong Answer`;
     }
}
//--------------------------------------------------------------------------------------------------------------------------

const btnTest = document.querySelector(`.btn-test`);
const btnBack = document.querySelector(`.btn-back`);

const quizMain = document.querySelector(`.quiz-main`);
const information = document.querySelector(`.information`);

btnTest.addEventListener('click',()=>{
     information.style.display = "none";
     quizMain.style.display = "block";
     btnTest.style.display = "none";
     btnBack.style.display = "block"
})

btnBack.addEventListener('click',()=>{
     information.style.display = "block";
     quizMain.style.display = "none";
     btnBack.style.display = "none"
     btnTest.style.display = "block";
})