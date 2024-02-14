// function calculateParallelogramArea(){
//     // console.log('inside the function')
//     // const baseInputField=document.getElementById('parallelogram-base');
//     // const baseInputText=baseInputField.value;
//     // const base=parseFloat(baseInputText);
//     const base= getInputFieldById();
//     console.log(base);
// }
// function getInputFieldById(){
//     const baseInputField=document.getElementById('parallelogram-base');
//     const baseInputText=baseInputField.value;
//     const base=parseFloat(baseInputText);
//     return base;

// }

function calculateParallelogramArea(){
    const base=getInputFieldValueById('parallelogram-base');
    const height=getInputFieldValueById('parallelogram-height');
    // console.log(base,height);
    // calculate area
    const area=base*height;
    console.log(area);
    // set 
    setInnerTextById('parallelogram-area',area);

}
function getInputFieldValueById(elementId){
    const inputFieldId=document.getElementById(elementId);
    const inputFieldText=inputFieldId.value;
    const inputField=parseFloat(inputFieldText);
    return inputField;
}

function setInnerTextById(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}