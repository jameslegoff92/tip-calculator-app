//The inputValidator function is used to validate the inputs entered by user's.
function inputValidator(e) {
  const inputElementAmount = parseFloat($(this).val());

  if (inputElementAmount <= 0) {
    switch (this.id) {
      case "bill-amount":
        $("#bill-errmsg").html("Must be greater than zero");
        break;
      case "tip-percent":
        $("#tip-errmsg").html("Must be greater than zero");
        break;
      case "people-qty":
        $("#people-errmsg").html("Must be greater than zero");
        break;
      default:
        console.log("case null");
    }
  } else {
    switch (this.id) {
      case "bill-amount":
        $("#bill-errmsg").html("");
        break;
      case "tip-percent":
        $("#tip-errmsg").html("");
        break;
      case "people-qty":
        $("#people-errmsg").html("");
        break;
      default:
        console.log("case null");
    }
  }

  if (e.target.className === "tip__btn") {
    $(".tip__custom").val("");
    $(".tip__btn--active").removeClass("tip__btn--active");
    $("#" + e.target.id).addClass("tip__btn--active");
  }

  if (e.target.className === "tip__custom") {
    $(".tip__btn--active").removeClass("tip__btn--active");
  }

  const clickedPercentAmount = parseFloat($(".tip__btn--active").text());

  const customPercent = parseFloat($(".tip__custom").val().toString());

  const chosenAmount = clickedPercentAmount
    ? clickedPercentAmount
    : customPercent;

  const billAmount = parseFloat($(".bill__input").val().toString());

  const amountOfPeople = parseFloat($(".people__amount").val().toString());

  if (customPercent > 0) {
    $(".tip__btn--active").removeClass("tip__btn--active");
  }

  if (billAmount >= 0 && chosenAmount >= 0 && amountOfPeople > 0) {
    const tipAmountPerPerson =
      (billAmount * (chosenAmount / 100)) / amountOfPeople;
    $("#tipAmount").html("$" + tipAmountPerPerson.toFixed(2));

    const totalAmountPerPerson =
      (billAmount * (1 + chosenAmount / 100)) / amountOfPeople;
    $("#totalAmount").html("$" + totalAmountPerPerson.toFixed(2));
  }

  if (e.target.className === "reset") {
    $(".bill__input").val("");
    $(".tip__btn--active").removeClass("tip__btn--active");
    $(".tip__custom").val("");
    $(".people__amount").val("");
    $("#tipAmount").html("$0.00");
    $("#totalAmount").html("$0.00");
  }
}

export default inputValidator;
