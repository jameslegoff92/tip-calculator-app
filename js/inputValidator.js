//The inputValidator function is used to validate the inputs entered by user's.
function inputValidator(e) {
  const inputElementAmount = $(this).val();  //The 'this' here is vanilla javascript. It grabs the input value of the element that triggers the blur event.
  // console.log($(this).text());
  if (inputElementAmount < 0) {
    const $inputErrMsg = $('<p class="input__errMsg">Must be greater than 0 </p>');
    $inputErrMsg.css({
      "color": "red",
      "font-size": "10px",
      "text-align": "right"
    });
    $(this).after($inputErrMsg); //The $(this) here refers to the object that was clicked
  } else {
    $('.input__errMsg').remove();
  }
  
  if (e.target.className === 'tip__btn') {
    $('.tip__custom').val('');
    $('.tip__btn--active').removeClass('tip__btn--active');
    $('#' + e.target.id).addClass('tip__btn--active');
  } 
  
  const correctPercentAmount = parseFloat($('.tip__btn--active').text());
  console.log(correctPercentAmount);

  const billAmount = parseFloat($('.bill__input').val().toString());
  console.log(billAmount);

  const customPercent = parseFloat($('.tip__custom').val().toString());
  console.log(customPercent);

  const amountOfPeople = parseFloat($('.people__amount').val().toString());
  console.log(amountOfPeople);

  if (customPercent > 0) {
    $('.tip__btn--active').removeClass('tip__btn--active');
  }
  
  if ((billAmount > 0) && (correctPercentAmount > 0) && (amountOfPeople > 0)) {
    const tipAmountPerPerson = (billAmount * (correctPercentAmount / 100) / amountOfPeople);
    $('#tipAmount').html('$' + tipAmountPerPerson.toFixed(2));

    const totalAmountPerPerson = (billAmount * (1 + (correctPercentAmount / 100)) / amountOfPeople);
    $('#totalAmount').html('$' + totalAmountPerPerson.toFixed(2));

  } else if ((billAmount > 0) && (customPercent > 0) && (amountOfPeople > 0)) {

    const tipAmountPerPerson = (billAmount * (customPercent / 100) / amountOfPeople);
    $('#tipAmount').html('$' + tipAmountPerPerson.toFixed(2));

    const totalAmountPerPerson = (billAmount * (1 + (customPercent / 100)) / amountOfPeople);
    $('#totalAmount').html('$' + totalAmountPerPerson.toFixed(2));
  }

  if (e.target.className === 'reset') {
    $('.bill__input').val('');
    $('.tip__btn--active').removeClass('tip__btn--active');
    $('.tip__custom').val('');
    $('.people__amount').val('');
    $('#tipAmount').html('$0.00');
    $('#totalAmount').html('$0.00');
  }
}

export default inputValidator;