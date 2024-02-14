function calculateRactangleArea(){
    // get the rectangle input field (width)
   const rectangleInputField=document.getElementById('rectangle-width');
   const rectangleText=rectangleInputField.value;
   const width=parseFloat(rectangleText)
//    console.log(width);

// get the rectangle input field (length)
const rectangleInputFieldLength=document.getElementById('rectangle-length');
const rectangleLengthText=rectangleInputFieldLength.value;
const length=parseFloat(rectangleLengthText);
console.log(length);

// calculate area
const area=width*length
console.log(area);
// display the area
const rectangleAreaSpan=document.getElementById('rectangle-area');
rectangleAreaSpan.innerText=area;
}