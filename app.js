/*
 *Code that verifies if a credit card number is valid
 *using Luhn's algorithm.
 */
function isValidCard() {
  var numbers;
  do {
    numbers = prompt('Enter your credit card number. No spaces, please.');
    /*
     *If the user ignores the warning and uses spaces
     *the number will be considered invalid.
     */
    if (numbers.trim().length !== 0) {
      var arrReversed = numbers.split('').map(Number).reverse(); 
      /*
       *The input will come out as string
       *This will convert them it into typeof numbers
       *and reverse them.
       */
    } else {                                               
      alert('Please enter a valid number');
    }
  } while (numbers.trim().length === 0);
  // Whilist the user doesn't submit a number, the prompt will repeat itself.
  var sumOdds = 0; // Will sum up the numbers at the odd positions.
  var even = []; // Will contain the numbers at the even positions.
  var evenByTwo = []; // Will contain the number at the even positions multiplied by two.
  var smallerNine = []; // Will contain numbers smaller than nine.
  var evenTotal = 0; // Will sum up the even numbers.
  for (var odd = 0; odd < arrReversed.length; odd++) {
    if (odd % 2 === 0) {
      // JavaScript positions are invertes, for so even positions are actually the odds positions.
      sumOdds += arrReversed[odd];
    } else if (odd % 2 !== 0) {
      even.push(arrReversed[odd]);
    }
  }

  for (var ev = 0; ev < even.length; ev++) {
    evenByTwo.push(even[ev] * 2);       
  }

  for (var evTwo = 0; evTwo < evenByTwo.length; evTwo++) {
    if (evenByTwo[evTwo] > 9) {
      smallerNine.push(evenByTwo[evTwo] - 9);
    } else {
      smallerNine.push(evenByTwo[evTwo]);
    }
  }

  for (var small = 0; small < smallerNine.length; small++) {
    evenTotal += smallerNine[small];
  }

  if ((evenTotal + sumOdds) % 10 === 0) { 
    alert('Hurray! your credit card is valid');   
  } else {
    alert('We are sorry, you credit card is invalid');
  }
}
isValidCard();
