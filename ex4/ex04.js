/* Estava treinando umas coisas de objetos para um peojeto pessoal fiz essa gambiarra para treinar, ai fiquei sem tempo de fazer getter e setter depois :)  */

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
   event.preventDefault();

   let kmPercorrido = document.querySelector(".campo-km").value;
   let valorCombustivel = document.querySelector(".campo-combustivel").value;

   let valorGastoPorKm = valorCombustivel / 8;

   let gastoTotal = kmPercorrido * valorGastoPorKm;

   document.querySelector(".resultado").textContent = "Gasto total "+ gastoTotal;
});
