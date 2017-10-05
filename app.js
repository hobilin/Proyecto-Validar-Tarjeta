//preguntando número de tarjeta por medio de um prompt
function isValidCard(){
  var CardNumber;
  //que se repita la pregunta hasta que el input no sea una cadena vacía.
  do {
  CardNumber = prompt("Por favor, ingrese el número de su Tarjeta de Crédito (sin espacios)");
} while (CardNumber == '');

  var CardNumberReversedArr = CardNumber.split("").map(Number).reverse();
  var cardEvenMultiplied;
  var cardEvenMultipliedArr;
  var cardEvenPlus = [];
  var cardOdd = [];
  var cardEven = [];
  var total = 0;
  for(var i = 1; i < CardNumberReversedArr; i += 2){
    for (var j = 0; j < array.length; j += 2) {
      cardOdd.push(CardNumberReversedArr[j]);
      cardEvenMultiplied = CardNumberReversedArr[i] *= 2;
    if(cardEvenMultiplied > 9){
      cardEvenMultipliedArr = cardEvenMultiplied.join('').split('').map(Number);
      cardEvenPlus.push(cardEvenMultipliedArr[0] + cardEvenMultipliedArr[1]);
    }else if (cardEvenMultiplied <= 9) {
      cardEven.push(cardEvenMultiplied[i]);
    }
  }
}
var cardEvenPlusOdd = cardOdd.concat(cardEvenPlus, cardEven);
for(var t = 0; t < cardEvenPlusOdd.length; t++){
  total += cardEvenPlusOdd[t];
}
if(total % 10 == 0){
  document.write('Su Tarjeta de Crédito es válida');
}else{
  document.write('Su Tarjeta de Crédito es inválida');
      }
    }
    isValidCard();
