# __Validando Tarjeta de Crédito__

## *Pseudocódigo*
1. Iniciar.

2. Crear función isValidCard() que contenga la fórmula del Algorítmo de Luhn para saber si una tarjeta de crédito es válida o no.

3. Por medio de un prompt (guardado en la variable CardNumber) preguntar el número de la tarjeta de crédito.

4. Leer CardNumber.

5. Por medio de .split("").map(Number).reverse();, convertir la respuesta en un array (CardNumberReversedArr) e invertir sus elementos.

6. Crear un for con variable i que recorra los elementos en las posiciones pares del array invertido(CardNumberReversedArr) y un
segundo for con variable j que recorra los elementos en las posiciones impares del array invertido(CardNumberReversedArr).

7. Empujar a un nuevo array(cardEvenMultiplied) los elementos del array invertido(CardNumberReversedArr) en las posiciones pares [i] multiplicados por 2.

8. Leer cardEvenMultiplied.

9. Si el resultado de los elementos del array invertido(CardNumberReversedArr) en las posiciones pares [i] multiplicados por 2 es mayor a 9.

10. Por medio de .join('').split('').map(Number); unir el nuevo array(cardEvenMultiplied) en una cadena de texto, para luego separarlas como tipo de dato Number en un nuevo array(cardEvenMultipliedArr). Y empujar a un nuevo array(cardEvenPlus) la suma de los elementos en las posiciones [0] y [1].

11. Sino, si el resultado de los elementos del array invertido(CardNumberReversedArr) en las posiciones pares [i] multiplicados por 2 es menor o igual a 9.

12. Empujar a un nuevo array(cardEven) los elementos en las posiciones pares [i] del array invertido(CardNumberReversedArr) y empujar a un nuevo array(cardOdd) los elementos en las posiciones impares [j] del array invertido(CardNumberReversedArr).

13. Cerrar for.

14. Crear un nuevo array(cardEvenPlusOdd) que tenga como valor los arrays cardOdd, cardEvenPlus y cardEven concatenados.

15. Crear un for con variable t, que recorra cardEvenPlusOdd y vaya sumando a una variable llamada total con valor 0, los elementos que se encuentren en cardEvenPlusOdd en la posición t.

16. Leer total.

17. Si el resto de la división de total y 10 es igual a 0.

18. Escribir en el cuerpo de la página "Su Tarjeta de Crédito es válida".

19. Sino.

20. Escribir en el cuerpo de la página "Su Tarjeta de Crédito es inválida".

21. Cerrar función.

22. Llamar a función isValidCard().

23. Finalizar.


### *Diagrama de Flujo*
Imagen png
![Diagrama Tarjeta](C:/Users/Viviana/Desktop/DiagramaVT.png "Diagrama Validando Tarjeta")

Enlace
[Diagrama Validar Tarjeta de Crédito](https://www.dropbox.com/s/ht5zihtbk1cxzsx/DiagramaVT.png?dl=0)
