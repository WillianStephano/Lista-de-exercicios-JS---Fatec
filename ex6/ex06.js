const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
   event.preventDefault();

   let genero = document.querySelector('input[name="genero"]:checked').value;
   let altura = document.querySelector(".campo-altura").value;

   if (genero == "masculino") {
      let pesoIdeal = 72.7 * altura - 58;
      document.querySelector(".resultado").innerHTML = pesoIdeal.toFixed(2);
   } else {
      let pesoIdeal = 62.1 * altura - 44.7;
      document.querySelector(".resultado").innerHTML = pesoIdeal.toFixed(2);
   }
});
