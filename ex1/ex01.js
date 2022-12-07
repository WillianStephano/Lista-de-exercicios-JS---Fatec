function getPairNumbers(e) {
   e.preventDefault();
   const valueElement = document.querySelector(".campo-numero1");
   const result = document.querySelector(".resultado");
   const sumResult = document.querySelector(".resultadoPares");
   let maxNumber = parseInt(valueElement.value);
   let pairNumbers = [];
   for (let i = 0; i <= maxNumber; i++) {
      if (i % 2 == 0) {
         pairNumbers.push(i);
      }
   }

   result.innerHTML = pairNumbers;
   sumResult.innerHTML = pairNumbers.reduce((a, b) => a + b, 0);
   valueElement.value = "";
}
