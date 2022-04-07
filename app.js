import inputValidator from "./js/inputValidator.js";

const inputElements = $(".bill__input, .tip__custom, .people__amount");
const tipBtns = $(".tip__btn");
const resetBtn = $(".reset");

inputElements.on('keyup focus', inputValidator);
tipBtns.on("mouseup", inputValidator);
resetBtn.on("click", inputValidator);


