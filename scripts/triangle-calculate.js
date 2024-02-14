function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInputField=document.getElementById('triangle-base');
    const triangleBaseText=triangleBaseInputField.value;
    const base=parseFloat(triangleBaseText);
    // console.log(base);

    // get triangle height value
    const triangleHeightInputField=document.getElementById('triangle-height');
    const triangleHeightText=triangleHeightInputField.value;
    const height=parseFloat(triangleHeightText);
    // console.log(base,height);

    // claculate area
    const area=0.5 * base * height;
    console.log(area);

    // display triangle area
    const triangleAreaSpan=document.getElementById('triangle-area');
    triangleAreaSpan.innerText=area;
}