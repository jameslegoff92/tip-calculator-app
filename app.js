import inputValidator from "./js/inputValidator.js";

const inputElements = $('.bill__input, .tip__custom, .people__amount');
const tipBtns = $('.tip__btn');
const resetBtn = $('.reset');

inputElements.on('blur', inputValidator);
tipBtns.on('mouseup', inputValidator);
resetBtn.on('click', inputValidator);





 

