//Input value convert to number
function getInputValueById(inputId){
    const input = document.getElementById(inputId);
    const inputValueString = input.value;
    const inputValue = parseFloat(inputValueString);
    input.value ='';
    return inputValue;
}
//Element innerText to number
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

//Set Sum Value
function setTextElementValueById(elementId, newValue){
    const textElemnt =document.getElementById(elementId);
    textElemnt.innerText = newValue;
}
